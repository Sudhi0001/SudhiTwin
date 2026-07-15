import { create } from "zustand";

export type AvatarState =
  | "greeting"
  | "neutral"
  | "thinking"
  | "talking"
  | "listening"
  | "happy"
  | "confused";

type AvatarStore = {
  state: AvatarState;
  message: string;
  isTalking: boolean;

  setState: (state: AvatarState) => void;
  speak: (text: string) => void;
  stopSpeaking: () => void;
};

export const useAvatarStore = create<AvatarStore>((set) => ({
  state: "greeting",

  message: "",

  isTalking: false,

  setState: (state) =>
    set({
      state,
    }),

  speak: (text) =>
    set({
      state: "talking",
      message: text,
      isTalking: true,
    }),

  stopSpeaking: () =>
    set({
      state: "listening",
      isTalking: false,
    }),
}));