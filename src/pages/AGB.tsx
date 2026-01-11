import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AGB = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Allgemeine Geschäftsbedingungen</h1>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 1 Geltungsbereich
              </h2>
              <p className="text-muted-foreground">
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge
                zwischen OffenBoost (Inhaber: Yusuf Esentürk & Manuel
                Engelhardt) und ihren Kunden. Abweichende Bedingungen des Kunden
                werden nicht anerkannt, es sei denn, OffenBoost stimmt ihrer
                Geltung ausdrücklich schriftlich zu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 2 Vertragsschluss
              </h2>
              <p className="text-muted-foreground">
                Die Darstellung unserer Dienstleistungen auf der Website stellt
                kein rechtlich bindendes Angebot dar. Erst die
                Auftragsbestätigung durch uns begründet einen Vertrag.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 3 Leistungsumfang
              </h2>
              <p className="text-muted-foreground">
                Der Umfang unserer Leistungen ergibt sich aus dem jeweiligen
                Angebot und der Auftragsbestätigung. Änderungen des
                Leistungsumfangs bedürfen der Schriftform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 4 Vergütung und Zahlung
              </h2>
              <p className="text-muted-foreground">
                Die Vergütung richtet sich nach dem vereinbarten Angebot. Alle
                Preise verstehen sich zuzüglich der gesetzlichen
                Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach
                Rechnungsstellung ohne Abzug zahlbar.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 5 Geheimhaltung
              </h2>
              <p className="text-muted-foreground">
                Beide Parteien verpflichten sich, alle ihnen im Rahmen der
                Zusammenarbeit bekannt werdenden vertraulichen Informationen der
                jeweils anderen Partei zeitlich unbegrenzt vertraulich zu
                behandeln.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                § 6 Schlussbestimmungen
              </h2>
              <p className="text-muted-foreground">
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand
                ist, soweit gesetzlich zulässig, Offenburg.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
