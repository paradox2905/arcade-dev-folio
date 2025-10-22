import { useState } from "react";
import { Code2, Rocket, Zap, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const skillCategories = {
    foundations: {
      name: "FOUNDATIONS",
      icon: Wrench,
      level: "1 / 4",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "A11Y", "Testing"],
      count: 6,
      color: "primary"
    },
    frontend: {
      name: "FRONTEND",
      icon: Code2,
      level: "2 / 4",
      skills: ["React", "Next.js", "Tailwind", "shadcn/ui", "Redux", "React Query"],
      count: 6,
      color: "secondary"
    },
    motion: {
      name: "MOTION & SCROLL",
      icon: Zap,
      level: "3 / 4",
      skills: ["GSAP", "Framer Motion", "ScrollTrigger", "Lottie", "CSS Animations"],
      count: 5,
      color: "accent"
    },
    backend: {
      name: "BUILD & BACKEND",
      icon: Rocket,
      level: "4 / 4",
      skills: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs", "Git"],
      count: 6,
      color: "muted"
    }
  };

  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <section className="py-20 px-4 gradient-dark" id="skills">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl text-white text-shadow-retro mb-4">
            SKILLS · LOADOUT
          </h2>
          <p className="text-lg text-secondary/80 font-['Outfit']">
            Choose your class · Prove your mastery · Level up your game.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="retro-button bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-sm md:text-xs py-3"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Skill Detail Card */}
                  <div className="md:col-span-2 retro-card p-6 md:p-8 bg-card/95 backdrop-blur animate-fadeIn">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-primary rounded-lg border-2 border-foreground">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-['Press_Start_2P'] mb-2">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-['Outfit']">
                          Level {category.level}
                        </p>
                      </div>
                    </div>

                    {/* Equipment Section */}
                    <div className="mb-6">
                      <h4 className="text-base font-['Press_Start_2P'] mb-4 text-primary">
                        Equipment:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => (
                          <span
                            key={skill}
                            className="px-3 py-2 bg-accent text-accent-foreground rounded-md border-2 border-foreground text-sm font-['Outfit'] font-medium animate-fadeIn"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div>
                      <h4 className="text-base font-['Press_Start_2P'] mb-4 text-primary">
                        Achievements Unlocked:
                      </h4>
                      <div className="space-y-2">
                        {category.skills.slice(0, 3).map((skill) => (
                          <div key={skill} className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-primary border-2 border-foreground rounded flex items-center justify-center">
                              <span className="text-primary-foreground text-xs">✓</span>
                            </div>
                            <span className="text-sm font-['Outfit']">Mastered {skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress Tracker */}
                  <div className="retro-card p-6 bg-card/95 backdrop-blur animate-fadeIn">
                    <h4 className="text-base font-['Press_Start_2P'] mb-6 text-center">
                      XP TRACKER
                    </h4>
                    <div className="space-y-6">
                      {Object.entries(skillCategories).map(([key, cat]) => (
                        <div key={key}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-['Outfit'] font-medium">
                              {cat.name}
                            </span>
                            <span className="text-xs text-muted-foreground font-['Outfit']">
                              {cat.count} skills
                            </span>
                          </div>
                          <div className="w-full h-4 bg-accent/20 border-2 border-foreground rounded overflow-hidden">
                            <div 
                              className={`h-full bg-${cat.color} animate-progress`}
                              style={{ 
                                '--progress-width': `${(cat.count / 6) * 100}%`,
                                width: activeTab === key ? `${(cat.count / 6) * 100}%` : '0%'
                              } as React.CSSProperties}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
