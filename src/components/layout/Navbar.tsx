import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between bg-card rounded-2xl px-6 py-3 shadow-card border border-border/50">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-h-[44px]">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-secondary">
              Offen<span className="text-primary">Boost</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant={location.pathname === "/" ? "navActive" : "nav"}
              asChild
              size="sm"
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={location.pathname === "/leistungen" ? "navActive" : "nav"}
              asChild
              size="sm"
            >
              <Link to="/leistungen">Leistungen</Link>
            </Button>
            <Button
              variant={location.pathname === "/ueber-uns" ? "navActive" : "nav"}
              asChild
              size="sm"
            >
              <Link to="/ueber-uns">Über uns</Link>
            </Button>
            <Button
              variant={location.pathname === "/casestudies" ? "navActive" : "nav"}
              asChild
              size="sm"
            >
              <Link to="/casestudies">Case Studies</Link>
            </Button>
          </div>

          {/* CTA Button */}
          <Button asChild size="sm">
            <Link to="/termin">Erstgespräch</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
