import { useEffect, useMemo, useState } from "react";
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Cpu,
  Database,
  FolderGit2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const logs = [
  {
    icon: Cpu,
    text: "Initializing AI Core...",
  },
  {
    icon: BrainCircuit,
    text: "Loading Neural Memory...",
  },
  {
    icon: Database,
    text: "Importing Resume & Knowledge Base...",
  },
  {
    icon: FolderGit2,
    text: "Syncing GitHub Projects...",
  },
  {
    icon: ShieldCheck,
    text: "Building Interview Engine...",
  },
  {
    icon: Sparkles,
    text: "SudhiTwin is Online.",
  },
];

function BootText() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= logs.length) return;

    const timer = setTimeout(() => {
      setVisible((prev) => prev + 1);
    }, 700);

    return () => clearTimeout(timer);
  }, [visible]);

  const progress = useMemo(() => {
    return (visible / logs.length) * 100;
  }, [visible]);

  return (
    <div className="w-full max-w-3xl">

      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.15)]">

          <Bot
            size={46}
            className="animate-pulse text-cyan-400"
          />

        </div>

        <h1 className="bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-5xl font-black text-transparent">
          SudhiTwin OS
        </h1>

        <p className="mt-4 text-lg text-gray-400">
          Initializing AI Digital Twin...
        </p>

      </div>

      {/* Terminal */}

      <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#08101f]/95 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl">

        {/* Top Bar */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

          <div className="flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-red-400" />

            <span className="h-3 w-3 rounded-full bg-yellow-400" />

            <span className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          <span className="font-mono text-xs tracking-[0.3em] text-cyan-400">
            BOOT SEQUENCE
          </span>

        </div>

        {/* Logs */}

        <div className="space-y-4 px-8 py-8 font-mono">

          {logs.slice(0, visible).map((log, index) => {
            const Icon = log.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] px-5 py-4 animate-in fade-in duration-500"
              >

                <div className="flex items-center gap-4">

                  <Icon
                    size={18}
                    className="text-cyan-400"
                  />

                  <span className="text-gray-200">
                    {log.text}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-green-400">

                  <CheckCircle2 size={18} />

                  <span className="text-sm">
                    OK
                  </span>

                </div>

              </div>
            );
          })}

          {/* Active Process */}

          {visible < logs.length && (
            <div className="flex items-center gap-4 rounded-xl border border-cyan-400/10 bg-cyan-500/5 px-5 py-4">

              <div className="flex gap-1">

                <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />

                <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />

                <span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />

              </div>

              <span className="font-mono text-cyan-300">
                Executing next startup task...
              </span>

            </div>
          )}

        </div>

        {/* Progress */}

        <div className="border-t border-white/10 px-8 py-6">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-gray-400">
              System Initialization
            </span>

            <span className="font-semibold text-cyan-400">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-white/10">

            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500">

        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

        <span>
          Preparing immersive AI experience...
        </span>

      </div>

    </div>
  );
}

export default BootText;