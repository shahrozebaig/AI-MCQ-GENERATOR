import FeatureCard from "./FeatureCard";
function FeaturesSection() {
  const features = [
    {
      title: "Curriculum Aligned",
      description: "Examines textbook chapters and notes, aligning each generated question directly with syllabus concepts."
    },
    {
      title: "Detailed Rationales",
      description: "Every question is supplemented with step-by-step academic explanations and textbook justifications."
    },
    {
      title: "Balanced Coverage",
      description: "Uses comprehensive analysis to ensure balanced questions across all sub-chapters and topics."
    },
    {
      title: "Print-Ready Exports",
      description: "Downloads clean, beautifully formatted test booklets for students alongside grading rubrics."
    }
  ];
  return (
    <div className="max-w-5xl mx-auto py-16 px-5 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
export default FeaturesSection;