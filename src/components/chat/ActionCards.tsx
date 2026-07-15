import { ArrowUpRight, Sparkles } from "lucide-react";

import { actions } from "../../data/actions";
import { getProject } from "../../utils/getProject";
import { useWorkspaceStore } from "../../store/workspaceStore";

type Props = {
  projectId: string;
};

function ActionCards({ projectId }: Props) {
  const setActivePanel = useWorkspaceStore(
    (state) => state.setActivePanel
  );

  const project = getProject(projectId);
  const cards = actions[projectId];

  if (!cards) return null;

  function handleAction(type: string) {
    switch (type) {
      case "project":
      case "architecture":
        setActivePanel(
          projectId as Parameters<
            typeof setActivePanel
          >[0]
        );
        break;

      case "github":
        if (project?.github) {
          window.open(project.github, "_blank");
        }
        break;

      case "demo":
        if (project?.demo) {
          window.open(project.demo, "_blank");
        }
        break;
    }
  }

  return (
    <div className="mt-6">

      {/* Heading */}

      <div className="mb-3 flex items-center gap-2">

        <Sparkles
          size={16}
          className="text-cyan-400"
        />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Quick Resources
        </span>

      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-2">

        {cards.map((card) => (

          <button
            key={card.label}
            onClick={() => handleAction(card.type)}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-sm
              text-gray-300
              transition-all
              duration-300
              hover:border-cyan-400/40
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >

            <span className="text-base">
              {card.icon}
            </span>

            <span>
              {card.label}
            </span>

            <ArrowUpRight
              size={14}
              className="
                opacity-0
                -translate-x-1
                transition-all
                duration-300
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            />

          </button>

        ))}

      </div>

    </div>
  );
}

export default ActionCards;