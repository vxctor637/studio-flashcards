const GEMINI_MODEL = "gemini-2.5-flash";
const NOTES_LIMIT = 18000;
const CONCEPT_LIMIT = 8;
const MIN_STUDY_NOTE_WORDS = 500;

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

function buildNotesPrompt({ subject, topic, notes, keyConcepts }) {
  const conceptsLine = keyConcepts.length
    ? `Conceptos clave del estudiante: ${keyConcepts.join(", ")}`
    : "Conceptos clave del estudiante: no proporcionados";

  return [
    "Eres un profesor experto en crear apuntes de estudio para estudiantes.",
    "Crea apuntes completos, claros, profundos, ordenados y faciles de estudiar.",
    "Debes desarrollar el tema como material de estudio real, no como un resumen breve.",
    `El apunte final debe tener como minimo ${MIN_STUDY_NOTE_WORDS} palabras.`,
    "Organiza la informacion como material util para preparar una prueba.",
    "Incluye contexto general, desarrollo principal, explicaciones profundas de conceptos clave, relaciones entre ideas, ejemplos simples cuando ayuden y cierre de repaso.",
    "Si el estudiante entrega conceptos clave, asegurate de explicarlos con suficiente profundidad dentro de los apuntes.",
    "Evita definiciones sueltas, listas demasiado cortas o respuestas vagas.",
    "Responde siempre en espanol.",
    "Devuelve un JSON valido que siga exactamente el esquema solicitado.",
    `Materia: ${subject}`,
    `Tema: ${topic}`,
    conceptsLine,
    `Apuntes del estudiante:\n${notes}`
  ].join("\n\n");
}

function validateNotes(payload) {
  const title = typeof payload?.title === "string" ? payload.title.trim() : "";
  const introduction = Array.isArray(payload?.introduction)
    ? payload.introduction.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];
  const concepts = Array.isArray(payload?.concepts)
    ? payload.concepts.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];
  const development = Array.isArray(payload?.development)
    ? payload.development.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];
  const review = Array.isArray(payload?.review)
    ? payload.review.filter((item) => typeof item === "string").map((item) => item.trim()).filter(Boolean)
    : [];

  return {
    title,
    introduction,
    concepts,
    development,
    review
  };
}

function countWords(text) {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function getNoteWordCount(notes) {
  return ["introduction", "concepts", "development", "review"].reduce(
    (total, key) => total + (notes[key] || []).reduce((sum, item) => sum + countWords(item), 0),
    0
  );
}

async function requestGemini({ apiKey, prompt }) {
  return fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
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
              text: prompt
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
            title: { type: "string" },
            introduction: {
              type: "array",
              minItems: 2,
              maxItems: 4,
              items: { type: "string" }
            },
            concepts: {
              type: "array",
              minItems: 4,
              maxItems: 8,
              items: { type: "string" }
            },
            development: {
              type: "array",
              minItems: 4,
              maxItems: 8,
              items: { type: "string" }
            },
            review: {
              type: "array",
              minItems: 4,
              maxItems: 8,
              items: { type: "string" }
            }
          },
          required: ["title", "introduction", "concepts", "development", "review"],
          additionalProperties: false
        }
      }
    })
  });
}

async function handleNotes({ req, res, apiKey }) {
  const { subject, topic = "", notes = "", keyConcepts = [] } = req.body || {};

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
  const basePrompt = buildNotesPrompt({
    subject: subject.trim(),
    topic: topic.trim(),
    notes: safeNotes,
    keyConcepts: safeConcepts
  });

  let apiResponse = await requestGemini({
    apiKey,
    prompt: basePrompt
  });

  if (!apiResponse.ok) {
    const errorPayload = await apiResponse.json().catch(() => null);
    const errorMessage =
      errorPayload?.error?.message || errorPayload?.error?.status || "Error al consultar Gemini.";

    res.status(apiResponse.status).json({ error: errorMessage });
    return;
  }

  let data = await apiResponse.json();
  let contentText =
    data.candidates?.[0]?.content?.parts?.find((part) => typeof part.text === "string")?.text || "";
  let parsed = JSON.parse(contentText);
  let studyNotes = validateNotes(parsed);
  let wordCount = getNoteWordCount(studyNotes);

  if (studyNotes.title && studyNotes.development.length > 0 && wordCount < MIN_STUDY_NOTE_WORDS) {
    const retryPrompt = [
      basePrompt,
      "",
      `Tu respuesta anterior fue demasiado corta. Debes reescribir los apuntes con un minimo real de ${MIN_STUDY_NOTE_WORDS} palabras.`,
      "Amplia las explicaciones, desarrolla mas los conceptos clave, agrega contexto, ejemplos y relaciones entre ideas.",
      "No respondas con bullets breves ni definiciones aisladas."
    ].join("\n");

    apiResponse = await requestGemini({
      apiKey,
      prompt: retryPrompt
    });

    if (!apiResponse.ok) {
      const retryErrorPayload = await apiResponse.json().catch(() => null);
      const retryErrorMessage =
        retryErrorPayload?.error?.message ||
        retryErrorPayload?.error?.status ||
        "Error al consultar Gemini.";

      res.status(apiResponse.status).json({ error: retryErrorMessage });
      return;
    }

    data = await apiResponse.json();
    contentText =
      data.candidates?.[0]?.content?.parts?.find((part) => typeof part.text === "string")?.text || "";
    parsed = JSON.parse(contentText);
    studyNotes = validateNotes(parsed);
    wordCount = getNoteWordCount(studyNotes);
  }

  if (!studyNotes.title || studyNotes.development.length === 0 || wordCount < MIN_STUDY_NOTE_WORDS) {
    res.status(502).json({
      error: `Gemini no devolvio apuntes suficientemente completos. Minimo esperado: ${MIN_STUDY_NOTE_WORDS} palabras.`
    });
    return;
  }

  res.status(200).json({
    ...studyNotes,
    wordCount,
    model: GEMINI_MODEL
  });
}

module.exports = {
  handleNotes
};
