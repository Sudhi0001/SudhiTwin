import type { AvatarState } from "../../store/avatarStore";

type Props = {
  state: AvatarState;
};

function AvatarRings({ state }: Props) {
  const colors = {
    greeting: "border-cyan-400/40",
    neutral: "border-cyan-400/30",
    thinking: "border-yellow-400/40",
    talking: "border-blue-400/40",
    listening: "border-emerald-400/40",
    happy: "border-pink-400/40",
    confused: "border-orange-400/40",
  };

  const ring = colors[state];

  return (
    <>
      {/* OUTER RING */}

      <div
        className={`
          absolute
          h-[500px]
          w-[500px]
          rounded-full
          border
          ${ring}
          rotate-slow
          opacity-60
        `}
      />

      {/* MIDDLE RING */}

      <div
        className={`
          absolute
          h-[445px]
          w-[445px]
          rounded-full
          border-2
          border-dashed
          ${ring}
          rotate-reverse
          opacity-70
        `}
      />

      {/* INNER RING */}

      <div
        className={`
          absolute
          h-[385px]
          w-[385px]
          rounded-full
          border
          ${ring}
          rotate-slow
        `}
      />

      {/* Orbit Dots */}

      <div className="absolute h-[500px] w-[500px] rotate-slow">

        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />

        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_18px_rgba(168,85,247,.8)]" />

      </div>

      <div className="absolute h-[445px] w-[445px] rotate-reverse">

        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,.7)]" />

        <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />

      </div>

      {/* AI Halo */}

      <div
        className="
          absolute
          h-[335px]
          w-[335px]
          rounded-full
          bg-cyan-400/5
          blur-2xl
        "
      />

      {/* Scanner Ring */}

      <div
        className="
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          border
          border-cyan-400/10
        "
      />
    </>
  );
}

export default AvatarRings;