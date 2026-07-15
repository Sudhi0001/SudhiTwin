import {
  Briefcase,
  FileText,
  GitBranch,
  Brain,
  Mic,
  FolderOpen,
} from "lucide-react";

type Props = {
  onPromptClick: (prompt: string) => void;
};

const prompts = [
  {
    icon: Briefcase,
    label: "IntelliHire",
    prompt: "Tell me about IntelliHire",
  },
  {
    icon: FolderOpen,
    label: "Projects",
    prompt: "Show all projects",
  },
  {
    icon: FileText,
    label: "Resume",
    prompt: "Show Resume",
  },
  {
    icon: Brain,
    label: "Skills",
    prompt: "What are your technical skills?",
  },
  {
    icon: Mic,
    label: "Interview",
    prompt: "Start a technical interview",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    prompt: "Open GitHub",
  },
];

function SuggestedPrompts({
  onPromptClick,
}: Props) {
  return (
    <div className="mt-5">

      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
        Quick Actions
      </p>

      <div className="flex flex-wrap gap-3">

        {prompts.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() => onPromptClick(item.prompt)}
              className="
                flex items-center gap-2
                rounded-full
                border border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-gray-300
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-300
              "
            >
              <Icon size={16} />

              {item.label}
            </button>
          );
        })}

      </div>

    </div>
  );
}

export default SuggestedPrompts;