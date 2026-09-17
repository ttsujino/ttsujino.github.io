"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../../components/PageTransition";
import ProjectModal, { Project } from "../../components/ProjectModal";

export default function WorkPage() {
  const projects: Project[] = [
    {
      slug: "sem-inspection",
      title: "SEM image analysis models for semiconductor inspection",
      stack: ["PyTorch", "OpenCV", "Linux / Windows", "PyArmor"],
      description:
        "Built production models that extract inspection signals from electron-microscope images of semiconductor devices. Each project phase targeted a different extraction task; three models were licensed and sold as products.",
    },
    {
      slug: "coupon-ranking",
      title: "Large-scale coupon allocation model (retail)",
      stack: [
        "GCP",
        "Vertex AI",
        "BigQuery",
        "GCS",
        "Cloud Functions",
        "Cloud Build",
        "PySpark",
      ],
      description:
        "Developed and operated a machine-learning system that decides which coupon to send to each user from large-scale demographic and purchase-history data for a convenience-store chain.",
    },
    {
      slug: "battery-poc",
      title: "Battery take-back registration web app (PoC)",
      stack: ["AWS", "Next.js", "MySQL", "SQLAlchemy"],
      description:
        "Built a PoC web application for pre-registering rechargeable batteries before disposal, covering frontend and cloud infrastructure.",
    },
    {
      slug: "satellite-cloud-shadow",
      title: "Cloud / shadow detection on multi-sensor satellite imagery",
      stack: ["PyTorch", "OpenCV", "GeoPandas", "Rasterio", "DVC", "Linux"],
      description:
        "Constructed semantic-segmentation models that detect clouds and shadows in imagery from three satellites (ASNARO, Sentinel, GRUS), for automated base-map production on the Tellus platform.",
    },
    {
      slug: "defect-classification",
      title: "Manufacturing defect detection (image classification)",
      stack: ["TensorFlow", "OpenCV", "Grad-CAM"],
      description:
        "Developed a classification model to detect damaged parts in manufacturing images, using Grad-CAM to inspect what the model attended to.",
    },
    {
      slug: "farrowing-detection",
      title: "Farrowing-status monitoring with object detection",
      stack: ["PyTorch", "OpenCV", "YOLOv5"],
      description:
        "Built a video system that detects piglets with YOLOv5 and infers whether farrowing is ongoing or finished, raising an alert when new piglets stop appearing for a set period.",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageTransition>
      <section className="space-y-6">
        <h1 className="text-2xl font-bold text-black mb-6">works</h1>
        <div className="space-y-0">
          {projects.map((project) => (
            <button
              key={project.slug}
              type="button"
              className="w-full text-left py-3 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <span className="text-black underline decoration-neutral-300 group-hover:decoration-black">
                {project.title}
              </span>
            </button>
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
