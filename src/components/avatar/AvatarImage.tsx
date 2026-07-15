import { useEffect, useRef, useState } from "react";
import { getAvatar } from "./AvatarStates";
import type { AvatarState } from "../../store/avatarStore";

type Props = {
  state: AvatarState;
};

function AvatarImage({ state }: Props) {
  const [currentImage, setCurrentImage] = useState(getAvatar(state));
  const [visible, setVisible] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    setVisible(false);

    const timer = setTimeout(() => {
      setCurrentImage(getAvatar(state));
      setVisible(true);
    }, 180);

    return () => clearTimeout(timer);
  }, [state]);

  const glow = {
    greeting: "drop-shadow-[0_0_40px_rgba(34,211,238,.45)]",
    neutral: "drop-shadow-[0_0_35px_rgba(34,211,238,.35)]",
    thinking: "drop-shadow-[0_0_45px_rgba(250,204,21,.45)]",
    talking: "drop-shadow-[0_0_45px_rgba(96,165,250,.45)]",
    listening: "drop-shadow-[0_0_45px_rgba(16,185,129,.45)]",
    happy: "drop-shadow-[0_0_45px_rgba(236,72,153,.45)]",
    confused: "drop-shadow-[0_0_45px_rgba(249,115,22,.45)]",
  };

  const animation = {
    greeting: "animate-avatar",
    neutral: "animate-avatar",
    thinking: "animate-thinking",
    talking: "animate-glow",
    listening: "animate-listening",
    happy: "animate-avatar",
    confused: "animate-thinking",
  };

  return (
    <div className="relative z-30">

      {/* Background Aura */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[300px]
          w-[300px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

      {/* Avatar */}

      <img
        src={currentImage}
        alt="SudhiTwin"
        draggable={false}
        className={`
          relative
          h-[320px]
          w-[320px]
          rounded-full
          object-cover
          select-none
          transition-all
          duration-500
          ${glow[state]}
          ${animation[state]}
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
        `}
      />

      {/* Scan Line */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-full
          w-full
          overflow-hidden
          rounded-full
        "
      >
        <div
          className="
            absolute
            left-0
            top-0
            h-[2px]
            w-full
            animate-pulse
            bg-cyan-300/30
          "
        />
      </div>

    </div>
  );
}

export default AvatarImage;