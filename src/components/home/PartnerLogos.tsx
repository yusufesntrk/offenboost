const PartnerLogos = () => {
  const companies = [
    "searched GmbH",
    "AMONOVA GmbH",
    "tw.con. GmbH",
    "VeraPartners Leadership",
    "Experiton UG",
    "SalesWorx",
    "B&L Berger Lindzus Lutz",
    "Quentin / Quitter & Eckhardt",
    "Kanzlei Kronbiegel",
    "adam, wüst & partner",
    "Rendler & Hoferer",
    "Gilpert & Kollegen",
    "adfontis Steuerberatung",
    "Steuerkanzlei Neumann",
    "Bartholomä Kanzlei",
    "Dr. Schauer Steuerberater",
    "Reichelt Steuerberatung",
    "Pfefferle Gruppe",
    "Thau Steuerberater",
    "Werner & Wollscheid",
    "ETL Nelles & Kollegen",
    "KMS Partner",
    "Beck Steuerberatung",
    "Bierhaus & Partner",
    "Steuerkanzlei Witte",
    "Fahrschule Schille",
  ];

  return (
    <section className="py-10 px-4 md:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-muted-foreground mb-8 text-center">
          Vertraut von <span className="text-primary font-bold">250+</span> Partnern
        </p>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left">
          {/* Double the items for seamless loop */}
          {[...companies, ...companies].map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex-shrink-0 px-6 md:px-8"
            >
              <span className="text-sm md:text-base font-medium text-muted-foreground/60 whitespace-nowrap">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnerLogos;
