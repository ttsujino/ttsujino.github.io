"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import ProjectModal, { Project } from "../../components/ProjectModal";

export default function WorkPage() {
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
        "This project focused on developing a deep learning model that detects shadows in satellite images. The model achieved a high accuracy in detecting shadows, and the project was successfully implemented in a real-world application.",
    },
    {
      slug: "project-3",
      title: "Data Science Project in Retail Stores",
      description:
        "This project involved developing and deploying a machine learning model that determines which coupons to distribute to individual users based on large-scale data, including demographic information and purchase history.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-black mb-8">works</h1>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h2 className="text-black underline">
                {project.title}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
