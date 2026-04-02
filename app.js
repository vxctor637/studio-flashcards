const form = document.querySelector("#flashcard-form");
const authForm = document.querySelector("#auth-form");
const authFullNameLabel = document.querySelector('label[for="auth-full-name"]');
const authFullNameInput = document.querySelector("#auth-full-name");
const authStatusMessage = document.querySelector("#auth-status-message");
const authSubmitButton = document.querySelector("#auth-submit-button");
const signOutButtons = document.querySelectorAll("[data-sign-out]");
const appTopbar = document.querySelector("#app-topbar");
const appDrawer = document.querySelector("#app-drawer");
const accountMenu = document.querySelector("#account-menu");
const appDrawerBackdrop = document.querySelector("#app-drawer-backdrop");
const menuToggleButton = document.querySelector("#menu-toggle-button");
const menuAttentionDot = document.querySelector("#menu-attention-dot");
const drawerCloseButton = document.querySelector("#drawer-close-button");
const userMenuButton = document.querySelector("#user-menu-button");
const appUserInitial = document.querySelector("#app-user-initial");
const sessionProfileForm = document.querySelector("#session-profile-form");
const academicTrackInput = document.querySelector("#academic-track");
const sessionSubjectsList = document.querySelector("#session-subjects-list");
const addSessionSubjectButton = document.querySelector("#add-session-subject-button");
const sessionAcademicSummary = document.querySelector("#session-academic-summary");
const sessionTrackDisplay = document.querySelector("#session-track-display");
const sessionSummaryCopy = document.querySelector("#session-summary-copy");
const sessionSubjectButtons = document.querySelector("#session-subject-buttons");
const sessionSelectedSubject = document.querySelector("#session-selected-subject");
const editAcademicProfileButton = document.querySelector("#edit-academic-profile-button");
const editAcademicDot = document.querySelector("#edit-academic-dot");
const drawerAcademicEditor = document.querySelector("#drawer-academic-editor");
const drawerAcademicForm = document.querySelector("#drawer-academic-form");
const drawerAcademicTrackInput = document.querySelector("#drawer-academic-track");
const drawerSubjectsList = document.querySelector("#drawer-subjects-list");
const drawerAddSubjectButton = document.querySelector("#drawer-add-subject-button");
const homeBrandCopy = document.querySelector("#home-brand-copy");
const homeTopbarBadge = document.querySelector("#home-topbar-badge");
const homeHeroPill = document.querySelector("#home-hero-pill");
const homeHeroTitle = document.querySelector("#home-hero-title");
const homeHeroCopy = document.querySelector("#home-hero-copy");
const homePreviewLabel = document.querySelector("#home-preview-label");
const homePreviewTag = document.querySelector("#home-preview-tag");
const homePreviewTitle = document.querySelector("#home-preview-title");
const homePreviewCopy = document.querySelector("#home-preview-copy");
const summaryForm = document.querySelector("#summary-form");
const views = document.querySelectorAll("[data-view]");
const openViewButtons = document.querySelectorAll("[data-open-view]");
const goHomeButtons = document.querySelectorAll("[data-go-home]");
const moduleHomeButtons = document.querySelectorAll(".module-home-button");
const moduleFloatStacks = document.querySelectorAll(".module-float-stack");
const pomodoroWidgets = document.querySelectorAll("[data-pomodoro-widget]");
const pomodoroToggleButtons = document.querySelectorAll("[data-pomodoro-toggle]");
const pomodoroPanels = document.querySelectorAll("[data-pomodoro-panel]");
const pomodoroStudyDisplays = document.querySelectorAll("[data-pomodoro-study-display]");
const pomodoroBreakDisplays = document.querySelectorAll("[data-pomodoro-break-display]");
const pomodoroActionLabels = document.querySelectorAll("[data-pomodoro-action-label]");
const pomodoroSplitDisplays = document.querySelectorAll("[data-pomodoro-split]");
const pomodoroStudyInputs = document.querySelectorAll("[data-pomodoro-study-input]");
const pomodoroBreakInputs = document.querySelectorAll("[data-pomodoro-break-input]");
const pomodoroStartButtons = document.querySelectorAll("[data-pomodoro-start]");
const pomodoroPauseButtons = document.querySelectorAll("[data-pomodoro-pause]");
const pomodoroStopButtons = document.querySelectorAll("[data-pomodoro-stop]");
const subjectInput = document.querySelector("#subject");
const topicInput = document.querySelector("#topic");
const notesInput = document.querySelector("#notes");
const pdfFileInput = document.querySelector("#pdf-file");
const pdfStatus = document.querySelector("#pdf-status");
const cardTotalInput = document.querySelector("#card-total");
const difficultyInput = document.querySelector("#difficulty");
const quizForm = document.querySelector("#quiz-form");
const quizSubjectInput = document.querySelector("#quiz-subject");
const quizTopicInput = document.querySelector("#quiz-topic");
const quizNotesInput = document.querySelector("#quiz-notes");
const quizTotalInput = document.querySelector("#quiz-total");
const quizDifficultyInput = document.querySelector("#quiz-difficulty");
const generateQuizButton = document.querySelector("#generate-quiz-button");
const loadQuizDemoButton = document.querySelector("#load-quiz-demo");
const summarySubjectInput = document.querySelector("#summary-subject");
const summaryTopicInput = document.querySelector("#summary-topic");
const summaryNotesInput = document.querySelector("#summary-notes");
const keyConceptsList = document.querySelector("#key-concepts-list");
const addConceptButton = document.querySelector("#add-concept");
const generateSummaryButton = document.querySelector("#generate-summary-button");
const loadSummaryDemoButton = document.querySelector("#load-summary-demo");
const notesProgress = document.querySelector("#notes-progress");
const notesProgressBar = document.querySelector("#notes-progress-bar");
const cardsGrid = document.querySelector("#cards-grid");
const emptyState = document.querySelector("#empty-state");
const cardCount = document.querySelector("#card-count");
const quizCount = document.querySelector("#quiz-count");
const quizProgressLabel = document.querySelector("#quiz-progress-label");
const quizScoreLabel = document.querySelector("#quiz-score-label");
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
const quizStatusMessage = document.querySelector("#quiz-status-message");
const quizEmptyState = document.querySelector("#quiz-empty-state");
const quizResultsPanel = document.querySelector("#quiz-results-panel");
const quizPlayer = document.querySelector("#quiz-player");
const quizStep = document.querySelector("#quiz-step");
const quizLiveScore = document.querySelector("#quiz-live-score");
const quizRetryBanner = document.querySelector("#quiz-retry-banner");
const quizQuestion = document.querySelector("#quiz-question");
const quizOptions = document.querySelector("#quiz-options");
const quizFeedback = document.querySelector("#quiz-feedback");
const nextQuestionButton = document.querySelector("#next-question-button");
const restartQuizButton = document.querySelector("#restart-quiz-button");
const quizSummary = document.querySelector("#quiz-summary");
const quizSummaryTitle = document.querySelector("#quiz-summary-title");
const quizSummaryScore = document.querySelector("#quiz-summary-score");
const quizSummaryList = document.querySelector("#quiz-summary-list");
const restartSameQuizButton = document.querySelector("#restart-same-quiz-button");
const newQuizButton = document.querySelector("#new-quiz-button");
const advanceQuizButton = document.querySelector("#advance-quiz-button");
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
let notesProgressInterval = null;
let currentQuiz = [];
let fullQuiz = [];
let currentQuizIndex = 0;
let currentQuizScore = 0;
let currentQuizAnswered = false;
let currentQuizResults = [];
let quizCurrentMode = "full";
let lastQuizRequestData = null;
let quizTransitionTimeout = null;
let pomodoroInterval = null;
let pomodoroMenuOpen = false;
let pomodoroAudioContext = null;
let authenticatedUser = null;
let isDrawerOpen = false;
let isAccountMenuOpen = false;
let selectedStudySubject = "";
let academicAttention = {
  menu: false,
  edit: false
};
const pomodoroState = {
  studyMinutes: 25,
  breakMinutes: 5,
  phase: "idle",
  remainingSeconds: 25 * 60
};

