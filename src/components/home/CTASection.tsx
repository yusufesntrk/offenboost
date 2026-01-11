import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-16 border border-primary/20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="section-heading mb-4">
              Bereit für den nächsten{" "}
              <span className="gradient-text">Wachstumsschritt?</span>
            </h2>

            <p className="section-subheading mx-auto mb-8">
              Lassen Sie uns gemeinsam herausfinden, wie wir Ihr Unternehmen auf
              das nächste Level bringen können. Das Erstgespräch ist kostenlos
              und unverbindlich.
            </p>

            <Button asChild size="xl" className="glow-primary">
              <Link to="/termin" className="gap-2">
                Jetzt Erstgespräch buchen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
