import { Bot } from "lucide-react";

import Message from "../chat/Message";
import SuggestedPrompts from "../chat/SuggestedPrompts";
import TypingIndicator from "../chat/TypingIndicator";
import ThinkingIndicator from "../chat/ThinkingIndicator";

import { useContextStore } from "../../contexts/contextStore";

import type { ChatMessage } from "../../hooks/useChat";

type Props = {
  messages: ChatMessage[];
  status: "idle" | "thinking" | "typing";
  onPromptClick: (text: string) => void;
};

function ChatWindow({
  messages,
  status,
  onPromptClick,
}: Props) {
  const { aiMode } = useContextStore();

  return (
    <div className="flex-1 overflow-y-auto bg-[#050816]">

      <div className="mx-auto max-w-4xl px-6 py-6">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Bot
                size={24}
                className="text-cyan-400"
              />

              <h2 className="text-2xl font-bold text-white">
                SudhiTwin
              </h2>

            </div>

            <p className="mt-1 text-sm text-gray-400">
              AI Engineering Assistant
            </p>

          </div>

          <div
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              aiMode === "assistant"
                ? "bg-cyan-500/10 text-cyan-300"
                : "bg-green-500/10 text-green-300"
            }`}
          >
            ● {aiMode === "assistant"
              ? "Assistant"
              : "Interview"}
          </div>

        </div>

        <div className="mb-6 border-b border-white/10" />

        {/* Welcome */}

        {messages.length === 1 && (

          <div className="mb-8">

            <h3 className="text-2xl font-semibold text-white">
              Welcome 👋
            </h3>

            <p className="mt-3 max-w-2xl leading-7 text-gray-400">
              Ask me anything about my projects, technical decisions,
              resume, skills or conduct a live technical interview.
            </p>

            <div className="mt-6">

              <SuggestedPrompts
                onPromptClick={onPromptClick}
              />

            </div>

          </div>

        )}

        {/* Conversation */}

        <div className="space-y-6">

          {messages.map((message, index) => (

            <Message
              key={index}
              role={message.role}
              text={message.text}
              onQuestionClick={onPromptClick}
            />

          ))}

          {status === "thinking" && (
            <ThinkingIndicator />
          )}

          {status === "typing" && (
            <TypingIndicator />
          )}

        </div>

      </div>

    </div>
  );
}

export default ChatWindow;