const PDF_TEXT_LIMIT = 18000;
const MIN_STUDY_NOTE_WORDS = 500;
const FAKE_SESSION_KEY = "campusia.fakeSession";
const FAKE_PROFILES_KEY = "campusia.fakeProfiles";

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

  const isAuthView = viewName === "auth";
  appTopbar.hidden = isAuthView;
  if (isAuthView) {
    closeAppDrawer();
    closeAccountMenu();
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
  updateFloatingHomeButtons();
  syncPomodoroUi();
}

function updateBodyMenuState() {
  document.body.classList.toggle("menu-open", isDrawerOpen || isAccountMenuOpen);
}

function openAppDrawer() {
  closeAccountMenu();
  isDrawerOpen = true;
  appDrawer.hidden = false;
  appDrawerBackdrop.hidden = false;
  academicAttention.menu = false;
  if (authenticatedUser?.user_metadata) {
    authenticatedUser.user_metadata.academic_attention = {
      ...academicAttention
    };
    saveCurrentFakeUser();
  }
  syncAcademicAttention();
  updateBodyMenuState();
}

function closeAppDrawer() {
  isDrawerOpen = false;
  appDrawer.hidden = true;
  appDrawerBackdrop.hidden = !isAccountMenuOpen;
  updateBodyMenuState();
}

function openAccountMenu() {
  closeAppDrawer();
  isAccountMenuOpen = true;
  accountMenu.hidden = false;
  appDrawerBackdrop.hidden = false;
  updateBodyMenuState();
}

function closeAccountMenu() {
  isAccountMenuOpen = false;
  accountMenu.hidden = true;
  appDrawerBackdrop.hidden = !isDrawerOpen;
  updateBodyMenuState();
}

function normalizeStorageKey(value) {
  return String(value).trim().toLowerCase();
}

function readFakeProfiles() {
  try {
    const rawProfiles = window.localStorage.getItem(FAKE_PROFILES_KEY);
    return rawProfiles ? JSON.parse(rawProfiles) : {};
  } catch (error) {
    return {};
  }
}

function writeFakeProfiles(profiles) {
  window.localStorage.setItem(FAKE_PROFILES_KEY, JSON.stringify(profiles));
}

function saveCurrentFakeUser() {
  if (!authenticatedUser) {
    return;
  }

  const profiles = readFakeProfiles();
  const profileKey = normalizeStorageKey(authenticatedUser.id || authenticatedUser.user_metadata?.full_name || "");
  profiles[profileKey] = authenticatedUser;
  writeFakeProfiles(profiles);
  window.localStorage.setItem(FAKE_SESSION_KEY, JSON.stringify({ profileKey }));
}

function buildFakeUser(fullName, existingUser = null) {
  const normalizedName = fullName.trim();
  const currentMetadata = existingUser?.user_metadata || {};

  return {
    id: normalizeStorageKey(normalizedName),
    email: "",
    user_metadata: {
      full_name: normalizedName,
      academic_track: currentMetadata.academic_track || "",
      subjects: Array.isArray(currentMetadata.subjects) ? currentMetadata.subjects : [],
      preferred_subject: currentMetadata.preferred_subject || "",
      academic_attention: currentMetadata.academic_attention || { menu: false, edit: false }
    }
  };
}

function getStoredFakeSessionUser() {
  try {
    const rawSession = window.localStorage.getItem(FAKE_SESSION_KEY);

    if (!rawSession) {
      return null;
    }

    const session = JSON.parse(rawSession);
    const profiles = readFakeProfiles();
    return session?.profileKey ? profiles[session.profileKey] || null : null;
  } catch (error) {
    return null;
  }
}

function clearFakeSession() {
  window.localStorage.removeItem(FAKE_SESSION_KEY);
}

function syncAcademicAttention() {
  menuAttentionDot.hidden = !academicAttention.menu;
  editAcademicDot.hidden = !academicAttention.edit;
}

function createSubjectInputRow({ value = "", inputId, listName }) {
  const row = document.createElement("div");
  row.className = "concept-row";

  const input = document.createElement("input");
  input.type = "text";
  input.value = value;
  input.placeholder = "Ej: Biologia, Historia, Fisiologia";
  input.name = listName;
  if (inputId) {
    input.id = inputId;
  }

  row.appendChild(input);
  return row;
}

