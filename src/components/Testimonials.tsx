import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "The transformation in my daughter's confidence and grades has been remarkable. The personalized attention and engaging teaching methods made all the difference.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Student",
      content: "I went from struggling with calculus to actually enjoying it! The clear explanations and patient guidance helped me ace my AP exam.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      content: "Our son's reading comprehension improved dramatically. The creative approach to literature made him actually look forward to assignments.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Student",
      content: "Best teacher I've ever had. Made science come alive and helped me discover my passion for chemistry. Now pursuing it in college!",
      rating: 5
    },
    {
      name: "Lisa Anderson",
      role: "Parent",
      content: "Incredible patience and dedication. My son has ADHD and really struggled until we found this teacher. The customized approach works wonders.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Student",
      content: "Scored 1520 on my SAT thanks to the test prep sessions. The strategies and practice materials were spot-on. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Student Success Stories</h2>
          <p className="text-lg text-muted-foreground">
            Hear from students and parents about their learning journey and achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
