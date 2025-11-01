import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      year: "2020 - Present",
      title: "Senior Online Educator",
      organization: "Independent Practice",
      description: "Providing personalized online tutoring and academic coaching to students worldwide, specializing in STEM subjects and test preparation."
    },
    {
      year: "2015 - 2020",
      title: "Lead Teacher & Curriculum Developer",
      organization: "Excellence Academy",
      description: "Designed and implemented innovative curriculum for grades 6-12. Led professional development workshops for fellow educators."
    },
    {
      year: "2010 - 2015",
      title: "Middle School Teacher",
      organization: "Riverside School District",
      description: "Taught mathematics and science to middle school students, consistently achieving above-average test scores and student engagement."
    },
    {
      year: "2008 - 2010",
      title: "Student Teacher & Assistant",
      organization: "Various School Districts",
      description: "Completed extensive student teaching placements while pursuing advanced certifications and graduate studies."
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">
            A proven track record of excellence in education across diverse settings and student populations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative mb-12 animate-slide-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start md:items-center gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background" />
                  
                  {/* Content */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:pr-12 md:text-right md:even:ml-auto md:even:pl-12 md:even:pr-0 md:even:text-left">
                    <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                      <div className="flex items-center gap-2 text-primary mb-2 md:justify-end md:even:justify-start">
                        <Calendar className="w-4 h-4" />
                        <span className="font-semibold">{exp.year}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-3 md:justify-end md:even:justify-start">
                        <Briefcase className="w-4 h-4" />
                        <span className="font-medium">{exp.organization}</span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
