import { Play, TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

type Category = "alle" | "recruiting" | "kanzleien";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
  videoUrl?: string;
  category: Category;
  metric: {
    label: string;
    value: number;
    suffix: string;
    prefix: string;
    direction: "up" | "down";
    description: string;
  };
  results: string[];
}

const testimonials: Testimonial[] = [
  // Recruiting
  {
    quote: "OffenBoost ist auf jeden Fall die schnellste Variante, um auf 500k im Monat zu skalieren!",
    name: "Yasar Sentürk",
    role: "Geschäftsführer",
    company: "searched GmbH",
    image: "/testimonials/yasar-sentuerk.png",
    videoUrl: "https://www.youtube.com/watch?v=Ojiv9Smi4XE",
    category: "recruiting",
    metric: {
      label: "Fulfillment-Workload",
      value: 50,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "mehr als halbiert",
    },
    results: [
      "Effizienz der Prozesse verdoppelt",
      "Automatisierte Workflows reduzieren manuelle Aufgaben",
    ],
  },
  {
    quote: "Es ist WIRKLICH krank, was ihr für uns gebaut habt",
    name: "Nordin Begdouri",
    role: "Geschäftsführer",
    company: "SalesWorx",
    image: "/testimonials/nordin-begdouri.jpg",
    videoUrl: "https://www.youtube.com/watch?v=IlJ52JJe29k",
    category: "recruiting",
    metric: {
      label: "Manuelle Eingaben",
      value: 80,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "reduziert",
    },
    results: [
      "Bewerber-Workflows automatisiert",
      "Zentrale Datenpflege ohne Fehlerquellen",
    ],
  },
  {
    quote: "Die Automatisierung hat unsere Prozesse komplett transformiert",
    name: "Alireza Nikjou",
    role: "Geschäftsführer",
    company: "Experiton UG",
    image: "/testimonials/alireza-nikjou.png",
    category: "recruiting",
    metric: {
      label: "Vermittlungsquote",
      value: 300,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert",
    },
    results: [
      "IT-Fachkräfte 70% schneller vermittelt",
      "Lead-Weiterleitung in Echtzeit",
    ],
  },
  {
    quote: "OffenBoost hat unsere Vermittlungsprozesse auf ein neues Level gehoben",
    name: "Dr. Thomas Wendel",
    role: "Geschäftsführer",
    company: "tw.con. GmbH",
    image: "/testimonials/thomas-wendel.jpg",
    category: "recruiting",
    metric: {
      label: "Vermittlungszeit",
      value: 40,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller",
    },
    results: [
      "Ärzte- und Apothekervermittlung beschleunigt",
      "Automatisierte Kandidaten-Matching Prozesse",
    ],
  },
  // Kanzleien
  {
    quote: "Seit einigen Monaten haben wir nach gutem Fachpersonal gesucht, jedoch über konventionelle Medien keinerlei qualifizierte Rückmeldung erhalten. Innerhalb von einem Monat haben wir die richtige Person gefunden und eingestellt.",
    name: "Jürgen Berger",
    role: "Steuerberater & Partner",
    company: "B&L Berger Lindzus Lutz",
    image: "/testimonials/juergen-berger.jpg",
    category: "kanzleien",
    metric: {
      label: "Time-to-Hire",
      value: 75,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller",
    },
    results: [
      "Passive Wechselkandidaten erreicht",
      "Qualifizierte Fachkraft in 4 Wochen eingestellt",
    ],
  },
  {
    quote: "Die Zusammenarbeit war von Anfang an professionell und zielorientiert. Wir haben innerhalb kürzester Zeit qualifizierte Bewerber erhalten.",
    name: "Christian Eckhardt",
    role: "Steuerberater & Partner",
    company: "Quentin / Quitter & Eckhardt",
    image: "/testimonials/christian-eckhardt.jpg",
    category: "kanzleien",
    metric: {
      label: "Bewerberqualität",
      value: 90,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert",
    },
    results: [
      "Hochqualifizierte Bewerber gewonnen",
      "Professioneller Recruiting-Prozess",
    ],
  },
  {
    quote: "Durch die Modernisierung unserer 20 Jahre alten Webseite haben wir direkt deutlich mehr Anfragen erhalten. Wöchentlich sind es 1-3 Anfragen, von denen 90% wirklich interessant sind.",
    name: "Martina Kronbiegel",
    role: "Steuerberaterin",
    company: "Kanzlei Kronbiegel",
    image: "/testimonials/martina-kronbiegel.jpg",
    category: "kanzleien",
    metric: {
      label: "Anfragen pro Woche",
      value: 3,
      suffix: "x",
      prefix: "+",
      direction: "up",
      description: "mehr",
    },
    results: [
      "90% qualifizierte Anfragen",
      "Vollzeit-Mitarbeiterin eingestellt",
    ],
  },
  {
    quote: "Ich war der festen Meinung, dass Recruiting zu den größten Herausforderungen gehört! Nach zwei Wochen hatte ich die ersten qualifizierten Bewerbungen auf dem Schreibtisch.",
    name: "Marc Wüst",
    role: "Steuerberater & Partner",
    company: "adam, wüst & partner",
    image: "/testimonials/marc-wuest.jpg",
    category: "kanzleien",
    metric: {
      label: "Time-to-First-Application",
      value: 2,
      suffix: " Wo.",
      prefix: "",
      direction: "down",
      description: "bis Bewerbung",
    },
    results: [
      "Qualifizierte Bewerbungen in 2 Wochen",
      "Recruiting planbar gemacht",
    ],
  },
  {
    quote: "Durch Corona waren die Bedingungen erschwert. Dank Facebook und Instagram Anzeigen hatten wir in kürzester Zeit genügend Anfragen für unsere Azubi-Stelle.",
    name: "Florian Rendler",
    role: "Geschäftsführer",
    company: "Rendler & Hoferer",
    image: "/testimonials/florian-rendler.jpg",
    category: "kanzleien",
    metric: {
      label: "Bewerbungen",
      value: 100,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr",
    },
    results: [
      "Azubi-Stelle trotz Corona besetzt",
      "Auswahl zwischen Top-Kandidaten",
    ],
  },
  {
    quote: "Wir haben endlich eine moderne Arbeitgebermarke aufgebaut und erreichen jetzt genau die Kandidaten, die zu uns passen.",
    name: "Peter Gilpert",
    role: "Steuerberater & Geschäftsführer",
    company: "Gilpert & Kollegen",
    image: "/testimonials/peter-gilpert.jpg",
    category: "kanzleien",
    metric: {
      label: "Bewerberqualität",
      value: 85,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert",
    },
    results: [
      "Arbeitgebermarke erfolgreich positioniert",
      "Digitale Recruiting-Strategie etabliert",
    ],
  },
  {
    quote: "Die Digitalisierung unserer Mandantenakquise hat uns einen echten Wettbewerbsvorteil verschafft.",
    name: "Anette Benzing",
    role: "Geschäftsführerin",
    company: "adfontis Steuerberatung",
    image: "/testimonials/anette-benzing.jpg",
    category: "kanzleien",
    metric: {
      label: "Neumandate",
      value: 40,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr pro Quartal",
    },
    results: [
      "Mandantenakquise digitalisiert",
      "Spezialisierung auf Heilberufe ausgebaut",
    ],
  },
  {
    quote: "Die persönliche Betreuung und die schnelle Umsetzung haben uns überzeugt. Innerhalb weniger Wochen hatten wir messbare Ergebnisse.",
    name: "Ina Neumann",
    role: "Steuerberaterin",
    company: "Steuerkanzlei Neumann",
    category: "kanzleien",
    metric: {
      label: "Time-to-Hire",
      value: 60,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller",
    },
    results: [
      "Recruiting-Prozesse modernisiert",
      "Qualifizierte Mitarbeiter gewonnen",
    ],
  },
  {
    quote: "Die Kombination aus Steuerberatung und Rechtsberatung erfordert besondere Kandidaten. OffenBoost hat genau diese gefunden.",
    name: "Gunther Bartholomä",
    role: "Steuerberater & Rechtsanwalt",
    company: "Bartholomä Kanzlei",
    category: "kanzleien",
    metric: {
      label: "Passende Bewerber",
      value: 95,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "Trefferquote",
    },
    results: [
      "Spezialisierte Kandidaten gefunden",
      "Interdisziplinäres Team verstärkt",
    ],
  },
  {
    quote: "Mit über 140 Mitarbeitern brauchen wir einen verlässlichen Partner für unser Recruiting. OffenBoost liefert konstant.",
    name: "Dr. Ralf Schauer",
    role: "Geschäftsführer",
    company: "Dr. Schauer Steuerberater",
    image: "/testimonials/dr-ralf-schauer.png",
    category: "kanzleien",
    metric: {
      label: "Offene Stellen",
      value: 70,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller besetzt",
    },
    results: [
      "Konstanter Bewerberfluss etabliert",
      "Wachstum auf 140+ Mitarbeiter unterstützt",
    ],
  },
  {
    quote: "Die regionale Verwurzelung und die digitale Expertise von OffenBoost sind eine perfekte Kombination für uns.",
    name: "Oliver Reichelt",
    role: "Geschäftsführer",
    company: "Reichelt Steuerberatung",
    image: "/testimonials/oliver-reichelt.jpg",
    category: "kanzleien",
    metric: {
      label: "Lokale Reichweite",
      value: 200,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert",
    },
    results: [
      "Regionale Sichtbarkeit erhöht",
      "KMU-Mandanten gewonnen",
    ],
  },
  {
    quote: "Als Netzwerk aus Rechtsanwälten, Steuerberatern und Wirtschaftsprüfern haben wir hohe Ansprüche. OffenBoost erfüllt sie.",
    name: "Harry Kressl",
    role: "Geschäftsführender Partner",
    company: "Pfefferle Gruppe",
    image: "/testimonials/harry-kressl.jpg",
    category: "kanzleien",
    metric: {
      label: "Einstellungsrate",
      value: 80,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert",
    },
    results: [
      "Fachübergreifendes Recruiting optimiert",
      "Netzwerk-Synergien genutzt",
    ],
  },
  {
    quote: "Seit über 30 Jahren beraten wir Mandanten. Jetzt haben wir auch im Recruiting den richtigen Partner gefunden.",
    name: "Karl-Heinz Thau",
    role: "Steuerberater",
    company: "Thau Steuerberater",
    image: "/testimonials/karl-heinz-thau.jpg",
    category: "kanzleien",
    metric: {
      label: "Bewerbungseingang",
      value: 150,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "gesteigert",
    },
    results: [
      "Tradition mit Moderne verbunden",
      "Nachfolgeplanung vorbereitet",
    ],
  },
  {
    quote: "Die Standorte in Ingelheim und Wiesbaden zu besetzen war eine Herausforderung. OffenBoost hat es möglich gemacht.",
    name: "Peter Werner",
    role: "Steuerberater & Partner",
    company: "Werner & Wollscheid",
    category: "kanzleien",
    metric: {
      label: "Besetzungszeit",
      value: 50,
      suffix: "%",
      prefix: "-",
      direction: "down",
      description: "schneller",
    },
    results: [
      "Beide Standorte verstärkt",
      "Multi-Standort-Recruiting gemeistert",
    ],
  },
  {
    quote: "Als Teil des ETL-Netzwerks haben wir Zugang zu vielen Ressourcen. Mit OffenBoost haben wir auch beim Recruiting den richtigen Partner.",
    name: "Alfred Nelles",
    role: "Steuerberater",
    company: "ETL Nelles & Kollegen",
    category: "kanzleien",
    metric: {
      label: "Bewerberqualität",
      value: 75,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "verbessert",
    },
    results: [
      "ETL-Standards erfüllt",
      "Regionales Team aufgebaut",
    ],
  },
  {
    quote: "Seit 1970 sind wir am Markt. Die Digitalisierung unseres Recruitings war der nächste logische Schritt.",
    name: "Christian Seifert",
    role: "Vorstandsvorsitzender",
    company: "Treuhand AG Berlin",
    category: "kanzleien",
    metric: {
      label: "Bewerbungen",
      value: 120,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "mehr qualifizierte",
    },
    results: [
      "Über 50 Jahre Tradition digitalisiert",
      "Mittelstandsberatung verstärkt",
    ],
  },
  {
    quote: "In der zweiten Generation unserer Kanzlei setzen wir auf moderne Recruiting-Methoden. Das zahlt sich aus.",
    name: "Jochen Beck",
    role: "Steuerberater",
    company: "Beck Steuerberatung",
    category: "kanzleien",
    metric: {
      label: "Nachwuchsgewinnung",
      value: 90,
      suffix: "%",
      prefix: "+",
      direction: "up",
      description: "erfolgreicher",
    },
    results: [
      "Generationswechsel vorbereitet",
      "Junge Talente gewonnen",
    ],
  },
  {
    quote: "Unsere Mandanten aus dem japanischen Raum schätzen deutsche Gründlichkeit. Die gleiche Qualität erwarten wir vom Recruiting.",
    name: "Ulrich Bierhaus",
    role: "Steuerberater & vereid. Buchprüfer",
    company: "Bierhaus & Partner",
    category: "kanzleien",
    metric: {
      label: "Spezialistenquote",
      value: 85,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "passende Kandidaten",
    },
    results: [
      "Internationale Expertise gestärkt",
      "Spezialisiertes Team aufgebaut",
    ],
  },
  {
    quote: "Martin Witte steht für persönliche Beratung. Diese Qualität erwarten wir auch von unseren Partnern.",
    name: "Martin Witte",
    role: "Steuerberater",
    company: "Steuerkanzlei Witte",
    category: "kanzleien",
    metric: {
      label: "Mitarbeiterzufriedenheit",
      value: 95,
      suffix: "%",
      prefix: "",
      direction: "up",
      description: "nach Einstellung",
    },
    results: [
      "Cultural Fit sichergestellt",
      "Langfristige Mitarbeiter gewonnen",
    ],
  },
];

