import {
  ArrowRight,
  GitBranch,
  ExternalLink,
} from "lucide-react";

import { projects } from "../../data/projects";

function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="relative mt-48 flex justify-center px-8 py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-24 text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-300">
            FEATURED PROJECTS
          </span>

          <h2 className="mt-8 text-6xl font-bold leading-tight text-white">

            Engineering
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Real World Solutions
            </span>

          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Every project started with a real problem. Instead of building
            tutorials, I focused on creating software that solves practical
            challenges while improving my engineering skills.
          </p>

        </div>

        {/* Projects */}

        <div className="space-y-24">

          {featuredProjects.map((project, index) => (

            <div
              key={project.id}
              className={`
                grid
                items-center
                gap-16
                lg:grid-cols-2
                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >

              {/* Image */}

              <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div>

                <div className="mb-5 flex items-center gap-3">

                  <span
                    className={`rounded-full px-4 py-1 text-sm font-semibold ${
                      project.status === "Completed"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-cyan-500/10 text-cyan-400"
                    }`}
                  >
                    {project.status}
                  </span>

                  {project.projectType && (

                    <span className="rounded-full bg-violet-500/10 px-4 py-1 text-sm text-violet-300">
                      {project.projectType}
                    </span>

                  )}

                </div>

                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-xl text-cyan-300">
                  {project.subtitle}
                </p>

                <p className="mt-8 leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Role */}

                <div className="mt-8">

                  <h4 className="text-sm uppercase tracking-[0.25em] text-gray-500">
                    Role
                  </h4>

                  <p className="mt-2 text-white">
                    {project.role}
                  </p>

                </div>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:border-cyan-400 hover:bg-cyan-400/10"
                  >
                    <GitBranch size={18} />

                    GitHub

                  </a>

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:scale-105"
                    >
                      <ExternalLink size={18} />

                      Live Demo

                    </a>

                  )}

                  <button
                    className="group flex items-center gap-2 text-cyan-400"
                  >
                    Case Study

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center">

          <p className="text-gray-400">
            More projects available inside SudhiTwin Workspace.
          </p>

          <button className="mt-6 rounded-2xl border border-cyan-400/20 px-8 py-4 font-semibold text-cyan-300 transition hover:bg-cyan-400/10">
            Explore All Projects
          </button>

        </div>

      </div>
    </section>
  );
}

export default Projects;