function getAcademicSubjects(listNode, inputName) {
  return Array.from(listNode.querySelectorAll(`input[name="${inputName}"]`))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function ensureSubjectInputs(listNode, inputName, subjects = []) {
  listNode.innerHTML = "";
  const safeSubjects = subjects.length > 0 ? subjects : [""];

  safeSubjects.forEach((subject, index) => {
    listNode.appendChild(
      createSubjectInputRow({
        value: subject,
        inputId: `${inputName}-${index + 1}`,
        listName: inputName
      })
    );
  });
}

function getAcademicProfileFromUser(user) {
  const academicTrack = typeof user?.user_metadata?.academic_track === "string" ? user.user_metadata.academic_track.trim() : "";
  const subjects = Array.isArray(user?.user_metadata?.subjects)
    ? user.user_metadata.subjects
        .filter((subject) => typeof subject === "string")
        .map((subject) => subject.trim())
        .filter(Boolean)
    : [];
  const preferredSubject =
    typeof user?.user_metadata?.preferred_subject === "string" ? user.user_metadata.preferred_subject.trim() : "";

  return {
    academicTrack,
    subjects,
    preferredSubject
  };
}

function syncSelectedSubjectIntoModules() {
  if (!selectedStudySubject) {
    return;
  }

  if (!subjectInput.value.trim()) {
    subjectInput.value = selectedStudySubject;
  }

  if (!summarySubjectInput.value.trim()) {
    summarySubjectInput.value = selectedStudySubject;
  }

  if (!quizSubjectInput.value.trim()) {
    quizSubjectInput.value = selectedStudySubject;
  }
}

function renderAcademicProfile(user) {
  const profile = getAcademicProfileFromUser(user);
  const hasProfile = Boolean(profile.academicTrack && profile.subjects.length > 0);
  academicAttention = {
    menu: Boolean(user?.user_metadata?.academic_attention?.menu),
    edit: Boolean(user?.user_metadata?.academic_attention?.edit)
  };
  syncAcademicAttention();

  academicTrackInput.value = profile.academicTrack;
  drawerAcademicTrackInput.value = profile.academicTrack;
  ensureSubjectInputs(sessionSubjectsList, "sessionSubject", profile.subjects);
  ensureSubjectInputs(drawerSubjectsList, "drawerSubject", profile.subjects);

  sessionProfileForm.hidden = hasProfile;
  sessionAcademicSummary.hidden = !hasProfile;

  if (!hasProfile) {
    selectedStudySubject = "";
    sessionSubjectButtons.innerHTML = "";
    sessionSelectedSubject.textContent = "Todavia no has seleccionado un ramo para esta sesion.";
    sessionSummaryCopy.textContent =
      "Completa tu carrera o curso y agrega tus ramos. Luego quedaran listos para elegir que estudiar al entrar.";
    return;
  }

  sessionTrackDisplay.textContent = profile.academicTrack;
  sessionSummaryCopy.textContent =
    "Elige el ramo que quieres estudiar ahora. Podras editar esta informacion desde el menu.";
  sessionSubjectButtons.innerHTML = "";

  selectedStudySubject = profile.subjects.includes(profile.preferredSubject)
    ? profile.preferredSubject
    : profile.subjects.includes(selectedStudySubject)
      ? selectedStudySubject
      : profile.subjects[0];

  profile.subjects.forEach((subject) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `session-subject-button ${subject === selectedStudySubject ? "is-active" : ""}`;
    button.textContent = subject;

    button.addEventListener("click", async () => {
      selectedStudySubject = subject;
      Array.from(sessionSubjectButtons.querySelectorAll(".session-subject-button")).forEach((buttonNode) => {
        buttonNode.classList.toggle("is-active", buttonNode.textContent === subject);
      });
      sessionSelectedSubject.textContent = `Ramo activo para esta sesion: ${selectedStudySubject}.`;
      syncSelectedSubjectIntoModules();

      if (!authenticatedUser) {
        authenticatedUser.user_metadata.preferred_subject = subject;
        saveCurrentFakeUser();
        return;
      }

      authenticatedUser.user_metadata.preferred_subject = subject;
      saveCurrentFakeUser();
    });

    sessionSubjectButtons.appendChild(button);
  });

  sessionSelectedSubject.textContent = `Ramo activo para esta sesion: ${selectedStudySubject}.`;
  syncSelectedSubjectIntoModules();
}

async function saveAcademicProfile({ academicTrack, subjects }) {
  if (!authenticatedUser) {
    return;
  }

  const currentProfile = getAcademicProfileFromUser(authenticatedUser);
  const isFirstAcademicProfile = !currentProfile.academicTrack || currentProfile.subjects.length === 0;
  authenticatedUser.user_metadata = {
    ...authenticatedUser.user_metadata,
    academic_track: academicTrack,
    subjects,
    preferred_subject: subjects.includes(selectedStudySubject) ? selectedStudySubject : subjects[0] || "",
    academic_attention: {
      menu: isFirstAcademicProfile ? true : Boolean(authenticatedUser.user_metadata?.academic_attention?.menu),
      edit: isFirstAcademicProfile ? true : Boolean(authenticatedUser.user_metadata?.academic_attention?.edit)
    }
  };
  saveCurrentFakeUser();
  applyAuthenticatedUser(authenticatedUser);
}

function getDisplayNameFromUser(user) {
  const fullName = user?.user_metadata?.full_name;

  if (typeof fullName === "string" && fullName.trim()) {
    return fullName.trim();
  }

  if (typeof user?.email === "string" && user.email.includes("@")) {
    return user.email.split("@")[0];
  }

  return "Estudiante";
}

function applyAuthenticatedUser(user) {
  if (!user) {
    return;
  }

  authenticatedUser = user;

  const displayName = getDisplayNameFromUser(user);
  const firstName = displayName.split(/\s+/)[0] || displayName;

  homeBrandCopy.textContent = "Sesion ficticia activa en este navegador.";
  homeTopbarBadge.textContent = `Hola, ${firstName}`;
  homeHeroPill.textContent = "Sesion de prueba activa";
  homeHeroTitle.textContent = `${firstName}, elige como quieres estudiar hoy`;
  homeHeroCopy.textContent =
    "Accede a tus herramientas de estudio con IA desde una portada clara y ordenada. Esta sesion local nos permite probar funciones nuevas mas rapido.";
  homePreviewLabel.textContent = "Tu sesion";
  homePreviewTag.textContent = "Sesion local";
  homePreviewTitle.textContent = displayName;
  homePreviewCopy.textContent = "Tu informacion queda guardada en este navegador para seguir probando funciones sin iniciar sesion real.";
  appUserInitial.textContent = firstName.charAt(0).toUpperCase();
  renderAcademicProfile(user);
}

function updateAuthMessage(message, isError = false) {
  authStatusMessage.textContent = message;
  authStatusMessage.style.color = isError ? "#8f2d1d" : "";
}

function handleSignedOutState(message = "La sesion fue cerrada correctamente.") {
  authenticatedUser = null;
  authForm.reset();
  updateAuthMessage(message);
  showView("auth");
  authFullNameInput.focus();
}

function getActiveView() {
  return document.querySelector(".view.is-active");
}

function updateFloatingHomeButtons() {
  moduleFloatStacks.forEach((stack) => {
    const currentView = stack.closest(".view");

    if (!currentView || !currentView.classList.contains("is-active")) {
      stack.style.transform = "";
      return;
    }

    const viewRect = currentView.getBoundingClientRect();
    const scrollTop = window.scrollY || window.pageYOffset;
    const viewTop = scrollTop + viewRect.top;
    const maxOffset = Math.max(currentView.scrollHeight - stack.offsetHeight - 44, 0);
    const nextOffset = Math.min(Math.max(scrollTop - viewTop, 0), maxOffset);

    stack.style.transform = `translateY(${nextOffset}px)`;
  });
}

