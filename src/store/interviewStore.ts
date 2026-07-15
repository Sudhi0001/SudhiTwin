import { create } from "zustand";

export type InterviewType =
  | "technical"
  | "hr"
  | "behavioral"
  | "project";

type InterviewStore = {
  isInterviewActive: boolean;

  interviewType: InterviewType;

  questionCount: number;

  startTime: number | null;

  startInterview: (type?: InterviewType) => void;

  endInterview: () => void;

  nextQuestion: () => void;
};

export const useInterviewStore =
  create<InterviewStore>((set) => ({
    isInterviewActive: false,

    interviewType: "technical",

    questionCount: 0,

    startTime: null,

    startInterview: (
      type = "technical"
    ) =>
      set({
        isInterviewActive: true,
        interviewType: type,
        questionCount: 0,
        startTime: Date.now(),
      }),

    endInterview: () =>
      set({
        isInterviewActive: false,
        interviewType: "technical",
        questionCount: 0,
        startTime: null,
      }),

    nextQuestion: () =>
      set((state) => ({
        questionCount:
          state.questionCount + 1,
      })),
  }));