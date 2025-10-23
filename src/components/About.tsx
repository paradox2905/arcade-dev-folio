import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import robot3d from "@/assets/robot-3d.png";

const About = () => {
  const techBadges = ["React", "GSAP", "Tailwind"];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-dark" id="about">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white text-shadow-retro mb-4 inline-block">
            ABOUT · PLAYER
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary font-['Outfit'] mt-4 px-4">
            🎮 Game-inspired developer · Motion-first design · Retro arcade polish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Mission Card */}
          <div className="retro-card p-4 sm:p-6 md:p-8 bg-card/95 backdrop-blur animate-slideInLeft animate-floatSlow">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse-glow" />
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-['Press_Start_2P'] leading-tight">MISSION</h3>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 font-['Outfit'] mb-6 sm:mb-8">
              I craft game-inspired web experiences that are fast, tactile, and deliberately playful. 
              Motion-first UI with careful performance optimization and interfaces that feel like a 
              controller in your hands.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button 
                className="retro-button bg-primary text-primary-foreground hover:bg-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Robot Card */}
          <div className="retro-card p-4 sm:p-6 md:p-8 bg-card/95 backdrop-blur animate-slideInRight animate-floatSlow">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
              {techBadges.map((tech, index) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 bg-primary text-primary-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Robot Image */}
            <div className="w-full aspect-square border-4 border-foreground rounded-lg overflow-hidden bg-accent/10 animate-wiggle">
              <img 
                src={robot3d} 
                alt="3D retro robot illustration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
