import { useEffect, useState } from "react";

const logs = [
  "[ OK ] Initializing AI Core...",
  "[ OK ] Loading Neural Memory...",
  "[ OK ] Importing Resume...",
  "[ OK ] Importing GitHub...",
  "[ OK ] Connecting Knowledge Base...",
  "[ OK ] SudhiTwin Ready."
];

function BootText() {
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      setVisibleLogs((prev) => [...prev, logs[current]]);
      current++;

      if (current === logs.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 w-[500px] rounded-xl border border-cyan-400/20 bg-black/40 p-6 font-mono text-sm text-cyan-400 backdrop-blur-lg">
      {visibleLogs.map((log, index) => (
        <p key={index} className="mb-2">
          {log}
        </p>
      ))}
    </div>
  );
}

export default BootText;