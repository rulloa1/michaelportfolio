import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    number: "01",
    title: "Planning & Feasibility",
    description: "Strategic planning to ensure project viability from concept to completion.",
    features: [
      "Feasibility Studies",
      "Site Analysis",
      "Permitting & Entitlements",
      "Financial Planning"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/bigsur-cover.jpg"
  },
  {
    number: "02",
    title: "Design",
    description: "Comprehensive design solutions that bring your vision to life.",
    features: [
      "Architectural Design",
      "Interior Design",
      "Landscape Design",
      "3D Visualization"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/carmel-knolls-cover.jpg"
  },
  {
    number: "03",
    title: "Construction",
    description: "Expert execution and quality craftsmanship on every project.",
    features: [
      "Ground-Up Construction",
      "Renovations & Remodels",
      "Structural Work",
      "Finish Carpentry"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/syracuse-1.jpg"
  },
  {
    number: "04",
    title: "Project Management",
    description: "Seamless coordination from start to finish ensuring on-time, on-budget delivery.",
    features: [
      "Schedule Management",
      "Budget Control",
      "Vendor Coordination",
      "Progress Reporting"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.jpg"
  },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Rigorous standards and inspections to ensure excellence in every detail.",
    features: [
      "Quality Control",
      "Safety Compliance",
      "Code Compliance",
      "Final Inspections"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.jpg"
  },
  {
    number: "06",
    title: "Sustainability",
    description: "Environmentally responsible practices for a greener future.",
    features: [
      "Green Building",
      "Energy Efficiency",
      "Sustainable Materials",
      "LEED Consulting"
    ],
    image: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-cover.jpg"
  }
];

export default function Services() {
  return (
    <section id="services-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900 uppercase">
            Services
          </h2>

          <div className="space-y-0">
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <div key={service.number}>
                  <div className="h-px bg-charcoal-200 mb-6" />

                  <AccordionItem value={`item-${index}`} className="border-none mb-6">
                    <div className="grid grid-cols-[60px_1fr] gap-6">
                      <div className="text-2xl font-bold text-charcoal-400 pt-2">
                        {service.number}
                      </div>

                      <div>
                        <AccordionTrigger className="text-left hover:no-underline group py-2 mb-4">
                          <h3 className="text-3xl font-serif font-bold text-charcoal-900 group-hover:text-gold-600 transition-colors">
                            {service.title}
                          </h3>
                        </AccordionTrigger>

                        <AccordionContent>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
                            <div>
                              <p className="text-lg text-charcoal-700 mb-6">
                                {service.description}
                              </p>

                              <div className="space-y-3">
                                {service.features.map((feature) => (
                                  <div key={feature} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                                    <p className="text-charcoal-800">{feature}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="h-64 lg:h-full rounded-lg overflow-hidden">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                          </div>
                        </AccordionContent>
                      </div>
                    </div>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>

            <div className="h-px bg-charcoal-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
