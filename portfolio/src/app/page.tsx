// app/page.tsx
"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import TimelineItem from "../components/TimelineItem";
import ProjectModal, { Project } from "../components/ProjectModal";

const timelineData = [
  {
    date: "2025.4",
    title: "Enigmo Inc. - Data Scientist",
    description: "Engaged in data science and machine learning"
  },
  {
    date: "2022.1",
    title: "Promoted to Senior Engineer",
    description: "Taking on advanced technical responsibilities and leadership roles"
  },
  {
    date: "2021.9",
    title: "Ridge-i Inc. - Machine Learning Engineer",
    description: "Engaged in deep learning model development and implementation"
  },
  {
    date: "2018.4",
    title: "Independent Administrative Agency - System Administrator",
    description: "Engaged in information system management and operations"
  },
  {
    date: "2018.3",
    title: "Osaka University, Faculty of Law - Graduated",
    description: "Built foundation in legal thinking and logical analysis"
  },
];

export default function HomePage() {
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
      <section className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-terminal-green">
            Takeshi Tsujino
          </h1>
          <div className="space-y-2 text-terminal-text/80">
            <p>Machine Learning Engineer | Data Scientist</p>
            <p>Based in Japan</p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-terminal-white">bio</h2>
          <p className="text-terminal-text/70 text-sm leading-relaxed">
            Working as a Machine Learning Engineer specializing in deep learning model development and implementation.<br />
            After graduating from Osaka University Faculty of Law, worked as a system administrator at an independent administrative agency,<br />
            and currently serving as a Senior Engineer at Ridge-i Inc.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-xl font-bold text-terminal-white">career</h2>
          <div className="space-y-6">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-xl font-bold text-terminal-white">works</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div
                key={project.slug}
                className="cursor-pointer group"
                onClick={() => handleProjectClick(project)}
              >
                <h3 className="text-terminal-text/80 underline group-hover:text-terminal-green transition-colors">
                  {project.title}
                </h3>
              </div>
            ))}
          </div>
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
