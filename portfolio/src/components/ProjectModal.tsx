// components/ProjectModal.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

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
        className="bg-[#1E1E1E] border-2 border-terminal-green rounded-lg max-w-2xl w-11/12 shadow-2xl shadow-terminal-green/20 font-mono"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header */}
        <div className="bg-terminal-bg/50 border-b border-terminal-green/30 px-4 py-3 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-terminal-red cursor-pointer hover:bg-terminal-red/70" onClick={onClose}></div>
              <div className="w-3 h-3 rounded-full bg-terminal-yellow"></div>
              <div className="w-3 h-3 rounded-full bg-terminal-green"></div>
              <span className="ml-4 text-sm text-terminal-text/70">
                tsujino@portfolio:~/projects/{project.slug}$
              </span>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <p className="text-terminal-cyan text-sm">
              <span className="text-terminal-green">$</span> cat project_details.txt
            </p>
            <div className="pl-4 border-l-2 border-terminal-green/30">
              <h2 className="text-xl font-bold text-terminal-white mb-3">
                {project.title}
              </h2>
              <p className="text-terminal-text/80 leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-terminal-green/30">
            <p className="text-terminal-green text-sm mb-2">[INFO] Project details loaded successfully</p>
            <button
              onClick={onClose}
              className="bg-terminal-green/20 border border-terminal-green text-terminal-green px-6 py-2 rounded hover:bg-terminal-green hover:text-terminal-bg transition-all font-semibold"
            >
              → Exit (ESC)
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
