import { Bot, Sparkles } from "lucide-react";

function TypingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="w-full max-w-4xl rounded-3xl border border-cyan-400/10 bg-[#0b1120]/90 p-5 shadow-[0_0_25px_rgba(34,211,238,0.05)]">

        <div className="flex items-center gap-4">

          {/* Avatar */}

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10">

            <Bot
              size={22}
              className="text-cyan-400"
            />

          </div>

          {/* Text */}

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <span className="font-semibold text-cyan-300">
                SudhiTwin
              </span>

              <Sparkles
                size={14}
                className="animate-pulse text-cyan-400"
              />

            </div>

            <p className="mt-1 text-sm text-gray-400">
              Generating a response...
            </p>

          </div>

          {/* Animated Dots */}

          <div className="flex gap-1">

            <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />

            <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default TypingIndicator;