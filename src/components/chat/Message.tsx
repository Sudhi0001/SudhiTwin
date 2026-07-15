import {
  Bot,
  Check,
 Copy,
  Sparkles,
  User,
} from "lucide-react";

import { useState } from "react";

import ActionCards from "./ActionCards";
import SuggestedQuestions from "./SuggestedQuestions";

import { getRelevantProject } from "../../services/knowledge";

type MessageProps = {
  role: "user" | "assistant";
  text: string;
  onQuestionClick?: (question: string) => void;
};

function Message({
  role,
  text,
  onQuestionClick,
}: MessageProps) {
  const isAssistant = role === "assistant";

  const [copied, setCopied] = useState(false);

  const project = isAssistant
    ? getRelevantProject(text)
    : null;

  async function copyMessage() {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className={`flex w-full ${
        isAssistant
          ? "justify-start"
          : "justify-end"
      }`}
    >
      <div
        className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
          isAssistant
            ? "w-full max-w-4xl border-white/10 bg-[#0b1120]/90 shadow-[0_0_35px_rgba(34,211,238,.05)] hover:border-cyan-400/20"
            : "max-w-2xl border-cyan-400/20 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black shadow-[0_0_25px_rgba(34,211,238,.15)]"
        }`}
      >

        {/* Header */}

        <div
          className={`flex items-center justify-between border-b px-6 py-4 ${
            isAssistant
              ? "border-white/10"
              : "border-black/10"
          }`}
        >

          <div className="flex items-center gap-4">

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                isAssistant
                  ? "bg-cyan-500/10"
                  : "bg-black/10"
              }`}
            >

              {isAssistant ? (
                <Bot
                  size={20}
                  className="text-cyan-400"
                />
              ) : (
                <User size={18} />
              )}

            </div>

            <div>

              <div className="flex items-center gap-2">

                <h3
                  className={`font-semibold ${
                    isAssistant
                      ? "text-cyan-300"
                      : "text-black"
                  }`}
                >
                  {isAssistant
                    ? "SudhiTwin"
                    : "You"}
                </h3>

                {isAssistant && (
                  <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-[10px] uppercase tracking-widest text-cyan-300">

                    AI RESPONSE

                  </span>
                )}

              </div>

              <p
                className={`text-xs ${
                  isAssistant
                    ? "text-gray-500"
                    : "text-black/60"
                }`}
              >
                Just now
              </p>

            </div>

          </div>

          {isAssistant && (

            <button
              onClick={copyMessage}
              className="rounded-xl p-2 transition hover:bg-white/5"
            >

              {copied ? (
                <Check
                  size={18}
                  className="text-green-400"
                />
              ) : (
                <Copy
                  size={18}
                  className="text-gray-500 hover:text-cyan-400"
                />
              )}

            </button>

          )}

        </div>

        {/* Message */}

        <div className="px-7 py-7">

          <div className="prose prose-invert max-w-none">

            <p className="whitespace-pre-line text-[15px] leading-8 text-gray-200">
              {text}
            </p>

          </div>

          {/* AI Actions */}

          {isAssistant && project && (

            <div className="mt-8">

              <div className="mb-4 flex items-center gap-2">

                <Sparkles
                  size={15}
                  className="text-cyan-400"
                />

                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                  Related Resources
                </span>

              </div>

              <ActionCards
                projectId={project.id}
              />

            </div>

          )}

          {/* Follow-up */}

          {isAssistant &&
            onQuestionClick && (

              <div className="mt-10">

                <SuggestedQuestions
                  projectId={project?.id}
                  onQuestionClick={onQuestionClick}
                />

              </div>

            )}

        </div>

      </div>

    </div>
  );
}

export default Message;