import {
  ArrowRight,
  Bot,
  Briefcase,
  FileText,
  Mic,
} from "lucide-react";

type Props = {
  onTalk: () => void;
  onInterview: () => void;
  onResume: () => void;
  onProjects: () => void;
};

const actions = [
  {
    title: "Talk to SudhiTwin",
    description:
      "Have a real conversation with my AI Digital Twin about my projects, skills, experience and career journey.",
    icon: Bot,
    color: "text-cyan-400",
    action: "talk",
  },
  {
    title: "Interview Me",
    description:
      "Launch an AI-powered technical or HR interview and evaluate my problem-solving and communication skills.",
    icon: Mic,
    color: "text-green-400",
    action: "interview",
  },
  {
    title: "View Resume",
    description:
      "Explore my education, technical skills, internships and professional experience.",
    icon: FileText,
    color: "text-yellow-400",
    action: "resume",
  },
  {
    title: "Explore Projects",
    description:
      "Dive into my featured projects and understand the engineering decisions behind each one.",
    icon: Briefcase,
    color: "text-violet-400",
    action: "projects",
  },
];

function QuickActions({
  onTalk,
  onInterview,
  onResume,
  onProjects,
}: Props) {
  function execute(action: string) {
    switch (action) {
      case "talk":
        onTalk();
        break;

      case "interview":
        onInterview();
        break;

      case "resume":
        onResume();
        break;

      case "projects":
        onProjects();
        break;
    }
  }

  return (
    <section className="relative mt-48 flex justify-center px-8 py-40" id="recruiter">
      <div className="mx-auto max-w-7xl px-8">

        {/* Heading */}

        <div className="mb-24 text-center">

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-semibold tracking-widest text-cyan-300">
            RECRUITER EXPERIENCE
          </span>

          <h2 className="mt-8 text-6xl font-bold text-white">
            Choose How
            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              You'd Like To Know Me
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            I believe portfolios should be interactive.
            Instead of simply reading about me, choose the experience
            that best fits your evaluation process.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-10 lg:grid-cols-2">

          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                onClick={() => execute(item.action)}
                className="group rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-10 text-left transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(34,211,238,0.12)]"
              >

                <div className="flex items-start justify-between">

                  <div>

                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/5">

                      <Icon
                        size={38}
                        className={item.color}
                      />

                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-md leading-8 text-gray-400">
                      {item.description}
                    </p>

                  </div>

                  <ArrowRight
                    size={28}
                    className="mt-3 text-cyan-400 transition-transform duration-300 group-hover:translate-x-2"
                  />

                </div>

              </button>
            );
          })}

        </div>
<br></br>
<br></br>
<br></br>
<br></br>
      </div>
    </section>

  );
}

export default QuickActions;