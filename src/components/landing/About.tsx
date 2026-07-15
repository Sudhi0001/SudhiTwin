import {
  Briefcase,
  BrainCircuit,
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
} from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Started My Development Journey",
    description:
      "Began learning web development, programming fundamentals and UI design.",
    icon: Code2,
  },
  {
    year: "2024",
    title: "BEL Internship",
    description:
      "Built an AI-powered Text Summarization system using Transformer models.",
    icon: GraduationCap,
  },
  {
    year: "2025",
    title: "Freelancing",
    description:
      "Designed and developed production-ready websites for real clients.",
    icon: Briefcase,
  },
  {
    year: "Now",
    title: "Building SudhiTwin",
    description:
      "Creating an AI-powered digital twin that transforms the recruitment experience.",
    icon: Rocket,
  },
];

const skills = [
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "MongoDB",
  "AI Integration",
  "UI / UX",
  "Problem Solving",
];

function About() {
  return (
    <section
      id="about"
      className="mb-24 text-center"
    >
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-24 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-300">

            <Sparkles size={16} />

            THE ENGINEER BEHIND SUDHITWIN

          </div>

          <h2 className="mt-8 text-6xl font-bold leading-tight text-white">

            Building Software

            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              That Solves Real Problems
            </span>

          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-400">

            I'm <span className="font-semibold text-white">Sudheendra</span>,
            a Full Stack Developer passionate about building AI-powered
            products, modern web applications, and meaningful user
            experiences. I believe software should solve real-world
            problems—not just demonstrate technical skills.

          </p>

        </div>

        <div className="grid gap-20 lg:grid-cols-2">

          {/* Timeline */}

          <div>

            <h3 className="mb-10 text-3xl font-bold text-white">
              My Journey
            </h3>

            <div className="relative border-l border-cyan-400/20 pl-10">

              {timeline.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="relative mb-12"
                  >

                    <div className="absolute -left-[52px] flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10">

                      <Icon
                        size={18}
                        className="text-cyan-400"
                      />

                    </div>

                    <p className="text-sm font-semibold tracking-[0.2em] text-cyan-400">
                      {item.year}
                    </p>

                    <h4 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 leading-7 text-gray-400">
                      {item.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 backdrop-blur-xl">

              <div className="mb-6 flex items-center gap-3">

                <BrainCircuit
                  size={28}
                  className="text-cyan-400"
                />

                <h3 className="text-2xl font-bold text-white">
                  What I Focus On
                </h3>

              </div>

              <p className="leading-8 text-gray-400">

                Rather than building isolated projects, I enjoy creating
                scalable software products with clean architecture,
                intuitive user experiences, and practical AI integration.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">

              <h3 className="mb-6 text-2xl font-bold text-white">
                Core Expertise
              </h3>

              <div className="flex flex-wrap gap-3">

                {skills.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-8">

              <h3 className="text-2xl font-bold text-white">
                My Goal
              </h3>

              <p className="mt-5 leading-8 text-gray-300">

                Build products that people genuinely enjoy using,
                continuously learn modern technologies, and contribute
                meaningful solutions through software engineering and AI.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;