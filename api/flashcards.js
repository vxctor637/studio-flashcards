const { handleFlashcards } = require("./flashcards-handler");
const { handleNotes } = require("./notes-handler");
const { handleQuiz } = require("./quiz-handler");

function getApiKey() {
  return process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "";
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

  const tool = req.body?.tool;

  try {
    if (tool === "notes") {
      await handleNotes({ req, res, apiKey });
      return;
    }

    if (tool === "quiz") {
      await handleQuiz({ req, res, apiKey });
      return;
    }

    await handleFlashcards({ req, res, apiKey });
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : "Error inesperado al procesar la solicitud."
    });
  }
};
