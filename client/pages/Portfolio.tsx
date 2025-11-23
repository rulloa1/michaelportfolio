import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  gallery: string[];
}

const BASE_URL = "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects";

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "S. Florida High Rise Luxe Condo",
    description:
      "4,200 sq ft beachfront condo renovation featuring ocean views, Italian marble, smart home integration, and professional kitchen.",
    image: `${BASE_URL}/miami-beach-cover.jpg`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/miami-beach-cover.jpg`,
      `${BASE_URL}/miami-beach-1.jpg`,
      `${BASE_URL}/miami-beach-2.jpg`,
      `${BASE_URL}/miami-beach-3.jpg`,
    ],
  },
  {
    id: 2,
    title: "High Alpine Mountain Ranch",
    description:
      "8,500 sq ft luxury ranch with exposed timber, custom stone, vaulted ceilings, and mountain panoramas.",
    image: `${BASE_URL}/alpine-ranch-cover.jpg`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/alpine-ranch-cover.jpg`,
      `${BASE_URL}/alpine-ranch-1.jpg`,
      `${BASE_URL}/alpine-ranch-2.jpg`,
      `${BASE_URL}/alpine-ranch-3.jpg`,
      `${BASE_URL}/alpine-ranch-4.jpg`,
    ],
  },
  {
    id: 3,
    title: "Syracuse House Craftsman Estate",
    description:
      "6,200 sq ft craftsman-style estate with 400 tons of decorative stone, native plantings, and two-acre landscaping.",
    image: `${BASE_URL}/syracuse-1.jpg`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/syracuse-1.jpg`,
      `${BASE_URL}/syracuse-2.jpg`,
      `${BASE_URL}/syracuse-3.jpg`,
      `${BASE_URL}/syracuse-4.jpg`,
    ],
  },
  {
    id: 4,
    title: "Mountain Mid-Rise Luxe Condo",
    description:
      "2,800 sq ft condo featuring spa bathrooms, Calacatta marble, walnut accents, and heated floors.",
    image: `${BASE_URL}/montana-cover.jpg`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/montana-cover.jpg`,
      `${BASE_URL}/montana-1.jpg`,
      `${BASE_URL}/montana-2.jpg`,
      `${BASE_URL}/montana-3.jpg`,
    ],
  },
  {
    id: 5,
    title: "Ultra Luxe Private Club Resort Pool",
    description:
      "3-acre amenity featuring 4,500 sq ft pool, swim-up bar, pool houses, fire pits, and outdoor kitchen.",
    image: `${BASE_URL}/pool-design-cover.jpg`,
    category: "Hospitality",
    gallery: [
      `${BASE_URL}/pool-design-cover.jpg`,
      `${BASE_URL}/pool-design-1.jpg`,
      `${BASE_URL}/pool-design-2.jpg`,
      `${BASE_URL}/pool-design-3.jpg`,
    ],
  },
  {
    id: 6,
    title: "South Coast Complete Remodel",
    description:
      "3,800 sq ft residence with panoramic ocean views, white oak flooring, gourmet kitchen, and spa bathrooms.",
    image: `${BASE_URL}/southcoast-cover.jpg`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/southcoast-cover.jpg`,
      `${BASE_URL}/southcoast-2.jpg`,
      `${BASE_URL}/southcoast-3.jpg`,
      `${BASE_URL}/southcoast-4.jpg`,
    ],
  },
  {
    id: 7,
    title: "Carmel Valley Custom Residence",
    description:
      "4,800 sq ft custom residence with exposed steel beams, floor-to-ceiling glass, and native habitat restoration.",
    image: `${BASE_URL}/carmel-valley-new-cover.jpg`,
    category: "Design/Build",
    gallery: [
      `${BASE_URL}/carmel-valley-new-cover.jpg`,
      `${BASE_URL}/carmel-valley-new-1.jpg`,
      `${BASE_URL}/carmel-valley-new-2.jpg`,
    ],
  },
  {
    id: 8,
    title: "North Florida Renovation/Addition",
    description:
      "3,600 sq ft home with 1,200 sq ft addition including new roof, impact windows, and updated systems.",
    image: `${BASE_URL}/north-florida-cover.jpg`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/north-florida-cover.jpg`,
      `${BASE_URL}/north-florida-1.jpg`,
      `${BASE_URL}/north-florida-2.jpg`,
      `${BASE_URL}/north-florida-3.jpg`,
    ],
  },
  {
    id: 9,
    title: "Abaco Luxe Boat House",
    description:
      "1,800 sq ft luxury boat house with hurricane-resistant construction and mahogany millwork.",
    image: `${BASE_URL}/abaco-luxe-boathouse-cover.jpg`,
    category: "Residential",
    gallery: [
      `${BASE_URL}/abaco-luxe-boathouse-cover.jpg`,
      `${BASE_URL}/abaco-luxe-boathouse-1.jpg`,
    ],
  },
  {
    id: 10,
    title: "Coastal Mountain Residence",
    description:
      "1.2-acre mountain site with 3,000 cubic yards earth movement, 320 linear feet retaining walls, 900 sq ft garage.",
    image: `${BASE_URL}/bigsur-cover.jpg`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/bigsur-cover.jpg`,
      `${BASE_URL}/bigsur-1.jpg`,
      `${BASE_URL}/bigsur-2.jpg`,
      `${BASE_URL}/bigsur-3.jpg`,
    ],
  },
  {
    id: 11,
    title: "Carmel Knolls Transformation",
    description:
      "2,200 sq ft complete renovation with new roofline, 18 energy-efficient windows, 1,400 sq ft composite decking.",
    image: `${BASE_URL}/carmel-knolls-cover.jpg`,
    category: "Civil",
    gallery: [
      `${BASE_URL}/carmel-knolls-cover.jpg`,
      `${BASE_URL}/carmel-knolls-1.jpg`,
      `${BASE_URL}/carmel-knolls-2.jpg`,
      `${BASE_URL}/carmel-knolls-3.jpg`,
    ],
  },
  {
    id: 12,
    title: "Laguna Grande Spanish Revival",
    description:
      "12,000 sq ft commercial complex featuring clay roof tiles, ironwork, arched colonnades, balancing tradition with modern function.",
    image: `${BASE_URL}/laguna-grande-cover.jpg`,
    category: "Commercial",
    gallery: [
      `${BASE_URL}/laguna-grande-cover.jpg`,
      `${BASE_URL}/laguna-1.jpg`,
      `${BASE_URL}/laguna-2.jpg`,
      `${BASE_URL}/laguna-3.jpg`,
    ],
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
      setShowGallery(false);
      setCurrentImageIndex(0);
    }, 300);
  };

  const openGallery = () => {
    setShowGallery(true);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
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
            Explore our curated selection of premium construction and design
            projects, each representing our commitment to excellence and
            innovation.
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
              isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
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

            {/* Image Container / Gallery View */}
            {showGallery ? (
              <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6 bg-charcoal-900">
                <img
                  src={selectedProject.gallery[currentImageIndex]}
                  alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-auto object-cover"
                />

                {/* Gallery Navigation */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-500 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-900/80 text-white flex items-center justify-center hover:bg-gold-500 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-charcoal-900/80 text-white text-sm">
                  {currentImageIndex + 1} / {selectedProject.gallery.length}
                </div>

                {/* Back to Details Button */}
                <button
                  onClick={() => setShowGallery(false)}
                  className="absolute top-4 left-4 px-4 py-2 rounded-sm bg-gold-500/90 backdrop-blur-sm text-charcoal-900 text-xs font-semibold tracking-widest uppercase hover:bg-gold-600 transition-colors"
                >
                  ← Back
                </button>
              </div>
            ) : (
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
            )}

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
                <button
                  onClick={openGallery}
                  className="flex-1 px-6 py-3 text-white font-semibold tracking-widest text-sm bg-gold-500 hover:bg-gold-600 transition-colors duration-300 rounded-sm uppercase flex items-center justify-center gap-2"
                >
                  <Images className="w-4 h-4" />
                  View Gallery ({selectedProject.gallery.length})
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
