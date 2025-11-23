export default function About() {
  return (
    <section id="about-section" className="py-24 bg-charcoal-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal-900">
            About Me
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-charcoal-700 leading-relaxed mb-4">
                Through my experience of 37 years as a Business, Design, and Construction professional, I have found that exceptional results come from exceptional teams.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-4">
                My approach is simple: bring together the right people, create an environment built on mutual respect, and stay closely attuned to client feedback throughout every phase of a project.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                I've built my career on the universal business principle that quality construction isn't just about meeting standards—it's about exceeding them. By combining rigorous processes with forward-thinking design and fostering a collaborative team culture, excellence is no longer simply a goal, but an inevitable result.
              </p>
              <p className="text-right text-charcoal-600 mt-4 italic">
                -Michael Chandler
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">My Philosophy</h3>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Superior construction is accomplished through three core elements: assembling the right group of people, empowering them with respect and environment, and providing supportive leadership with real-time feedback.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">My Commitment</h3>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                Every client, every project, every time: I'm dedicated to exceeding expectations under all conditions. It's not just a goal—it's the standard by which I measure success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
