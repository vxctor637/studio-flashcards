const form = document.querySelector("#flashcard-form");
const subjectInput = document.querySelector("#subject");
const topicInput = document.querySelector("#topic");
const notesInput = document.querySelector("#notes");
const cardTotalInput = document.querySelector("#card-total");
const difficultyInput = document.querySelector("#difficulty");
const cardsGrid = document.querySelector("#cards-grid");
const emptyState = document.querySelector("#empty-state");
const cardCount = document.querySelector("#card-count");
const generationMode = document.querySelector("#generation-mode");
const generationStatus = document.querySelector("#generation-status");
const statusMessage = document.querySelector("#status-message");
const shuffleButton = document.querySelector("#shuffle-cards");
const loadDemoButton = document.querySelector("#load-demo");
const generateButton = document.querySelector("#generate-button");
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

function updateUiState({ mode, state, message, loading = false }) {
  generationMode.textContent = mode;
  generationStatus.textContent = state;
  statusMessage.textContent = message;
  generateButton.disabled = loading;
  generateButton.textContent = loading ? "Generando..." : "Generar con IA";
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
  const response = await fetch("/api/flashcards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "No fue posible generar tarjetas con IA.");
  }

  return response.json();
}

function shuffleCards() {
  currentCards = [...currentCards].sort(() => Math.random() - 0.5);
  renderCards(currentCards);
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

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
    message: "La app esta intentando generar tarjetas con OpenAI.",
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
      message: "Las tarjetas fueron creadas con IA y ya estan listas para estudiar."
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
