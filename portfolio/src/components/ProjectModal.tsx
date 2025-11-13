// components/ProjectModal.tsx
"use client";

import { motion } from "framer-motion";
import React, { useEffect } from "react";

export interface Project {
  slug: string;
  title: string;
  description: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // ESCキーでモーダルを閉じる
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1E1E1E] border border-terminal-green/30 rounded-lg max-w-2xl w-11/12 shadow-xl font-mono"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-terminal-white">
              {project.title}
            </h2>
            <p className="text-terminal-text/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-terminal-green hover:text-terminal-white transition-colors text-sm"
            >
              Close (ESC)
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
