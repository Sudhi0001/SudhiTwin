import { useEffect, useState } from "react";
import {
  Bot,
  Cpu,
  Database,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import BootText from "./BootText";

type SplashScreenProps = {
  onFinish: () => void;
};

const steps = [
  {
    icon: Cpu,
    title: "Initializing Core",
    subtitle: "Booting SudhiTwin OS",
  },
  {
    icon: Database,
    title: "Loading Memory",
    subtitle: "Loading projects & experience",
  },
  {
    icon: BrainCircuit,
    title: "Synchronizing AI",
    subtitle: "Preparing Gemini Intelligence",
  },
  {
    icon: Sparkles,
    title: "Almost Ready",
    subtitle: "Optimizing recruiter experience",
  },
  {
    icon: Bot,
    title: "System Ready",
    subtitle: "Launching Workspace",
  },
];

function SplashScreen({
  onFinish,
}: SplashScreenProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < steps.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 900);

      return () => clearTimeout(timer);
    }

    const finish = setTimeout(() => {
      onFinish();
    }, 1200);

    return () => clearTimeout(finish);
  }, [index, onFinish]);

  const StepIcon = steps[index].icon;

  const progress =
    ((index + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#050816]">

      {/* Background */}

      <div className="absolute -left-52 -top-52 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[170px]" />

      <div className="absolute -right-52 top-24 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[170px]" />

      <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}

      <div className="relative flex h-full flex-col items-center justify-center px-6">

        {/* Logo */}

        <div className="mb-10 flex h-36 w-36 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-500/10 shadow-[0_0_80px_rgba(34,211,238,0.2)]">

          <StepIcon
            size={72}
            className="animate-pulse text-cyan-400"
          />

        </div>

        {/* Title */}

        <h1 className="bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-center text-6xl font-black text-transparent md:text-7xl">
          SudhiTwin
        </h1>

        <p className="mt-4 text-center text-lg tracking-[0.35em] text-cyan-300 uppercase">
          AI Operating System
        </p>

        {/* Current Step */}

        <div className="mt-14 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold text-white">
                {steps[index].title}
              </h2>

              <p className="mt-2 text-gray-400">
                {steps[index].subtitle}
              </p>

            </div>

            <div className="rounded-2xl bg-cyan-500/10 p-4">

              <StepIcon
                size={28}
                className="text-cyan-400"
              />

            </div>

          </div>

          {/* Progress */}

          <div className="mt-8">

            <div className="mb-3 flex justify-between text-sm text-gray-400">

              <span>
                Boot Progress
              </span>

              <span>
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

          {/* Boot Logs */}

          <div className="mt-8 rounded-2xl border border-white/10 bg-black/20 p-5">

            <BootText />

          </div>

        </div>

        {/* Status */}

        <div className="mt-10 flex items-center gap-3">

          <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

          <span className="text-sm tracking-widest text-green-400 uppercase">
            System Online
          </span>

        </div>

      </div>

    </div>
  );
}

export default SplashScreen;