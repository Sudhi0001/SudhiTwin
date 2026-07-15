import { projects } from "../data/projects";

import { profile } from "../data/interview/profile";
import { career } from "../data/interview/career";
import { interview } from "../data/interview/interview";
import { memory } from "../data/interview/memory";

// =======================================
// Helper
// =======================================

function contains(text: string, words: string[]) {
  return words.some((word) =>
    text.includes(word.toLowerCase())
  );
}

// =======================================
// Knowledge Engine
// =======================================

export function getRelevantKnowledge(query: string): string {
  const lower = query.toLowerCase();

  const sections: string[] = [];

  // =======================================
  // PROJECT
  // =======================================

  const project = getRelevantProject(query);

  if (project) {
    sections.push(`
PROJECT

Title:
${project.title}

Subtitle:
${project.subtitle}

Description:
${project.description}

Problem:
${project.problem}

Solution:
${project.solution}

Role:
${project.role}

Technologies:
${project.technologies.join(", ")}

Features:
${project.features.join(", ")}

Status:
${project.status}
`);
  }

  // =======================================
  // PROFILE
  // =======================================

  if (
    contains(lower, [
      "about",
      "introduce",
      "yourself",
      "who are you",
      "background",
    ])
  ) {
    sections.push(`
PROFILE

${profile.introduction}

${profile.elevatorPitch}
`);
  }

  // =======================================
  // CAREER
  // =======================================

  if (
    contains(lower, [
      "career",
      "goal",
      "future",
      "dream",
      "full stack",
      "ai",
      "software engineer",
    ])
  ) {
    sections.push(`
CAREER

Why Programming

${career.whyProgramming}

Why Full Stack

${career.whyFullStack}

Why AI

${career.whyAI}

Long Term Goal

${career.longTermGoal}
`);
  }

  // =======================================
  // HR
  // =======================================

  if (
    contains(lower, [
      "hire",
      "strength",
      "weakness",
      "salary",
      "team",
      "leadership",
      "pressure",
      "challenge",
      "conflict",
    ])
  ) {
    sections.push(`
INTERVIEW

Why Hire Me

${interview.whyHireMe}

Salary Expectation

${interview.salaryExpectation}

Strengths

${interview.strengths.join(", ")}

Weaknesses

${interview.weaknesses.join(", ")}
`);
  }

  // =======================================
  // EXPERIENCE
  // =======================================

  if (
    contains(lower, [
      "bel",
      "internship",
      "freelance",
      "experience",
      "achievement",
      "learning",
      "challenge",
      "motivation",
      "story",
    ])
  ) {
    sections.push(`
EXPERIENCE

BEL Internship

${memory.bel}

Freelancing

${memory.freelancing}

Learning Journey

${memory.learning}

Biggest Achievement

${memory.biggestAchievement}

Motivation

${memory.motivation}

IntelliHire Story

${memory.intellihire}
`);
  }

  // =======================================
  // FALLBACK
  // =======================================

  if (sections.length === 0) {
    sections.push(`
GENERAL PROFILE

${profile.introduction}

Career Goal

${career.longTermGoal}

Projects Built

${projects.length}

Use the available knowledge to answer naturally.
`);
  }

  return sections.join("\n\n");
}

// =======================================
// Project Detection
// =======================================

export function getRelevantProject(query: string) {
  const lower = query.toLowerCase();

  return (
    projects.find((project) => {
      return (
        contains(lower, [
          project.id,
          project.title,
          project.subtitle,
          project.projectType ?? "",
        ]) ||
        project.technologies.some((tech) =>
          lower.includes(tech.toLowerCase())
        ) ||
        project.features.some((feature) =>
          lower.includes(feature.toLowerCase())
        )
      );
    }) ?? null
  );
}