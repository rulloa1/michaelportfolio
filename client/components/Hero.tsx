import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Simple fade-in animation for the title
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = 'opacity 1.5s ease-in-out';
          titleRef.current.style.opacity = '1';
        }
      }, 300);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053')",
        }}
      />

      {/* Animated Overlay Blocks */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full bg-charcoal-900 animate-slide-left" />
        <div className="w-1/2 h-full bg-charcoal-900 animate-slide-right" />
      </div>

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-6">
          <h1
            ref={titleRef}
            className="text-[120px] md:text-[180px] lg:text-[240px] font-serif font-bold text-gold-400 text-center leading-none"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Portfolio
          </h1>
        </div>
      </div>

      {/* Foreground Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070')",
        }}
      />
    </section>
  );
}
