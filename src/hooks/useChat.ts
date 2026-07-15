import { useState } from "react";

import { askGemini } from "../services/gemini";
import { speak } from "../services/speech";
import { buildPrompt } from "../services/promptBuilder";
import {
  getRelevantKnowledge,
  getRelevantProject,
} from "../services/knowledge";

import { useWorkspaceStore } from "../store/workspaceStore";
import { useContextStore } from "../contexts/contextStore";
import { useAvatarStore } from "../store/avatarStore";

import { typeWriter } from "../utils/typewriter";

export type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

type ChatStatus =
  | "idle"
  | "thinking"
  | "typing";

const greeting = (() => {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good Morning 👋 I'm SudhiTwin.\nAsk me anything about my projects, experience, resume or career.";
  }

  if (hour < 18) {
    return "Good Afternoon 👋 I'm SudhiTwin.\nHow can I help you today?";
  }

  return "Good Evening 👋 I'm SudhiTwin.\nLet's explore my work together.";
})();

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: greeting,
    },
  ]);

  const [status, setStatus] =
    useState<ChatStatus>("idle");

  const setActivePanel =
    useWorkspaceStore(
      (state) => state.setActivePanel
    );

  const {
    aiMode,
    history,
    setProject,
    setSection,
    setLastQuestion,
    setLastResponse,
    addMessage,
  } = useContextStore();

  const { setState } =
    useAvatarStore();

  //------------------------------------
  // Helpers
  //------------------------------------

  function appendMessage(message: ChatMessage) {
    setMessages((prev) => [
      ...prev,
      message,
    ]);
  }

  function updateAssistantMessage(
    index: number,
    text: string
  ) {
    setMessages((prev) => {
      const updated = [...prev];

      updated[index] = {
        ...updated[index],
        text,
      };

      return updated;
    });
  }

  //------------------------------------
  // Main
  //------------------------------------

  async function sendMessage(input: string) {
    const message = input.trim();

    if (!message) return;

    //------------------------------------
    // User
    //------------------------------------

    appendMessage({
      role: "user",
      text: message,
    });

    addMessage({
      role: "user",
      text: message,
    });

    setLastQuestion(message);

    //------------------------------------
    // Thinking
    //------------------------------------

    setStatus("thinking");
    setState("thinking");

    try {
      //------------------------------------
      // Detect Project
      //------------------------------------

      const project =
        getRelevantProject(message);

      if (project) {
        setActivePanel(project.id);
        setProject(project.id);
        setSection("projects");
      } else {
        setActivePanel("none");
        setProject(null);
        setSection("general");
      }

      //------------------------------------
      // Prompt
      //------------------------------------

      const prompt = buildPrompt({
        aiMode,
        currentProject: project?.id,
        userMessage: message,
        relevantKnowledge:
          getRelevantKnowledge(message),
        history,
      });

      //------------------------------------
      // AI
      //------------------------------------

      const reply =
        await askGemini(prompt);

      setLastResponse(reply);

      //------------------------------------
      // Typing
      //------------------------------------

      setStatus("typing");
      setState("talking");

      let assistantIndex = 0;

      setMessages((prev) => {
        assistantIndex = prev.length;

        return [
          ...prev,
          {
            role: "assistant",
            text: "",
          },
        ];
      });

      //------------------------------------
      // Voice
      //------------------------------------

      speak(reply);

      //------------------------------------
      // Stream Response
      //------------------------------------

      await typeWriter(
        reply,
        (partial) => {
          updateAssistantMessage(
            assistantIndex,
            partial
          );
        },
        12
      );

      //------------------------------------
      // Save
      //------------------------------------

      addMessage({
        role: "assistant",
        text: reply,
      });

      setState("happy");
    } catch (error) {
      console.error(error);

      appendMessage({
        role: "assistant",
        text:
          "Sorry, I couldn't generate a response right now. Please try again.",
      });

      setState("confused");
    } finally {
      setStatus("idle");

      setTimeout(() => {
        setState("neutral");
      }, 800);
    }
  }

  return {
    messages,
    status,
    sendMessage,
  };
}