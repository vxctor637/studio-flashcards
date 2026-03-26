const form = document.querySelector("#flashcard-form");
const summaryForm = document.querySelector("#summary-form");
const views = document.querySelectorAll("[data-view]");
const openViewButtons = document.querySelectorAll("[data-open-view]");
const goHomeButtons = document.querySelectorAll("[data-go-home]");
const subjectInput = document.querySelector("#subject");
const topicInput = document.querySelector("#topic");
const notesInput = document.querySelector("#notes");
const pdfFileInput = document.querySelector("#pdf-file");
const pdfStatus = document.querySelector("#pdf-status");
const cardTotalInput = document.querySelector("#card-total");
const difficultyInput = document.querySelector("#difficulty");
const summarySubjectInput = document.querySelector("#summary-subject");
const summaryTopicInput = document.querySelector("#summary-topic");
const summaryNotesInput = document.querySelector("#summary-notes");
const keyConceptsList = document.querySelector("#key-concepts-list");
const addConceptButton = document.querySelector("#add-concept");
const generateSummaryButton = document.querySelector("#generate-summary-button");
const loadSummaryDemoButton = document.querySelector("#load-summary-demo");
const cardsGrid = document.querySelector("#cards-grid");
const emptyState = document.querySelector("#empty-state");
const cardCount = document.querySelector("#card-count");
const generationMode = document.querySelector("#generation-mode");
const generationStatus = document.querySelector("#generation-status");
const statusMessage = document.querySelector("#status-message");
const shuffleButton = document.querySelector("#shuffle-cards");
const loadDemoButton = document.querySelector("#load-demo");
const generateButton = document.querySelector("#generate-button");
const summaryStatusMessage = document.querySelector("#summary-status-message");
const summaryEmptyState = document.querySelector("#summary-empty-state");
const summaryResult = document.querySelector("#summary-result");
const summaryResultTitle = document.querySelector("#summary-result-title");
const summaryResultContent = document.querySelector("#summary-result-content");
const template = document.querySelector("#card-template");

const subjectSuggestions = {
  biologia: [
    ["Que estudia la biologia?", "La biologia estudia los seres vivos, su estructura, funcionamiento, origen y evolucion."],
    ["Que es una celula?", "Es la unidad estructural y funcional basica de los seres vivos."],
    ["Que diferencia hay entre mitosis y meiosis?", "La mitosis produce celulas identicas; la meiosis genera celulas sexuales con la mitad del material genetico."]
  ],
  historia: [
    ["Por que es importante estudiar historia?", "Permite comprender procesos del pasado y su impacto en la sociedad actual."],
    ["Que es una revolucion?", "Es un cambio profundo y rapido en lo politico, social o economico."],
    ["Que conviene recordar al estudiar un hecho historico?", "Fecha, causas, protagonistas, desarrollo y consecuencias."]
  ],
  matematicas: [
    ["Que busca una ecuacion?", "Encontrar el valor desconocido que hace verdadera la igualdad."],
    ["Que es una funcion?", "Es una relacion donde a cada valor de entrada le corresponde un unico valor de salida."],
    ["Que pasos ayudan a resolver un problema matematico?", "Entender el enunciado, identificar datos, elegir una estrategia y comprobar el resultado."]
  ],
  quimica: [
    ["Que estudia la quimica?", "La materia, su composicion, sus propiedades y sus transformaciones."],
    ["Que es un atomo?", "Es la unidad basica de un elemento quimico."],
    ["Que diferencia hay entre elemento y compuesto?", "Un elemento tiene un solo tipo de atomo; un compuesto combina atomos de distintos elementos."]
  ],
  lenguaje: [
    ["Que es una idea principal?", "Es el mensaje central que organiza un texto."],
    ["Que ayuda a comprender un texto?", "Identificar tema, estructura, vocabulario clave e intencion del autor."],
    ["Que es un argumento?", "Es una razon que sustenta una opinion o tesis."]
  ]
};

const starterQuestions = [
  "Cual es la definicion mas importante de {topic}?",
  "Por que {topic} es importante en {subject}?",
  "Cuales son las caracteristicas principales de {topic}?",
  "Que ejemplo simple resume {topic}?",
  "Que error comun se debe evitar al estudiar {topic}?"
];

