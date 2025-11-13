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
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 backdrop-blur-sm p-4 overflow-y-auto"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#1E1E1E] border border-terminal-green/30 rounded-lg max-w-2xl w-full my-8 shadow-xl font-mono max-h-[90vh] overflow-y-auto"
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
