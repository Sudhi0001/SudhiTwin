export type AIResponse = {
  message: string;

  project?: string;

  section?: string;

  actions?: string[];

  suggestions?: string[];

  mode?: "assistant" | "interview";
};