let currentCards = [];
let isPdfProcessing = false;
let conceptCount = 1;

const PDF_TEXT_LIMIT = 18000;

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

function showView(viewName) {
  views.forEach((view) => {
    const isActive = view.dataset.view === viewName;
    view.hidden = !isActive;
    view.classList.toggle("is-active", isActive);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function splitNotesIntoIdeas(notes) {
  return notes
    .split(/\n|[.;]/)
    .map((line) => line.trim())
    .filter((line) => line.length > 12);
}

function shortenText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength - 3)}...`;
}

function updatePdfStatus(message, isError = false) {
  pdfStatus.textContent = message;
  pdfStatus.style.color = isError ? "#8f2d1d" : "";
}

function trimPdfText(text) {
  const normalized = text.replace(/\s+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();

  if (normalized.length <= PDF_TEXT_LIMIT) {
    return {
      text: normalized,
      wasTrimmed: false
    };
  }

  return {
    text: normalized.slice(0, PDF_TEXT_LIMIT),
    wasTrimmed: true
  };
}

async function extractPdfText(file) {
  if (!window.pdfjsLib) {
    throw new Error("La libreria para leer PDF no cargo correctamente.");
  }

  const fileBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: fileBuffer }).promise;
  const pageTexts = [];

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .join(" ")
      .trim();

    if (pageText) {
      pageTexts.push(`Pagina ${pageNumber}:\n${pageText}`);
    }
  }

  return {
    pageCount: pdf.numPages,
    text: pageTexts.join("\n\n")
  };
}

function updateUiState({ mode, state, message, loading = false }) {
  generationMode.textContent = mode;
  generationStatus.textContent = state;
  statusMessage.textContent = message;
  generateButton.disabled = loading;
  generateButton.textContent = loading ? "Generando..." : "Generar con IA";
}

function updateSummaryUiState({ message, loading = false }) {
  summaryStatusMessage.textContent = message;
  generateSummaryButton.disabled = loading;
  generateSummaryButton.textContent = loading ? "Generando..." : "Generar apuntes";
}

function renderCards(cards) {
  cardsGrid.innerHTML = "";
  cardCount.textContent = String(cards.length);
  emptyState.hidden = cards.length > 0;

  cards.forEach((card) => {
    const cardNode = template.content.firstElementChild.cloneNode(true);
    const questionNode = cardNode.querySelector(".card-question");
    const answerNode = cardNode.querySelector(".card-answer");

    questionNode.textContent = card.question;
    answerNode.textContent = card.answer;

    const toggleFlip = () => {
      cardNode.classList.toggle("is-flipped");
    };

    cardNode.addEventListener("click", toggleFlip);
    cardNode.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleFlip();
      }
    });

    cardsGrid.appendChild(cardNode);
  });
}

function buildCardsFromNotes(subject, topic, notes, total) {
  const ideas = splitNotesIntoIdeas(notes);

  return ideas.slice(0, total).map((idea, index) => {
    const currentTopic = topic || `el tema ${index + 1}`;
    const questionVariants = [
      `Que significa esta idea en ${subject}: "${shortenText(idea, 48)}"?`,
      `Como explicarias ${currentTopic} a partir de esta idea?`,
      `Que deberias recordar sobre ${currentTopic}?`
    ];

    return {
      question: questionVariants[index % questionVariants.length],
      answer: idea
    };
  });
}

function buildCardsFromSubject(subject, topic, total) {
  const normalizedSubject = normalizeText(subject);
  const knownCards = subjectSuggestions[normalizedSubject] || [];
  const topicLabel = topic || "este tema";

  const generatedStarters = starterQuestions.map((question) => ({
    question: question
      .replaceAll("{subject}", subject)
      .replaceAll("{topic}", topicLabel),
    answer: buildStarterAnswer(question, subject, topicLabel)
  }));

  const suggestionCards = knownCards.map(([question, answer]) => ({ question, answer }));
  return [...suggestionCards, ...generatedStarters].slice(0, total);
}

function buildStarterAnswer(question, subject, topicLabel) {
  if (question.includes("definicion")) {
    return `${topicLabel} es un concepto clave dentro de ${subject}. Define su significado central con tus propias palabras y agrega una idea principal.`;
  }

  if (question.includes("importante")) {
    return `${topicLabel} es importante en ${subject} porque ayuda a comprender mejor sus conceptos, aplicaciones y relaciones con otros temas.`;
  }

  if (question.includes("caracteristicas")) {
    return `Resume ${topicLabel} con 2 o 3 caracteristicas esenciales, usando lenguaje simple y preciso dentro del contexto de ${subject}.`;
  }

  if (question.includes("ejemplo")) {
    return `Piensa en un ejemplo concreto de ${topicLabel} dentro de ${subject} y usalo para recordar el concepto de forma mas facil.`;
  }

  return `Evita memorizar ${topicLabel} sin contexto: relaciona el tema con definiciones, ejemplos y aplicaciones dentro de ${subject}.`;
}

function buildFallbackCards(subject, topic, notes, total) {
  const cards = notes
    ? buildCardsFromNotes(subject, topic, notes, total)
    : buildCardsFromSubject(subject, topic, total);

  return cards.length > 0
    ? cards
    : [
        {
          question: `Que deberias estudiar primero sobre ${topic || subject}?`,
          answer: `Empieza por una definicion breve, ideas clave y un ejemplo simple de ${topic || subject}.`
        }
      ];
}

async function requestAiCards(payload) {
  try {
    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      const statusHint =
        response.status === 404
          ? "La ruta /api/flashcards no existe en este entorno. Abre la app desde Vercel o desde un servidor con backend."
          : "";

      throw new Error(
        data?.error ||
          statusHint ||
          `No fue posible generar tarjetas con IA. Codigo HTTP: ${response.status}.`
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "No se pudo conectar con el backend de IA. Si abriste la app localmente sin Vercel o sin servidor API, la IA no puede responder."
      );
    }

    throw error;
  }
}

async function requestAiSummary(payload) {
  try {
    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        tool: "summary"
      })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      const statusHint =
        response.status === 404
          ? "La ruta de backend no existe en este entorno. Abre la app desde Vercel o desde un servidor con backend."
          : "";

      throw new Error(
        data?.error ||
          statusHint ||
          `No fue posible generar el resumen con IA. Codigo HTTP: ${response.status}.`
      );
    }

    return response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(
        "No se pudo conectar con el backend de IA. Si abriste la app localmente sin Vercel o sin servidor API, la IA no puede responder."
      );
    }

    throw error;
  }
}

function addConceptInput(value = "") {
  conceptCount += 1;
  const conceptRow = document.createElement("div");
  conceptRow.className = "concept-row";

  const input = document.createElement("input");
  input.id = `key-concept-${conceptCount}`;
  input.name = "keyConcept";
  input.type = "text";
  input.placeholder = "Ej: Definiciones, fechas, procesos";
  input.value = value;

  conceptRow.appendChild(input);
  keyConceptsList.appendChild(conceptRow);
}

function getKeyConcepts() {
  return Array.from(keyConceptsList.querySelectorAll('input[name="keyConcept"]'))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function renderSummary(result) {
  summaryResultTitle.textContent = result.title || "Apuntes generados";
  summaryResultContent.innerHTML = "";

  const paragraphs = Array.isArray(result.paragraphs) ? result.paragraphs : [];
  const bullets = Array.isArray(result.keyPoints) ? result.keyPoints : [];

  paragraphs.forEach((paragraph) => {
    const paragraphNode = document.createElement("p");
    paragraphNode.textContent = paragraph;
    summaryResultContent.appendChild(paragraphNode);
  });

  if (bullets.length > 0) {
    const bulletList = document.createElement("ul");

    bullets.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      bulletList.appendChild(item);
    });

    summaryResultContent.appendChild(bulletList);
  }

  summaryEmptyState.hidden = true;
  summaryResult.hidden = false;
}

function normalizeSummaryResponse(result, requestData) {
  if (result && typeof result.title === "string" && Array.isArray(result.paragraphs)) {
    return {
      title: result.title.trim() || `Apuntes de ${requestData.topic}`,
      paragraphs: result.paragraphs.filter(Boolean),
      keyPoints: Array.isArray(result.keyPoints) ? result.keyPoints.filter(Boolean) : [],
      model: result.model
    };
  }

  if (result && Array.isArray(result.cards) && result.cards.length > 0) {
    const cardAnswers = result.cards
      .map((card) => (typeof card?.answer === "string" ? card.answer.trim() : ""))
      .filter(Boolean);

    const cardQuestions = result.cards
      .map((card) => (typeof card?.question === "string" ? card.question.trim() : ""))
      .filter(Boolean);

    return {
      title: `${requestData.topic} en ${requestData.subject}`,
      paragraphs: [
        `Apuntes generados a partir del contenido trabajado en ${requestData.subject} sobre ${requestData.topic}.`,
        ...cardAnswers.slice(0, 3)
      ],
      keyPoints: cardQuestions.slice(0, 4),
      model: result.model
    };
  }

  if (result && typeof result.summary === "string" && result.summary.trim()) {
    return {
      title: `${requestData.topic} en ${requestData.subject}`,
      paragraphs: result.summary
        .split(/\n{2,}/)
        .map((item) => item.trim())
        .filter(Boolean),
      keyPoints: Array.isArray(result.keyPoints) ? result.keyPoints.filter(Boolean) : [],
      model: result.model
    };
  }

  return buildLocalSummary(requestData);
}

function buildLocalSummary({ subject, topic, keyConcepts, notes }) {
  const noteIdeas = splitNotesIntoIdeas(notes).slice(0, 6);
  const title = `${topic || "Tema principal"} en ${subject}`;
  const intro = `Estos apuntes desarrollan ${topic || "el tema principal"} dentro de ${subject}, organizando la informacion mas importante en un formato claro para estudio.`;
  const conceptsLine = keyConcepts.length
    ? `Conceptos clave a reforzar: ${keyConcepts.join(", ")}.`
    : `El estudiante no marco conceptos clave especificos, por lo que los apuntes priorizan las ideas centrales detectadas en el contenido ingresado.`;
  const closing = `Para estudiar mejor este contenido, conviene relacionar definiciones, ejemplos y conexiones entre las ideas principales.`;

  return {
    title,
    paragraphs: [intro, conceptsLine, ...noteIdeas.slice(0, 3), closing],
    keyPoints: noteIdeas.slice(3, 6)
  };
}

async function handlePdfSelection(file) {
  if (!file) {
    updatePdfStatus("Puedes pegar apuntes, subir un PDF o combinar ambas opciones.");
    return;
  }

  if (file.type !== "application/pdf") {
    updatePdfStatus("El archivo seleccionado no es un PDF valido.", true);
    pdfFileInput.value = "";
    return;
  }

  isPdfProcessing = true;
  generateButton.disabled = true;
  updatePdfStatus(`Leyendo "${file.name}"...`);

  try {
    const { pageCount, text } = await extractPdfText(file);

    if (!text.trim()) {
      throw new Error("No se encontro texto legible dentro del PDF.");
    }

    const { text: trimmedText, wasTrimmed } = trimPdfText(text);
    notesInput.value = trimmedText;

    updatePdfStatus(
      wasTrimmed
        ? `Se extrajo texto de ${pageCount} paginas y se recorto para mantener una peticion estable a la IA.`
        : `Se extrajo texto de ${pageCount} paginas y ya puedes generar tarjetas.`
    );
  } catch (error) {
    updatePdfStatus(
      `No se pudo leer el PDF. ${error instanceof Error ? error.message : "Error desconocido."}`,
      true
    );
  } finally {
    isPdfProcessing = false;
    generateButton.disabled = false;
  }
}

function shuffleCards() {
  currentCards = [...currentCards].sort(() => Math.random() - 0.5);
  renderCards(currentCards);
}

pdfFileInput.addEventListener("change", async (event) => {
  const selectedFile = event.target.files?.[0];
  await handlePdfSelection(selectedFile);
});

openViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetView = button.dataset.openView;

    if (targetView) {
      showView(targetView);
    }
  });
});

goHomeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showView("home");
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (isPdfProcessing) {
    updatePdfStatus("Espera a que termine la lectura del PDF antes de generar tarjetas.", true);
    return;
  }

  const subject = subjectInput.value.trim();
  const topic = topicInput.value.trim();
  const notes = notesInput.value.trim();
  const cardTotal = Number(cardTotalInput.value);
  const difficulty = difficultyInput.value;

  if (!subject) {
    subjectInput.focus();
    return;
  }

  updateUiState({
    mode: "Intentando IA",
    state: "Procesando",
    message: "La app esta intentando generar tarjetas con Gemini.",
    loading: true
  });

  try {
    const result = await requestAiCards({
      subject,
      topic,
      notes,
      cardTotal,
      difficulty
    });

    currentCards = Array.isArray(result.cards) ? result.cards : [];
    renderCards(currentCards);

    updateUiState({
      mode: "IA activa",
      state: "Completado",
      message: `Las tarjetas fueron creadas con IA y ya estan listas para estudiar. Modelo: ${result.model || "Gemini"}.`
    });
  } catch (error) {
    currentCards = buildFallbackCards(subject, topic, notes, cardTotal);
    renderCards(currentCards);

    updateUiState({
      mode: "Modo local",
      state: "Fallback",
      message: `La IA no respondio correctamente. Se usaron tarjetas locales. Detalle: ${error instanceof Error ? error.message : "Error desconocido."}`
    });
  }
});

shuffleButton.addEventListener("click", () => {
  if (currentCards.length > 1) {
    shuffleCards();
  }
});

loadDemoButton.addEventListener("click", () => {
  subjectInput.value = "Biologia";
  topicInput.value = "Celulas";
  notesInput.value = `La celula es la unidad basica de los seres vivos.
La membrana plasmatica regula el intercambio de sustancias.
El nucleo contiene el material genetico.
Las mitocondrias producen energia para la celula.
La celula animal y la vegetal comparten organelos, pero la vegetal tiene pared celular y cloroplastos.`;
  cardTotalInput.value = "8";
  difficultyInput.value = "intermedio";
  form.requestSubmit();
});

addConceptButton.addEventListener("click", () => {
  addConceptInput();
});

summaryForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const subject = summarySubjectInput.value.trim();
  const topic = summaryTopicInput.value.trim();
  const notes = summaryNotesInput.value.trim();
  const keyConcepts = getKeyConcepts();
  const requestData = { subject, topic, keyConcepts, notes };

  if (!subject) {
    summarySubjectInput.focus();
    return;
  }

  if (!topic) {
    summaryTopicInput.focus();
    return;
  }

  if (!notes) {
    summaryNotesInput.focus();
    return;
  }

  updateSummaryUiState({
    message: "La app esta construyendo apuntes completos con IA.",
    loading: true
  });

  try {
    const result = await requestAiSummary(requestData);
    const normalizedResult = normalizeSummaryResponse(result, requestData);

    renderSummary(normalizedResult);
    updateSummaryUiState({
      message: `Los apuntes fueron generados con IA y ya estan listos para estudiar. Modelo: ${result.model || "Gemini"}.`
    });
  } catch (error) {
    renderSummary(buildLocalSummary(requestData));
    updateSummaryUiState({
      message: `La IA no respondio correctamente. Se generaron apuntes locales. Detalle: ${error instanceof Error ? error.message : "Error desconocido."}`
    });
  }
});

loadSummaryDemoButton.addEventListener("click", () => {
  summarySubjectInput.value = "Historia";
  summaryTopicInput.value = "Independencia de Chile";

  const conceptInputs = keyConceptsList.querySelectorAll('input[name="keyConcept"]');
  conceptInputs.forEach((input, index) => {
    input.value = index === 0 ? "Patria Vieja" : "";
  });

  if (conceptInputs.length === 1) {
    addConceptInput("Reconquista");
    addConceptInput("Patria Nueva");
  }

  summaryNotesInput.value = `La Independencia de Chile fue un proceso politico y militar que se desarrollo a comienzos del siglo XIX.
La Patria Vieja inicio con la Primera Junta Nacional de Gobierno en 1810.
Luego ocurrio la Reconquista espanola, periodo en que los realistas recuperaron el control.
Mas tarde comenzo la Patria Nueva, liderada por figuras como Bernardo O'Higgins y Jose de San Martin.
La independencia se consolido con victorias militares y con la organizacion de un nuevo Estado.`;
});
