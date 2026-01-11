import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Target,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import MarketingAnimation from "@/components/animations/MarketingAnimation";
import SalesAnimation from "@/components/animations/SalesAnimation";
import WebdevAnimation from "@/components/animations/WebdevAnimation";
import BeratungAnimation from "@/components/animations/BeratungAnimation";

const animations = [
  MarketingAnimation,
  SalesAnimation,
  WebdevAnimation,
  BeratungAnimation,
];

const services = [
  {
    icon: TrendingUp,
    title: "Marketing & Growth",
    description:
      "Wir entwickeln und implementieren Marketing-Strategien, die messbare Ergebnisse liefern und Ihr Unternehmen nachhaltig wachsen lassen.",
    features: [
      "Lead Generation & Conversion Optimierung",
      "Performance Marketing (Google Ads, Meta Ads)",
      "Social Media Marketing & Management",
      "Content Marketing & SEO",
      "E-Mail Marketing & Automation",
      "Analytics & Reporting",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Sales-Systeme",
    description:
      "Wir bauen Sales-Systeme, die Ihre Vertriebsprozesse automatisieren und Ihre Abschlussquote steigern.",
    features: [
      "CRM-Implementierung & Optimierung",
      "Sales Automation & Workflows",
      "Pipeline Management & Forecasting",
      "Outreach-Systeme & Cold Email",
      "Lead Scoring & Qualification",
      "Sales Analytics & KPI Tracking",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code,
    title: "Webentwicklung",
    description:
      "Moderne, performante Websites und Web-Anwendungen, die Ihre Marke repräsentieren und konvertieren.",
    features: [
      "Corporate Websites & Landing Pages",
      "Web-Applikationen & Dashboards",
      "E-Commerce & Online-Shops",
      "Responsive Design & Mobile First",
      "Performance Optimierung",
      "Wartung & Support",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Lightbulb,
    title: "Beratung",
    description:
      "Strategische Beratung für fundierte Entscheidungen und nachhaltiges Wachstum Ihres Unternehmens.",
    features: [
      "Strategie & Business Development",
      "Prozessoptimierung & Digitalisierung",
      "Marktanalyse & Positionierung",
      "Workshops & Trainings",
      "Projektmanagement",
      "Interim Management",
    ],
    color: "from-green-500 to-emerald-500",
  },
];

const Leistungen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="text-foreground">Unsere </span>
              <span className="gradient-text">Leistungen</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Von Marketing über Sales bis zur Webentwicklung – wir bieten alle
              Leistungen, die Sie für nachhaltiges Wachstum brauchen.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <Button asChild>
                    <Link to="/termin">
                      Beratung anfragen
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Animation */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  {(() => {
                    const Animation = animations[index];
                    return <Animation />;
                  })()}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nicht sicher, was Sie brauchen?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Kein Problem! Im kostenlosen Erstgespräch analysieren wir Ihre
                Situation und empfehlen die passenden Lösungen.
              </p>
              <Button asChild size="lg" className="glow-primary">
                <Link to="/termin">
                  Kostenloses Erstgespräch buchen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Leistungen;