function formatPomodoroSeconds(totalSeconds) {
  const safeSeconds = Math.max(totalSeconds, 0);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function ensurePomodoroAudioContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!pomodoroAudioContext) {
    pomodoroAudioContext = new AudioContextClass();
  }

  return pomodoroAudioContext;
}

async function playPomodoroBuzz() {
  const audioContext = ensurePomodoroAudioContext();

  if (!audioContext) {
    return;
  }

  try {
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }

    const startAt = audioContext.currentTime;
    const masterGain = audioContext.createGain();
    masterGain.gain.setValueAtTime(0.0001, startAt);
    masterGain.connect(audioContext.destination);

    const bursts = [
      { offset: 0, duration: 0.14, frequency: 170 },
      { offset: 0.2, duration: 0.14, frequency: 150 },
      { offset: 0.4, duration: 0.18, frequency: 170 }
    ];

    bursts.forEach((burst) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      oscillator.type = "sawtooth";
      oscillator.frequency.setValueAtTime(burst.frequency, startAt + burst.offset);
      gainNode.gain.setValueAtTime(0.0001, startAt + burst.offset);
      gainNode.gain.exponentialRampToValueAtTime(0.055, startAt + burst.offset + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, startAt + burst.offset + burst.duration);
      oscillator.connect(gainNode);
      gainNode.connect(masterGain);
      oscillator.start(startAt + burst.offset);
      oscillator.stop(startAt + burst.offset + burst.duration);
    });
  } catch (error) {
    console.warn("No fue posible reproducir el zumbido del pomodoro.", error);
  }
}

function triggerPomodoroAlert() {
  if (navigator.vibrate) {
    navigator.vibrate([180, 90, 180, 90, 180]);
  }

  playPomodoroBuzz();
}

function stopPomodoroInterval() {
  window.clearInterval(pomodoroInterval);
  pomodoroInterval = null;
}

function resetPomodoroState() {
  stopPomodoroInterval();
  pomodoroState.phase = "idle";
  pomodoroState.remainingSeconds = pomodoroState.studyMinutes * 60;
  pomodoroMenuOpen = false;
  syncPomodoroUi();
}

function startPomodoroCountdown(nextPhase, nextReadyPhase, durationSeconds) {
  stopPomodoroInterval();
  pomodoroState.phase = nextPhase;
  pomodoroState.remainingSeconds = durationSeconds;
  pomodoroMenuOpen = false;
  syncPomodoroUi();

  pomodoroInterval = window.setInterval(() => {
    pomodoroState.remainingSeconds -= 1;

    if (pomodoroState.remainingSeconds <= 0) {
      stopPomodoroInterval();
      pomodoroState.remainingSeconds = 0;
      pomodoroState.phase = nextReadyPhase;
      triggerPomodoroAlert();
      syncPomodoroUi();
      return;
    }

    syncPomodoroUi();
  }, 1000);
}

function startStudyPomodoro() {
  startPomodoroCountdown("study", "ready-break", pomodoroState.studyMinutes * 60);
}

function startBreakPomodoro() {
  startPomodoroCountdown("break", "ready-study", pomodoroState.breakMinutes * 60);
}

function pausePomodoro() {
  if (pomodoroState.phase !== "study" && pomodoroState.phase !== "break") {
    return;
  }

  stopPomodoroInterval();
  pomodoroState.phase = pomodoroState.phase === "study" ? "paused-study" : "paused-break";
  syncPomodoroUi();
}

function resumePomodoro() {
  if (pomodoroState.phase === "paused-study") {
    startPomodoroCountdown("study", "ready-break", pomodoroState.remainingSeconds);
    return;
  }

  if (pomodoroState.phase === "paused-break") {
    startPomodoroCountdown("break", "ready-study", pomodoroState.remainingSeconds);
  }
}

function getPomodoroStartButtonLabel() {
  if (pomodoroState.phase === "ready-break") {
    return "Comenzar break";
  }

  if (pomodoroState.phase === "ready-study") {
    return "Volver a estudiar";
  }

  return "Comenzar temporizador";
}

