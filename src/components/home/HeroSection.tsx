import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { TypingEffect } from "@/components/ui/typing-effect";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pulsing Circles - Radar/Growth Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/20"
              style={{
                width: `${300 + i * 200}px`,
                height: `${300 + i * 200}px`,
                animation: `pulse-ring 4s ease-out infinite`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(var(--secondary) / 0.2) 0%, transparent 70%)',
          }}
        />

        {/* Floating Dots */}
        <div className="hidden lg:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30 animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
      `}</style>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Pre-headline */}
        <p className="text-muted-foreground mb-6 animate-fade-in flex items-center justify-center gap-2">
          Wachstumspartner aus Offenburg
          <Rocket className="w-4 h-4 text-primary" />
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-secondary">Wir boosten Ihr </span>
          <br />
          <span className="text-primary inline-block min-h-[2.4em] md:min-h-[1.2em]">
            <TypingEffect
              texts={[
                'Marketing',
                'Sales',
                'Webprojekt',
                'Business',
              ]}
              typingSpeed={80}
              deletingSpeed={40}
              pauseDuration={2500}
              pauseBeforeDelete={1500}
              showCursor={true}
              cursorClassName="text-primary"
            />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200">
          Von Lead-Generierung über Sales-Automation bis zur Web-Entwicklung – wir liefern Wachstumslösungen aus einer Hand.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in-up animation-delay-300">
          <Button asChild size="lg">
            <Link to="/termin">Erstgespräch buchen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
