import {
  GitBranch,
  Link,
  Mail,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="relative border-t border-white/10 bg-[#040712]">

      <div className="mx-auto max-w-7xl px-8 py-20">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Left */}

          <div>

            <h2 className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-4xl font-black text-transparent">
              SudhiTwin
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-gray-400">

              An AI-powered digital twin built to redefine
              how recruiters explore portfolios,
              evaluate projects, and conduct technical interviews.

            </p>

          </div>

          {/* Middle */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="space-y-4">

              <button
                onClick={scrollTop}
                className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
              >
                Home
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
              >
                Projects
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("skills")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="flex items-center gap-2 text-gray-400 transition hover:text-cyan-400"
              >
                Skills
              </button>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://github.com/Sudhi0001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <GitBranch size={18} />

                GitHub

                <ArrowUpRight size={15} />

              </a>

              <a
                href="https://linkedin.com/in/sudheendra-g-k027"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <Link size={18} />

                LinkedIn

                <ArrowUpRight size={15} />

              </a>

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-3 text-gray-400 transition hover:text-cyan-400"
              >

                <Mail size={18} />

                Email

              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-500 md:flex-row">

          <p>
            © 2026 <span className="text-cyan-400">SudhiTwin</span>. All Rights Reserved.
          </p>

          <p>
            Built with React • TypeScript • Tailwind • Zustand • Gemini AI
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;