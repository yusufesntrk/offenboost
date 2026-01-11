import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50">
          <div className="grid md:grid-cols-4 gap-8 items-start">
            {/* Logo & Tagline */}
            <div className="space-y-4 md:col-span-1">
              <Link to="/" className="flex items-center gap-2 min-h-[44px]">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-secondary">
                  Offen<span className="text-primary">Boost</span>
                </span>
              </Link>
              <p className="text-muted-foreground text-sm">
                Ihr Wachstumspartner aus Offenburg.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Seiten</h4>
              <nav className="flex flex-col gap-1">
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Startseite
                </Link>
                <Link
                  to="/leistungen"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Leistungen
                </Link>
                <Link
                  to="/ueber-uns"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Über uns
                </Link>
                <Link
                  to="/termin"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Termin buchen
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Leistungen</h4>
              <nav className="flex flex-col gap-1">
                <span className="text-muted-foreground text-sm py-2 min-h-[44px] flex items-center">
                  Marketing & Growth
                </span>
                <span className="text-muted-foreground text-sm py-2 min-h-[44px] flex items-center">
                  Sales-Systeme
                </span>
                <span className="text-muted-foreground text-sm py-2 min-h-[44px] flex items-center">
                  Webentwicklung
                </span>
                <span className="text-muted-foreground text-sm py-2 min-h-[44px] flex items-center">
                  Beratung
                </span>
              </nav>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Rechtliches</h4>
              <nav className="flex flex-col gap-1">
                <Link
                  to="/datenschutz"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Datenschutz
                </Link>
                <Link
                  to="/agb"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  AGB
                </Link>
                <Link
                  to="/impressum"
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm py-2 min-h-[44px] flex items-center"
                >
                  Impressum
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm text-center">
              © 2025 OffenBoost. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
