// src/components/ProjectDetails.tsx

"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/ProjectsData"; // Adjust path as needed

type ProjectDetailsProps = {
  project: Project;
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.25 }}
      // ✅ THE FIX IS HERE:
      // Replaced inline maxHeight style with a fixed height class (h-[28rem])
      // This ensures it matches the main project card's height perfectly.
      className="w-80 h-[28rem] bg-gray-800 border border-zinc-800 rounded-2xl shadow-lg p-6 overflow-y-auto no-scrollbar"
      onClick={(e) => e.stopPropagation()}
    >
      <h4 className="text-2xl font-semibold mb-1">{project.title}</h4>
      
      <h5 className="font-semibold text-green-400 mb-2">Key Features</h5>
      <ul className="list-disc list-inside text-sm text-gray-300 mb-4 space-y-1">
        {project.expandedDetails.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <h5 className="font-semibold text-green-400 mb-2">Challenges</h5>
      <p className="text-sm text-gray-300 mb-4">
        {project.expandedDetails.challenges}
      </p>

      <h5 className="font-semibold text-green-400 mb-2">Impact</h5>
      <p className="text-sm text-gray-300 mb-2">
        {project.expandedDetails.impact}
      </p>

      <div className="flex gap-3 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-blue-600 rounded-lg text-sm hover:bg-blue-700 transition"
          >
            GitHub
          </a>
        )}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-green-600 rounded-lg text-sm hover:bg-green-700 transition"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}