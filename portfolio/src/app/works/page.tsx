// app/works/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import ProjectModal, { Project } from "../../components/ProjectModal";
import { b } from "framer-motion/client";

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
      <section className="works">
        <h1>My Works</h1>
        <div className="projects">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="project-card"
              onClick={() => handleProjectClick(project)}
            >
              <h2>{project.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={closeModal} />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
