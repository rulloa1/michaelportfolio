import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Working with this architect was transformative for our project. The attention to detail and innovative design solutions exceeded all our expectations. Highly professional and creative.",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    id: 2,
    text: "An exceptional architectural experience from start to finish. The design perfectly balances aesthetics with functionality, creating spaces that truly enhance our daily lives.",
    author: "Michael Chen",
    role: "Developer"
  },
  {
    id: 3,
    text: "The level of expertise and commitment to excellence is unmatched. Our commercial space has become a landmark in the community, thanks to the brilliant design work.",
    author: "Emily Rodriguez",
    role: "Business Owner"
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews-section" className="py-24 bg-charcoal-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm uppercase tracking-wider text-charcoal-400 mb-4 font-semibold">
              Hear Our Clients
            </h2>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
              Reviews
            </h2>
          </div>

          <div className="relative">
            {/* Testimonial Content */}
            <div className="text-center mb-12 min-h-[200px] flex items-center justify-center">
              <p className="text-xl md:text-2xl text-charcoal-100 leading-relaxed italic px-8">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            {/* Author Info */}
            <div className="text-center mb-12">
              <p className="text-gold-400 font-semibold text-lg">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-charcoal-400 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-charcoal-600 flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 transition-colors group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-charcoal-400 group-hover:text-white" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? 'bg-gold-500'
                        : 'bg-charcoal-600 hover:bg-charcoal-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-charcoal-600 flex items-center justify-center hover:bg-gold-600 hover:border-gold-600 transition-colors group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-charcoal-400 group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
