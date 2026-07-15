import { Bot, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import ScrollIndicator from "./ScrollIndicator";
import Avatar from "../avatar/Avatar";

import { useAvatarStore } from "../../store/avatarStore";

function Hero() {
  const navigate = useNavigate();

  const {
    speak,
    stopSpeaking,
  } = useAvatarStore();

  function scrollToProjects() {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  function introduce() {
    speak(
      "Hello! I'm SudhiTwin. Welcome to my AI-powered portfolio. I'm here to answer questions about my projects, resume, technical skills and even conduct a live interview. Click Launch SudhiTwin to begin."
    );

    setTimeout(() => {
      stopSpeaking();
    }, 7000);
  }

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-10"
      id="hero"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-300 backdrop-blur-xl">

            <Bot size={16} />

            AI DIGITAL TWIN

          </div>

          <h1 className="mt-8 bg-gradient-to-r from-cyan-400 via-white to-violet-400 bg-clip-text text-8xl font-black tracking-tight text-transparent">

            SudhiTwin

          </h1>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-white">

            Interview Me

            <span className="block text-cyan-400">
              Before You Hire Me.
            </span>

          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-10 text-gray-400">

            SudhiTwin is my AI-powered digital twin designed to transform how
            recruiters explore my portfolio. Instead of reading static pages,
            interact with my AI, explore real-world projects, conduct interviews,
            and understand my engineering journey through intelligent
            conversations.

          </p>

          <div className="mt-12 flex flex-wrap gap-10">

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                20+
              </h3>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-cyan-400">
                AI
              </h3>

              <p className="mt-2 text-gray-400">
                Powered
              </p>

            </div>

          </div>

          <div className="mt-14 flex flex-wrap gap-5">

            <button
              onClick={() => navigate("/workspace")}
              className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-cyan-500 px-9 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]"
            >

              Launch SudhiTwin

              <Sparkles
                size={20}
                className="transition-transform duration-300 group-hover:rotate-12"
              />

            </button>

            <button
              onClick={scrollToProjects}
              className="rounded-2xl border border-cyan-400/20 px-9 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
            >

              Explore Projects

            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex justify-center">

          <button
            onClick={introduce}
            className="
              rounded-full
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
            "
          >
            <Avatar />
          </button>

        </div>

      </div>

      <ScrollIndicator />

    </section>
  );
}

export default Hero;