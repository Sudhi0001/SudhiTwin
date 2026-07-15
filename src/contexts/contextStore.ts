import { create } from "zustand";

export type ConversationMode =
  | "general"
  | "projects"
  | "technical"
  | "interview"
  | "career"
  | "hr";

export type AIMode =
  | "assistant"
  | "interview";

export type ConversationMessage = {
  role: "user" | "assistant";
  text: string;
};

type ContextStore = {
  // ==========================
  // Current Context
  // ==========================

  currentProject: string | null;

  currentSection:
    | "projects"
    | "resume"
    | "skills"
    | "experience"
    | "education"
    | "general";

  currentTopic: string | null;

  currentMode: ConversationMode;

  aiMode: AIMode;

  // ==========================
  // Conversation
  // ==========================

  lastQuestion: string;

  lastResponse: string;

  history: ConversationMessage[];

  // ==========================
  // Actions
  // ==========================

  setProject: (project: string | null) => void;

  setSection: (
    section:
      | "projects"
      | "resume"
      | "skills"
      | "experience"
      | "education"
      | "general"
  ) => void;

  setTopic: (topic: string | null) => void;

  setMode: (mode: ConversationMode) => void;

  setAIMode: (mode: AIMode) => void;

  toggleAIMode: () => void;

  setLastQuestion: (question: string) => void;

  setLastResponse: (response: string) => void;

  addMessage: (message: ConversationMessage) => void;

  clearHistory: () => void;

  resetContext: () => void;
};

export const useContextStore = create<ContextStore>((set) => ({
  // ==========================
  // Current Context
  // ==========================

  currentProject: null,

  currentSection: "general",

  currentTopic: null,

  currentMode: "general",

  aiMode: "assistant",

  // ==========================
  // Conversation
  // ==========================

  lastQuestion: "",

  lastResponse: "",

  history: [],

  // ==========================
  // Actions
  // ==========================

  setProject: (project) =>
    set({
      currentProject: project,
    }),

  setSection: (section) =>
    set({
      currentSection: section,
    }),

  setTopic: (topic) =>
    set({
      currentTopic: topic,
    }),

  setMode: (mode) =>
    set({
      currentMode: mode,
    }),

  setAIMode: (mode) =>
    set({
      aiMode: mode,
    }),

  toggleAIMode: () =>
    set((state) => ({
      aiMode:
        state.aiMode === "assistant"
          ? "interview"
          : "assistant",
    })),

  setLastQuestion: (question) =>
    set({
      lastQuestion: question,
    }),

  setLastResponse: (response) =>
    set({
      lastResponse: response,
    }),

  addMessage: (message) =>
    set((state) => ({
      history: [...state.history, message].slice(-20),
    })),

  clearHistory: () =>
    set({
      history: [],
    }),

  resetContext: () =>
    set({
      currentProject: null,
      currentSection: "general",
      currentTopic: null,
      currentMode: "general",
      aiMode: "assistant",
      lastQuestion: "",
      lastResponse: "",
      history: [],
    }),
}));