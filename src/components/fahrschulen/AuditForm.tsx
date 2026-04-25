import { useState } from "react";

const AuditForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    fahrschulName: "",
    stadt: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch(
        "https://n8n.leyaltech.de/webhook/fahrschulen-audit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Fehler beim Senden");
      setIsSuccess(true);
    } catch (err) {
      setError("Etwas ist schiefgelaufen. Bitte versuche es erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="audit-form" className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-primary font-medium mb-4">
              Kostenloser Fahrschul-Audit
            </p>
            <h2 className="section-heading mb-6">
              15 Minuten, die dein{" "}
              <span className="gradient-text">Geschäft verändern</span>
            </h2>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(145 65% 42%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="text-foreground text-sm">
                Wir analysieren deine aktuelle Online-Sichtbarkeit
              </p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(145 65% 42%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="text-foreground text-sm">
                Du bekommst konkrete Hebel für mehr Anmeldungen
              </p>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(145 65% 42%)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p className="text-foreground text-sm">
                Persönliches Loom-Video — kein Sales-Call, kein Druck
              </p>
            </div>

            <div className="mt-8 p-4 bg-muted/30 rounded-xl border border-border">
              <p className="text-sm text-muted-foreground">
                Bereits 50+ Fahrschulen in ganz Deutschland vertrauen auf das
                Schille-System.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border/50">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(145 65% 42%)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Audit angefordert!
                </h3>
                <p className="text-muted-foreground">
                  Wir melden uns innerhalb von 24 Stunden mit deinem
                  persönlichen Loom-Video.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="deine@email.de"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Fahrschul-Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fahrschulName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fahrschulName: e.target.value,
                      })
                    }
                    placeholder="Fahrschule Mustermann"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Stadt
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.stadt}
                    onChange={(e) =>
                      setFormData({ ...formData, stadt: e.target.value })
                    }
                    placeholder="z.B. Offenburg"
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Wird gesendet..." : "Audit anfordern"}
                </button>

                {error && (
                  <p className="text-destructive text-sm mt-2">{error}</p>
                )}

                <p className="text-xs text-muted-foreground text-center mt-3">
                  Kein Spam. Keine Weitergabe deiner Daten.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
