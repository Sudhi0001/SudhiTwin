type Particle = {
  size: number;
  left: string;
  top: string;
  delay: string;
  duration: string;
  opacity: number;
};

const particles: Particle[] = [
  { size: 8, left: "8%", top: "12%", delay: "0s", duration: "5s", opacity: 0.8 },
  { size: 6, left: "18%", top: "28%", delay: "1s", duration: "6s", opacity: 0.6 },
  { size: 10, left: "82%", top: "18%", delay: "2s", duration: "7s", opacity: 0.9 },
  { size: 7, left: "88%", top: "38%", delay: "1.5s", duration: "5.5s", opacity: 0.7 },
  { size: 12, left: "12%", top: "72%", delay: "0.5s", duration: "8s", opacity: 0.8 },
  { size: 8, left: "82%", top: "76%", delay: "3s", duration: "6.5s", opacity: 0.6 },
  { size: 9, left: "45%", top: "5%", delay: "2.5s", duration: "7.5s", opacity: 0.9 },
  { size: 7, left: "48%", top: "92%", delay: "4s", duration: "5s", opacity: 0.7 },
  { size: 6, left: "28%", top: "48%", delay: "3.5s", duration: "6.5s", opacity: 0.6 },
  { size: 10, left: "72%", top: "58%", delay: "2s", duration: "7s", opacity: 0.8 },
  { size: 5, left: "60%", top: "28%", delay: "5s", duration: "6s", opacity: 0.5 },
  { size: 8, left: "34%", top: "82%", delay: "1s", duration: "8s", opacity: 0.8 },
];

function AvatarParticles() {
  return (
    <>
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,.9)] animate-float"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top,
            opacity: particle.opacity,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </>
  );
}

export default AvatarParticles;