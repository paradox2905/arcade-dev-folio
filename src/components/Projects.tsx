import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Mast Mathri",
      description:
        "E-commerce website for homemade Indian snacks with modern UI and smooth checkout experience.",
      tech: ["React", "Tailwind", "Firebase"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Travelly",
      description:
        "Travel planning app with interactive maps, Firebase authentication, and real-time location services.",
      tech: ["React", "Google Maps API", "Firebase"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Virtual Mouse",
      description:
        "ML-powered gesture recognition system for hands-free computer control using computer vision.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Crypto Analysis",
      description:
        "Machine learning model analyzing cryptocurrency trends and price predictions with data visualization.",
      tech: ["Python", "TensorFlow", "Pandas"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Resume Parser",
      description:
        "NLP-based system for extracting structured data from resumes with high accuracy and smart categorization.",
      tech: ["Python", "NLP", "spaCy"],
      demoLink: "#",
      codeLink: "#",
    },
  ];

  return (
    <section className="py-20 px-4 gradient-hero" id="projects">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-shadow-retro mb-4">
            MY CREATIONS
          </h2>
        </div>

        {/* Inject floating keyframes */}
        <style>{`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }
          .floating {
            animation: float 6s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="retro-card p-6 bg-card hover:scale-105 transition-all duration-500 float-soft floating"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Thumbnail Placeholder */}
              <div className="w-full h-40 bg-accent/20 border-2 border-foreground rounded-lg mb-4 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                <span className="text-4xl">🎮</span>
              </div>

              <h3 className="text-lg font-['Press_Start_2P'] mb-3 leading-relaxed">
                {project.title}
              </h3>

              <p className="text-sm text-foreground/80 font-['Outfit'] mb-4 min-h-[60px]">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-['Outfit'] font-medium border border-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 retro-button bg-primary text-primary-foreground hover:bg-primary text-xs"
                  onClick={() => window.open(project.demoLink, "_blank")}
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 retro-button bg-secondary text-secondary-foreground hover:bg-secondary border-secondary text-xs"
                  onClick={() => window.open(project.codeLink, "_blank")}
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;












