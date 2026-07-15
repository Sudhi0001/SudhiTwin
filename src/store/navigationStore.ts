import { create } from "zustand";

export type LandingAction =
  | "chat"
  | "projects"
  | "resume"
  | "interview"
  | null;

type NavigationStore = {
  landingAction: LandingAction;

  setLandingAction: (
    action: LandingAction
  ) => void;

  clearLandingAction: () => void;
};

export const useNavigationStore =
  create<NavigationStore>((set) => ({
    landingAction: null,

    setLandingAction: (action) =>
      set({
        landingAction: action,
      }),

    clearLandingAction: () =>
      set({
        landingAction: null,
      }),
  }));