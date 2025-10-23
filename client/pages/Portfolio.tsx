import { useState } from "react";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Lakeside Estate",
    description: "A stunning 12,000 sq ft lakeside residence featuring floor-to-ceiling windows, natural stone accents, and sustainable design elements.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    category: "Residential",
  },
  {
    id: 2,
    title: "Urban Commercial Plaza",
    description: "Contemporary multi-story commercial complex with integrated retail spaces, restaurants, and office suites. Award-winning architectural design.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    category: "Commercial",
  },
  {
    id: 3,
    title: "Coastal Luxury Retreat",
    description: "Exclusive beachfront property with infinity pools, outdoor entertainment areas, and premium finishes throughout.",
    image: "https://images.unsplash.com/photo-1570129477492-45efb5deb10f?w=800&h=600&fit=crop",
    category: "Residential",
  },
  {
    id: 4,
    title: "Innovation Tech Campus",
    description: "State-of-the-art technology campus featuring collaborative workspaces, cutting-edge facilities, and sustainable architecture.",
    image: "https://images.unsplash.com/photo-1577720643272-265f434ef0ac?w=800&h=600&fit=crop",
    category: "Commercial",
  },
  {
    id: 5,
    title: "Mountain Lodge Sanctuary",
    description: "Rustic yet refined alpine lodge with locally-sourced materials, panoramic views, and luxurious amenities.",
    image: "https://images.unsplash.com/photo-1554436629-51d7a1c8aaae?w=800&h=600&fit=crop",
    category: "Residential",
  },
  {
    id: 6,
    title: "Heritage Restoration Project",
    description: "Meticulous restoration of a historic property preserving original character while integrating modern luxury and functionality.",
    image: "https://images.unsplash.com/photo-1512207736139-c3bab6f7e00b?w=800&h=600&fit=crop",
    category: "Restoration",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-50 via-charcoal-100 to-charcoal-200">
      {/* Header */}
      <div className="bg-charcoal-900 text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-6 bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase">
              FEATURED WORKS
            </span>
            <div className="h-[1px] w-6 bg-gold-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Portfolio Collection
          </h1>
          <p className="text-charcoal-300 text-base md:text-lg max-w-2xl font-light">
            Explore our curated selection of premium construction and design projects, 
            each representing our commitment to excellence and innovation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer h-96"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-full rounded-lg overflow-hidden shadow-lg bg-charcoal-800">
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 font-display">
                      {project.title}
                    </h3>
                    <p className="text-charcoal-200 text-sm line-clamp-2 font-light">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg
                    className="w-5 h-5 text-gold-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
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
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isClosing ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundColor: isClosing
              ? "rgba(0, 0, 0, 0)"
              : "rgba(0, 0, 0, 0.9)",
          }}
          onClick={handleClose}
        >
          {/* Modal Container */}
          <div
            className={`relative max-w-4xl w-full transform transition-all duration-300 ${
              isClosing
                ? "scale-95 opacity-0"
                : "scale-100 opacity-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 z-20 p-2 text-white hover:text-gold-500 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto object-cover"
              />
              
              {/* Top-right accent */}
              <div className="absolute top-4 right-4 px-4 py-2 rounded-sm bg-gold-500/90 backdrop-blur-sm">
                <span className="text-charcoal-900 text-xs font-semibold tracking-widest uppercase">
                  {selectedProject.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-charcoal-900 mb-3 font-display">
                {selectedProject.title}
              </h2>

              <div className="w-12 h-1 bg-gold-500 mb-6" />

              <p className="text-charcoal-700 text-lg leading-relaxed mb-8 font-light">
                {selectedProject.description}
              </p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 pb-8 border-b border-charcoal-200">
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Category
                  </p>
                  <p className="text-charcoal-900 font-medium">
                    {selectedProject.category}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Status
                  </p>
                  <p className="text-charcoal-900 font-medium">Completed</p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Year
                  </p>
                  <p className="text-charcoal-900 font-medium">2024</p>
                </div>
                <div>
                  <p className="text-xs text-gold-600 font-semibold tracking-widest uppercase mb-2">
                    Quality
                  </p>
                  <p className="text-charcoal-900 font-medium">Premium</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button
                  onClick={handleClose}
                  className="flex-1 px-6 py-3 text-charcoal-900 font-semibold tracking-widest text-sm border-2 border-charcoal-900 hover:bg-charcoal-100 transition-colors duration-300 rounded-sm uppercase"
                >
                  Close
                </button>
                <button className="flex-1 px-6 py-3 text-white font-semibold tracking-widest text-sm bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm uppercase">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Back Button */}
      <a
        href="/"
        className="fixed bottom-6 left-6 px-4 py-3 text-charcoal-900 font-semibold tracking-widest text-xs bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm shadow-lg uppercase z-10"
      >
        ← Back
      </a>
    </div>
  );
}
