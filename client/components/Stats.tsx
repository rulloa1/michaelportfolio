const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "100+", label: "Satisfied Clients" },
  { value: "25+", label: "Awards Received" }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-sm uppercase tracking-wider text-charcoal-600 mb-12 font-semibold">
          By the Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-6xl md:text-7xl font-serif font-bold text-gold-600 mb-4">
                {stat.value}
              </div>
              <div className="text-lg text-charcoal-600 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
