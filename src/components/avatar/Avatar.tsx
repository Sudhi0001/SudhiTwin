import { useContextStore } from "../../contexts/contextStore";
import { useInterviewStore } from "../../store/interviewStore";
import { useAvatarStore } from "../../store/avatarStore";

import AvatarImage from "./AvatarImage";
import AvatarInfo from "./AvatarInfo";
import AvatarParticles from "./AvatarParticles";
import AvatarRings from "./AvatarRings";

function Avatar() {
  const { aiMode } = useContextStore();
  const { isInterviewActive } = useInterviewStore();

  const {
    state,
    message,
    isTalking,
  } = useAvatarStore();

  return (
    <div
      className="
        relative
        flex
        flex-col
        items-center
        transition-all
        duration-300
      "
    >

      {/* Speech Bubble */}

      {isTalking && (
        <div
          className="
            absolute
            -top-16
            z-50
            max-w-md
            rounded-3xl
            border
            border-cyan-400/20
            bg-[#08101f]/95
            px-6
            py-5
            text-center
            text-sm
            leading-7
            text-white
            backdrop-blur-xl
            shadow-[0_0_35px_rgba(34,211,238,.15)]
            animate-fade-in
          "
        >

          {message}

          {/* Bubble Arrow */}

          <div
            className="
              absolute
              left-1/2
              top-full
              h-4
              w-4
              -translate-x-1/2
              -translate-y-2
              rotate-45
              border-b
              border-r
              border-cyan-400/20
              bg-[#08101f]
            "
          />

        </div>
      )}

      {/* Avatar Area */}

      <div
        className="
          relative
          flex
          h-[520px]
          w-[520px]
          items-center
          justify-center
          overflow-hidden
          rounded-full
        "
      >

        {/* Background Glow */}

        <div
          className="
            absolute
            h-[430px]
            w-[430px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
          "
        />

        {/* Animated Rings */}

        <AvatarRings state={state} />

        {/* Avatar */}

        <AvatarImage state={state} />

        {/* Particles */}

        <AvatarParticles />

      </div>

      {/* Information */}

      <AvatarInfo
        state={state}
        aiMode={aiMode}
        isInterviewActive={isInterviewActive}
      />

    </div>
  );
}

export default Avatar;