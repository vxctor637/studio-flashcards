const GEMINI_MODEL = "gemini-2.5-flash";
const NOTES_LIMIT = 18000;
const CONCEPT_LIMIT = 8;

function getApiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";
}

function sanitizeNotes(notes) {
  const safeNotes = typeof notes === "string" ? notes.trim() : "";

  if (safeNotes.length <= NOTES_LIMIT) {
    return safeNotes;
  }

  return safeNotes.slice(0, NOTES_LIMIT);
}

function sanitizeConcepts(keyConcepts) {
  if (!Array.isArray(keyConcepts)) {
    return [];
  }

  return keyConcepts
    .filter((concept) => typeof concept === "string")
    .map((concept) => concept.trim())
    .filter(Boolean)
    .slice(0, CONCEPT_LIMIT);
}

function buildPrompt({ subject, topic, keyConcepts, notes }) {
  const conceptsLine = keyConcepts.length
    ? `Conceptos clave del estudiante: ${keyConcepts.join(", ")}`
    : "Conceptos clave del estudiante: no proporcionados";

  return [
    "Eres un profesor experto en resumir contenidos para estudiantes.",
    "Crea un resumen claro, completo, ordenado y facil de estudiar.",
    "Incluye una idea general del tema, desarrollo principal y puntos clave de repaso.",
    "Responde siempre en espanol.",
    "Devuelve un JSON valido que siga exactamente el esquema solicitado.",
    `Materia: ${subject}`,
    `Tema: ${topic}`,
    conceptsLine,
    `Apuntes del estudiante:\n${notes}`
  ].join("\n\n");
}

function validateSummary(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const paragraphs = Array.isArray(payload?.paragraphs)
    ? payload.paragraphs.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];
  const keyPoints = Array.isArray(payload?.keyPoints)
    ? payload.keyPoints.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];

  return {
    title,
    paragraphs,
    keyPoints
  };
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Metodo no permitido." });
    return;
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    res.status(500).json({ error: "Falta configurar GEMINI_API_KEY." });
    return;
  }

  const { subject, topic, keyConcepts = [], notes = "" } = req.body || {};

  if (!subject || typeof subject !== "string") {
    res.status(400).json({ error: "La materia es obligatoria." });
    return;
  }

  if (!topic || typeof topic !== "string") {
    res.status(400).json({ error: "El tema es obligatorio." });
    return;
  }

  const safeNotes = sanitizeNotes(notes);

  if (!safeNotes) {
    res.status(400).json({ error: "Los apuntes son obligatorios." });
    return;
  }

  const safeConcepts = sanitizeConcepts(keyConcepts);

  try {
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
                    subject: subject.trim(),
                    topic: topic.trim(),
                    keyConcepts: safeConcepts,
                    notes: safeNotes
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
                title: { type: "string" },
                paragraphs: {
                  type: "array",
                  minItems: 2,
                  maxItems: 5,
                  items: { type: "string" }
                },
                keyPoints: {
                  type: "array",
                  minItems: 3,
                  maxItems: 6,
                  items: { type: "string" }
                }
              },
              required: ["title", "paragraphs", "keyPoints"],
              additionalProperties: false
            }
          }
        })
      }
    );

    if (!apiResponse.ok) {
      const errorPayload = await apiResponse.json().catch(() => null);
      const errorMessage =
        errorPayload?.error?.message ||
        errorPayload?.error?.status ||
        "Error al consultar Gemini.";

      res.status(apiResponse.status).json({ error: errorMessage });
      return;
    }

    const data = await apiResponse.json();
    const contentText =
      data.candidates?.[0]?.content?.parts?.find((part) => typeof part.text === "string")?.text ||
      "";

    const parsed = JSON.parse(contentText);
    const summary = validateSummary(parsed);

    if (!summary.title || summary.paragraphs.length === 0) {
      res.status(502).json({ error: "Gemini no devolvio un resumen valido." });
      return;
    }

    res.status(200).json({
      ...summary,
      model: GEMINI_MODEL
    });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Error inesperado al generar el resumen."
    });
  }
};