function syncPomodoroUi() {
  const activeView = getActiveView();

  pomodoroWidgets.forEach((widget) => {
    const belongsToActiveView = activeView ? activeView.contains(widget) : false;
    widget.hidden = !belongsToActiveView;
  });

  pomodoroStudyInputs.forEach((input) => {
    if (document.activeElement !== input) {
      input.value = String(pomodoroState.studyMinutes);
    }
  });

  pomodoroBreakInputs.forEach((input) => {
    if (document.activeElement !== input) {
      input.value = String(pomodoroState.breakMinutes);
    }
  });

  pomodoroStudyDisplays.forEach((display) => {
    display.textContent =
      pomodoroState.phase === "study" || pomodoroState.phase === "paused-study"
        ? formatPomodoroSeconds(pomodoroState.remainingSeconds)
        : `${pomodoroState.studyMinutes}m`;
  });

  pomodoroBreakDisplays.forEach((display) => {
    display.textContent =
      pomodoroState.phase === "break" || pomodoroState.phase === "paused-break"
        ? formatPomodoroSeconds(pomodoroState.remainingSeconds)
        : `${pomodoroState.breakMinutes}m`;
  });

  pomodoroPanels.forEach((panel) => {
    const isActivePanel = activeView ? activeView.contains(panel) : false;
    panel.hidden = !(pomodoroMenuOpen && isActivePanel);
  });

  pomodoroSplitDisplays.forEach((splitDisplay) => {
    splitDisplay.hidden = pomodoroState.phase === "ready-break" || pomodoroState.phase === "ready-study";
  });

  pomodoroActionLabels.forEach((label) => {
    const shouldShowAction = pomodoroState.phase === "ready-break" || pomodoroState.phase === "ready-study";
    label.hidden = !shouldShowAction;
    label.textContent = pomodoroState.phase === "ready-break" ? "Comenzar break" : "Volver a estudiar";
  });

  pomodoroToggleButtons.forEach((button) => {
    button.classList.toggle("is-running-study", pomodoroState.phase === "study" || pomodoroState.phase === "paused-study");
    button.classList.toggle("is-running-break", pomodoroState.phase === "break" || pomodoroState.phase === "paused-break");
    button.classList.toggle("is-ready", pomodoroState.phase === "ready-break" || pomodoroState.phase === "ready-study");
    button.classList.toggle("is-vibrating", pomodoroState.phase === "ready-break" || pomodoroState.phase === "ready-study");

    if (pomodoroState.phase === "ready-break") {
      button.setAttribute("aria-label", "Comenzar break");
    } else if (pomodoroState.phase === "ready-study") {
      button.setAttribute("aria-label", "Volver a estudiar");
    } else {
      button.setAttribute("aria-label", "Abrir temporizador pomodoro");
    }
  });

  pomodoroStartButtons.forEach((button) => {
    button.textContent = getPomodoroStartButtonLabel();
    button.hidden =
      pomodoroState.phase === "study" ||
      pomodoroState.phase === "break" ||
      pomodoroState.phase === "paused-study" ||
      pomodoroState.phase === "paused-break";
  });

  pomodoroPauseButtons.forEach((button) => {
    const isPaused = pomodoroState.phase === "paused-study" || pomodoroState.phase === "paused-break";
    const isControllable =
      pomodoroState.phase === "study" ||
      pomodoroState.phase === "break" ||
      pomodoroState.phase === "paused-study" ||
      pomodoroState.phase === "paused-break";

    button.hidden = !isControllable;
    button.textContent = isPaused ? "Reanudar temporizador" : "Pausar temporizador";
  });

  pomodoroStopButtons.forEach((button) => {
    button.hidden = pomodoroState.phase === "idle";
  });
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

function updateQuizUiState({ message, loading = false }) {
  quizStatusMessage.textContent = message;
  generateQuizButton.disabled = loading;
  generateQuizButton.textContent = loading ? "Generando..." : "Generar quiz";
}

function setNotesProgress(value) {
  notesProgressBar.style.width = `${Math.max(0, Math.min(100, value))}%`;
}

function startNotesProgress() {
  if (notesProgressInterval) {
    clearInterval(notesProgressInterval);
  }

  notesProgress.hidden = false;
  setNotesProgress(8);

  let currentProgress = 8;
  notesProgressInterval = setInterval(() => {
    currentProgress = Math.min(currentProgress + Math.random() * 10, 90);
    setNotesProgress(currentProgress);
  }, 280);
}

function finishNotesProgress() {
  if (notesProgressInterval) {
    clearInterval(notesProgressInterval);
    notesProgressInterval = null;
  }

  setNotesProgress(100);
  setTimeout(() => {
    notesProgress.hidden = true;
    setNotesProgress(0);
  }, 500);
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
        tool: "notes"
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
          `No fue posible generar los apuntes con IA. Codigo HTTP: ${response.status}.`
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

async function requestAiQuiz(payload) {
  try {
    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...payload,
        tool: "quiz"
      })
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      const statusHint =
        response.status === 404
          ? "La ruta de backend no existe en este entorno. Abre la app desde Vercel o desde un servidor con backend."
          : "";

      throw new Error(
        data?.error || statusHint || `No fue posible generar el quiz con IA. Codigo HTTP: ${response.status}.`
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

function normalizeQuizResponse(result, requestData) {
  if (!result || !Array.isArray(result.questions)) {
    throw new Error("La respuesta de la IA no vino en formato de quiz.");
  }

  const questions = result.questions
    .filter(
      (item) =>
        item &&
        typeof item.question === "string" &&
        Array.isArray(item.options) &&
        item.options.length === 4 &&
        Number.isInteger(item.correctIndex) &&
        item.correctIndex >= 0 &&
        item.correctIndex < 4
    )
    .map((item) => ({
      question: item.question.trim(),
      options: item.options.map((option) => String(option).trim()),
      correctIndex: item.correctIndex,
      explanation:
        typeof item.explanation === "string" && item.explanation.trim()
          ? item.explanation.trim()
          : "Repasa este concepto y vuelve a intentarlo."
    }))
    .filter((item) => item.question && item.options.every(Boolean));

  if (questions.length === 0) {
    throw new Error("La IA no devolvio preguntas validas para el quiz.");
  }

  return {
    title: result.quizTitle || `${requestData.topic} en ${requestData.subject}`,
    questions,
    model: result.model
  };
}

function buildFallbackQuiz({ subject, topic, notes, quizTotal }) {
  const ideas = splitNotesIntoIdeas(notes).slice(0, quizTotal);

  const questionsFromNotes = ideas.map((idea, index) => ({
    question: `Que deberias recordar sobre ${topic || subject}?`,
    options: [
      idea,
      `Una idea no relacionada con ${topic || subject}.`,
      `Un concepto opuesto al tema principal.`,
      `Un dato inventado sin relacion con ${subject}.`
    ],
    correctIndex: 0,
    explanation: `La respuesta correcta se basa directamente en el contenido entregado por el estudiante.`
  }));

  const defaultQuestions = starterQuestions.slice(0, quizTotal).map((question, index) => ({
    question: question.replaceAll("{subject}", subject).replaceAll("{topic}", topic || "este tema"),
    options: [
      `La opcion mas consistente con ${topic || subject} dentro de ${subject}.`,
      `Una opcion incompleta sobre ${topic || subject}.`,
      `Una opcion fuera del contexto de ${subject}.`,
      `Una opcion incorrecta que mezcla conceptos no relacionados.`
    ],
    correctIndex: 0,
    explanation: `Repasa las ideas centrales de ${topic || subject} para reconocer la opcion correcta con mas seguridad.`
  }));

  return {
    title: `${topic || "Tema principal"} en ${subject}`,
    questions: (questionsFromNotes.length > 0 ? questionsFromNotes : defaultQuestions).slice(0, quizTotal)
  };
}

function getNextQuizDifficulty(level) {
  if (level === "basico") {
    return "intermedio";
  }

  if (level === "intermedio") {
    return "avanzado";
  }

  return "";
}

function getDifficultyLabel(level) {
  if (level === "basico") {
    return "Basico";
  }

  if (level === "intermedio") {
    return "Intermedio";
  }

  if (level === "avanzado") {
    return "Avanzado";
  }

  return level;
}

function updateQuizScoreboard() {
  quizCount.textContent = String(currentQuiz.length);
  quizScoreLabel.textContent = `${currentQuizScore}/${currentQuiz.length || 0}`;
  quizLiveScore.textContent = `Puntaje: ${currentQuizScore}`;
  quizProgressLabel.textContent =
    currentQuiz.length > 0 ? `${Math.min(currentQuizIndex + 1, currentQuiz.length)}/${currentQuiz.length}` : "Sin iniciar";
}

function createEmptyQuizResult() {
  return {
    attempts: 0,
    selectedIndexes: [],
    finalCorrect: false,
    correctedInRetry: false
  };
}

function setQuizResultsMode(mode) {
  if (!quizResultsPanel) {
    return;
  }

  quizResultsPanel.classList.toggle("is-summary-mode", mode === "summary");
}

function finishQuizRound() {
  window.clearTimeout(quizTransitionTimeout);

  if (quizCurrentMode === "full") {
    const hasIncorrectAnswers = currentQuizResults.some((result) => !result?.finalCorrect);

    if (hasIncorrectAnswers) {
      prepareRetryIncorrectQuestions();
      return;
    }
  }

  renderQuizSummary();
}

function renderQuizQuestion() {
  if (currentQuiz.length === 0) {
    return;
  }

  window.clearTimeout(quizTransitionTimeout);

  const questionData = currentQuiz[currentQuizIndex];
  const questionResultIndex = fullQuiz.findIndex((item) => item.question === questionData.question);
  const questionResultState =
    questionResultIndex >= 0
      ? currentQuizResults[questionResultIndex] || createEmptyQuizResult()
      : createEmptyQuizResult();

  quizStep.textContent = `Pregunta ${currentQuizIndex + 1} de ${currentQuiz.length}`;
  quizRetryBanner.hidden = quizCurrentMode !== "retry";
  quizQuestion.textContent = questionData.question;
  quizOptions.innerHTML = "";
  quizFeedback.hidden = true;
  quizFeedback.textContent = "";
  nextQuestionButton.hidden = true;
  restartQuizButton.hidden = true;
  currentQuizAnswered = false;

  questionData.options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "quiz-option";
    optionButton.textContent = option;

    const previousWrongAnswer =
      quizCurrentMode === "retry" &&
      Array.isArray(questionResultState.selectedIndexes) &&
      questionResultState.selectedIndexes.length > 0
        ? questionResultState.selectedIndexes[0]
        : -1;

    if (previousWrongAnswer === index) {
      optionButton.classList.add("is-previous-incorrect");
    }

    optionButton.addEventListener("click", () => {
      if (currentQuizAnswered) {
        return;
      }

      currentQuizAnswered = true;
      const isCorrect = index === questionData.correctIndex;
      const resultState =
        questionResultIndex >= 0
          ? currentQuizResults[questionResultIndex] || createEmptyQuizResult()
          : createEmptyQuizResult();

      Array.from(quizOptions.children).forEach((buttonNode, buttonIndex) => {
        buttonNode.disabled = true;
        const revealCorrectAnswer = isCorrect || quizCurrentMode === "retry";
        buttonNode.classList.toggle("is-correct", revealCorrectAnswer && buttonIndex === questionData.correctIndex);
        buttonNode.classList.toggle("is-incorrect", buttonIndex === index && !isCorrect);
      });

      if (isCorrect) {
        currentQuizScore += 1;
      }

      if (questionResultIndex >= 0) {
        resultState.attempts += 1;
        resultState.selectedIndexes.push(index);

        if (isCorrect) {
          resultState.finalCorrect = true;
          resultState.correctedInRetry = quizCurrentMode === "retry" && resultState.attempts > 1;
        } else if (quizCurrentMode === "retry") {
          resultState.finalCorrect = false;
        }

        currentQuizResults[questionResultIndex] = resultState;
      }

      updateQuizScoreboard();
      quizFeedback.hidden = false;
      if (isCorrect) {
        quizFeedback.textContent = `Correcto. ${questionData.explanation}`;
      } else if (quizCurrentMode === "full") {
        quizFeedback.textContent =
          "Respuesta incorrecta. Esta pregunta volvera a aparecer al final para que la intentes una segunda vez.";
      } else {
        quizFeedback.textContent = `Respuesta incorrecta. ${questionData.explanation}`;
      }

      if (currentQuizIndex < currentQuiz.length - 1) {
        nextQuestionButton.hidden = false;
        nextQuestionButton.textContent = "Siguiente pregunta";
      } else {
        quizProgressLabel.textContent = quizCurrentMode === "retry" ? "Reintento completado" : "Primera ronda completada";
        quizTransitionTimeout = window.setTimeout(() => {
          finishQuizRound();
        }, 1200);
      }
    });

    quizOptions.appendChild(optionButton);
  });
}

function startQuiz(quizData) {
  fullQuiz = quizData.questions.map((question) => ({ ...question }));
  currentQuiz = fullQuiz;
  currentQuizIndex = 0;
  currentQuizScore = 0;
  currentQuizResults = fullQuiz.map(() => createEmptyQuizResult());
  quizCurrentMode = "full";
  window.clearTimeout(quizTransitionTimeout);
  quizEmptyState.hidden = true;
  quizPlayer.hidden = false;
  quizSummary.hidden = true;
  setQuizResultsMode("quiz");
  updateQuizScoreboard();
  renderQuizQuestion();
}

function renderQuizSummary() {
  const totalQuestions = fullQuiz.length;
  const correctAnswers = currentQuizResults.filter((result) => result?.finalCorrect).length;
  currentQuizScore = correctAnswers;
  updateQuizScoreboard();

  quizPlayer.hidden = true;
  quizSummary.hidden = false;
  setQuizResultsMode("summary");
  quizSummaryTitle.textContent =
    correctAnswers === totalQuestions
      ? "Excelente trabajo, completaste el quiz"
      : "Resumen final del quiz";
  quizSummaryScore.textContent = `${correctAnswers}/${totalQuestions}`;
  quizSummaryList.innerHTML = "";

  fullQuiz.forEach((question, index) => {
    const result = currentQuizResults[index];
    const attempts = result?.attempts || 0;
    const finalCorrect = Boolean(result?.finalCorrect);
    const itemNode = document.createElement("article");
    itemNode.className = `quiz-summary-item ${finalCorrect ? "is-correct" : "is-incorrect"}`;

    const titleNode = document.createElement("h4");
    titleNode.textContent = `${index + 1}. ${question.question}`;

    const statusNode = document.createElement("p");
    if (finalCorrect && attempts <= 1) {
      statusNode.textContent = "Resultado: correcta en 1 intento.";
    } else if (finalCorrect) {
      statusNode.textContent = `Resultado: correcta en ${attempts} intentos.`;
    } else if (attempts > 1) {
      statusNode.textContent = `Resultado: incorrecta tras ${attempts} intentos.`;
    } else {
      statusNode.textContent = "Resultado: incorrecta.";
    }

    const answerNode = document.createElement("p");
    answerNode.textContent = `Respuesta correcta: ${question.options[question.correctIndex]}`;

    const attemptNode = document.createElement("p");
    attemptNode.textContent = `Intentos usados: ${attempts || 0}`;

    const selectedIndexes = Array.isArray(result?.selectedIndexes) ? result.selectedIndexes : [];
    const lastSelectedIndex = selectedIndexes.length > 0 ? selectedIndexes[selectedIndexes.length - 1] : -1;
    const userAnswerNode = document.createElement("p");
    userAnswerNode.textContent =
      lastSelectedIndex >= 0
        ? `Tu respuesta final: ${question.options[lastSelectedIndex]}`
        : "Tu respuesta final: sin respuesta registrada";

    itemNode.append(titleNode, statusNode, attemptNode, userAnswerNode, answerNode);
    quizSummaryList.appendChild(itemNode);
  });

  const nextDifficulty = getNextQuizDifficulty(lastQuizRequestData?.difficulty || "");
  if (nextDifficulty) {
    advanceQuizButton.hidden = false;
    advanceQuizButton.textContent = `Generar nuevo quiz en nivel ${getDifficultyLabel(nextDifficulty)}`;
  } else {
    advanceQuizButton.hidden = true;
  }

  quizSummary.scrollIntoView({ behavior: "smooth", block: "start" });
}

function prepareRetryIncorrectQuestions() {
  const incorrectQuestions = fullQuiz.filter((_, index) => !currentQuizResults[index]?.finalCorrect);

  if (incorrectQuestions.length === 0) {
    renderQuizSummary();
    return;
  }

  currentQuiz = incorrectQuestions;
  currentQuizIndex = 0;
  currentQuizScore = 0;
  quizCurrentMode = "retry";
  quizSummary.hidden = true;
  quizPlayer.hidden = false;
  setQuizResultsMode("quiz");
  updateQuizUiState({
    message: "Ahora vas a responder automaticamente las preguntas que tuviste incorrectas en el primer intento."
  });
  updateQuizScoreboard();
  renderQuizQuestion();
}

function getKeyConcepts() {
  return Array.from(keyConceptsList.querySelectorAll('input[name="keyConcept"]'))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function renderSummary(result) {
  summaryResultTitle.textContent = result.title || "Apuntes generados";
  summaryResultContent.innerHTML = "";
  const sections = Array.isArray(result.sections) ? result.sections : [];

  sections.forEach((section) => {
    const sectionNode = document.createElement("section");
    sectionNode.className = "summary-section";

    const headingNode = document.createElement("h4");
    headingNode.textContent = section.heading;
    sectionNode.appendChild(headingNode);

    if (section.type === "list") {
      const listNode = document.createElement("ul");
      (section.items || []).forEach((item) => {
        const itemNode = document.createElement("li");
        itemNode.textContent = item;
        listNode.appendChild(itemNode);
      });
      sectionNode.appendChild(listNode);
    } else {
      (section.items || []).forEach((item) => {
        const paragraphNode = document.createElement("p");
        paragraphNode.textContent = item;
        sectionNode.appendChild(paragraphNode);
      });
    }

    summaryResultContent.appendChild(sectionNode);
  });

  summaryEmptyState.hidden = true;
  summaryResult.hidden = false;
}

function countWords(text) {
  return String(text)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function getStudyNoteWordCount(result) {
  return (result.sections || []).reduce(
    (total, section) => total + (section.items || []).reduce((sum, item) => sum + countWords(item), 0),
    0
  );
}

function normalizeSummaryResponse(result, requestData) {
  if (result && typeof result.title === "string" && result.introduction && result.development) {
    const normalized = {
      title: result.title.trim() || `Apuntes de ${requestData.topic}`,
      sections: [
        {
          heading: "Introduccion",
          type: "text",
          items: Array.isArray(result.introduction) ? result.introduction.filter(Boolean) : []
        },
        {
          heading: "Conceptos",
          type: "list",
          items: Array.isArray(result.concepts) ? result.concepts.filter(Boolean) : []
        },
        {
          heading: "Desarrollo",
          type: "text",
          items: Array.isArray(result.development) ? result.development.filter(Boolean) : []
        },
        {
          heading: "Repaso",
          type: "list",
          items: Array.isArray(result.review) ? result.review.filter(Boolean) : []
        }
      ].filter((section) => section.items.length > 0),
      model: result.model
    };

    if (getStudyNoteWordCount(normalized) < MIN_STUDY_NOTE_WORDS) {
      throw new Error(
        `La IA devolvio apuntes demasiado cortos. Minimo esperado: ${MIN_STUDY_NOTE_WORDS} palabras.`
      );
    }

    return normalized;
  }

  throw new Error("La respuesta de la IA no vino en formato de apuntes.");
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
    sections: [
      {
        heading: "Introduccion",
        type: "text",
        items: [intro]
      },
      {
        heading: "Conceptos",
        type: "list",
        items: keyConcepts.length ? keyConcepts : [conceptsLine]
      },
      {
        heading: "Desarrollo",
        type: "text",
        items: noteIdeas.slice(0, 3)
      },
      {
        heading: "Repaso",
        type: "list",
        items: [closing, ...noteIdeas.slice(3, 6)]
      }
    ]
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

authForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const fullName = authFullNameInput.value.trim();

  if (!fullName) {
    updateAuthMessage("Escribe tu nombre para entrar a la sesion ficticia.", true);
    return;
  }

  authSubmitButton.disabled = true;

  try {
    const profiles = readFakeProfiles();
    const profileKey = normalizeStorageKey(fullName);
    const fakeUser = profiles[profileKey] || buildFakeUser(fullName);
    authenticatedUser = fakeUser;
    saveCurrentFakeUser();
    applyAuthenticatedUser(fakeUser);
    updateAuthMessage("Sesion ficticia iniciada correctamente.");
    showView("home");
  } catch (error) {
    updateAuthMessage(error instanceof Error ? error.message : "No fue posible iniciar la sesion ficticia.", true);
  } finally {
    authSubmitButton.disabled = false;
  }
});

openViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!authenticatedUser) {
      showView("auth");
      return;
    }

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

addSessionSubjectButton.addEventListener("click", () => {
  sessionSubjectsList.appendChild(
    createSubjectInputRow({
      listName: "sessionSubject"
    })
  );
});

drawerAddSubjectButton.addEventListener("click", () => {
  drawerSubjectsList.appendChild(
    createSubjectInputRow({
      listName: "drawerSubject"
    })
  );
});

sessionProfileForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const academicTrack = academicTrackInput.value.trim();
  const subjects = getAcademicSubjects(sessionSubjectsList, "sessionSubject");

  if (!academicTrack || subjects.length === 0) {
    return;
  }

  try {
    await saveAcademicProfile({ academicTrack, subjects });
  } catch (error) {
    homePreviewCopy.textContent =
      error instanceof Error ? error.message : "No fue posible guardar tu perfil academico.";
  }
});

