import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotAvatar from "@/assets/robot.png";


const Hero = () => {
  const skills = ["React", "Node.js", "Tailwind", "Firebase", "APIs", "ML"];

  return (
    <section className="min-h-screen gradient-hero px-4 py-8 sm:py-12 md:py-8 lg:py-12">


      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
        
        .play-regular {
        font-family: "Play", sans-serif;
        font-weight: 400;
        font-style: normal;
        }
        .play-bold {
        font-family: "Play", sans-serif;
        font-weight: 700;
        font-style: normal;
        }
        `}
        </style>


      <div className="container mx-auto max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-full border-4 border-foreground mb-6 sm:mb-8 animate-slideInLeft text-xs md:text-sm">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-['Press_Start_2P'] text-[10px] sm:text-xs">LEVEL 1 | PLAYER PROFILE</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 animate-slideInLeft">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight play-bold font-bold">
              Hi, I'm <span className="text-orange-500">Garvit</span> — Dev & Creator
            </h1>


            <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-['Outfit']">
              I build website — heavy on performance, clean UI, and delightful micro-interactions. I design interfaces that feel like menus and HUDs in every style .
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
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
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-2 sm:px-3 py-1 bg-accent text-accent-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium animate-float"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Player Card */}
          <div className="animate-slideInRight mt-0">
            {/* Right card with responsive height */}
            <div className="retro-card p-4 sm:p-6 bg-card animate-floatSlow h-[400px] sm:h-[500px] md:h-[640px] flex items-start justify-center pt-4 sm:pt-6">
              <div className="text-center space-y-4 w-full">
                <div className="border-4 border-orange-500 rounded-xl overflow-hidden h-[340px] sm:h-[440px] md:h-[560px] animate-wiggle">
                  <img
                    src={robotAvatar}
                    alt="Garvit's avatar - retro robot"
                    className="w-full h-full object-cover"
                  />
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
