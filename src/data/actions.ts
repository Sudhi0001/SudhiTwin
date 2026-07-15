export type Action = {
  label: string;
  icon: string;
  type:
    | "github"
    | "demo"
    | "project"
    | "resume"
    | "skills"
    | "contact"
    | "architecture";
};

export const actions: Record<string, Action[]> = {
  intellihire: [
    {
      label: "Open Project",
      icon: "📂",
      type: "project",
    },
    {
      label: "GitHub",
      icon: "💻",
      type: "github",
    },
    {
      label: "Live Demo",
      icon: "🌐",
      type: "demo",
    },
    {
      label: "Architecture",
      icon: "🏗",
      type: "architecture",
    },
  ],

  mindsync: [
    {
      label: "Open Project",
      icon: "📂",
      type: "project",
    },
    {
      label: "GitHub",
      icon: "💻",
      type: "github",
    },
    {
      label: "Live Demo",
      icon: "🌐",
      type: "demo",
    },
  ],

  resume: [
    {
      label: "View Resume",
      icon: "📄",
      type: "resume",
    },
    {
      label: "Skills",
      icon: "🧠",
      type: "skills",
    },
    {
      label: "Contact",
      icon: "📬",
      type: "contact",
    },
  ],
};