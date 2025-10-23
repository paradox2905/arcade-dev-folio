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
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-dark" id="testimonials">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-shadow-retro mb-4">
            WHAT OTHERS SAY
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="retro-card p-4 sm:p-6 bg-card/95 backdrop-blur animate-fadeIn animate-floatSlow hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4 animate-pulse-glow" />
              
              <p className="text-xs sm:text-sm md:text-base text-foreground/90 font-['Outfit'] mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent border-2 border-foreground rounded-lg flex items-center justify-center text-xl sm:text-2xl animate-wiggle flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-['Press_Start_2P'] leading-relaxed">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-['Outfit'] mt-0.5 sm:mt-1">
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
