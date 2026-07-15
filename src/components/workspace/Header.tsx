import {
  Bot,
  BrainCircuit,
  Clock3,
  Mic,
  Search,
  Settings,
  Square,
  User,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

import { useContextStore } from "../../contexts/contextStore";
import { useInterviewStore } from "../../store/interviewStore";

function Header() {
  const { aiMode, setAIMode } = useContextStore();

  const {
    isInterviewActive,
    interviewType,
    startInterview,
    endInterview,
  } = useInterviewStore();

  const [time, setTime] = useState("");

  useEffect(() => {
    function updateTime() {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  function handleInterview() {
    if (isInterviewActive) {
      endInterview();
      setAIMode("assistant");
    } else {
      startInterview("technical");
      setAIMode("interview");
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08101f]/90 backdrop-blur-3xl">

      <div className="mx-auto flex h-20 items-center justify-between px-8">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,.15)]">

            <Bot
              size={28}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              SudhiTwin OS
            </h1>

            <p className="text-xs tracking-[0.3em] text-cyan-400">
              AI OPERATING SYSTEM
            </p>

          </div>

        </div>

        {/* CENTER */}

        <div className="hidden xl:flex items-center gap-4">

          {/* AI */}

          <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm text-green-400">
              ONLINE
            </span>

          </div>

          {/* Mode */}

          <div
            className={`flex items-center gap-2 rounded-full px-5 py-2 ${
              aiMode === "assistant"
                ? "bg-cyan-500/10 text-cyan-300"
                : "bg-violet-500/10 text-violet-300"
            }`}
          >

            <BrainCircuit size={18} />

            <span className="text-sm font-medium">

              {aiMode === "assistant"
                ? "Assistant Mode"
                : `${interviewType.toUpperCase()} Interview`}

            </span>

          </div>

          {/* Memory */}

          <div className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2">

            <Zap
              size={16}
              className="text-yellow-400"
            />

            <span className="text-sm text-gray-300">
              Memory Active
            </span>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          {/* Time */}

          <div className="hidden lg:flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2">

            <Clock3
              size={16}
              className="text-cyan-400"
            />

            <span className="text-sm text-white">
              {time}
            </span>

          </div>

          {/* Interview */}

          <button
            onClick={handleInterview}
            className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              isInterviewActive
                ? "bg-red-500/20 text-red-300 hover:bg-red-500/30"
                : "bg-cyan-400 text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,.3)]"
            }`}
          >

            {isInterviewActive ? (
              <>
                <Square size={16} />
                Stop
              </>
            ) : (
              <>
                <Mic size={16} />
                Interview
              </>
            )}

          </button>

          <button className="rounded-xl p-3 transition hover:bg-white/5">

            <Search
              size={20}
              className="text-gray-400"
            />

          </button>

          <button className="rounded-xl p-3 transition hover:bg-white/5">

            <Settings
              size={20}
              className="text-gray-400"
            />

          </button>

          <button className="rounded-full border border-white/10 p-2 transition hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,.2)]">

            <User
              size={20}
              className="text-cyan-400"
            />

          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;