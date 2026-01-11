import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="section-heading mb-8">Datenschutzerklärung</h1>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="font-semibold text-foreground mb-2">
                Allgemeine Hinweise
              </h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber,
                was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
                Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              <h3 className="font-semibold text-foreground mb-2">
                Wer ist verantwortlich für die Datenerfassung?
              </h3>
              <p className="text-muted-foreground mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
                dieser Website entnehmen.
              </p>
              <h3 className="font-semibold text-foreground mb-2">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie
                in ein Kontaktformular eingeben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Ihre Rechte
              </h2>
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über
                Herkunft, Empfänger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies
                sind kleine Textdateien und richten auf Ihrem Endgerät keinen
                Schaden an. Sie werden entweder vorübergehend für die Dauer
                einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                Cookies) auf Ihrem Endgerät gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Kontakt
              </h2>
              <p className="text-muted-foreground">
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer
                personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung
                oder Löschung von Daten wenden Sie sich bitte an:
                <br />
                <br />
                OffenBoost
                <br />
                Yusuf Esentürk & Manuel Engelhardt
                <br />
                77652 Offenburg
                <br />
                E-Mail: info@offenboost.de
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
