import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, Calendar, Clock, Video } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  {
    title: "Marketing & Growth",
    description:
      "Lead-Generierung, Performance Marketing und Social Media Strategien, die messbare Ergebnisse liefern.",
  },
  {
    title: "Sales-Systeme",
    description:
      "CRM-Implementierung, Sales Automation und Pipeline-Optimierung für mehr Abschlüsse.",
  },
  {
    title: "Webentwicklung",
    description:
      "Moderne Websites, Web-Apps und E-Commerce Lösungen, die konvertieren.",
  },
  {
    title: "Strategische Beratung",
    description:
      "Fundierte Beratung für Business Development, Prozessoptimierung und Wachstumsstrategien.",
  },
];

const Termin = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
              <span className="text-foreground">Kostenloses </span>
              <span className="gradient-text">Erstgespräch</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Lernen Sie uns kennen und erfahren Sie, wie wir Ihr Unternehmen
              beim Wachstum unterstützen können.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">30 Minuten</p>
                <p className="text-sm text-muted-foreground">Gesprächsdauer</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Video className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Video-Call</p>
                <p className="text-sm text-muted-foreground">Per Google Meet</p>
              </div>
            </div>
            <div className="bg-card rounded-xl p-4 border border-border flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Flexibel</p>
                <p className="text-sm text-muted-foreground">
                  Wähle deinen Termin
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calendly Embed */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border animate-fade-in-up">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/offenboost/erstgespraech?hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=3b82f6"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>

            {/* Benefits */}
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Wir unterstützen Sie bei:
              </h2>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-muted/30 rounded-xl border border-border">
                <p className="text-muted-foreground text-sm">
                  <strong className="text-foreground">Hinweis:</strong> Das
                  Erstgespräch ist kostenlos und unverbindlich. Wir analysieren
                  Ihre Situation und geben Ihnen ehrliches Feedback, ob und wie
                  wir helfen können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Termin;
