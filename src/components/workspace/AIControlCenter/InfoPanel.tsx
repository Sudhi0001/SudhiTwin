import {
  BadgeCheck,
  CircleCheck,
  Code2,
  ExternalLink,
  GitBranch,
  Sparkles,
} from "lucide-react";

import { useWorkspaceStore } from "../../../store/workspaceStore";
import { getProject } from "../../../utils/getProject";

function InfoPanel() {
  const activePanel = useWorkspaceStore(
    (state) => state.activePanel
  );

  const project = getProject(activePanel);

  if (!project) {
    return (
      <div className="flex h-full items-center justify-center bg-[#08101f] text-gray-500">
        Select a project to explore.
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-[#08101f] p-6">

      {/* Context */}

      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
          Current Context
        </p>

        <h2 className="mt-3 text-2xl font-bold text-cyan-400">
          {project.title}
        </h2>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-sm text-gray-400">
            AI Confidence
          </span>

          <span className="font-semibold text-green-400">
            98%
          </span>

        </div>

      </div>

      {/* Image */}

      <img
        src={project.image}
        alt={project.title}
        className="mt-6 h-48 w-full rounded-2xl border border-white/10 object-cover"
      />

      {/* Overview */}

      <section className="mt-8">

        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">

          <Sparkles
            size={18}
            className="text-cyan-400"
          />

          Overview

        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {project.description}
        </p>

      </section>

      {/* Quick Facts */}

      <section className="mt-8">

        <h3 className="mb-4 text-lg font-semibold text-white">
          Quick Facts
        </h3>

        <div className="space-y-3">

          <div className="flex justify-between rounded-xl bg-white/5 p-4">

            <span className="text-gray-500">
              Role
            </span>

            <span className="text-white">
              {project.role}
            </span>

          </div>

          <div className="flex justify-between rounded-xl bg-white/5 p-4">

            <span className="text-gray-500">
              Status
            </span>

            <span className="text-green-400">
              {project.status}
            </span>

          </div>

          {project.projectType && (

            <div className="flex justify-between rounded-xl bg-white/5 p-4">

              <span className="text-gray-500">
                Type
              </span>

              <span className="text-cyan-300">
                {project.projectType}
              </span>

            </div>

          )}

        </div>

      </section>

      {/* Tech */}

      <section className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <Code2
            size={18}
            className="text-cyan-400"
          />

          <h3 className="font-semibold text-white">
            Technologies
          </h3>

        </div>

        <div className="flex flex-wrap gap-2">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300"
            >
              {tech}
            </span>

          ))}

        </div>

      </section>

      {/* Features */}

      <section className="mt-8">

        <div className="mb-4 flex items-center gap-2">

          <BadgeCheck
            size={18}
            className="text-green-400"
          />

          <h3 className="font-semibold text-white">
            Highlights
          </h3>

        </div>

        <div className="space-y-3">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="flex items-center gap-3 rounded-xl bg-white/5 p-4"
            >

              <CircleCheck
                size={16}
                className="text-green-400"
              />

              <span className="text-gray-300">
                {feature}
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* Actions */}

      <div className="mt-10 flex gap-3">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:scale-105"
        >

          <GitBranch size={18} />

          GitHub

        </a>

        {project.demo && (

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-cyan-400 py-3 transition hover:bg-cyan-400/10"
          >

            <ExternalLink size={18} />

            Demo

          </a>

        )}

      </div>

    </div>
  );
}

export default InfoPanel;