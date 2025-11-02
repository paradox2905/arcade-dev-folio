import { ArrowRight, Target, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import robot3d from "@/assets/carRobo.jpg";
import target from "@/assets/target.png";
import learn from "@/assets/learning.png";

const About = () => {
  const techBadges = ["React", "GSAP", "Tailwind"];

  const abilities = [
    { title: "React & Next.js", level: "Expert", icon: "⚡" },
    { title: "UI/UX Design", level: "Advanced", icon: "🎨" },
    { title: "Performance", level: "Expert", icon: "🚀" },
    { title: "TypeScript", level: "Advanced", icon: "💎" },
    { title: "Framer Motion", level: "Proficient", icon: "🎞️" },
    { title: "GSAP Animations", level: "Proficient", icon: "✨" },
  ];

  // refs and controls for animation triggers
  const aboutRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, [controls]);

  // animation variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  };

  const cardVariant = {
    hidden: { opacity: 0, x: -60 },
    visible: (delay = 0) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" as any },
    }),
  };

  const robotVariant = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" as any } },
  };

  const skillVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 1 + i * 0.15, ease: "easeOut" as any },
    }),
  };

  return (
    <section
      ref={aboutRef}
      className="py-16 sm:py-20 lg:py-24 px-0 sm:px-4 lg:px-8 bg-[#0b5b3f]"
      id="about"
    >

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

        {/* Split Layout */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch"
          variants={sectionVariant}
          initial="hidden"
          animate={controls}
        >




          {/* LEFT SIDE - Mission + Core Abilities */}
          <div
            className="flex flex-col gap-6 lg:gap-8 w-full m-0 p-0 sm:w-[115%] sm:-ml-[8%] md:w-[125%] md:-ml-[10%] lg:w-[134%] lg:-ml-20 ">

            {/* Mission Card */}
            <motion.div
              className="retro-card p-6 sm:p-8 !bg-[#1e684e] backdrop-blur animate-floatSlow flex-1 w-full"
              variants={cardVariant}
              custom={0}
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={target}
                  alt="target"
                  className="w-9 h-9 object-contain"
                />
                <h3 className="text-xl md:text-2xl font-['Press_Start_2P'] leading-tight text-foreground text-white">
                  MISSION
                </h3>
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-foreground/90 font-['Outfit'] mb-8 text-white">
                I craft game-inspired web experiences that are fast, tactile, and deliberately
                playful. Motion-first UI with careful performance optimization and interfaces
                that feel like a controller in your hands.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  className="retro-button bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() =>
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>

            {/* Core Abilities Card */}
            <motion.div
              className="retro-card p-6 sm:p-8 !bg-[#1e684e] backdrop-blur animate-floatSlow flex-1 w-full"
              variants={cardVariant}
              custom={0.2}
            >
              <div className="flex items-center gap-3 mb-6">
<img
                  src={learn}
                  alt="target"
                  className="w-9 h-9 object-contain"
                />                <h3 className="text-xl md:text-2xl font-['Press_Start_2P'] leading-tight text-foreground text-white">
                  CORE ABILITIES
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {abilities.map((ability, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-muted/30 border-2 border-foreground/40 rounded-lg flex items-center justify-between hover:scale-[1.03] transition-transform"
                    variants={skillVariant}
                    custom={index}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl ">{ability.icon}</span>
                      <div>
                        <p className="font-['Outfit'] font-semibold text-foreground text-sm sm:text-base text-white">
                          {ability.title}
                        </p>
                        <p
                          className={`text-xs font-medium ${ability.level === "Expert"
                            ? "text-[#12bb69]"
                            : ability.level === "Advanced"
                              ? "text-[#12bb69]"
                              : ability.level === "Intermediate"
                                ? "text-[#12bb69]"
                                : "text-[#12bb69]"
                            }`}
                        >
                          {ability.level}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>


          {/* RIGHT SIDE - Robot */}
          <motion.div
            className="flex justify-center lg:justify-end items-center animate-floatSlow"
            variants={robotVariant}
          >
            <div className="relative w-[90%] lg:w-[100%] translate-x-0 sm:translate-x-5 lg:translate-x-24 flex items-center justify-center">

              {/* Floating Tech Badges */}
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                {techBadges.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary text-primary-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium hover:scale-105 transition-transform"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      fontSize: "0.75rem",
                      padding: "6px 10px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Robot Image with Hover Zoom */}
              <motion.div
                className="w-full border-4 border-foreground rounded-2xl overflow-hidden bg-accent/10 shadow-[0_0_30px_hsl(var(--primary)/0.3)] 
  flex items-center justify-center h-[200px] sm:h-[350px] md:h-[550px] lg:h-[690px]"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={robot3d}
                  alt="3D retro robot"
                  className="w-full h-full object-cover transition-transform duration-300 scale-100 sm:scale-110 md:scale-125 lg:scale-140"
                />
              </motion.div>


            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

