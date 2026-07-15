import { Brain, Cpu } from "lucide-react";

function ThinkingIndicator() {
  return (
    <div className="flex justify-start">

      <div className="w-full max-w-4xl rounded-3xl border border-violet-400/10 bg-[#0b1120]/90 p-5 shadow-[0_0_25px_rgba(139,92,246,0.08)]">

        <div className="flex items-center gap-4">

          {/* Icon */}

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-500/10">

            <Brain
              size={22}
              className="animate-pulse text-violet-400"
            />

          </div>

          {/* Status */}

          <div className="flex-1">

            <div className="flex items-center gap-2">

              <span className="font-semibold text-violet-300">
                SudhiTwin
              </span>

              <Cpu
                size={14}
                className="animate-spin text-violet-400"
              />

            </div>

            <p className="mt-1 text-sm text-gray-400">
              Analyzing your question and searching my knowledge base...
            </p>

          </div>

          {/* Animated Loader */}

          <div className="flex gap-1">

            <span className="h-2 w-2 animate-ping rounded-full bg-violet-400" />

            <span className="h-2 w-2 animate-ping rounded-full bg-violet-400 [animation-delay:0.2s]" />

            <span className="h-2 w-2 animate-ping rounded-full bg-violet-400 [animation-delay:0.4s]" />

          </div>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

            <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500" />

          </div>

        </div>

      </div>

    </div>
  );
}

export default ThinkingIndicator;