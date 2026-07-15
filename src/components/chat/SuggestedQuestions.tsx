import { ArrowUpRight, MessageCircleMore } from "lucide-react";

import { suggestions } from "../../data/suggestions";

type Props = {
  projectId?: string;
  onQuestionClick: (question: string) => void;
};

function SuggestedQuestions({
  projectId,
  onQuestionClick,
}: Props) {
  const questions =
    suggestions[projectId ?? "general"] ??
    suggestions.general;

  return (
    <div className="mt-6">

      {/* Heading */}

      <div className="mb-3 flex items-center gap-2">

        <MessageCircleMore
          size={16}
          className="text-cyan-400"
        />

        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
          Continue Asking
        </span>

      </div>

      {/* Suggestions */}

      <div className="flex flex-wrap gap-2">

        {questions.map((question) => (

          <button
            key={question}
            onClick={() => onQuestionClick(question)}
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

            <span className="max-w-[240px] truncate">
              {question}
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

export default SuggestedQuestions;