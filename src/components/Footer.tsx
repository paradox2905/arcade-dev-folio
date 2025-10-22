import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 gradient-dark border-t-4 border-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm md:text-base text-white font-['Outfit'] flex items-center justify-center gap-2">
            © 2025 Garvit Bansal — Built with 
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            & React
          </p>
          <p className="text-xs text-secondary/60 font-['Outfit'] mt-2">
            Powered by retro vibes and endless coffee ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
