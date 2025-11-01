import { GraduationCap, Languages, Calculator, Beaker, Globe, Palette } from "lucide-react";

const Subjects = () => {
  const subjects = [
    {
      icon: Languages,
      title: "English & Literature",
      description: "Comprehensive language arts instruction, from grammar fundamentals to advanced literary analysis",
      level: "All Levels"
    },
    {
      icon: Calculator,
      title: "Mathematics",
      description: "From basic arithmetic to advanced calculus, making complex concepts accessible and engaging",
      level: "Elementary to Advanced"
    },
    {
      icon: Beaker,
      title: "Science",
      description: "Hands-on exploration of biology, chemistry, and physics with real-world applications",
      level: "Middle to High School"
    },
    {
      icon: Globe,
      title: "Social Studies",
      description: "Interactive lessons in history, geography, and civics that bring the past to life",
      level: "All Levels"
    },
    {
      icon: GraduationCap,
      title: "Test Preparation",
      description: "Strategic preparation for standardized tests including SAT, ACT, and AP exams",
      level: "High School & Beyond"
    },
    {
      icon: Palette,
      title: "Study Skills",
      description: "Essential techniques for organization, time management, and effective learning strategies",
      level: "All Ages"
    }
  ];

  return (
    <section id="subjects" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Subject Specializations</h2>
          <p className="text-lg text-muted-foreground">
            Offering comprehensive instruction across multiple disciplines with proven methodologies 
            tailored to each student's learning style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subjects.map((subject, index) => (
            <div 
              key={index}
              className="group bg-gradient-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <subject.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{subject.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {subject.description}
              </p>
              <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                {subject.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;
