function Background() {
  return (
    <>
      {/* Cyan Glow */}

      <div className="absolute -left-72 -top-56 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[220px]" />

      {/* Violet Glow */}

      <div className="absolute -right-72 top-20 h-[650px] w-[650px] rounded-full bg-violet-500/20 blur-[220px]" />

      {/* Blue Glow */}

      <div className="absolute bottom-[-320px] left-1/3 h-[550px] w-[550px] rounded-full bg-sky-500/15 blur-[220px]" />

      {/* Emerald Accent */}

      <div className="absolute left-1/2 top-[45%] h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-[160px]" />

      {/* Grid Overlay */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Noise Overlay */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </>
  );
}

export default Background;