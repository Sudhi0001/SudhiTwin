import type { AIResponse } from "../types/ai";

import { getRelevantProject } from "./knowledge";
import { suggestions } from "../data/suggestions";
import { actions } from "../data/actions";

export function buildAIResponse(
  message: string,
  mode: "assistant" | "interview"
): AIResponse {
  const project = getRelevantProject(message);

  return {
    message,

    project: project?.id,

    mode,

    actions: project
      ? actions[project.id]?.map((a) => a.label)
      : [],

    suggestions: project
      ? suggestions[project.id] ??
        suggestions.general
      : suggestions.general,
  };
}