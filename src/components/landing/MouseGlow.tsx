import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 20,
      }}
      className="pointer-events-none fixed z-0 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]"
    />
  );
}

export default MouseGlow;