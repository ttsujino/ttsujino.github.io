// app/works/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import ProjectModal, { Project } from "../../components/ProjectModal";

export default function WorksPage() {
  // サンプルデータ（実際には API や CMS から取得する等）
  const projects: Project[] = [
    {
      slug: "project-1",
      title: "Deep Learning Modeling Project with Semiconductor Images",
      description:
        "In this project, I developed and commercialized models that extract information from magnified images of semiconductor products obtained via electron microscopes. The project consisted of multiple phases, each requiring different information extraction tasks. Ultimately, three unique deep learning models were developed and licensed as products.",
    },
    {
      slug: "project-2",
      title: "Deep Learning Modeling Project with Satellite Images",
      description:
        "This project focused on developing a proof-of-concept (PoC) web application that allows users to pre-register when disposing of rechargeable batteries.",
    },
    {
      slug: "project-3",
      title: "Data Science Project in Retail Stores",
      description:
        "This project involved developing and deploying a machine learning model that determines which coupons to distribute to individual users based on large-scale data, including demographic information and purchase history.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <PageTransition>
      <section className="space-y-4">
        <div className="space-y-2">
          <p className="text-terminal-cyan">
            <span className="text-terminal-green">tsujino@portfolio</span>
            <span className="text-terminal-text">:</span>
            <span className="text-terminal-blue">~</span>
            <span className="text-terminal-text">$ ls -la ./projects/</span>
          </p>
          <div className="pl-4 border-l-2 border-terminal-green/30 space-y-4">
            <h1 className="text-2xl font-bold text-terminal-white">My Works</h1>
            <p className="text-terminal-text/70 text-sm">
              total {projects.length} projects
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="bg-terminal-bg/50 border border-terminal-blue/30 rounded p-4 hover:border-terminal-blue hover:shadow-lg hover:shadow-terminal-blue/20 transition-all cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-terminal-yellow text-sm">
                  <span className="group-hover:text-terminal-cyan transition-colors">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <span className="text-terminal-green">📁</span>
                  <span className="text-terminal-text/70">project_{index + 1}.sh</span>
                </div>
                <h2 className="text-terminal-cyan font-semibold text-sm leading-tight group-hover:text-terminal-white transition-colors">
                  {project.title}
                </h2>
                <p className="text-terminal-green text-xs">
                  → Click to execute
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-terminal-green mt-4 text-sm">
          [INFO] {projects.length} directories, 0 files
        </p>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
