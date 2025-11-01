import { BookOpen, Award, Users, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "15+ Years Experience",
      description: "Extensive background in education and curriculum development"
    },
    {
      icon: Award,
      title: "Certified Educator",
      description: "Advanced degrees and professional certifications"
    },
    {
      icon: Users,
      title: "500+ Students Taught",
      description: "From elementary to advanced levels across diverse subjects"
    },
    {
      icon: Heart,
      title: "Personalized Approach",
      description: "Tailored learning strategies for individual student success"
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 15 years of teaching experience, I bring a passion for education 
            and a proven track record of student success. My approach combines innovative 
            teaching methods with personalized attention to ensure every student reaches 
            their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-card p-8 md:p-12 rounded-xl shadow-soft">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Teaching Philosophy</h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            I believe that every student has unique potential waiting to be unlocked. My teaching 
            philosophy centers on creating a supportive, engaging environment where curiosity thrives 
            and challenges are seen as opportunities for growth.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through a blend of traditional wisdom and modern pedagogical techniques, I strive to 
            make learning not just effective, but truly enjoyable. My goal is to instill not only 
            knowledge, but a lifelong love of learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
