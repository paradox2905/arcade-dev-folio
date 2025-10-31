// import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import robotAvatar from "@/assets/robot.png";

// const Hero = () => {
//   const skills = ["React", "Node.js", "Tailwind", "Gen AI", "APIs", "ML"];

//   return (
//     <section className="min-h-screen gradient-hero px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-8 lg:py-8">
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
        
//         .play-regular {
//           font-family: "Play", sans-serif;
//           font-weight: 400;
//           font-style: normal;
//         }
//         .play-bold {
//           font-family: "Play", sans-serif;
//           font-weight: 700;
//           font-style: normal;
//         }

//         .retro-card {
//           perspective: 1000px;
//           transition: transform 0.4s ease, box-shadow 0.4s ease;
//         }

//         .retro-card:hover {
//           transform: scale(1.05) rotateY(8deg) rotateX(3deg);
//         }

//         .retro-card img {
//           transition: transform 0.5s ease;
//           transform-style: preserve-3d;
//         }

//         .retro-card:hover img {
//           transform: scale(1.1) rotateY(-8deg) rotateX(-3deg);
//         }

//         @keyframes bounceSlow {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(8px); }
//         }
//         .animate-bounceSlow {
//           animation: bounceSlow 1.8s infinite;
//         }
//         `}
//       </style>

//       <div className="mx-auto max-w-6xl">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-full border-4 border-foreground mb-6 sm:mb-8 animate-slideInLeft text-xs md:text-sm">
//           <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
//           <span className="font-['Press_Start_2P'] text-[10px] sm:text-xs">
//             LEVEL 1 | PLAYER PROFILE
//           </span>
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start md:items-start">
//           {/* Left Content */}
//           <div className="space-y-4 sm:space-y-6 animate-slideInLeft">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight play-bold font-bold">
//               Hi, I'm <span className="text-orange-500">Garvit</span> —{" "}
//               <span className="text-yellow-500">Dev</span> & Creator
//             </h1>

//             <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-['Outfit']">
//               I build website — heavy on performance, clean UI, and delightful
//               micro-interactions. I design interfaces that feel like menus and
//               HUDs in every style.
//             </p>

//             {/* Action Buttons */}
//             <div className="flex flex-wrap gap-3 sm:gap-4">
//               <div className="flex flex-wrap items-center gap-3 justify-center">
//                 <div className="flex items-center justify-center gap-3 flex-nowrap">
//                   <Button
//                     size="lg"
//                     className="retro-button bg-primary text-primary-foreground hover:bg-primary 
//                text-sm sm:text-base lg:text-lg 
//                px-3 sm:px-5 lg:px-7 py-1.5 sm:py-2 lg:py-3"
//                     onClick={() =>
//                       window.open(
//                         "https://drive.google.com/file/d/1IWz-TWYjV8do9N5Cy0IPZ-4ObHhj9Rd4/view?usp=sharing",
//                         "_blank"
//                       )
//                     }
//                   >
//                     Resume <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
//                   </Button>

//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary border-secondary 
//                text-sm sm:text-base lg:text-lg 
//                px-3 sm:px-5 lg:px-7 py-1.5 sm:py-2 lg:py-3"
//                     onClick={() =>
//                       document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
//                     }
//                   >
//                     Hire Me
//                   </Button>
//                 </div>

//               </div>

//             </div>

//             {/* Skills */}
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <span
//                   key={skill}
//                   className="px-2 sm:px-3 py-1 bg-accent text-accent-foreground rounded-md border-2 border-foreground text-xs md:text-sm font-['Outfit'] font-medium animate-float"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>

