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
  // ESCキーでモーダルを閉じる & 背後のスクロールを防ぐ
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // モーダルが開いたときに背後のスクロールを防ぐ
    const originalOverflow = document.body.style.overflow;
    const originalPosition = document.body.style.position;
    const originalWidth = document.body.style.width;
    
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      
      // モーダルが閉じたときに元に戻す
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
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
      className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 backdrop-blur-sm p-4 overflow-y-auto"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1E1E1E] border border-terminal-green/30 max-w-2xl w-full my-8 font-mono max-h-[90vh] overflow-y-auto relative"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 pb-4">
          <h2 className="text-lg font-normal text-terminal-white leading-relaxed">
            {project.title}
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 pb-4">
          <p className="text-terminal-text/70 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Close button - positioned at bottom right */}
        <div className="px-6 sm:px-8 pb-4 flex justify-end">
          <button
            onClick={onClose}
            className="text-terminal-green hover:text-terminal-white transition-colors text-sm underline"
            aria-label="Close modal"
          >
            Close (ESC)
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
