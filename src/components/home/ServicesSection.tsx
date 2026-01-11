import {
  TrendingUp,
  Target,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: TrendingUp,
    title: "Marketing & Growth",
    description:
      "Lead-Generierung, Performance Marketing und Social Media Strategien für nachhaltiges Wachstum.",
    features: ["Lead Generation", "Performance Ads", "Social Media", "Content Marketing"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Sales-Systeme",
    description:
      "CRM-Implementierung, Sales Automation und Pipeline Management für mehr Abschlüsse.",
    features: ["CRM Setup", "Sales Automation", "Pipeline Optimierung", "Outreach Systeme"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Webentwicklung",
    description:
      "Moderne Websites, Web-Apps und E-Commerce Lösungen die konvertieren und begeistern.",
    features: ["Websites", "Web-Apps", "E-Commerce", "Landing Pages"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "Beratung",
    description:
      "Strategische Beratung und Business Development für fundierte Entscheidungen.",
    features: ["Strategie", "Business Development", "Prozessoptimierung", "Workshops"],
    color: "from-green-500 to-emerald-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4">Unsere Leistungen</p>
          <h2 className="section-heading mb-4">
            Alles für Ihr <span className="gradient-text">Wachstum</span>
          </h2>
          <p className="section-subheading mx-auto">
            Wir kombinieren Marketing-Expertise, technisches Know-how und
            strategische Beratung zu ganzheitlichen Lösungen.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                to="/leistungen"
                className="inline-flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all"
              >
                Mehr erfahren
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
