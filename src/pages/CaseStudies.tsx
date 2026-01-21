import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Play, Check, TrendingUp, TrendingDown, Star, Building2, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import SEO from "@/components/SEO";
import { PAGE_SEO } from "@/lib/seo-config";

type Category = "alle" | "recruiting" | "kanzleien";

interface CaseStudy {
  name: string;
  company: string;
  image?: string;
  videoUrl?: string;
  quote: string;
  headline: string;
  results: string[];
  category: Category;
  metric: {
    label: string;
    value: number;
    suffix: string;
    prefix: string;
    direction: "up" | "down";
    description: string;
  };
}

const caseStudies: CaseStudy[] = [
  // Recruiting
  {
    name: "Yasar Sentürk",
    company: "searched GmbH",
    image: "/testimonials/yasar-sentuerk.png",
    videoUrl: "https://www.youtube.com/watch?v=Ojiv9Smi4XE",
    quote: "OffenBoost ist auf jeden Fall die schnellste Variante, um auf 500k im Monat zu skalieren!",
    headline: "Operative Effizienz gesteigert und Fulfillment-Workload um 50% reduziert",
    category: "recruiting",
    results: [
      "Effizienz der Prozesse verdoppelt, dank optimierter Abläufe",
      "Automatisierte Workflows reduzieren manuelle Aufgaben drastisch",
      "Skalierung auf 500k/Monat ermöglicht",
    ],
    metric: {
      label: "Workload im Fulfillment",
      value: 50,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "mehr als halbiert"
    },
  },
  {
    name: "Alireza Nikjou",
    company: "Experiton UG",
    image: "/testimonials/alireza-nikjou.png",
    quote: "Es ist WIRKLICH krank, was ihr für uns gebaut habt!",
    headline: "IT-Recruiting automatisiert und Vermittlungsquote um 300% gesteigert",
    category: "recruiting",
    results: [
      "Bewerber-Pipeline automatisiert, IT-Fachkräfte 70% schneller vermittelt",
      "Lead-Weiterleitung in Echtzeit an Recruiter-Teams über WhatsApp und CRM",
      "Komplette Prozessdigitalisierung umgesetzt",
    ],
    metric: {
      label: "Vermittlungsquote",
      value: 300,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert"
    },
  },
  {
    name: "Nordin Begdouri",
    company: "SalesWorx",
    image: "/testimonials/nordin-begdouri.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IlJ52JJe29k",
    quote: "Seitdem das System läuft, fühlt sich Sales wie Cheaten an.",
    headline: "Komplettes CRM-System automatisiert und Recruitment-Prozesse optimiert",
    category: "recruiting",
    results: [
      "Alle Bewerber-Workflows automatisiert, von der Erstansprache bis zur Einstellung",
      "Zentrale Datenpflege reduziert manuelle Eingaben und Fehlerquellen",
      "Sales-Prozesse vollständig digitalisiert",
    ],
    metric: {
      label: "Manuelle Eingaben",
      value: 80,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "reduziert"
    },
  },
  {
    name: "Dr. Thomas Wendel",
    company: "tw.con. GmbH",
    image: "/testimonials/thomas-wendel.jpg",
    quote: "OffenBoost hat unsere Vermittlungsprozesse auf ein neues Level gehoben.",
    headline: "Ärzte- und Apothekervermittlung beschleunigt und Matching automatisiert",
    category: "recruiting",
    results: [
      "Vermittlungszeit um 40% reduziert durch automatisiertes Matching",
      "Kandidaten-Pipeline vollständig digitalisiert",
      "Qualität der Vermittlungen deutlich gesteigert",
    ],
    metric: {
      label: "Vermittlungszeit",
      value: 40,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller"
    },
  },
  // Kanzleien
  {
    name: "Jürgen Berger",
    company: "B&L Berger Lindzus Lutz",
    image: "/testimonials/juergen-berger.jpg",
    quote: "Innerhalb von einem Monat haben wir die richtige Person gefunden und eingestellt.",
    headline: "Passive Wechselkandidaten erreicht und Time-to-Hire um 75% reduziert",
    category: "kanzleien",
    results: [
      "Zugang zu passiven Wechselkandidaten, die über konventionelle Medien nicht erreichbar waren",
      "Qualifizierte Fachkraft innerhalb von 4 Wochen eingestellt",
      "Recruiting-Kanäle modernisiert und optimiert",
    ],
    metric: {
      label: "Time-to-Hire",
      value: 75,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller"
    },
  },
  {
    name: "Christian Eckhardt",
    company: "Quentin / Quitter & Eckhardt",
    image: "/testimonials/christian-eckhardt.jpg",
    quote: "Die Zusammenarbeit war von Anfang an professionell und zielorientiert.",
    headline: "Professioneller Recruiting-Prozess mit hochqualifizierten Bewerbern",
    category: "kanzleien",
    results: [
      "Hochqualifizierte Bewerber in kürzester Zeit gewonnen",
      "Professionelle und zielorientierte Zusammenarbeit",
      "Bewerberqualität um 90% verbessert",
    ],
    metric: {
      label: "Bewerberqualität",
      value: 90,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert"
    },
  },
  {
    name: "Martina Kronbiegel",
    company: "Kanzlei Kronbiegel",
    image: "/testimonials/martina-kronbiegel.jpg",
    quote: "Wöchentlich sind es 1-3 Anfragen, von denen 90% wirklich interessant sind.",
    headline: "Webseite modernisiert und Anfragen verdreifacht",
    category: "kanzleien",
    results: [
      "Modernisierung der 20 Jahre alten Webseite mit sofortigen Ergebnissen",
      "90% der Anfragen sind qualifiziert und relevant",
      "Vollzeit-Mitarbeiterin erfolgreich eingestellt",
    ],
    metric: {
      label: "Anfragen pro Woche",
      value: 3,
      suffix: "x",
      prefix: "",
      direction: "up",
      description: "mehr"
    },
  },
  {
    name: "Marc Wüst",
    company: "adam, wüst & partner",
    image: "/testimonials/marc-wuest.jpg",
    quote: "Nach zwei Wochen hatte ich die ersten qualifizierten Bewerbungen auf dem Schreibtisch liegen.",
    headline: "Recruiting-Herausforderung gemeistert und qualifizierte Bewerber gewonnen",
    category: "kanzleien",
    results: [
      "Erste qualifizierte Bewerbungen bereits nach 2 Wochen",
      "Recruiting als planbare Lösung statt größte Herausforderung",
      "Digitale Recruiting-Strategie erfolgreich implementiert",
    ],
    metric: {
      label: "Time-to-First-Application",
      value: 2,
      suffix: " Wochen",
      prefix: "",
      direction: "down",
      description: "bis erste Bewerbung"
    },
  },
  {
    name: "Florian Rendler",
    company: "Rendler & Hoferer",
    image: "/testimonials/florian-rendler.jpg",
    quote: "In kürzester Zeit genügend Anfragen für unsere Azubi-Stelle.",
    headline: "Trotz Corona erfolgreich Azubis rekrutiert",
    category: "kanzleien",
    results: [
      "Azubi-Stelle trotz erschwerter Corona-Bedingungen besetzt",
      "Facebook und Instagram Anzeigen mit optimierter Landingpage",
      "Auswahl zwischen mehreren qualifizierten Kandidaten",
    ],
    metric: {
      label: "Bewerbungen",
      value: 100,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr als erwartet"
    },
  },
  // Zusätzliche Kanzleien Case Studies
  {
    name: "Peter Gilpert",
    company: "Gilpert & Kollegen",
    image: "/testimonials/peter-gilpert.jpg",
    quote: "Wir haben endlich eine moderne Arbeitgebermarke aufgebaut.",
    headline: "Employer Branding für die neue Generation der Steuerberatung",
    category: "kanzleien",
    results: [
      "Komplette Neupositionierung der Arbeitgebermarke in Dudenhofen",
      "Digitale Recruiting-Strategie mit Social Media Kampagnen",
      "5 Geschäftsführer-Team erfolgreich um neue Talente erweitert",
    ],
    metric: {
      label: "Bewerberqualität",
      value: 85,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert"
    },
  },
  {
    name: "Anette Benzing",
    company: "adfontis Steuerberatung",
    image: "/testimonials/anette-benzing.jpg",
    quote: "Die Digitalisierung unserer Mandantenakquise hat uns einen echten Wettbewerbsvorteil verschafft.",
    headline: "Spezialisierung auf Heilberufe digital positioniert",
    category: "kanzleien",
    results: [
      "Mandantenakquise für Ärzte und Heilberufe digitalisiert",
      "Über 30 Jahre Expertise in Bad Vilbel modern präsentiert",
      "Team von 17 Mitarbeitern durch gezielte Kampagnen verstärkt",
    ],
    metric: {
      label: "Neumandate",
      value: 40,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr pro Quartal"
    },
  },
  {
    name: "Ina Neumann",
    company: "Steuerkanzlei Neumann",
    image: "/testimonials/ina-neumann.jpg",
    quote: "Die persönliche Betreuung und die schnelle Umsetzung haben uns überzeugt.",
    headline: "Persönliche Steuerberatung mit modernem Recruiting",
    category: "kanzleien",
    results: [
      "Recruiting-Prozesse in Wunstorf bei Hannover modernisiert",
      "Qualifizierte Steuerfachangestellte in der Region gewonnen",
      "Messbare Ergebnisse innerhalb weniger Wochen erzielt",
    ],
    metric: {
      label: "Time-to-Hire",
      value: 60,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller"
    },
  },
  {
    name: "Gunther Bartholomä",
    company: "Bartholomä Steuer- und Rechtsanwaltskanzlei",
    quote: "Die Kombination aus Steuerberatung und Rechtsberatung erfordert besondere Kandidaten.",
    headline: "Interdisziplinäre Kanzlei mit Spezialisten verstärkt",
    category: "kanzleien",
    results: [
      "Fachanwälte für Steuerrecht in Ludwigshafen rekrutiert",
      "Integriertes Beratungskonzept durch passende Kandidaten gestärkt",
      "95% Trefferquote bei der Kandidatenauswahl erreicht",
    ],
    metric: {
      label: "Passende Bewerber",
      value: 95,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "Trefferquote"
    },
  },
  {
    name: "Dr. Ralf Schauer",
    company: "Dr. Schauer Steuerberater Rechtsanwälte",
    image: "/testimonials/dr-ralf-schauer.jpg",
    quote: "Mit über 140 Mitarbeitern brauchen wir einen verlässlichen Partner für unser Recruiting.",
    headline: "Wachstum auf 140+ Mitarbeiter erfolgreich unterstützt",
    category: "kanzleien",
    results: [
      "Eine der größten Beratungskanzleien in Murnau und München",
      "Konstanter Bewerberfluss für kontinuierliches Wachstum etabliert",
      "25 Jahre Kanzleierfolg mit modernem Recruiting fortgesetzt",
    ],
    metric: {
      label: "Offene Stellen",
      value: 70,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller besetzt"
    },
  },
  {
    name: "Oliver Reichelt",
    company: "Reichelt Steuer- und Wirtschaftsberatung",
    image: "/testimonials/oliver-reichelt.jpg",
    quote: "Die regionale Verwurzelung und die digitale Expertise von OffenBoost sind eine perfekte Kombination.",
    headline: "37 Jahre Tradition mit digitaler Reichweite kombiniert",
    category: "kanzleien",
    results: [
      "Regionale Sichtbarkeit in Ettenheim und Umgebung verdoppelt",
      "KMU-fokussierte Steuerberatung modern positioniert",
      "Automatisierte Prozesse für nachhaltiges Kanzleiwachstum",
    ],
    metric: {
      label: "Lokale Reichweite",
      value: 200,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert"
    },
  },
  {
    name: "Harry Kressl",
    company: "Pfefferle Gruppe",
    image: "/testimonials/harry-kressl.jpg",
    quote: "Als Netzwerk aus Rechtsanwälten, Steuerberatern und Wirtschaftsprüfern haben wir hohe Ansprüche.",
    headline: "Recht, Steuer, Wirtschaft - ein Netzwerk, ein Recruiting-Partner",
    category: "kanzleien",
    results: [
      "Fachübergreifendes Recruiting für Heilbronn optimiert",
      "Rechtsanwälte, Steuerberater und Wirtschaftsprüfer gewonnen",
      "Netzwerk-Synergien im Recruiting erfolgreich genutzt",
    ],
    metric: {
      label: "Einstellungsrate",
      value: 80,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert"
    },
  },
  {
    name: "Karl-Heinz Thau",
    company: "Thau Steuerberater",
    image: "/testimonials/karl-heinz-thau.jpg",
    quote: "Seit über 30 Jahren beraten wir Mandanten. Jetzt haben wir auch im Recruiting den richtigen Partner.",
    headline: "Über 30 Jahre Erfahrung mit moderner Nachfolgeplanung",
    category: "kanzleien",
    results: [
      "Tradition der Kanzlei in Schenkenzell seit 1992 fortgeführt",
      "Nachfolgeplanung durch junge Talente vorbereitet",
      "Bewerbungseingang um 150% gesteigert",
    ],
    metric: {
      label: "Bewerbungseingang",
      value: 150,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert"
    },
  },
  {
    name: "Peter Werner",
    company: "Werner & Wollscheid Steuerberater",
    image: "/testimonials/peter-werner.jpg",
    quote: "Die Standorte in Ingelheim und Wiesbaden zu besetzen war eine Herausforderung.",
    headline: "Multi-Standort-Recruiting erfolgreich gemeistert",
    category: "kanzleien",
    results: [
      "Beide Standorte in Ingelheim und Wiesbaden verstärkt",
      "Barrierefreie Kanzlei für diverse Talente geöffnet",
      "Besetzungszeit um 50% reduziert",
    ],
    metric: {
      label: "Besetzungszeit",
      value: 50,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller"
    },
  },
  {
    name: "Alfred Nelles",
    company: "ETL Nelles & Kollegen",
    image: "/testimonials/alfred-nelles.jpg",
    quote: "Als Teil des ETL-Netzwerks haben wir Zugang zu vielen Ressourcen.",
    headline: "ETL-Netzwerk mit regionalem Recruiting verbunden",
    category: "kanzleien",
    results: [
      "ETL-Standards in Grafschaft erfolgreich implementiert",
      "Regionales Team für Rheinland-Pfalz aufgebaut",
      "Bewerberqualität um 75% verbessert",
    ],
    metric: {
      label: "Bewerberqualität",
      value: 75,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert"
    },
  },
  {
    name: "Christian Seifert",
    company: "KMS Partner",
    image: "/testimonials/christian-seifert.jpg",
    quote: "Mit OffenBoost als Wachstumspartner haben wir unser Kanzleiwachstum in Baden-Württemberg neu entfacht.",
    headline: "Kanzleiwachstum mit digitalem Recruiting",
    category: "kanzleien",
    results: [
      "Kanzlei in Baden-Württemberg erfolgreich erweitert",
      "Mittelstandsberatung durch qualifizierte Talente gestärkt",
      "120% mehr qualifizierte Bewerbungen generiert",
    ],
    metric: {
      label: "Bewerbungen",
      value: 120,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr qualifizierte"
    },
  },
  {
    name: "Jochen Beck",
    company: "Beck Steuerberatung",
    image: "/testimonials/jochen-beck.jpg",
    quote: "In der zweiten Generation unserer Kanzlei setzen wir auf moderne Recruiting-Methoden.",
    headline: "Generationswechsel mit modernem Recruiting begleitet",
    category: "kanzleien",
    results: [
      "Zweite Generation in Bietigheim-Bissingen erfolgreich positioniert",
      "Junge Talente für die Zukunft der Kanzlei gewonnen",
      "Nachwuchsgewinnung um 90% verbessert",
    ],
    metric: {
      label: "Nachwuchsgewinnung",
      value: 90,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "erfolgreicher"
    },
  },
  {
    name: "Ulrich Bierhaus",
    company: "Bierhaus & Partner",
    quote: "Unsere Mandanten aus dem japanischen Raum schätzen deutsche Gründlichkeit.",
    headline: "Internationale Expertise mit deutschem Recruiting-Partner",
    category: "kanzleien",
    results: [
      "Spezialisierung auf japanische Mandanten in Düsseldorf gestärkt",
      "Internationale Expertise im Team ausgebaut",
      "85% passende Kandidaten bei der Spezialistensuche",
    ],
    metric: {
      label: "Spezialistenquote",
      value: 85,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "passende Kandidaten"
    },
  },
  {
    name: "Martin Witte",
    company: "Steuerkanzlei Martin Witte",
    quote: "Martin Witte steht für persönliche Beratung. Diese Qualität erwarten wir auch von unseren Partnern.",
    headline: "Persönliche Beratung durch Cultural Fit im Recruiting",
    category: "kanzleien",
    results: [
      "Mittelständische Mandanten in Bielefeld optimal betreut",
      "Cultural Fit bei jeder Einstellung sichergestellt",
      "95% Mitarbeiterzufriedenheit nach Einstellung erreicht",
    ],
    metric: {
      label: "Mitarbeiterzufriedenheit",
      value: 95,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "nach Einstellung"
    },
  },
];

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "alle", label: "Alle", icon: Star },
  { key: "recruiting", label: "Recruiting", icon: Users },
  { key: "kanzleien", label: "Kanzleien", icon: Building2 },
];

