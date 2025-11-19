import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    number: "01",
    title: "Architecture",
    description: "I design buildings that are purposeful, enduring, and deeply connected to their surroundings.",
    features: [
      "Concept Design",
      "Architectural Planning",
      "3D Visualization & Modeling",
      "Construction Documentation"
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831"
  },
  {
    number: "02",
    title: "Interior Design",
    description: "Beyond surface-level styling, I craft interiors that feel as good as they look.",
    features: [
      "Spatial Identity",
      "Material & Finish Selection",
      "Furniture & Lighting Design",
      "Detail Development"
    ],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2800"
  },
  {
    number: "03",
    title: "Layout Planning",
    description: "I organize environments around people, movement, and use, creating clarity, comfort, and adaptability.",
    features: [
      "Functional Zoning",
      "Human-Centered Design",
      "Circulation Strategy",
      "Flexibility & Future Use"
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053"
  },
  {
    number: "04",
    title: "Project Management",
    description: "I ensure your vision is delivered on time, on budget, and to the highest standards.",
    features: [
      "Timeline Planning",
      "Stakeholder Coordination",
      "Quality Control",
      "Budget & Timeline Tracking"
    ],
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070"
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
