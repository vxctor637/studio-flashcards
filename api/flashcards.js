const OPENAI_API_URL = "https://api.openai.com/v1/responses";
const OPENAI_MODEL = "gpt-5-mini";

function buildPrompt({ subject, topic, notes, cardTotal, difficulty }) {
  const topicLine = topic ? `Tema: ${topic}` : "Tema: no especificado";
  const notesLine = notes
    ? `Apuntes del usuario:\n${notes}`
    : "Apuntes del usuario: no proporcionados";

  return [
    "Eres un profesor experto en crear flashcards para estudiar.",
    "Genera tarjetas claras, correctas y utiles para memorizacion activa.",
    "Las preguntas deben ser concretas y las respuestas breves, pero completas.",
    "Responde siempre en espanol.",
    `Materia: ${subject}`,
    topicLine,
    `Nivel solicitado: ${difficulty}`,
    `Cantidad de tarjetas: ${cardTotal}`,
    notesLine
  ].join("\n\n");
}

function validateCards(cards) {
  return cards
    .filter((card) => card && typeof card.question === "string" && typeof card.answer === "string")
    .map((card) => ({
      question: card.question.trim(),
      answer: card.answer.trim()
    }))
    .filter((card) => card.question && card.answer);
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Metodo no permitido." });
    return;
  }

  if (!process.env.OPENAI_API_KEY) {
    res.status(500).json({ error: "Falta configurar OPENAI_API_KEY." });
    return;
  }

  const { subject, topic = "", notes = "", cardTotal = 8, difficulty = "intermedio" } = req.body || {};

  if (!subject || typeof subject !== "string") {
    res.status(400).json({ error: "La materia es obligatoria." });
    return;
  }

  const safeCardTotal = Math.min(Math.max(Number(cardTotal) || 8, 3), 12);

  try {
    const apiResponse = await fetch(OPENAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        input: buildPrompt({
          subject,
          topic,
          notes,
          cardTotal: safeCardTotal,
          difficulty
        }),
        text: {
          format: {
            type: "json_schema",
            name: "flashcards",
            strict: true,
            schema: {
              type: "object",
              properties: {
                cards: {
                  type: "array",
                  minItems: safeCardTotal,
                  maxItems: safeCardTotal,
                  items: {
                    type: "object",
                    properties: {
                      question: { type: "string" },
                      answer: { type: "string" }
                    },
                    required: ["question", "answer"],
                    additionalProperties: false
                  }
                }
              },
              required: ["cards"],
              additionalProperties: false
            }
          }
        }
      })
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      res.status(apiResponse.status).json({ error: errorText || "Error al consultar OpenAI." });
      return;
    }

    const data = await apiResponse.json();
    const contentText =
      data.output?.[0]?.content?.find((item) => item.type === "output_text")?.text ||
      data.output_text ||
      "";
    const parsed = JSON.parse(contentText);
    const cards = validateCards(parsed.cards || []);

    if (cards.length === 0) {
      res.status(502).json({ error: "OpenAI no devolvio tarjetas validas." });
      return;
    }

    res.status(200).json({
      cards,
      model: OPENAI_MODEL
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Error inesperado al generar tarjetas."
    });
  }
};
