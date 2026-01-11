import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Impressum</h1>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="text-muted-foreground">
                OffenBoost
                <br />
                Yusuf Esentürk & Manuel Engelhardt
                <br />
                77652 Offenburg
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground">E-Mail: info@offenboost.de</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Verantwortlich für den Inhalt
              </h2>
              <p className="text-muted-foreground">
                Yusuf Esentürk & Manuel Engelhardt
                <br />
                77652 Offenburg
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Haftung für Inhalte
              </h2>
              <p className="text-muted-foreground">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Haftung für Links
              </h2>
              <p className="text-muted-foreground">
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Urheberrecht
              </h2>
              <p className="text-muted-foreground">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
