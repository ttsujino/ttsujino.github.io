import PageTransition from "../../components/PageTransition";
import TimelineItem from "../../components/TimelineItem";

const timelineData = [
  {
    date: "2018.3",
    title: "Osaka University, Faculty of Law - Graduated",
    description: "Built foundation in legal thinking and logical analysis"
  },
  {
    date: "2018.4",
    title: "Independent Administrative Agency - System Administrator",
    description: "Engaged in information system management and operations"
  },
  {
    date: "2020.9",
    title: "Ridge-i Inc. - Machine Learning Engineer",
    description: "Engaged in deep learning model development and implementation"
  },
  {
    date: "2022.1",
    title: "Promoted to Senior Engineer",
    description: "Taking on advanced technical responsibilities and leadership roles"
  },
  {
    date: "2025.4",
    title: "Enigmo Inc. - Data Scientist",
    description: "Engaged in data science and machine learning"
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="space-y-8">
        <h1 className="text-2xl font-bold text-terminal-white">About</h1>

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
      </section>
    </PageTransition>
  );
}
