const kpis = [
  { value: "100+", label: "Erfolgreich umgesetzte Projekte" },
  { value: "250+", label: "Zufriedene Partner" },
  { value: "4+", label: "Jahre Erfahrung" },
  { value: "24h", label: "Durchschnittliche Reaktionszeit" },
];

const KPISection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            Zahlen, die <span className="gradient-text">überzeugen</span>
          </h2>
          <p className="section-subheading mx-auto">
            Unsere Erfahrung und unser Engagement spiegeln sich in unseren
            Ergebnissen wider.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="feature-card text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {kpi.value}
              </div>
              <p className="text-sm text-muted-foreground">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;
