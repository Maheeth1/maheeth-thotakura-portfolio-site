// src/data/projectsData.ts

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  liveDemo?: string;
  image: string;
  expandedDetails: {
    role: string;
    duration: string;
    features: string[];
    challenges: string;
    impact: string;
  };
};

export const projects: Project[] = [
  {
    title: "OralVis Healthcare App",
    description:
      "A full-stack dental scan management portal with secure, role-based access for technicians and dentists.",
    tech: ["React", "JavaScript", "Node.js", "TailwindCSS", "Express", "SQLite"],
    github: "https://github.com/Maheeth1/oralvis-dentalScan-app",
    liveDemo: "https://oralvis-healthcare.vercel.app/",
    image:
      "https://res.cloudinary.com/deaiaaudy/image/upload/v1756878366/login-page_wuopz3.png?w=500&h=300&fit=crop&crop=center",
    expandedDetails: {
      role: "Full Stack Developer",
      duration: "3 months",
      features: [
        "Role-based authentication system",
        "Secure dental scan management",
        "Real-time data synchronization",
        "Responsive dashboard interface",
      ],
      challenges:
        "Implemented secure file handling and role-based access control for sensitive medical data.",
      impact: "Streamlined dental workflow for 50+ healthcare professionals",
    },
  },
  {
    title: "FlickNest",
    description:
      "React-based movie streaming app with React Player and carousels for seamless video browsing.",
    tech: ["React", "JavaScript", "React Player", "CSS3"],
    github: "https://flicknest.ccbp.tech/",
    liveDemo: "https://flicknest.ccbp.tech/",
    image:
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop&crop=center",
    expandedDetails: {
      role: "Frontend Developer",
      duration: "2 months",
      features: [
        "Interactive video player",
        "Dynamic content carousels",
        "Search and filter functionality",
        "Responsive design system",
      ],
      challenges:
        "Optimized video streaming performance and implemented smooth carousel interactions.",
      impact: "Enhanced user engagement with intuitive movie browsing experience",
    },
  },
  {
    title: "WebSocket Video Streaming",
    description:
      "Python + OpenCV-based real-time peer video application with live streaming capabilities.",
    tech: ["Python", "OpenCV", "WebSocket", "Real-time"],
    github: "https://github.com/Maheeth1/WebSocketBasedVideoStreaming",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop&crop=center",
    expandedDetails: {
      role: "Backend Developer",
      duration: "6 weeks",
      features: [
        "Real-time video processing",
        "WebSocket communication",
        "Multi-peer connectivity",
        "Low-latency streaming",
      ],
      challenges:
        "Achieved sub-100ms latency for real-time video communication using optimized protocols.",
      impact:
        "Enabled seamless peer-to-peer video communication for remote collaboration",
    },
  },
  {
    title: "Connect Four Game",
    description:
      "JavaFX desktop game with smooth animations and interactive gameplay mechanics.",
    tech: ["Java", "JavaFX", "Animations", "Desktop"],
    github: "https://github.com/Maheeth1/connectfour",
    image:
      "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500&h=300&fit=crop&crop=center",
    expandedDetails: {
      role: "Game Developer",
      duration: "4 weeks",
      features: [
        "Interactive game board",
        "Smooth piece animations",
        "AI opponent logic",
        "Score tracking system",
      ],
      challenges:
        "Implemented efficient game state management and smooth JavaFX animations.",
      impact: "Created engaging gameplay experience with polished visual effects",
    },
  },
];