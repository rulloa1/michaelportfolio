import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [isFlipping, setIsFlipping] = useState(false);

  const handleOpenPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-charcoal-50 via-charcoal-100 to-charcoal-200 perspective overflow-hidden">
      <div className="relative w-full h-screen flex items-center justify-center perspective">
        {/* Book Cover Container */}
        <div
          className={`relative w-full max-w-2xl aspect-[9/12] max-h-[90vh] ${
            isFlipping ? "animate-book-flip" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Book Cover - Front */}
          <div
            className={`absolute inset-0 rounded-lg shadow-2xl overflow-hidden backface-hidden ${
              isFlipping ? "invisible" : ""
            }`}
            style={{
              backfaceVisibility: "hidden",
              background: `linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)`,
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-12 right-12 w-32 h-32 bg-gold-500 opacity-5 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-12 w-40 h-40 bg-gold-500 opacity-5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
              {/* Top Accent Line */}
              <div className="mb-12 flex items-center gap-4">
                <div className="h-[1px] w-8 bg-gold-500" />
                <div className="text-gold-500 text-sm font-semibold tracking-widest">
                  PORTFOLIO
                </div>
                <div className="h-[1px] w-8 bg-gold-500" />
              </div>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight font-display">
                MICHAEL<br />CHANDLER
              </h1>

              {/* Divider */}
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent my-8" />

              {/* Tagline */}
              <p className="text-base md:text-lg text-charcoal-200 font-light tracking-wide max-w-xs mb-16 font-sans">
                High-End Construction &<br />
                <span className="text-gold-500">Bespoke Building Solutions</span>
              </p>

              {/* CTA Button */}
              <button
                onClick={handleOpenPortfolio}
                disabled={isFlipping}
                type="button"
                className="relative px-8 py-3 text-charcoal-900 font-semibold tracking-widest text-sm bg-gold-500 hover:bg-gold-600 active:bg-gold-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors duration-300 rounded-sm shadow-lg overflow-visible group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gold-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
                <span className="relative z-10 uppercase">Open Portfolio</span>
              </button>

              {/* Bottom Accent */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gold-500/60" />
                <div className="w-2 h-2 rounded-full bg-gold-500/40" />
                <div className="w-2 h-2 rounded-full bg-gold-500/20" />
              </div>
            </div>
          </div>

          {/* Book Back - Hidden when not flipping */}
          <div
            className={`absolute inset-0 rounded-lg shadow-2xl overflow-hidden bg-gold-500 flex items-center justify-center ${
              isFlipping ? "visible" : "hidden"
            }`}
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-charcoal-900 text-center px-8">
              <p className="text-lg font-light font-display">
                Discover Elegant Craftsmanship
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
