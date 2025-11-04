import { useState } from "react";
import { Star, Coins } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [credits, setCredits] = useState(3);
  const [jarFill, setJarFill] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [draggedCoin, setDraggedCoin] = useState<number | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [floatingCoins, setFloatingCoins] = useState([
    { id: 1, x: 20, y: 100 },
    { id: 2, x: 20, y: 200 },
    { id: 3, x: 20, y: 300 }
  ]);

  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, Creative Minds LLC",
      avatar: "👩‍💼",
      text: "Working with Garvit was a game-changer. His attention to detail and creative approach made the whole process enjoyable. The final result turned out amazing.",
      rating: 5,
      stage: "1-3",
      score: 5000
    },
    {
      name: "Mike Rodriguez",
      role: "Senior Developer, Tech Corp",
      avatar: "👨‍💻",
      text: "His attention to UI details is unmatched. Garvit creates interfaces that are not just functional, but genuinely delightful to use. A true professional.",
      rating: 5,
      stage: "2-1",
      score: 7500
    },
    {
      name: "Priya Sharma",
      role: "UX Designer, Design Studio",
      avatar: "👩‍🎨",
      text: "Working with Garvit is like having a creative powerhouse on your team. He transforms ideas into polished, production-ready experiences every time.",
      rating: 5,
      stage: "3-2",
      score: 9000
    }
  ];

  const currentTestimonial = testimonials[currentIndex];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDragStart = (coinId: number) => {
    setIsDragging(true);
    setDraggedCoin(coinId);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setIsDragging(false);
    const insertButton = document.getElementById('insert-button');
    if (insertButton && draggedCoin !== null) {
      const rect = insertButton.getBoundingClientRect();
      const isOverButton = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      
      if (isOverButton) {
        // Calculate fill based on remaining coins (3 coins total = 100%)
        const fillPerCoin = Math.ceil(100 / 3);
        const newFill = Math.min(jarFill + fillPerCoin, 100);
        setJarFill(newFill);
        
        // Remove the dragged coin
        setFloatingCoins(prev => prev.filter(coin => coin.id !== draggedCoin));
        
        // If jar is full (99% or more to account for rounding), open form
        if (newFill >= 99) {
          setTimeout(() => {
            setIsFormOpen(true);
            setJarFill(0);
          }, 500);
        } else {
          toast({
            title: "Coin Inserted!",
            description: `Jar filling: ${newFill}%`,
          });
        }
      }
    }
    setDraggedCoin(null);
  };

  const handleInsertClick = () => {
    if (floatingCoins.length === 0) {
      toast({
        title: "No Coins Available!",
        description: "Drag coins to the INSERT button to fill the jar.",
      });
    } else {
      toast({
        title: "Drag Coins Here!",
        description: "Drag the floating coins to this button to fill the jar and unlock the review form.",
      });
    }
  };

  const handleSubmitReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    toast({
      title: "Review Submitted!",
      description: "Thank you for your feedback!",
    });
    
    setIsFormOpen(false);
    setCredits(prev => prev + 1);
    
    // Respawn coins
    setFloatingCoins([
      { id: Date.now() + 1, x: 20, y: 100 },
      { id: Date.now() + 2, x: 20, y: 200 },
      { id: Date.now() + 3, x: 20, y: 300 }
    ]);
  };

  return (
    <>
      {/* Floating Draggable Coins - Outside section for proper fixed positioning */}
      {floatingCoins.map(coin => (
        <div
          key={coin.id}
          draggable
          onDragStart={() => handleDragStart(coin.id)}
          onDragEnd={handleDragEnd}
          className="fixed cursor-grab active:cursor-grabbing animate-bounce"
          style={{ 
            left: `${coin.x}px`, 
            top: `${coin.y}px`,
            animation: `bounce 2s infinite ${coin.id * 0.3}s`,
            zIndex: 9999
          }}
        >
          <div className="w-12 h-12 bg-yellow-400 border-4 border-yellow-600 rounded-full flex items-center justify-center text-2xl shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:scale-110 transition-transform">
            🪙
          </div>
        </div>
      ))}

      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-dark relative" id="testimonials">

      <div className="container mx-auto max-w-4xl relative">
        {/* Arcade Cabinet Frame */}
        <div className="relative">
          {/* Arcade Title */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-['Press_Start_2P'] text-yellow-400 text-shadow-retro tracking-wider">
              ARCADE REVIEWS
            </h2>
          </div>

          {/* Main Arcade Screen */}
          <div className="bg-yellow-100 rounded-3xl border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.4)] p-6 sm:p-8 relative overflow-hidden">
            {/* Game UI Header */}
            <div className="flex justify-between items-center mb-6 font-['Press_Start_2P'] text-xs sm:text-sm">
              <div className="text-black">STAGE {currentTestimonial.stage}</div>
              <div className="text-green-600 flex items-center gap-2">
                <span>▶</span> PLAYING
              </div>
              <div className="text-black">SCORE: {currentTestimonial.score}</div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.2)] p-6 sm:p-8 mb-6">
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-300 border-4 border-black rounded-full flex items-center justify-center text-4xl sm:text-5xl shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                  {currentTestimonial.avatar}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-center font-['Press_Start_2P'] text-xs sm:text-sm leading-relaxed text-black mb-6">
                "{currentTestimonial.text}"
              </p>

              {/* Star Rating */}
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-500" />
                ))}
              </div>

              {/* Name & Title Card */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl border-4 border-black p-4 text-center shadow-[4px_4px_0px_rgba(0,0,0,0.2)]">
                <h4 className="font-['Press_Start_2P'] text-xs sm:text-sm text-white mb-2">
                  {currentTestimonial.name.toUpperCase()}
                </h4>
                <p className="font-['Press_Start_2P'] text-[10px] sm:text-xs text-white/90">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center">
              {/* Navigation Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500 hover:bg-orange-600 border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center text-white font-bold text-xl"
                  aria-label="Previous testimonial"
                >
                  ◄
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 hover:bg-red-600 border-4 border-black rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center text-white font-bold text-xl"
                  aria-label="Next testimonial"
                >
                  ►
                </button>
              </div>

              {/* Jar Fill Display & Insert Button */}
              <div className="flex items-center gap-3">
                {/* Jar Container */}
                <div className="relative w-16 h-20 bg-transparent border-4 border-black rounded-lg overflow-hidden">
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-yellow-400 to-yellow-300 transition-all duration-500"
                    style={{ height: `${jarFill}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center font-['Press_Start_2P'] text-[8px] text-black z-10">
                    {jarFill}%
                  </div>
                </div>

                <div className="font-['Press_Start_2P'] text-xs text-black flex items-center gap-2">
                  CREDITS: {credits} <Coins className="w-4 h-4 text-yellow-600" />
                </div>
                <button
                  id="insert-button"
                  onClick={handleInsertClick}
                  className={`px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 hover:bg-yellow-500 border-4 border-black rounded-lg font-['Press_Start_2P'] text-[10px] sm:text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer ${isDragging ? 'ring-4 ring-green-400 animate-pulse' : ''}`}
                >
                  INSERT
                </button>
              </div>
            </div>
          </div>

          {/* Scrolling Pixel Strip */}
          <div className="mt-6 bg-black rounded-lg border-4 border-black overflow-hidden">
            <div className="animate-marquee whitespace-nowrap py-2">
              <span className="font-['Press_Start_2P'] text-[10px] text-yellow-400 inline-block px-4">
                TESTIMONIAL #{currentIndex + 1} • USE CREDITS TO VIEW MORE • PRESS INSERT COIN TO RELOAD • KEEP PLAYING • TESTIMONIAL #{currentIndex + 1} • USE CREDITS TO VIEW MORE • PRESS INSERT COIN TO RELOAD • KEEP PLAYING •
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Review Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-yellow-100 border-8 border-black shadow-[12px_12px_0px_rgba(0,0,0,0.4)]">
          <DialogHeader>
            <DialogTitle className="font-['Press_Start_2P'] text-xl text-center text-purple-600">
              ADD YOUR REVIEW
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="font-['Press_Start_2P'] text-xs text-black mb-2 block">
                NAME
              </label>
              <Input 
                name="name"
                required
                className="border-4 border-black font-['Press_Start_2P'] text-xs"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="font-['Press_Start_2P'] text-xs text-black mb-2 block">
                ROLE
              </label>
              <Input 
                name="role"
                required
                className="border-4 border-black font-['Press_Start_2P'] text-xs"
                placeholder="Your Position"
              />
            </div>
            <div>
              <label className="font-['Press_Start_2P'] text-xs text-black mb-2 block">
                REVIEW
              </label>
              <Textarea 
                name="review"
                required
                className="border-4 border-black font-['Press_Start_2P'] text-xs min-h-24"
                placeholder="Your feedback..."
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 border-4 border-black font-['Press_Start_2P'] text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
            >
              SUBMIT REVIEW
            </Button>
          </form>
        </DialogContent>
      </Dialog>

        {/* Marquee Animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee span {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
    </>
  );
};

export default Testimonials;