const categories: { key: Category; label: string }[] = [
  { key: "alle", label: "Alle" },
  { key: "recruiting", label: "Recruiting" },
  { key: "kanzleien", label: "Kanzleien" },
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

      // Easing function for smooth animation
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

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("alle");
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const filteredTestimonials =
    activeCategory === "alle"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Reset swiper when category changes
  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.slideTo(0);
      setActiveIndex(0);
    }
  }, [activeCategory, swiperInstance]);

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-primary font-semibold mb-4">Kundenstimmen</p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Ehrliche Meinung unserer Kunden
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schau dir an, wie wir Unternehmen aus verschiedenen Branchen beim
            Wachstum unterstützt haben.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all min-h-[44px] ${
                activeCategory === cat.key
                  ? "bg-primary text-white"
                  : "bg-card text-muted-foreground hover:bg-card/80 border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Testimonials Swiper */}
      <div className="max-w-7xl mx-auto overflow-visible">
        <Swiper
          key={activeCategory} // Force re-render when category changes
          modules={[FreeMode, Pagination]}
          spaceBetween={24}
          slidesPerView="auto"
          slidesOffsetAfter={32}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.8,
            momentumVelocityRatio: 0.8,
          }}
          grabCursor={true}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper: SwiperType) => setActiveIndex(swiper.activeIndex)}
          className="!px-4 md:!px-8 !pb-4 [&_.swiper-wrapper]:!items-stretch"
        >
          {filteredTestimonials.map((testimonial, idx) => (
            <SwiperSlide key={`${activeCategory}-${idx}`} className="!w-[300px] md:!w-[340px] !h-full">
              <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 group flex flex-col h-full min-h-[740px]">
                {/* Image/Video Section */}
                <div className="relative aspect-[4/3] bg-secondary overflow-hidden">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const fallback = target.nextElementSibling;
                        if (fallback) fallback.classList.remove("hidden");
                      }}
                    />
                  ) : null}
                  {/* Fallback for no image */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center ${
                      testimonial.image ? "hidden" : ""
                    }`}
                  >
                    <span className="text-6xl font-bold text-primary/40">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>

                  {/* Video Play Button Overlay */}
                  {testimonial.videoUrl && (
                    <a
                      href={testimonial.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                      </div>
                    </a>
                  )}

                  {/* Company Badge */}
                  <div className="absolute bottom-3 left-3 bg-card/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                    {testimonial.company}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Quote */}
                  <blockquote className="text-foreground font-medium mb-4 line-clamp-3 min-h-[4.5rem]">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border/50">
                    <div>
                      <p className="font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Metric Card */}
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{testimonial.metric.label}</span>
                      {testimonial.metric.direction === "up" ? (
                        <TrendingUp className="w-4 h-4 text-primary" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-success" />
                      )}
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className={`text-4xl font-bold ${
                        testimonial.metric.direction === "up" ? "text-primary" : "text-success"
                      }`}>
                        <AnimatedCounter
                          value={testimonial.metric.value}
                          prefix={testimonial.metric.prefix}
                          suffix={testimonial.metric.suffix}
                        />
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.metric.description}
                      </span>
                    </div>

                    {/* Mini Bar Chart Animation */}
                    <div className="flex items-end gap-1 h-8 mt-4">
                      {Array.from({ length: 8 }).map((_, i) => {
                        const isDown = testimonial.metric.direction === "down";
                        const height = isDown
                          ? Math.max(20, 100 - i * 12)
                          : Math.min(100, 25 + i * 10);
                        return (
                          <div
                            key={i}
                            className={`flex-1 rounded-t transition-all duration-500 ${
                              isDown ? "bg-success/40" : "bg-primary/40"
                            }`}
                            style={{
                              height: `${height}%`,
                              transitionDelay: `${i * 50}ms`
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Results List */}
                  <div className="mt-4 space-y-2">
                    {testimonial.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowUpRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots - nur auf Mobile */}
        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {filteredTestimonials.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 h-2 bg-secondary"
                  : "w-2 h-2 bg-secondary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
