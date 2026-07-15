import {
  Briefcase,
  FileText,
  Mic,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";

import { useEffect, useState } from "react";

import { useVoice } from "../../hooks/useVoice";
import { useAvatarStore } from "../../store/avatarStore";

type Props = {
  onSend: (text: string) => void;
};

const suggestions = [
  {
    label: "Projects",
    icon: Briefcase,
    prompt: "Tell me about your projects",
  },
  {
    label: "Resume",
    icon: FileText,
    prompt: "Show me your resume",
  },
  {
    label: "Interview",
    icon: Sparkles,
    prompt: "Start a technical interview",
  },
];

function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const { setState } = useAvatarStore();

  function handleSend() {
    if (!text.trim()) return;

    onSend(text);

    setText("");

    setState("thinking");
  }

  const {
    listening,
    supported,
    startListening,
  } = useVoice((voiceText) => {
    setText(voiceText);

    onSend(voiceText);

    setState("thinking");
  });

  useEffect(() => {
    if (listening) {
      setState("listening");
    }
  }, [listening, setState]);

  return (
    <div className="border-t border-white/10 bg-[#08101f]/90 backdrop-blur-2xl">

      <div className="mx-auto max-w-6xl px-6 py-5">

        {/* Quick Actions */}

        <div className="mb-4 flex flex-wrap gap-3">

          {suggestions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                onClick={() => onSend(item.prompt)}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                <Icon size={15} />
                {item.label}
              </button>
            );
          })}

        </div>

        {/* Input */}

        <div className="rounded-[28px] border border-white/10 bg-[#0d1527] shadow-[0_0_30px_rgba(34,211,238,.05)]">

          <div className="flex items-center gap-3 px-5 py-4">

            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Ask SudhiTwin anything about projects, resume, AI, or interviews..."
              className="flex-1 bg-transparent text-white placeholder:text-gray-500 outline-none"
            />

            {/* Voice */}

            {supported && (
              <button
                onClick={startListening}
                className={`rounded-xl p-3 transition ${
                  listening
                    ? "bg-red-500 text-white"
                    : "hover:bg-white/10"
                }`}
              >
                {listening ? (
                  <Loader2
                    size={20}
                    className="animate-spin"
                  />
                ) : (
                  <Mic size={20} />
                )}
              </button>
            )}

            {/* Send */}

            <button
              disabled={!text.trim()}
              onClick={handleSend}
              className={`rounded-xl p-3 transition-all duration-300 ${
                text.trim()
                  ? "bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,.4)]"
                  : "cursor-not-allowed bg-white/10 text-gray-500"
              }`}
            >
              <Send size={20} />
            </button>

          </div>

          {/* Footer */}

          <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 text-xs">

            <div className="flex items-center gap-2">

              <span
                className={`h-2 w-2 rounded-full ${
                  listening
                    ? "animate-pulse bg-red-400"
                    : "bg-green-400"
                }`}
              />

              <span className="text-gray-400">

                {listening
                  ? "Listening..."
                  : "SudhiTwin Ready"}

              </span>

            </div>

            <div className="flex items-center gap-5">

              <span className="text-gray-500">
                {text.length}/500
              </span>

              <span className="text-cyan-400">
                Press Enter ↵
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChatInput;