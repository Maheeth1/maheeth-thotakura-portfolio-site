"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaPlay } from "react-icons/fa";
import { projects, Project } from "@/data/ProjectsData"; // adjust as needed
import ProjectDetails from "./ProjectDetails"; // adjust as needed

const CARD_W = 320; // Tailwind's w-80
const GAP = 24; // Tailwind's gap-6
const ITEM_W = CARD_W + GAP;
const REPEATS = 7;

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isPointerDownRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleSetActiveIndex = useCallback((idx: number | null) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      setActiveIndex(idx);
    }, 50);
  }, []);

  const visibleList: Project[] = React.useMemo(
    () => Array(REPEATS).fill(projects).flat(),
    []
  );

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollLeft = ITEM_W * projects.length * Math.floor(REPEATS / 2);
      });
    }
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let lastTs = 0;
    const speedPxPerSec = 20;
    const tick = (ts: number) => {
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const isPaused = isPointerDownRef.current || activeIndex !== null;
      if (!isPaused) {
        el.scrollLeft += speedPxPerSec * dt;
        if (
          el.scrollLeft < ITEM_W ||
          el.scrollLeft > ITEM_W * projects.length * (REPEATS - 1)
        ) {
          el.scrollLeft = ITEM_W * projects.length * Math.floor(REPEATS / 2);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]);

  return (
    <section id="projects" className="w-full py-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>

      {/* --- Desktop Infinite Carousel --- */}
      <div
        ref={containerRef}
        className="hidden md:flex px-6 gap-6 overflow-x-auto select-none no-scrollbar cursor-grab"
        onPointerDown={e => {
          isPointerDownRef.current = true;
          e.currentTarget.classList.add("grabbing");
        }}
        onPointerUp={() => {
          isPointerDownRef.current = false;
          containerRef.current?.classList.remove("grabbing");
        }}
        onPointerMove={e => {
          if (isPointerDownRef.current) e.currentTarget.scrollLeft -= e.movementX;
        }}
        onPointerLeave={() => {
          isPointerDownRef.current = false;
          containerRef.current?.classList.remove("grabbing");
        }}
      >
        {visibleList.map((project, vIdx) => {
          const isActiveHere = activeIndex === vIdx;
          return (
            <div
              key={`${project.title}-${vIdx}`}
              className="flex-shrink-0 flex items-stretch"
              onMouseLeave={() => handleSetActiveIndex(null)}
            >
              {/* Project Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="w-80 h-[28rem] bg-gray-900 border border-zinc-800 rounded-2xl shadow-md overflow-hidden flex flex-col cursor-pointer"
                onClick={() =>
                  handleSetActiveIndex(isActiveHere ? null : vIdx)
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover flex-shrink-0"
                  draggable={false}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2 flex-grow line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map(t => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-zinc-800/80 text-xs rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-1 bg-green-600 rounded-md text-sm hover:bg-green-700 transition"
                        onClick={e => e.stopPropagation()}
                      >
                        <FaPlay /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Animated Details Card */}
              <AnimatePresence>
                {isActiveHere && (
                  <motion.div
                    className="ml-6 flex"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ duration: 0.25 }}
                    key={`details-${project.title}-${vIdx}`}
                  >
                    <ProjectDetails project={project} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* --- Mobile Static Grid (Fallback) --- */}
      <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
        {projects.map(project => (
          <div
            key={project.title}
            className="bg-gray-900 border border-zinc-800 rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t) => (<span key={t} className="px-2 py-1 bg-zinc-800/80 text-xs rounded-md">{t}</span>))}
              </div>
              <div className="flex gap-3 mt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 bg-blue-600 rounded-md text-sm hover:bg-blue-700 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1 bg-green-600 rounded-md text-sm hover:bg-green-700 transition"
                  >
                    <FaPlay /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .cursor-grab { cursor: grab; }
        .grabbing { cursor: grabbing !important; }
      `}</style>
    </section>
  );
}