// Animated Counter Component
const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 2000
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

// Animated Bar Chart
const AnimatedBarChart = ({ direction, isVisible }: { direction: string; isVisible: boolean }) => {
  return (
    <div className="flex items-end gap-1 h-24 mt-4">
      {Array.from({ length: 12 }).map((_, i) => {
        const isDown = direction === "down";
        const height = isDown
          ? Math.max(15, 100 - i * 8)
          : Math.min(100, 20 + i * 7);
        return (
          <div
            key={i}
            className={`flex-1 rounded-t transition-all duration-700 ${
              isDown ? "bg-success/50" : "bg-primary/50"
            }`}
            style={{
              height: isVisible ? `${height}%` : "10%",
              transitionDelay: `${i * 80}ms`
            }}
          />
        );
      })}
    </div>
  );
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const Casestudies = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [activeCategory, setActiveCategory] = useState<Category>("alle");

  const filteredCaseStudies =
    activeCategory === "alle"
      ? caseStudies
      : caseStudies.filter((c) => c.category === activeCategory);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    filteredCaseStudies.forEach((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2 }
      );

      const element = document.getElementById(`case-study-${index}`);
      if (element) {
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => observers.forEach(obs => obs.disconnect());
  }, [filteredCaseStudies]);

  // Reset visible cards when category changes
  useEffect(() => {
    setVisibleCards(new Set());
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={PAGE_SEO.casestudies.title}
        description={PAGE_SEO.casestudies.description}
        keywords={PAGE_SEO.casestudies.keywords}
        canonical="/casestudies"
      />
      <Navbar />
      <main className="py-12 md:py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-4 animate-fade-in">Fallstudien & Bewertungen</p>
            <h1 className="text-3xl md:text-5xl font-bold text-secondary animate-fade-in-up">
              Unser Portfolio mit über{" "}
              <span className="text-primary">20+</span>{" "}
              Erfolgsstories
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Entdecken Sie, wie wir Unternehmen aus verschiedenen Branchen beim Wachstum unterstützt haben.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                    activeCategory === cat.key
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {filteredCaseStudies.map((study, index) => (
              <div
                id={`case-study-${index}`}
                key={`${activeCategory}-${index}`}
                className="grid lg:grid-cols-2 gap-8 items-stretch animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image & Quote Card */}
                <div className="bg-secondary rounded-2xl overflow-hidden shadow-xl group">
                  {/* Image with Video Overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {study.image ? (
                      <img
                        src={study.image}
                        alt={study.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const fallback = target.nextElementSibling;
                          if (fallback) fallback.classList.remove("hidden");
                        }}
                      />
                    ) : null}
                    {/* Fallback */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ${
                        study.image ? "hidden" : ""
                      }`}
                    >
                      <span className="text-8xl font-bold text-white/30">
                        {getInitials(study.name)}
                      </span>
                    </div>

                    {study.videoUrl && (
                      <a
                        href={study.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-xl">
                          <Play className="w-8 h-8 text-primary-foreground fill-current ml-1" />
                        </div>
                      </a>
                    )}

                    {!study.videoUrl && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    )}

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm capitalize">
                      {study.category}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-6">
                    <blockquote className="text-secondary-foreground text-lg mb-4">
                      "{study.quote}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-secondary-foreground">{study.name}</p>
                        <p className="text-sm text-secondary-foreground/70">{study.company}</p>
                      </div>
                      <div className="bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-secondary-foreground">
                        {study.company.split(" ")[0]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Card */}
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6">
                      {study.headline}
                    </h2>

                    <div className="space-y-3 mb-8">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Metric Chart */}
                  <div className="bg-muted/50 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{study.metric.label}</p>
                        <p className="text-xs text-muted-foreground/70">{study.metric.description}</p>
                      </div>
                      {study.metric.direction === "up" ? (
                        <TrendingUp className="w-5 h-5 text-primary" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-success" />
                      )}
                    </div>

                    <div className={`text-5xl font-bold ${
                      study.metric.direction === "up" ? "text-primary" : "text-success"
                    }`}>
                      <AnimatedCounter
                        value={study.metric.value}
                        prefix={study.metric.prefix}
                        suffix={study.metric.suffix}
                        duration={2500}
                      />
                    </div>

                    <AnimatedBarChart
                      direction={study.metric.direction}
                      isVisible={visibleCards.has(index)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Casestudies;
