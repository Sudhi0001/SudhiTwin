import {
  Bot,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function scroll(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-8 py-6">

      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-3xl border border-cyan-400/10 bg-[#08101f]/70 px-8 py-4 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.05)]">

        {/* Logo */}

        <button
          onClick={() => scroll("hero")}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">

            <Bot
              size={22}
              className="text-cyan-400"
            />

          </div>

          <div>

            <h1 className="text-xl font-bold text-white">
              SudhiTwin
            </h1>

            <p className="text-xs tracking-widest text-cyan-400">
              AI DIGITAL TWIN
            </p>

          </div>

        </button>

        {/* Navigation */}

        <div className="hidden items-center gap-10 lg:flex">

          <button
            onClick={() => scroll("about")}
            className="text-gray-300 transition hover:text-cyan-400"
          >
            About
          </button>

          <button
            onClick={() => scroll("projects")}
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Projects
          </button>

          <button
            onClick={() => scroll("skills")}
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Skills
          </button>

          <button
            onClick={() => scroll("recruiter")}
            className="text-gray-300 transition hover:text-cyan-400"
          >
            Recruiter
          </button>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          {/* Status */}

          <div className="hidden items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 md:flex">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            AI Online

          </div>

          {/* CTA */}

          <button
            onClick={() => navigate("/workspace")}
            className="group flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
          >

            <Sparkles size={18} />

            Launch AI

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </button>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;