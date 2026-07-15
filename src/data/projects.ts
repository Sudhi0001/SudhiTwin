// =============================
// IMPORTS
// =============================

import intellihire from "../assets/projects/intellihire.png";
import mindsync from "../assets/projects/mindsync.png";
import algoarena from "../assets/projects/algoarena.png";
import bel from "../assets/projects/bel.png";
import freejunx from "../assets/projects/freejunx.png";
import foodhub from "../assets/projects/foodhub.png";
import carmania from "../assets/projects/carmania.png";
import radiantbites from "../assets/projects/radiant-bites.png";

// =============================
// INTERFACE
// =============================

export interface Project {
  id: string;

  title: string;

  subtitle: string;

  image: string;

  description: string;

  problem: string;

  solution: string;

  role: string;

  status: "Completed" | "In Progress";

  technologies: string[];

  features: string[];

  github: string;

  demo: string;

  projectType?: string;

  confidential?: boolean;
}

// =============================
// PROJECTS
// =============================

export const projects: Project[] = [
      {
    id: "intellihire",

    title: "IntelliHire",

    subtitle: "AI-Powered Placement Preparation Platform",

    image: intellihire,

    description:
      "An AI-powered placement preparation platform that integrates coding practice, aptitude assessments, resume analysis, AI mock interviews, career mentorship, and personalized progress tracking into one intelligent ecosystem.",

    problem:
      "Students often rely on multiple disconnected platforms for placement preparation, making it difficult to track progress and receive personalized guidance.",

    solution:
      "Developed a centralized AI-powered platform that combines coding practice, aptitude tests, resume analysis, mock interviews, and career planning into a single seamless experience.",

    role: "Full Stack Developer",

    status: "In Progress",

    technologies: [
      "React.js",
      "Tailwind CSS",
      "FastAPI",
      "Python",
      "MongoDB",
      "Gemini AI",
      "JWT",
    ],

    features: [
      "AI Career Mentor",
      "AI Mock Interviews",
      "Resume Analyzer",
      "Coding Practice Platform",
      "Aptitude Assessment System",
      "Progress Tracking Dashboard",
    ],

    github: "https://github.com/Sudhi0001/IntelliHire2",

    demo: "https://github.com/Sudhi0001/IntelliHire2",
  },
    {
    id: "mindsync",

    title: "MindSync",

    subtitle: "AI-Powered Student Learning Platform",

    image: mindsync,

    description:
      "MindSync is an AI-powered student learning platform that simplifies concept learning through intelligent assistance, organized study resources, mock tests, and productivity tools. It provides a centralized ecosystem where students can learn, practice, and receive instant AI-powered guidance.",

    problem:
      "Students often struggle because learning resources are scattered across multiple platforms, making studying unstructured and confusing. Traditional systems also lack personalized guidance and instant doubt resolution.",

    solution:
      "Developed a scalable AI-powered learning ecosystem that combines smart notes, AI assistance, organized learning resources, mock tests, and guided study workflows into one platform, creating a more engaging and efficient learning experience.",

    role: "Full Stack Developer & AI Integrator",

    status: "Completed",

    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "AI APIs",
    ],

    features: [
      "AI-Powered Learning Assistant",
      "Instant Doubt Clarification",
      "Concept-Based Learning",
      "Smart Notes Management",
      "Interactive Mock Tests",
      "Student Productivity Dashboard",
    ],

    github: "https://github.com/Sudhi0001/MindSync",

    demo: "https://github.com/Sudhi0001/MindSync",
  },
  {
  id: "algoarena",

  title: "AlgoArena",

  subtitle: "Gamified DSA Learning Platform",

  image: algoarena,

  description:
    "AlgoArena is a gamified Data Structures & Algorithms learning platform that transforms traditional coding practice into an engaging experience through XP progression, quizzes, analytics dashboards, and interactive learning workflows.",

  problem:
    "Traditional DSA learning platforms often become repetitive and demotivating due to static interfaces, lack of progress tracking, and minimal engagement.",

  solution:
    "Developed a modern gamified learning platform featuring XP progression, analytics dashboards, interactive quizzes, and visual performance tracking to create a more engaging learning experience.",

  role: "Frontend Developer & Product Designer",

  status: "Completed",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Chart.js",
    "Responsive UI",
  ],

  features: [
    "XP-Based Progress Tracking",
    "Interactive DSA Quizzes",
    "Analytics Dashboard",
    "Gamified Learning",
    "Performance Visualization",
    "Instant Feedback",
  ],

  github: "https://github.com/Sudhi0001/AlgoArena",

  demo: "https://sudhi0001.github.io/AlgoArena/",
},{
  id: "textsummarizer",

  title: "AI Text Summarizer",

  subtitle: "BEL Internship Project",

  image: bel,

  description:
    "Developed an AI-powered text summarization system during my internship at Bharat Electronics Limited (BEL) using transformer-based NLP models with both online and offline execution.",

  problem:
    "Organizations handling large volumes of documents require faster summarization while maintaining data confidentiality.",

  solution:
    "Built a secure transformer-based summarization system supporting both online and offline inference with an intuitive web interface.",

  role: "AI & Full Stack Developer",

  status: "Completed",

  technologies: [
    "Python",
    "Flask",
    "BERT",
    "Transformers",
    "HTML",
    "CSS",
    "JavaScript",
  ],

  features: [
    "AI Text Summarization",
    "Online & Offline Modes",
    "Secure Local Processing",
    "Document Processing",
    "Web Interface",
    "Executable Deployment",
  ],

  github: "https://github.com/Sudhi0001/text_summarizer",

  demo: "",

  confidential: true,
},{
  id: "freejunx",

  title: "FREEJUNX",

  subtitle: "Freelance Food Brand Website",

  image: freejunx,

  description:
    "Developed a premium marketing website for FREEJUNX with agency-level UI/UX, responsive layouts, animations, SEO optimization, and conversion-focused design.",

  problem:
    "The client required a premium digital presence that reflected the brand identity while remaining responsive and visually engaging.",

  solution:
    "Designed and developed a responsive marketing website with modern UI/UX, smooth animations, optimized performance, and conversion-focused user experience.",

  role: "Freelance Frontend Developer & UI/UX Designer",

  status: "Completed",

  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design",
    "AOS",
    "SEO",
  ],

  features: [
    "Premium UI/UX",
    "Responsive Design",
    "Interactive Components",
    "Custom Animations",
    "SEO Optimized",
    "Brand-Focused Layout",
  ],

  github: "https://github.com/Freejunxfoods/freejunx.in",

  demo: "https://www.freejunx.in/",

  projectType: "Freelance",
},{
  id: "foodhub",

  title: "FoodHub",

  subtitle: "Java Full Stack Food Ordering Platform",

  image: foodhub,

  description:
    "Java full-stack food ordering application with CRUD functionality, MySQL integration, Apache Tomcat deployment, and responsive user interface.",

  problem:
    "Users needed a simple and efficient online food ordering system with reliable data management.",

  solution:
    "Built a complete Java full-stack application using JSP, Servlets, MySQL, JDBC, and Apache Tomcat with complete CRUD operations.",

  role: "Full Stack Java Developer",

  status: "Completed",

  technologies: [
    "Java",
    "JSP",
    "Servlets",
    "JDBC",
    "MySQL",
    "Apache Tomcat",
    "Tailwind CSS",
    "JavaScript",
  ],

  features: [
    "CRUD Operations",
    "Food Ordering",
    "Responsive UI",
    "Database Integration",
    "Tomcat Deployment",
    "Dynamic Menu",
  ],

  github: "https://github.com/Sudhi0001/FoodHub",

  demo: "",
},{
  id: "carmania",

  title: "Carmania",

  subtitle: "Premium Automotive Platform",

  image: carmania,

  description:
    "Modern full-stack automotive platform showcasing premium vehicles through immersive browsing experiences and responsive design.",

  problem:
    "Traditional automotive websites lacked engaging UI and modern browsing experiences.",

  solution:
    "Developed a premium automotive platform featuring responsive layouts, interactive vehicle showcases, and scalable architecture.",

  role: "Full Stack Developer & UI Designer",

  status: "Completed",

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "CSS3",
  ],

  features: [
    "Vehicle Showcase",
    "Interactive Browsing",
    "Responsive Design",
    "REST API Integration",
    "Modern UI",
    "Visual Storytelling",
  ],

  github: "https://github.com/Sudhi0001/carmania",

  demo: "https://carmania-omega.vercel.app/",
},
{
  id: "radiantbites",

  title: "Radiant Bites",

  subtitle: "Premium Restaurant Platform",

  image: radiantbites,

  description:
    "Premium full-stack restaurant platform developed as a freelance client project with modern UI/UX, responsive design, and interactive customer experiences.",

  problem:
    "The client required a premium online presence that reflected the restaurant's brand identity and improved customer engagement.",

  solution:
    "Designed and developed a complete restaurant platform with responsive layouts, interactive UI, scalable architecture, and modern user experience.",

  role: "Freelance Full Stack Developer & UI/UX Designer",

  status: "Completed",

  technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
  ],

  features: [
    "Restaurant Showcase",
    "Interactive Menu",
    "Responsive Design",
    "Modern UI/UX",
    "Full Stack Architecture",
    "Brand Identity",
  ],

  github: "https://github.com/Sudhi0001/radiant-fork",

  demo: "https://sudhi0001.github.io/radiant-fork/",

  projectType: "Freelance",
},

];