//             {/* Quote + Resume */}
//             {/* Info Grid Section */}
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
//               {[
//                 { title: "Top Project", desc: "Learnify AI" },
//                 { title: "Current Goal", desc: "Expanding Skillset" },
//                 { title: "Live", desc: "Mast Mathri " },
//                 { title: "Next Idea", desc: "Pet Puja" },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="bg-background border-4 border-foreground rounded-xl p-4 shadow-[3px_3px_0_#000] hover:translate-y-[-4px] hover:shadow-[6px_6px_0_#000] transition-all duration-300 cursor-pointer"
//                 >
//                   <h3 className="font-['Press_Start_2P'] text-sm sm:text-base mb-2 text-foreground">
//                     {item.title}
//                   </h3>
//                   <p className="font-['Outfit'] text-sm sm:text-base text-foreground/80">
//                     {item.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right - Player Card */}
//           <div className="animate-slideInRight flex justify-center md:justify-end items-start md:-mt-20">
//             <div className="retro-card p-4 sm:p-6 bg-card animate-floatSlow h-[400px] sm:h-[500px] md:h-[670px] flex items-start justify-center pt-4 sm:pt-6">
//               <div className="text-center space-y-4 w-full">
//                 <div className="border-4 border-orange-500 rounded-xl overflow-hidden h-[340px] sm:h-[440px] md:h-[600px] animate-wiggle">
//                   <img
//                     src={robotAvatar}
//                     alt="Garvit's avatar - retro robot"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import robotAvatar from "@/assets/robot.png";
import { motion } from "framer-motion";

const Hero = () => {
  const skills = ["React", "Node.js", "Tailwind", "Gen AI", "APIs", "ML"];

  // Animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as any} },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  };

  return (
    <section className="min-h-screen gradient-hero px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-12 md:py-8 lg:py-8">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
        
        .play-regular {
          font-family: "Play", sans-serif;
        }
        .play-bold {
          font-family: "Play", sans-serif;
          font-weight: 700;
        }

        .retro-card {
          perspective: 1000px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .retro-card:hover {
          transform: scale(1.05) rotateY(8deg) rotateX(3deg);
        }

        .retro-card img {
          transition: transform 0.5s ease;
          transform-style: preserve-3d;
        }

        .retro-card:hover img {
          transform: scale(1.1) rotateY(-8deg) rotateX(-3deg);
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .animate-bounceSlow {
          animation: bounceSlow 1.8s infinite;
        }
        `}
      </style>

      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-full border-4 border-foreground mb-6 sm:mb-8 text-xs md:text-sm">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="font-['Press_Start_2P'] text-[10px] sm:text-xs">
            LEVEL 1 | PLAYER PROFILE
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start md:items-start">
          {/* Left Content */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4 sm:space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight play-bold font-bold">
              Hi, I'm <span className="text-orange-500">Garvit</span> —{" "}
              <span className="text-yellow-500">Dev</span> & Creator
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-['Outfit']">
              I build website — heavy on performance, clean UI, and delightful
              micro-interactions. I design interfaces that feel like menus and
              HUDs in every style.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center gap-3 justify-center">
                <div className="flex items-center justify-center gap-3 flex-nowrap">
                  <Button
                    size="lg"
                    className="retro-button bg-primary text-primary-foreground hover:bg-primary 
               text-sm sm:text-base lg:text-lg 
               px-3 sm:px-5 lg:px-7 py-1.5 sm:py-2 lg:py-3"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1IWz-TWYjV8do9N5Cy0IPZ-4ObHhj9Rd4/view?usp=sharing",
                        "_blank"
                      )
                    }
                  >
                    Resume <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="retro-button bg-secondary text-secondary-foreground hover:bg-secondary border-secondary 
               text-sm sm:text-base lg:text-lg 
               px-3 sm:px-5 lg:px-7 py-1.5 sm:py-2 lg:py-3"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Hire Me
                  </Button>
                </div>
              </div>
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

            {/* Info Grid Section */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              {[
                { title: "Top Project", desc: "Learnify AI" },
                { title: "Current Goal", desc: "Expanding Skillset" },
                { title: "Live", desc: "Mast Mathri " },
                { title: "Next Idea", desc: "Pet Puja" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-background border-4 border-foreground rounded-xl p-4 shadow-[3px_3px_0_#000] hover:translate-y-[-4px] hover:shadow-[6px_6px_0_#000] transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-['Press_Start_2P'] text-sm sm:text-base mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="font-['Outfit'] text-sm sm:text-base text-foreground/80">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Player Card */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center md:justify-end items-start md:-mt-20"
          >
            <div className="retro-card p-4 sm:p-6 bg-card animate-floatSlow h-[400px] sm:h-[500px] md:h-[670px] flex items-start justify-center pt-4 sm:pt-6">
              <div className="text-center space-y-4 w-full">
                <div className="border-4 border-orange-500 rounded-xl overflow-hidden h-[340px] sm:h-[440px] md:h-[600px] animate-wiggle">
                  <img
                    src={robotAvatar}
                    alt="Garvit's avatar - retro robot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
