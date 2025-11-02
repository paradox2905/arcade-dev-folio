import { useState } from "react";
import { Code2, Rocket, Zap, Wrench } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const skillCategories = {
    foundations: {
      name: "Foundations",
      icon: Wrench,
      level: "1 / 4",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "A11Y", "Testing"],
      count: 6,
      color: "hsl(var(--skills-gold))"
    },
    frontend: {
      name: "Frontend",
      icon: Code2,
      level: "2 / 4",
      skills: ["React", "Next.js", "Tailwind", "shadcn/ui", "Redux", "React Query"],
      count: 6,
      color: "hsl(var(--skills-cyan))"
    },
    motion: {
      name: "Motion & Scroll",
      icon: Zap,
      level: "3 / 4",
      skills: ["GSAP", "Framer Motion", "ScrollTrigger", "Lottie", "CSS Animations"],
      count: 5,
      color: "hsl(var(--skills-magenta))"
    },
    backend: {
      name: "Build & Backend",
      icon: Rocket,
      level: "4 / 4",
      skills: ["Node.js", "Express", "Firebase", "MongoDB", "REST APIs", "Git"],
      count: 6,
      color: "hsl(var(--skills-blue))"
    }
  };

  const [activeTab, setActiveTab] = useState("foundations");

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-visible md:overflow-hidden" id="skills" style={{ background: "var(--gradient-skills)" }}>
       <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 animate-fadeIn">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-4" style={{ color: "hsl(var(--skills-gold))" }}>
            SKILLS · LOADOUT
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-['Outfit'] text-white/70 px-4">
            Choose your class · Prove your mastery · Level up your game.
          </p>
        </div>

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 bg-transparent mb-16 sm:mb-10">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-xl p-2 sm:p-3 md:p-4 border-2 transition-all duration-300 data-[state=active]:animate-pulse-glow font-['Outfit'] font-semibold text-xs sm:text-sm"
                  style={{
                    backgroundColor: activeTab === key ? category.color : "hsl(var(--skills-card))",
                    borderColor: activeTab === key ? category.color : "transparent",
                    color: activeTab === key ? "hsl(var(--skills-bg))" : "white",
                    boxShadow: activeTab === key ? `var(--shadow-skill-card), ${category.color === "hsl(var(--skills-gold))" ? "var(--shadow-glow)" : ""}` : "none"
                  }}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <TabsContent key={key} value={key} className="mt-0 sm:mt-20 md:mt-0">
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                  {/* Main Skill Detail Card */}
                  <div 
                    className="md:col-span-2 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-sm animate-none md:animate-floatSlow border-2"
                     style={{
                       backgroundColor: "hsl(var(--skills-card))",
                       borderColor: category.color,
                       boxShadow: `var(--shadow-skill-card), var(--shadow-inner-glow)`
                     }}
                   >
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div 
                        className="p-2 sm:p-3 md:p-4 rounded-xl animate-wiggle" 
                        style={{ 
                          backgroundColor: category.color,
                          boxShadow: `0 0 20px ${category.color}40`
                        }}
                      >
                        <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" style={{ color: "hsl(var(--skills-bg))" }} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2" style={{ color: category.color }}>
                          {category.name}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base font-['Outfit'] text-white/60">
                          Level {category.level}
                        </p>
                      </div>
                    </div>

                    {/* Equipment Section */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4" style={{ color: "hsl(var(--skills-gold))" }}>
                        Equipment:
                      </h4>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {category.skills.map((skill, index) => (
                          <span
                            key={skill}
                            className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg border-2 font-['Outfit'] font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 animate-fadeIn"
                            style={{ 
                              backgroundColor: "hsl(var(--skills-card-hover))",
                              borderColor: category.color,
                              color: "white",
                              animationDelay: `${index * 0.1}s`,
                              boxShadow: `0 0 10px ${category.color}20`
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4" style={{ color: "hsl(var(--skills-gold))" }}>
                        Achievements Unlocked:
                      </h4>
                      <div className="space-y-2 sm:space-y-3">
                        {category.skills.slice(0, 3).map((skill, index) => (
                          <div 
                            key={skill} 
                            className="flex items-center gap-2 sm:gap-3 animate-fadeIn"
                            style={{ animationDelay: `${index * 0.15}s` }}
                          >
                            <div 
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center border-2 flex-shrink-0"
                              style={{ 
                                backgroundColor: category.color,
                                borderColor: category.color,
                                boxShadow: `0 0 15px ${category.color}40`
                              }}
                            >
                              <span style={{ color: "hsl(var(--skills-bg))" }} className="text-xs sm:text-sm font-bold">✓</span>
                            </div>
                            <span className="font-['Outfit'] text-white/90 text-xs sm:text-sm md:text-base">Mastered {skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clickable Category Boxes */}
                  <div className="space-y-4 sm:space-y-4">
                    {Object.entries(skillCategories).map(([catKey, cat], index) => {
                      const CategoryIcon = cat.icon;
                      const isActive = activeTab === catKey;
                      return (
                        <div 
                          key={catKey}
                          onClick={() => setActiveTab(catKey)}
                          className="rounded-xl p-4 sm:p-5 backdrop-blur-sm animate-fadeIn border-2 cursor-pointer transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: isActive ? cat.color : "hsl(var(--skills-card))",
                            borderColor: cat.color,
                            boxShadow: isActive ? `var(--shadow-skill-card), 0 0 20px ${cat.color}60` : "var(--shadow-skill-card)",
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <div 
                              className="p-2 rounded-lg"
                              style={{ 
                                backgroundColor: isActive ? "hsl(var(--skills-bg))" : cat.color,
                                boxShadow: `0 0 10px ${cat.color}40`
                              }}
                            >
                              <CategoryIcon 
                                className="w-5 h-5" 
                                style={{ color: isActive ? cat.color : "hsl(var(--skills-bg))" }} 
                              />
                            </div>
                            <div className="flex-1">
                              <h4 
                                className="text-sm sm:text-base font-bold font-['Outfit']"
                                style={{ color: isActive ? "hsl(var(--skills-bg))" : "white" }}
                              >
                                {cat.name}
                              </h4>
                              <p 
                                className="text-xs font-['Outfit']"
                                style={{ color: isActive ? "hsl(var(--skills-bg)/0.7)" : "white/60" }}
                              >
                                {cat.count} skills
                              </p>
                            </div>
                          </div>
                          
                          {/* Progress Bar */}
                          <div 
                            className="w-full h-2 rounded-full overflow-hidden border"
                            style={{ 
                              backgroundColor: isActive ? "hsl(var(--skills-bg)/0.3)" : "hsl(var(--skills-bg))",
                              borderColor: isActive ? "hsl(var(--skills-bg))" : cat.color
                            }}
                          >
                            <div 
                              className="h-full transition-all duration-1000 ease-out rounded-full"
                              style={{ 
                                backgroundColor: isActive ? "hsl(var(--skills-bg))" : cat.color,
                                width: `${(cat.count / 6) * 100}%`,
                                boxShadow: `0 0 8px ${isActive ? "hsl(var(--skills-bg))" : cat.color}`
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
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
