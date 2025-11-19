export default function About() {
  return (
    <section id="about-section" className="py-24 bg-charcoal-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900">
            About
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-charcoal-700 leading-relaxed">
                As an architectural professional, I specialize in creating spaces that blend innovative design with functional excellence. My approach combines modern aesthetics with timeless principles to deliver projects that exceed expectations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-charcoal-700 leading-relaxed">
                With a commitment to sustainable design and attention to detail, I work closely with clients to bring their vision to life. Every project is an opportunity to create something meaningful and lasting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
