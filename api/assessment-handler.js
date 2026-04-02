const GEMINI_MODEL = "gemini-2.5-flash";
const NOTES_LIMIT = 18000;

function sanitizeNotes(notes) {
  const safeNotes = typeof notes === "string" ? notes.trim() : "";
  return safeNotes.length <= NOTES_LIMIT ? safeNotes : safeNotes.slice(0, NOTES_LIMIT);
}

function buildAssessmentPrompt({ subject, topic, notes, assessmentTotal, difficulty }) {
  const notesLine = notes ? `Base de estudio del estudiante:\n${notes}` : "Base de estudio del estudiante: no proporcionada";

  return [
    "Eres un profesor experto en crear evaluaciones finales para estudiantes.",
    "Genera una evaluacion exigente, clara y util para medir si el estudiante realmente domina el tema.",
    "Las preguntas deben ser de opcion multiple con exactamente 4 alternativas y una sola correcta.",
    "Prioriza comprension, aplicacion y relaciones entre conceptos, no solo memoria literal.",
    "Incluye una explicacion breve para la respuesta correcta.",
    "Responde siempre en espanol.",
    "Devuelve un JSON valido que siga exactamente el esquema solicitado.",
    `Materia: ${subject}`,
    `Tema o foco principal: ${topic}`,
    `Nivel solicitado: ${difficulty}`,
    `Cantidad de preguntas: ${assessmentTotal}`,
    notesLine
  ].join("\n\n");
}

function validateQuestions(questions) {
  return questions
    .filter(
      (item) =>
        item &&
        typeof item.question === "string" &&
        Array.isArray(item.options) &&
        item.options.length === 4 &&
        Number.isInteger(item.correctIndex) &&
        item.correctIndex >= 0 &&
        item.correctIndex < 4 &&
        typeof item.explanation === "string"
    )
    .map((item) => ({
      question: item.question.trim(),
      options: item.options.map((option) => String(option).trim()),
      correctIndex: item.correctIndex,
      explanation: item.explanation.trim()
    }))
    .filter((item) => item.question && item.options.every(Boolean) && item.explanation);
}

async function handleAssessment({ req, res, apiKey }) {
  const {
    subject,
    topic = "",
    notes = "",
    assessmentTotal = 5,
    difficulty = "intermedio"
  } = req.body || {};

  if (!subject || typeof subject !== "string") {
    res.status(400).json({ error: "La materia es obligatoria." });
    return;
  }

  if (!topic || typeof topic !== "string") {
    res.status(400).json({ error: "El tema es obligatorio." });
    return;
  }

  const safeAssessmentTotal = Math.min(Math.max(Number(assessmentTotal) || 5, 3), 10);
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
                text: buildAssessmentPrompt({
                  subject,
                  topic,
                  notes: safeNotes,
                  assessmentTotal: safeAssessmentTotal,
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
              assessmentTitle: { type: "string" },
              questions: {
                type: "array",
                minItems: safeAssessmentTotal,
                maxItems: safeAssessmentTotal,
                items: {
                  type: "object",
                  properties: {
                    question: { type: "string" },
                    options: {
                      type: "array",
                      minItems: 4,
                      maxItems: 4,
                      items: { type: "string" }
                    },
                    correctIndex: { type: "integer" },
                    explanation: { type: "string" }
                  },
                  required: ["question", "options", "correctIndex", "explanation"],
                  additionalProperties: false
                }
              }
            },
            required: ["assessmentTitle", "questions"],
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
  const questions = validateQuestions(parsed.questions || []);

  if (questions.length === 0) {
    res.status(502).json({ error: "Gemini no devolvio preguntas validas para la evaluacion." });
    return;
  }

  res.status(200).json({
    assessmentTitle: parsed.assessmentTitle || `${topic} en ${subject}`,
    questions,
    model: GEMINI_MODEL
  });
}

module.exports = {
  handleAssessment
};
