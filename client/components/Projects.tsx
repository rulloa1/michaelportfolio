const projects = [
  {
    title: "S. Florida High Rise Luxe Condo",
    location: "S. Florida",
    category: "Residential Construction",
    year: "2024",
    description: "4,200 sq ft beachfront condo renovation featuring ocean views, Italian marble, smart home integration, and professional kitchen. Completed in 14 months.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.jpg"
  },
  {
    title: "High Alpine Mountain Ranch",
    location: "Montana",
    category: "Residential Construction",
    year: "2024",
    description: "8,500 sq ft luxury ranch with exposed timber, custom stone, vaulted ceilings, and mountain panoramas. Completed in 24 months.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.jpg"
  },
  {
    title: "Syracuse House Craftsman Estate",
    location: "N. Utah",
    category: "Design/Build",
    year: "2023",
    description: "6,200 sq ft craftsman-style estate with 400 tons of decorative stone, native plantings, and two-acre landscaping. Completed in 18 months.",
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-1.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects-section" className="py-24 bg-charcoal-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 uppercase mb-16">
          Projects
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div
                  className={`relative group ${isEven ? '' : 'lg:col-start-2'}`}
                >
                  <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                >
                  <div className="space-y-6">
                    <h3 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-charcoal-600">
                      <span className="px-4 py-2 bg-white rounded-full border border-charcoal-200">
                        {project.location}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-charcoal-400" />
                      <span className="px-4 py-2 bg-white rounded-full border border-charcoal-200">
                        {project.category}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-charcoal-400" />
                      <span className="px-4 py-2 bg-white rounded-full border border-charcoal-200">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-lg text-charcoal-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
