import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    alt: "Architecture detail"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    alt: "Modern interior"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    alt: "Exterior view"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=2070",
    alt: "Architectural design"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    alt: "Building facade"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery-section" className="py-24 pb-48 bg-charcoal-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-wider text-charcoal-600 mb-4 font-semibold">
            Visual Showcase
          </h2>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 uppercase">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`
                relative overflow-hidden rounded-lg cursor-pointer group
                ${index === 1 ? 'row-span-2' : ''}
                ${index === 0 || index === 2 ? 'col-span-1' : ''}
              `}
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative h-64 md:h-80">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-all duration-500 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl bg-transparent border-none p-0">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery image"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
