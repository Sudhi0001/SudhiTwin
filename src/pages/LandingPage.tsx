import { useNavigate } from "react-router-dom";

import Background from "../components/landing/Background";
import MouseGlow from "../components/landing/MouseGlow";
import Navbar from "../components/landing/Navbar";

import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Projects from "../components/landing/Projects";
import TechStack from "../components/landing/TechStack";
import QuickActions from "../components/landing/QuickActions";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

import FadeIn from "../components/common/FadeIn";

import { useNavigationStore } from "../store/navigationStore";

function LandingPage() {
  const navigate = useNavigate();
  const { setLandingAction } = useNavigationStore();

  function launchWorkspace(
    action: "chat" | "interview" | "resume" | "projects"
  ) {
    setLandingAction(action);
    navigate("/workspace");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Effects */}

      <Background />
      <MouseGlow />

      {/* Navigation */}

      <Navbar />

      {/* Hero */}

      <FadeIn>
        <Hero />
      </FadeIn>

      {/* About */}

      <FadeIn delay={0.1}>
        <About />
      </FadeIn>

      {/* Projects */}

      <FadeIn delay={0.2}>
        <Projects />
      </FadeIn>

      {/* Tech Stack */}

      <FadeIn delay={0.3}>
        <TechStack />
      </FadeIn>

      {/* Quick Launch */}

      <FadeIn delay={0.4}>
        <QuickActions
          onTalk={() => launchWorkspace("chat")}
          onInterview={() => launchWorkspace("interview")}
          onResume={() => launchWorkspace("resume")}
          onProjects={() => launchWorkspace("projects")}
        />
      </FadeIn>

      {/* CTA */}

      <FadeIn delay={0.5}>
        <CTA />
      </FadeIn>

      {/* Footer */}

      <Footer />

    </main>
  );
}

export default LandingPage;