editAcademicProfileButton.addEventListener("click", () => {
  academicAttention.edit = false;
  if (authenticatedUser?.user_metadata) {
    authenticatedUser.user_metadata.academic_attention = {
      ...academicAttention
    };
    saveCurrentFakeUser();
  }
  syncAcademicAttention();
  drawerAcademicEditor.hidden = !drawerAcademicEditor.hidden;
});

drawerAcademicForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const academicTrack = drawerAcademicTrackInput.value.trim();
  const subjects = getAcademicSubjects(drawerSubjectsList, "drawerSubject");

  if (!academicTrack || subjects.length === 0) {
    return;
  }

  try {
    await saveAcademicProfile({ academicTrack, subjects });
    drawerAcademicEditor.hidden = true;
  } catch (error) {
    homePreviewCopy.textContent =
      error instanceof Error ? error.message : "No fue posible actualizar tu perfil academico.";
  }
});

menuToggleButton.addEventListener("click", () => {
  if (isDrawerOpen) {
    closeAppDrawer();
  } else {
    openAppDrawer();
  }
});

drawerCloseButton.addEventListener("click", () => {
  closeAppDrawer();
});

userMenuButton.addEventListener("click", () => {
  if (isAccountMenuOpen) {
    closeAccountMenu();
  } else {
    openAccountMenu();
  }
});

