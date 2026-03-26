const GEMINI_MODEL = "gemini-2.5-flash";
const NOTES_LIMIT = 18000;

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
    "Devuelve un JSON valido que siga exactamente el esquema solicitado.",
    `Materia: ${subject}`,
    topicLine,
    `Nivel solicitado: ${difficulty}`,
    `Cantidad de tarjetas: ${cardTotal}`,
    notesLine
  ].join("\n\n");
}

function sanitizeNotes(notes) {
  const safeNotes = typeof notes === "string" ? notes.trim() : "";

  if (safeNotes.length <= NOTES_LIMIT) {
    return safeNotes;
  }

  return safeNotes.slice(0, NOTES_LIMIT);
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

async function handleFlashcards({ req, res, apiKey }) {
  const { subject, topic = "", notes = "", cardTotal = 8, difficulty = "intermedio" } = req.body || {};

  if (!subject || typeof subject !== "string") {
    res.status(400).json({ error: "La materia es obligatoria." });
    return;
  }

  const safeCardTotal = Math.min(Math.max(Number(cardTotal) || 8, 3), 12);
  const safeNotes = sanitizeNotes(notes);

  const apiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: buildPrompt({
                  subject,
                  topic,
                  notes: safeNotes,
                  cardTotal: safeCardTotal,
                  difficulty
                })
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.4,
          responseMimeType: "application/json",
          responseJsonSchema: {
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
      })
    }
  );

  if (!apiResponse.ok) {
    const errorPayload = await apiResponse.json().catch(() => null);
    const errorMessage =
      errorPayload?.error?.message || errorPayload?.error?.status || "Error al consultar Gemini.";

    res.status(apiResponse.status).json({ error: errorMessage });
    return;
  }

  const data = await apiResponse.json();
  const contentText =
    data.candidates?.[0]?.content?.parts?.find((part) => typeof part.text === "string")?.text || "";

  const parsed = JSON.parse(contentText);
  const cards = validateCards(parsed.cards || []);

  if (cards.length === 0) {
    res.status(502).json({ error: "Gemini no devolvio tarjetas validas." });
    return;
  }

  res.status(200).json({
    cards,
    model: GEMINI_MODEL
  });
}

module.exports = {
  handleFlashcards
};
