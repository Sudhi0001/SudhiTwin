import {
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    level: 95,
    color: "from-cyan-400 to-blue-500",
    tech: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
    ],
  },

  {
    title: "Backend",
    level: 90,
    color: "from-green-400 to-emerald-500",
    tech: [
      { name: "Python", icon: <FaPython className="text-green-400" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-300" /> },
      { name: "Java", icon: <FaJava className="text-orange-400" /> },
    ],
  },

  {
    title: "Database",
    level: 88,
    color: "from-green-500 to-cyan-500",
    tech: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-sky-400" /> },
    ],
  },

  {
    title: "Developer Tools",
    level: 90,
    color: "from-violet-500 to-cyan-500",
    tech: [
      { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-sky-500" /> },
    ],
  },
];

function TechStack() {
  return (
    <section
      id="skills"
      className="mb-24 text-center"
    >
      <div className="mb-24 text-center">

        {/* Heading */}

        <div className="mb-24 text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-300">
            TECH STACK
          </span>

          <h2 className="mt-8 text-6xl font-bold text-white">

            Technologies I
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Build With
            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">

            Modern technologies, scalable architectures,
            and AI-powered development.

          </p>

        </div>

        {/* Categories */}

        <div className="grid gap-8 md:grid-cols-2">

          {categories.map((category) => (

            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,.12)]"
            >

              {/* Header */}

              <div className="mb-6 flex items-center justify-between">

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

                <span className="font-semibold text-cyan-400">
                  {category.level}%
                </span>

              </div>

              {/* Progress */}

              <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">

                <div
                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                  style={{
                    width: `${category.level}%`,
                  }}
                />

              </div>

              {/* Skills */}

              <div className="grid gap-4">

                {category.tech.map((skill) => (

                  <div
                    key={skill.name}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 transition hover:border-cyan-400/20 hover:bg-cyan-400/5"
                  >

                    <div className="flex items-center gap-3">

                      <div className="text-2xl">
                        {skill.icon}
                      </div>

                      <span className="font-medium text-white">
                        {skill.name}
                      </span>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default TechStack;