appDrawerBackdrop.addEventListener("click", () => {
  closeAppDrawer();
});

signOutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.disabled = true;

    try {
      clearFakeSession();
      closeAppDrawer();
      closeAccountMenu();
      handleSignedOutState();
    } catch (error) {
      updateAuthMessage(error instanceof Error ? error.message : "No fue posible cerrar la sesion.", true);
    } finally {
      button.disabled = false;
    }
  });
});

pomodoroToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (pomodoroState.phase === "ready-break") {
      startBreakPomodoro();
      return;
    }

    if (pomodoroState.phase === "ready-study") {
      startStudyPomodoro();
      return;
    }

    pomodoroMenuOpen = !pomodoroMenuOpen;
    syncPomodoroUi();
  });
});

pomodoroStudyInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const nextValue = Math.min(180, Math.max(1, Number(input.value) || pomodoroState.studyMinutes));
    pomodoroState.studyMinutes = nextValue;

    if (pomodoroState.phase === "idle" || pomodoroState.phase === "ready-study") {
      pomodoroState.remainingSeconds = pomodoroState.studyMinutes * 60;
    }

    syncPomodoroUi();
  });
});

pomodoroBreakInputs.forEach((input) => {
  input.addEventListener("input", () => {
    const nextValue = Math.min(60, Math.max(1, Number(input.value) || pomodoroState.breakMinutes));
    pomodoroState.breakMinutes = nextValue;

    if (pomodoroState.phase === "ready-break") {
      pomodoroState.remainingSeconds = pomodoroState.breakMinutes * 60;
    }

    syncPomodoroUi();
  });
});

pomodoroStartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (pomodoroState.phase === "ready-break") {
      startBreakPomodoro();
      return;
    }

    startStudyPomodoro();
  });
});

pomodoroPauseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (pomodoroState.phase === "study" || pomodoroState.phase === "break") {
      pausePomodoro();
      return;
    }

    resumePomodoro();
  });
});

pomodoroStopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetPomodoroState();
  });
});

document.addEventListener("click", (event) => {
  const target = event.target;

  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.closest("[data-pomodoro-widget]")) {
    return;
  }

  if (
    target.closest("#app-drawer") ||
    target.closest("#account-menu") ||
    target.closest("#menu-toggle-button") ||
    target.closest("#user-menu-button")
  ) {
    return;
  }

  if (pomodoroMenuOpen) {
    pomodoroMenuOpen = false;
    syncPomodoroUi();
  }

  if (isDrawerOpen) {
    closeAppDrawer();
  }

  if (isAccountMenuOpen) {
    closeAccountMenu();
  }
});

window.addEventListener("scroll", updateFloatingHomeButtons, { passive: true });
window.addEventListener("resize", updateFloatingHomeButtons);
syncPomodoroUi();
const initialFakeSessionUser = getStoredFakeSessionUser();
if (initialFakeSessionUser) {
  authenticatedUser = initialFakeSessionUser;
  applyAuthenticatedUser(initialFakeSessionUser);
  showView("home");
} else {
  showView("auth");
  authFullNameInput.focus();
}

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
  startNotesProgress();

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
  } finally {
    finishNotesProgress();
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

nextQuestionButton.addEventListener("click", () => {
  if (currentQuizIndex < currentQuiz.length - 1) {
    currentQuizIndex += 1;
    updateQuizScoreboard();
    renderQuizQuestion();
  }
});

restartQuizButton.addEventListener("click", () => {
  finishQuizRound();
});

restartSameQuizButton.addEventListener("click", () => {
  if (fullQuiz.length > 0) {
    startQuiz({
      title: `${lastQuizRequestData?.topic || "Tema principal"} en ${lastQuizRequestData?.subject || ""}`,
      questions: fullQuiz
    });
    updateQuizUiState({
      message: "El mismo quiz fue reiniciado para volver a practicar."
    });
  }
});

newQuizButton.addEventListener("click", () => {
  if (lastQuizRequestData) {
    quizForm.requestSubmit();
  }
});

advanceQuizButton.addEventListener("click", () => {
  const nextDifficulty = getNextQuizDifficulty(lastQuizRequestData?.difficulty || "");

  if (!nextDifficulty || !lastQuizRequestData) {
    return;
  }

  quizDifficultyInput.value = nextDifficulty;
  quizForm.requestSubmit();
});

quizForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const subject = quizSubjectInput.value.trim();
  const topic = quizTopicInput.value.trim();
  const notes = quizNotesInput.value.trim();
  const quizTotal = Number(quizTotalInput.value);
  const difficulty = quizDifficultyInput.value;
  const requestData = { subject, topic, notes, quizTotal, difficulty };
  lastQuizRequestData = requestData;

  if (!subject) {
    quizSubjectInput.focus();
    return;
  }

  if (!topic) {
    quizTopicInput.focus();
    return;
  }

  updateQuizUiState({
    message: "La app esta creando un quiz con preguntas de opcion multiple.",
    loading: true
  });

  try {
    const result = await requestAiQuiz(requestData);
    const normalizedQuiz = normalizeQuizResponse(result, requestData);

    startQuiz(normalizedQuiz);
    updateQuizUiState({
      message: `El quiz fue generado con IA y ya esta listo para practicar. Modelo: ${result.model || "Gemini"}.`
    });
  } catch (error) {
    startQuiz(buildFallbackQuiz(requestData));
    updateQuizUiState({
      message: `La IA no respondio correctamente. Se genero un quiz local. Detalle: ${error instanceof Error ? error.message : "Error desconocido."}`
    });
  }
});

loadQuizDemoButton.addEventListener("click", () => {
  quizSubjectInput.value = "Psicologia";
  quizTopicInput.value = "Psicoanalisis";
  quizNotesInput.value = `Sigmund Freud fue el fundador del psicoanalisis.
El inconsciente es uno de los conceptos centrales de esta corriente.
La primera topica distingue consciente, preconsciente e inconsciente.
La segunda topica distingue ello, yo y superyo.
Los mecanismos de defensa ayudan a manejar conflictos internos y ansiedad.`;
  quizTotalInput.value = "5";
  quizDifficultyInput.value = "intermedio";
});
