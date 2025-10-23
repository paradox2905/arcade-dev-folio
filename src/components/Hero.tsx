import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotAvatar from "@/assets/robot.png";

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 animate-slideInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight text-shadow-retro">
              Hi, I'm Garvit — Dev & Creator
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 font-['Outfit']">
              I build website — heavy on performance, clean UI, and delightful micro-interactions. I design interfaces that feel like menus and HUDs in every style .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="retro-button bg-primary text-primary-foreground hover:bg-primary text-sm md:text-base"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary border-secondary text-sm md:text-base"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hire Me
              </Button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Player Card */}
<div className="animate-slideInRight  -mt-11">
            {/* Inject slow vertical float only for the player card */}
            <style>{`
              @keyframes floatUpDown {
                0% { transform: translateY(0); }
                50% { transform: translateY(-12px); }
                100% { transform: translateY(0); }
              }
              .animate-floatSlow {
                animation: floatUpDown 6s ease-in-out infinite;
                will-change: transform;
              }
            `}</style>

            {/* Right card with increased height */}
            <div className="retro-card p-6 bg-card animate-floatSlow h-[560px] md:h-[640px] flex items-center justify-center">
              <div className="text-center space-y-4 w-full">
                <div className="border-4 border-orange-500 rounded-xl overflow-hidden h-[480px] md:h-[560px]">
                  <img
                    src={robotAvatar}
                    alt="Garvit's avatar - retro robot"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
