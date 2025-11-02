import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const projects = [
    {
      title: "PROJECT ONE",
      description:
        "E-commerce website for homemade Indian snacks with modern UI and smooth checkout experience.",
      tech: ["React", "Tailwind", "Firebase"],
      features: [
        "Real-time cart updates",
        "Secure payment gateway",
        "Mobile-first design",
        "Admin dashboard"
      ],
      demoLink: "#",
      image: "🎮"
    },
    {
      title: "PROJECT TWO",
      description:
        "Full-stack app with real-time multiplayer features.",
      tech: ["Node", "Express", "MongoDB"],
      features: [
        "Socket-based rooms",
        "Atomic updates",
        "CI/CD pipeline",
        "User authentication"
      ],
      demoLink: "#",
      image: "🎯"
    },
    {
      title: "PROJECT THREE",
      description:
        "ML-powered gesture recognition system for hands-free computer control using computer vision.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      features: [
        "Hand tracking",
        "Gesture commands",
        "Real-time processing",
        "Custom training"
      ],
      demoLink: "#",
      image: "🤖"
    },
    {
      title: "PROJECT FOUR",
      description:
        "Machine learning model analyzing cryptocurrency trends and price predictions with data visualization.",
      tech: ["Python", "TensorFlow", "Pandas"],
      features: [
        "Price prediction",
        "Trend analysis",
        "Data visualization",
        "Historical data"
      ],
      demoLink: "#",
      image: "📊"
    },
    {
      title: "PROJECT FIVE",
      description:
        "NLP-based system for extracting structured data from resumes with high accuracy and smart categorization.",
      tech: ["Python", "NLP", "spaCy"],
      features: [
        "Text extraction",
        "Smart categorization",
        "Export to JSON",
        "Batch processing"
      ],
      demoLink: "#",
      image: "📄"
    },
  ];

  const nextProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("next");
    setTimeout(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
      setIsTransitioning(false);
    }, 400);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection("prev");
    setTimeout(() => {
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
      setIsTransitioning(false);
    }, 400);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentProject) return;
    setIsTransitioning(true);
    setDirection(index > currentProject ? "next" : "prev");
    setTimeout(() => {
      setCurrentProject(index);
      setIsTransitioning(false);
    }, 400);
  };

  const currentProj = projects[currentProject];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-hero" id="projects">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-shadow-retro mb-4 font-['Press_Start_2P']">
            PROJECT SHOWCASE <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl animate-wiggle inline-block">🎮</span>
          </h2>
        </div>

        {/* Retro Computer Window Frame */}
        <div className="relative max-w-6xl mx-auto">
          {/* Window Container */}
          <div 
            className="relative rounded-3xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.3)] overflow-hidden"
            style={{ backgroundColor: "#FFF4D6" }}
          >
            {/* Title Bar */}
            <div className="bg-gray-300 border-b-4 border-black px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                </div>
                <span className="text-xs font-mono font-bold ml-2">RETRO PROJECT WINDOW</span>
              </div>
              <span className="text-[10px] font-mono hidden sm:block">Arrow keys + Click dots</span>
            </div>

            {/* Main Content Area */}
            <div className="relative bg-white/90 p-4 sm:p-6 md:p-8 border-4 border-gray-200 m-4 rounded-xl">
              {/* Left/Right Arrow Buttons on edges */}
              <button
                onClick={prevProject}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-4 border-black text-white hover:bg-gray-700 transition-all z-10 flex items-center justify-center shadow-lg"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextProject}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800 border-4 border-black text-white hover:bg-gray-700 transition-all z-10 flex items-center justify-center shadow-lg"
                aria-label="Next project"
              >
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Project Content Grid */}
              <div 
                className={`grid md:grid-cols-2 gap-6 md:gap-8 transition-all duration-[800ms] ease-in-out ${
                  isTransitioning 
                    ? direction === "next" 
                      ? "opacity-0 translate-x-[-100px] translate-y-[50px]" 
                      : "opacity-0 translate-x-[-100px] translate-y-[50px]"
                    : "opacity-100 translate-x-0 translate-y-0"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                }}
              >
                {/* Left: Project Preview */}
                <div className="flex items-center justify-center">
                  <div className="w-full bg-gray-800 rounded-xl border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                    <div className="bg-gray-900 rounded-lg border-2 border-gray-700 aspect-video flex items-center justify-center text-6xl sm:text-7xl animate-float">
                      {currentProj.image}
                    </div>
                    {/* Screen Frame Effect */}
                    <div className="mt-2 flex gap-1 justify-center">
                      {projects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => goToProject(idx)}
                          className={`w-2 h-2 rounded-full border border-black transition-all ${
                            idx === currentProject ? "bg-orange-500" : "bg-gray-400"
                          }`}
                          aria-label={`Go to project ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Project Details */}
                <div className="flex flex-col justify-center space-y-4">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-['Press_Start_2P'] leading-relaxed" style={{ color: "#FF6B35" }}>
                    {currentProj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 font-['Outfit']">
                    {currentProj.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {currentProj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-xs font-mono font-bold border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-gray-600 mb-2">KEY FEATURES:</h4>
                    <ul className="space-y-1.5 text-sm font-['Outfit']">
                      {currentProj.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-orange-500 mr-2">▸</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* View Project Button */}
                  <Button
                    className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white font-mono font-bold border-4 border-black rounded-lg shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                    onClick={() => window.open(currentProj.demoLink, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    VIEW PROJECT
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons Below */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevProject}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 border-4 border-black rounded-lg font-mono font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Prev
            </button>
            <button
              onClick={nextProject}
              className="px-6 py-2 bg-gray-300 hover:bg-gray-400 border-4 border-black rounded-lg font-mono font-bold shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;












