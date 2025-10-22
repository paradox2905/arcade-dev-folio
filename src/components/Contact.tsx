import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon 🎮");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/garvbansal06",
      label: "garvbansal06"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/garvitbansal",
      label: "garvitbansal"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:contact@garvitbansal.dev",
      label: "contact@garvitbansal.dev"
    }
  ];

  return (
    <section className="py-20 px-4 gradient-hero" id="contact">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl text-shadow-retro mb-4">
            LET'S CONNECT
          </h2>
          <p className="text-lg text-foreground/80 font-['Outfit']">
            Ready to level up your project? Send me a message!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="retro-card p-6 md:p-8 bg-card animate-slideInLeft animate-floatSlow">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-['Outfit'] font-medium mb-2">
                  Player Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-2 border-foreground focus:border-primary font-['Outfit']"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-['Outfit'] font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-2 border-foreground focus:border-primary font-['Outfit']"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-['Outfit'] font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-2 border-foreground focus:border-primary min-h-[120px] font-['Outfit']"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full retro-button bg-primary text-primary-foreground hover:bg-primary"
              >
                Send Message <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-4 animate-slideInRight">
            <div className="retro-card p-6 bg-card animate-floatSlow">
              <h3 className="text-lg font-['Press_Start_2P'] mb-6 leading-relaxed">
                FIND ME ON
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 bg-accent/20 hover:bg-accent/40 border-2 border-foreground rounded-lg transition-all group animate-float"
                    >
                      <div className="p-2 bg-primary border-2 border-foreground rounded animate-pulse-glow">
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-['Press_Start_2P'] group-hover:text-primary transition-colors">
                          {social.name}
                        </p>
                        <p className="text-xs text-muted-foreground font-['Outfit'] mt-1">
                          {social.label}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="retro-card p-6 bg-card animate-float">
              <h3 className="text-lg font-['Press_Start_2P'] mb-4 leading-relaxed">
                QUICK STATS
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-['Outfit']">Response Time</span>
                  <span className="text-sm font-['Outfit'] font-bold text-primary">{"<24 hours"}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-['Outfit']">Projects Completed</span>
                  <span className="text-sm font-['Outfit'] font-bold text-primary">10+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-['Outfit']">Coffee Consumed</span>
                  <span className="text-sm font-['Outfit'] font-bold text-primary">∞</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
