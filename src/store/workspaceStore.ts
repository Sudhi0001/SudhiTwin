import { create } from "zustand";

export type ActivePanel = string;

type WorkspaceStore = {
  activePanel: ActivePanel;

  expandedProjects: boolean;

  setActivePanel: (panel: ActivePanel) => void;

  toggleProjects: () => void;

  closeProjects: () => void;
};

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  activePanel: "none",

  expandedProjects: true,

  setActivePanel: (panel) =>
    set({
      activePanel: panel,
    }),

  toggleProjects: () =>
    set((state) => ({
      expandedProjects: !state.expandedProjects,
    })),

  closeProjects: () =>
    set({
      expandedProjects: false,
    }),
}));