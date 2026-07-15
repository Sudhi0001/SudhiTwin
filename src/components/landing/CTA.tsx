import {
  ArrowRight,
  Bot,
  Download,
  GitBranch,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();

  return (
<section className="relative mt-48 flex justify-center px-8 py-40">      {/* Top Divider */}

      <div className="absolute left-1/2 top-0 h-px w-4/5 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Background Glow */}

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="h-[650px] w-[650px] rounded-full bg-cyan-500/10 blur-[220px]" />

      </div>

      <div className="relative w-full max-w-7xl overflow-hidden rounded-[42px] border border-cyan-400/20 bg-gradient-to-br from-[#07111f] via-[#0b1326] to-[#121a2f] p-20 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-2xl">

        {/* Decorative Rings */}

        <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full border border-cyan-400/10" />

        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full border border-cyan-400/10" />

        {/* Badge */}

        <div className="flex justify-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-300">

            <Bot size={18} />

            AI DIGITAL TWIN

          </div>

        </div>

        {/* Heading */}

        <h2 className="mt-10 text-center text-6xl font-black leading-tight text-white">

          Stop Reading.



          <span className="mt-3 block bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-transparent">

            Start Interacting.

          </span>

        </h2>

        {/* Description */}

        <p className="mx-auto mt-10 max-w-3xl text-center text-xl leading-10 text-gray-400">

          This isn't just another developer portfolio.

          SudhiTwin lets you explore my projects, ask technical questions,
          understand my engineering decisions, and even conduct a complete AI
          interview — all through an interactive digital twin.

        </p>

        {/* CTA */}

        <div className="mt-16 flex justify-center">

          <button
            onClick={() => navigate("/workspace")}
            className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(34,211,238,0.35)]"
          >

            <Sparkles size={20} />

            Launch SudhiTwin

            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />

          </button>

        </div>

        {/* Secondary Buttons */}

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="/resume.pdf"
            download
            className="rounded-xl border border-white/10 px-7 py-3 font-medium transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <div className="flex items-center gap-2">
              <Download size={18} />
              Resume
            </div>
          </a>

          <a
            href="https://github.com/Sudhi0001"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 px-7 py-3 font-medium transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <div className="flex items-center gap-2">
              <GitBranch size={18} />
              GitHub
            </div>
          </a>

        </div>

        {/* Stats */}

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 text-center md:grid-cols-3">

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              24/7
            </h3>

            <p className="mt-2 text-gray-400">
              AI Available
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              10+
            </h3>

            <p className="mt-2 text-gray-400">
              Featured Projects
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-cyan-400">
              ∞
            </h3>

            <p className="mt-2 text-gray-400">
              Curious Conversations
            </p>
          </div>

        </div>

        {/* Footer */}

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-sm tracking-wide text-gray-500">

          Designed & Developed by <span className="text-cyan-400 font-semibold">Sudheendra G K</span>

          <br />

          React • TypeScript • Tailwind CSS • Gemini AI • Zustand • Vite

        </div>

      </div>

    </section>
  );
}

export default CTA;