// app/page.tsx
import PageTransition from "../components/PageTransition";
import TimelineItem from "../components/TimelineItem";

const timelineData = [
  {
    date: "2025.4",
    title: "Enigmo Inc. - Data Scientist",
    description: "Engaged in data science and machine learning"
  },
  {
    date: "2023.1",
    title: "Ridge-i Inc. - Senior Machine Learning Engineer",
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
  return (
    <PageTransition>
      <section className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-black">
            Takeshi Tsujino
          </h1>
          <div className="space-y-2 text-black">
            <p>Machine Learning Engineer | Data Scientist</p>
            <p>Based in Japan</p>
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h2 className="text-xl font-bold text-black">bio</h2>
          <p className="text-black text-sm leading-relaxed">
            Working as a Machine Learning Engineer, developing both machine learning models and the systems that apply them.
            Recently, I have been engaged in LLM projects, especially in the field of agentic AI, but I have a broad interest that spans from low-level to high-level layers.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <h2 className="text-xl font-bold text-black">career</h2>
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
      </section>
    </PageTransition>
  );
}
