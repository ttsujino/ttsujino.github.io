"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

export interface Project {
  slug: string;
  title: string;
  stack: string[];
  description: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const scrollY = window.scrollY;

    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    const originalTop = document.body.style.top;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${scrollY}px`;

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.top = originalTop;

      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/30 flex justify-center items-start z-50 p-4 sm:p-8 overflow-y-auto"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.article
        className="bg-white border border-neutral-300 max-w-3xl w-full my-4 sm:my-8 font-mono"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="px-6 sm:px-8 py-6 border-b border-neutral-300">
          <h2 className="text-base sm:text-lg font-bold text-black leading-snug">
            {project.title}
          </h2>
        </header>

        <div className="px-6 sm:px-8 py-6 space-y-5">
          <p className="text-sm text-black leading-relaxed">
            {project.description}
          </p>

          <div className="grid grid-cols-[7.5rem_1fr] gap-x-4 text-sm border-t border-neutral-300 pt-5">
            <dt className="text-neutral-500 shrink-0">stack</dt>
            <dd className="text-black min-w-0">{project.stack.join(" / ")}</dd>
          </div>
        </div>

        <footer className="px-6 sm:px-8 pb-6">
          <button
            onClick={onClose}
            className="text-black text-sm underline"
            aria-label="Close modal"
          >
            close (esc)
          </button>
        </footer>
      </motion.article>
    </motion.div>
  );
}
