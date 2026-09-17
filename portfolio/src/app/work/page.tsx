import PageTransition from "../../components/PageTransition";

const projects = [
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

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="space-y-8">
        <h1 className="text-2xl font-bold text-black">works</h1>
        <div>
          {projects.map((project) => (
            <article
              key={project.slug}
              className="space-y-3 py-8 border-t border-black first:border-t-0 first:pt-0"
            >
              <h2 className="text-base font-bold text-black leading-snug">
                {project.title}
              </h2>
              <p className="text-sm text-black leading-relaxed">
                {project.description}
              </p>
              <dl className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 text-sm">
                <dt className="font-bold text-black">stack</dt>
                <dd className="text-black">{project.stack.join(", ")}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
