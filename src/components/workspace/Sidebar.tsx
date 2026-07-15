import {
  Brain,
  ChevronDown,
  ChevronRight,
  FileCode2,
  FileText,
  FolderKanban,
  Mail,
  MessageSquare,
  Mic,
} from "lucide-react";

import { projects } from "../../data/projects";
import { useWorkspaceStore } from "../../store/workspaceStore";

function Sidebar() {
  const {
    activePanel,
    setActivePanel,
    expandedProjects,
    toggleProjects,
  } = useWorkspaceStore();

  return (
    <aside className="flex h-full flex-col bg-[#08101f]">

      {/* Logo */}

      <div className="border-b border-white/10 p-6">

        <h2 className="text-xl font-bold text-cyan-400">
          SudhiTwin
        </h2>

        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gray-500">
          AI Workspace
        </p>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">

        {/* AI */}

        <div>

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            AI
          </p>

          <button
            onClick={() => setActivePanel("chat")}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              activePanel === "chat"
                ? "bg-cyan-500/15 text-cyan-300"
                : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            <MessageSquare size={20} />
            <span>AI Chat</span>
          </button>

          <button
            onClick={() => setActivePanel("interview")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              activePanel === "interview"
                ? "bg-cyan-500/15 text-cyan-300"
                : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            <Mic size={20} />
            <span>Interview</span>
          </button>

        </div>

        {/* Profile */}

        <div className="mt-8">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Profile
          </p>

          <button
            onClick={() => setActivePanel("resume")}
            className={`mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              activePanel === "resume"
                ? "bg-cyan-500/15 text-cyan-300"
                : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            <FileText size={20} />
            Resume
          </button>

          <button
            onClick={() => setActivePanel("skills")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              activePanel === "skills"
                ? "bg-cyan-500/15 text-cyan-300"
                : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            <Brain size={20} />
            Skills
          </button>

        </div>

        {/* Projects */}

        <div className="mt-8">

          <button
            onClick={toggleProjects}
            className="flex w-full items-center justify-between rounded-xl px-2 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500 hover:text-cyan-400"
          >

            <div className="flex items-center gap-2">

              <FolderKanban size={18} />

              Projects

            </div>

            {expandedProjects ? (
              <ChevronDown size={18} />
            ) : (
              <ChevronRight size={18} />
            )}

          </button>

          {expandedProjects && (

            <div className="mt-3 ml-3 border-l border-cyan-500/20 pl-4">

              {projects.map((project) => (

                <button
                  key={project.id}
                  onClick={() => setActivePanel(project.id)}
                  className={`mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    activePanel === project.id
                      ? "bg-cyan-500/15 text-cyan-300"
                      : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
                  }`}
                >

                  <FileCode2 size={16} />

                  <span>{project.title}</span>

                </button>

              ))}

            </div>

          )}

        </div>

        {/* Contact */}

        <div className="mt-8">

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Contact
          </p>

          <button
            onClick={() => setActivePanel("contact")}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition-all ${
              activePanel === "contact"
                ? "bg-cyan-500/15 text-cyan-300"
                : "text-gray-400 hover:bg-white/5 hover:text-cyan-300"
            }`}
          >
            <Mail size={20} />
            Contact
          </button>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">

          <div className="flex items-center gap-2">

            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

            <span className="text-sm font-semibold text-green-400">
              SudhiTwin Online
            </span>

          </div>

          <p className="mt-3 text-xs leading-6 text-gray-400">
            AI model initialized and ready to answer questions,
            explain projects and conduct technical interviews.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;