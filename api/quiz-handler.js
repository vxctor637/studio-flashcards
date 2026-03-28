const GEMINI_MODEL = "gemini-2.5-flash";
const NOTES_LIMIT = 18000;

function sanitizeNotes(notes) {
  const safeNotes = typeof notes === "string" ? notes.trim() : "";

  if (safeNotes.length <= NOTES_LIMIT) {
    return safeNotes;
  }

  return safeNotes.slice(0, NOTES_LIMIT);
}

function buildQuizPrompt({ subject, topic, notes, quizTotal, difficulty }) {
  const notesLine = notes ? `Apuntes del estudiante:\n${notes}` : "Apuntes del estudiante: no proporcionados";

  return [
    "Eres un profesor experto en crear quizzes para estudiantes.",
    "Genera preguntas de opcion multiple claras, retadoras y utiles para practicar.",
    "Cada pregunta debe tener exactamente 4 opciones y solo una correcta.",
    "Incluye una explicacion breve que ayude a aprender despues de responder.",
    "Responde siempre en espanol.",
    "Devuelve un JSON valido que siga exactamente el esquema solicitado.",
    `Materia: ${subject}`,
    `Tema: ${topic}`,
    `Nivel solicitado: ${difficulty}`,
    `Cantidad de preguntas: ${quizTotal}`,
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

async function handleQuiz({ req, res, apiKey }) {
  const {
    subject,
    topic = "",
    notes = "",
    quizTotal = 5,
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

  const safeQuizTotal = Math.min(Math.max(Number(quizTotal) || 5, 3), 10);
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
                text: buildQuizPrompt({
                  subject,
                  topic,
                  notes: safeNotes,
                  quizTotal: safeQuizTotal,
                  difficulty
                })
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.45,
          responseMimeType: "application/json",
          responseJsonSchema: {
            type: "object",
            properties: {
              quizTitle: { type: "string" },
              questions: {
                type: "array",
                minItems: safeQuizTotal,
                maxItems: safeQuizTotal,
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
            required: ["quizTitle", "questions"],
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
    res.status(502).json({ error: "Gemini no devolvio preguntas validas para el quiz." });
    return;
  }

  res.status(200).json({
    quizTitle: parsed.quizTitle || `${topic} en ${subject}`,
    questions,
    model: GEMINI_MODEL
  });
}

module.exports = {
  handleQuiz
};
