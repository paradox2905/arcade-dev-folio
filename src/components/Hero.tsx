import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotAvatar from "@/assets/robot-avatar.png";

const Hero = () => {
  const skills = ["React", "Node.js", "Tailwind", "Firebase", "APIs", "ML"];

  return (
    <section className="min-h-screen gradient-hero px-4 py-12 md:py-20">
      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full border-4 border-foreground mb-8 animate-slideInLeft text-xs md:text-sm">
          <Sparkles className="w-4 h-4" />
          <span className="font-['Press_Start_2P']">LEVEL 1 | PLAYER PROFILE</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-shadow-retro">
              Hi, I'm Garvit — Dev & Creator
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 font-['Outfit']">
              I build game-inspired web experiences — fast, clean, and full of life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="retro-button bg-primary text-primary-foreground hover:bg-primary text-sm md:text-base"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary border-secondary text-sm md:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hire Me
              </Button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Player Card */}
          <div className="animate-slideInRight">
            <div className="retro-card p-6 bg-card animate-floatSlow">
              <div className="text-center space-y-4">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full border-2 border-foreground mb-2 animate-pulse-glow">
                  <span className="text-xs font-['Press_Start_2P']">RANK S</span>
                </div>
                
                <div className="w-full aspect-square max-w-xs mx-auto border-4 border-foreground rounded-lg overflow-hidden bg-accent/10 animate-wiggle">
                  <img 
                    src={robotAvatar} 
                    alt="Garvit's avatar - retro robot" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-['Press_Start_2P']">GARVIT BANSAL</h3>
                  <p className="text-sm text-muted-foreground font-['Outfit']">Developer & Creator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
