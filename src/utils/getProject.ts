import { projects } from "../data/projects";

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}