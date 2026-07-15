import Avatar from "../../avatar/Avatar";
import { useAvatarStore } from "../../../store/avatarStore";

function AvatarPanel() {
  const { state } = useAvatarStore();

  const stateInfo = {
    greeting: {
      title: "Greeting User",
      color: "text-cyan-300",
      activity: 100,
    },
    neutral: {
      title: "Standing By",
      color: "text-cyan-300",
      activity: 92,
    },
    thinking: {
      title: "Analyzing Request",
      color: "text-yellow-300",
      activity: 78,
    },
    talking: {
      title: "Generating Response",
      color: "text-blue-300",
      activity: 88,
    },
    listening: {
      title: "Listening...",
      color: "text-emerald-300",
      activity: 96,
    },
    happy: {
      title: "Interaction Successful",
      color: "text-pink-300",
      activity: 100,
    },
    confused: {
      title: "Need More Information",
      color: "text-orange-300",
      activity: 45,
    },
  };

  const current = stateInfo[state];

  return (
    <div className="flex h-full flex-col bg-[#0b1120]">

      {/* Header */}

      <div className="border-b border-white/10 px-6 py-5">

        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
          AI CONTROL CENTER
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          SudhiTwin AI
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Digital Engineering Twin
        </p>

      </div>

      {/* Avatar */}

      <div className="flex flex-1 flex-col items-center justify-center px-6 py-6">

        <Avatar />

        <div className="mt-6 flex items-center gap-3 rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2">

          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

          <span className="text-sm font-semibold text-green-300">
            ONLINE
          </span>

        </div>

        <h3 className={`mt-6 text-xl font-semibold ${current.color}`}>
          {current.title}
        </h3>

        <p className="mt-3 max-w-xs text-center text-sm leading-7 text-gray-400">
          Your intelligent engineering assistant capable of explaining
          projects, conducting interviews and showcasing technical skills.
        </p>

      </div>

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Neural Activity */}

      <div className="px-6 py-5">

        <div className="mb-3 flex items-center justify-between">

          <span className="text-sm text-gray-400">
            Neural Activity
          </span>

          <span className="font-semibold text-cyan-300">
            {current.activity}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">

          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-violet-400 transition-all duration-700"
            style={{
              width: `${current.activity}%`,
            }}
          />

        </div>

      </div>

      {/* Divider */}

      <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

      {/* AI Metrics */}

      <div className="grid grid-cols-2 gap-4 p-6">

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Voice
          </p>

          <p className="mt-2 font-semibold text-green-300">
            Active
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Memory
          </p>

          <p className="mt-2 font-semibold text-cyan-300">
            Indexed
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Projects
          </p>

          <p className="mt-2 font-semibold text-green-300">
            Loaded
          </p>

        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">

          <p className="text-xs uppercase tracking-widest text-gray-500">
            Interview
          </p>

          <p className="mt-2 font-semibold text-cyan-300">
            Ready
          </p>

        </div>

      </div>

    </div>
  );
}

export default AvatarPanel;