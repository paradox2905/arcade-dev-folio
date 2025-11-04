import { useState } from "react";
import { Star, Coins } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [credits, setCredits] = useState(3);

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

  const insertCoin = () => {
    setCredits((prev) => prev + 1);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 gradient-dark" id="testimonials">
      <div className="container mx-auto max-w-4xl">
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

              {/* Credits Display */}
              <div className="flex items-center gap-3">
                <div className="font-['Press_Start_2P'] text-xs text-black flex items-center gap-2">
                  CREDITS: {credits} <Coins className="w-4 h-4 text-yellow-600" />
                </div>
                <button
                  onClick={insertCoin}
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-yellow-400 hover:bg-yellow-500 border-4 border-black rounded-lg font-['Press_Start_2P'] text-[10px] sm:text-xs shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
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
  );
};

export default Testimonials;
