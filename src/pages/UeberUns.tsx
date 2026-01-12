import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Rocket,
  Users,
  Target,
  Linkedin,
} from "lucide-react";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo-config";
import { organizationSchema, founderSchema, coFounderSchema } from "@/lib/structured-data";

const founders = [
  {
    name: "Yusuf Esentürk",
    role: "Co-Founder · AI & Automation",
    image: "/team/yusuf.jpg",
    description:
      "Yusuf ist Experte für AI und Automation. Er entwickelt intelligente Systeme und automatisierte Workflows, die Unternehmen effizienter machen und repetitive Aufgaben eliminieren.",
    linkedin: "#",
  },
  {
    name: "Manuel Engelhardt",
    role: "Co-Founder · Recruiting & Marketing",
    image: "/testimonials/manuel-engelhardt.jpg",
    description:
      "Manuel bringt tiefgreifende Erfahrung in Recruiting und Marketing mit. Er versteht, wie man die richtigen Talente findet und Unternehmen durch strategisches Marketing sichtbar macht.",
    linkedin: "#",
  },
];

const values = [
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description:
      "Wir messen unseren Erfolg an Ihren Ergebnissen. Keine leeren Versprechen, sondern messbare KPIs.",
  },
  {
    icon: Users,
    title: "Partnerschaftlich",
    description:
      "Wir arbeiten als Teil Ihres Teams. Transparent, ehrlich und mit Ihren Zielen im Blick.",
  },
  {
    icon: Rocket,
    title: "Innovativ",
    description:
      "Wir nutzen die neuesten Tools und Methoden, um Ihnen einen Wettbewerbsvorteil zu verschaffen.",
  },
];

// Combined schema for About page
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, founderSchema, coFounderSchema],
};

const UeberUns = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={PAGE_SEO.ueberuns.title}
        description={PAGE_SEO.ueberuns.description}
        keywords={PAGE_SEO.ueberuns.keywords}
        canonical="/ueber-uns"
        structuredData={aboutPageSchema}
      />
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Aus Offenburg für die Region
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="text-foreground">Über </span>
              <span className="text-primary">OffenBoost</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wir sind Yusuf und Manuel – zwei Unternehmer aus Offenburg, die es
              sich zur Mission gemacht haben, lokale Unternehmen beim Wachstum zu
              unterstützen.
            </p>
          </div>

          {/* Story Section */}
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Unsere Geschichte
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                OffenBoost ist aus einer einfachen Beobachtung entstanden: Viele
                großartige Unternehmen in unserer Region haben Schwierigkeiten,
                ihr volles Potenzial auszuschöpfen – nicht weil ihnen das Talent
                oder die Motivation fehlt, sondern weil Marketing, Sales und
                Digitalisierung nicht ihre Kernkompetenz sind.
              </p>
              <p>
                Mit unserer kombinierten Expertise in Marketing, Sales und
                Webentwicklung haben wir uns zusammengetan, um genau diese Lücke
                zu schließen. Wir verstehen die Herausforderungen von KMUs und
                bieten Lösungen, die wirklich funktionieren – ohne den typischen
                Agentur-Overhead.
              </p>
              <p>
                Unser Ziel ist es, Ihr Wachstumspartner zu sein. Nicht nur ein
                Dienstleister, sondern ein Team, das mit Ihnen gemeinsam Erfolge
                feiert.
              </p>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Die Gründer
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
                >
                  {/* Photo */}
                  <div className="w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<span class="flex items-center justify-center w-full h-full text-4xl font-bold text-primary">${founder.name.split(" ").map((n) => n[0]).join("")}</span>`;
                      }}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {founder.role}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {founder.description}
                    </p>
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Unsere Werte
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-secondary rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Lassen Sie uns zusammenarbeiten
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Bereit, Ihr Unternehmen auf das nächste Level zu bringen? Wir
                freuen uns darauf, Sie kennenzulernen.
              </p>
              <Button asChild size="lg">
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

export default UeberUns;
