import { Workflow, Users, Lightbulb, Target, BarChart3, Rocket } from "lucide-react";

const features = [
  {
    icon: <Workflow className="w-6 h-6" />,
    title: "Automated Leadflow",
    description: "Tägliche Neukontakte ohne manuelle Recherche.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Decision Mapping",
    description: "Wir identifizieren die echten Entscheider hinter jeder Stellenausschreibung.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Rulebreaker Offers",
    description: "Wir entwickeln Angebote, die sich vom Markt abheben und sofort Relevanz erzeugen.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Optimized Selling System",
    description: "Ein klar strukturierter Vertriebsprozess, der vom Erstkontakt bis zum Abschluss planbar funktioniert.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Driven Insights",
    description: "Wir messen, analysieren und optimieren jeden Schritt, um deine Abschlussquote messbar zu steigern.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Scalable Growth Engine",
    description: "Ein skalierbares System, das mit deinem Umsatz wächst, statt dich zu bremsen.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">Systemvertrieb statt Zufallserfolge.</h2>
          <p className="section-subheading mx-auto">
            Unsere Systeme vereinen Automatisierung, Datenintelligenz und klare Vertriebslogik. Damit aus Interessenten Kunden werden und Wachstum planbar bleibt.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;