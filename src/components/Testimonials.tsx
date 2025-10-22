import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      avatar: "👩‍💼",
      text: "Garvit brings creativity and structure to every project. His attention to detail and game-inspired approach makes working with him a joy."
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Developer",
      avatar: "👨‍💻",
      text: "His attention to UI details is unmatched. Garvit creates interfaces that are not just functional, but genuinely delightful to use."
    },
    {
      name: "Priya Sharma",
      role: "UX Designer",
      avatar: "👩‍🎨",
      text: "Working with Garvit is like having a creative powerhouse on your team. He transforms ideas into polished, production-ready experiences."
    }
  ];

  return (
    <section className="py-20 px-4 gradient-dark" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white text-shadow-retro mb-4">
            WHAT OTHERS SAY
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="retro-card p-6 bg-card/95 backdrop-blur animate-fadeIn animate-floatSlow hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4 animate-pulse-glow" />
              
              <p className="text-sm md:text-base text-foreground/90 font-['Outfit'] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center text-2xl animate-wiggle">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-['Press_Start_2P'] leading-relaxed">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground font-['Outfit'] mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
