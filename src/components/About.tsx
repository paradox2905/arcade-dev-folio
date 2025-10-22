import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import robot3d from "@/assets/robot-3d.png";

const About = () => {
  const techBadges = ["React", "GSAP", "Tailwind"];

  return (
    <section className="py-20 px-4 gradient-dark" id="about">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-white text-shadow-retro mb-4 inline-block">
            ABOUT · PLAYER
          </h2>
          <p className="text-lg md:text-xl text-secondary font-['Outfit'] mt-4">
            🎮 Game-inspired developer · Motion-first design · Retro arcade polish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Mission Card */}
          <div className="retro-card p-6 md:p-8 bg-card/95 backdrop-blur animate-slideInLeft">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="text-xl md:text-2xl font-['Press_Start_2P']">MISSION</h3>
            </div>
            
            <p className="text-base md:text-lg leading-relaxed text-foreground/90 font-['Outfit'] mb-8">
              I craft game-inspired web experiences that are fast, tactile, and deliberately playful. 
              Motion-first UI with careful performance optimization and interfaces that feel like a 
              controller in your hands.
            </p>

            <div className="flex flex-wrap gap-4">
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
          <div className="retro-card p-6 md:p-8 bg-card/95 backdrop-blur animate-slideInRight">
            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {techBadges.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary text-primary-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Robot Image */}
            <div className="w-full aspect-square border-4 border-foreground rounded-lg overflow-hidden bg-accent/10">
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
