import {
  Activity,
  Brain,
  Cpu,
  Mic,
  ShieldCheck,
} from "lucide-react";

import type { AvatarState } from "../../store/avatarStore";

type Props = {
  state: AvatarState;
  aiMode: string;
  isInterviewActive: boolean;
};

function AvatarInfo({
  state,
  aiMode,
  isInterviewActive,
}: Props) {

  const stateText = {
    greeting: "Greeting User",
    neutral: "Standing By",
    thinking: "Analyzing",
    talking: "Responding",
    listening: "Listening",
    happy: "Task Completed",
    confused: "Need Context",
  };

  const progress = {
    greeting: 100,
    neutral: 96,
    thinking: 74,
    talking: 90,
    listening: 92,
    happy: 100,
    confused: 48,
  };

  return (
    <div className="mt-8 w-full max-w-md">

      {/* Header */}

      <div className="text-center">

        <h2 className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-3xl font-bold text-transparent">
          SudhiTwin
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          AI Digital Twin • Version 1.0
        </p>

      </div>

      {/* Online */}

      <div className="mt-6 flex justify-center">

        <div className="flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

          <span className="text-sm font-semibold text-green-300">
            ONLINE
          </span>

        </div>

      </div>

      {/* AI Status */}

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">

        <div className="mb-5 flex items-center justify-between">

          <span className="text-gray-400">
            Current State
          </span>

          <span className="font-semibold text-cyan-300">
            {stateText[state]}
          </span>

        </div>

        <div className="mb-3 flex justify-between text-sm">

          <span className="text-gray-500">
            Neural Activity
          </span>

          <span className="text-cyan-300">
            {progress[state]}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-700"
            style={{
              width: `${progress[state]}%`,
            }}
          />

        </div>

      </div>

      {/* System Grid */}

      <div className="mt-5 grid grid-cols-2 gap-3">

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <Brain
            size={18}
            className="mb-2 text-cyan-400"
          />

          <p className="text-xs uppercase text-gray-500">
            Memory
          </p>

          <p className="mt-1 text-sm font-semibold text-green-300">
            Loaded
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <Cpu
            size={18}
            className="mb-2 text-cyan-400"
          />

          <p className="text-xs uppercase text-gray-500">
            Projects
          </p>

          <p className="mt-1 text-sm font-semibold text-green-300">
            Indexed
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <Mic
            size={18}
            className="mb-2 text-cyan-400"
          />

          <p className="text-xs uppercase text-gray-500">
            Voice
          </p>

          <p className="mt-1 text-sm font-semibold text-green-300">
            Ready
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <ShieldCheck
            size={18}
            className="mb-2 text-cyan-400"
          />

          <p className="text-xs uppercase text-gray-500">
            Resume
          </p>

          <p className="mt-1 text-sm font-semibold text-green-300">
            Indexed
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">

        <div className="mb-3 flex items-center gap-2">

          <Activity
            size={18}
            className="text-cyan-400"
          />

          <span className="font-semibold text-white">
            AI Status
          </span>

        </div>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">

            <span className="text-gray-400">
              Mode
            </span>

            <span className="text-cyan-300">
              {isInterviewActive
                ? "Interview"
                : aiMode === "assistant"
                ? "Assistant"
                : "Recruiter"}
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-400">
              Response Time
            </span>

            <span className="text-green-300">
              0.4s
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-gray-400">
              Knowledge Base
            </span>

            <span className="text-green-300">
              Connected
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AvatarInfo;