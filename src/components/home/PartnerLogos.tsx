const PartnerLogos = () => {
  const partners: { name: string; logo?: string }[] = [
    { name: "searched GmbH", logo: "/logos/searched-gmbh.png" },
    { name: "AMONOVA GmbH" },
    { name: "tw.con. GmbH", logo: "/logos/twcon-gmbh.png" },
    { name: "VeraPartners Leadership" },
    { name: "Experiton UG", logo: "/logos/experiton.png" },
    { name: "SalesWorx", logo: "/logos/salesworx.png" },
    { name: "B&L Berger Lindzus Lutz", logo: "/logos/bl-berger-lindzus.png" },
    { name: "Quentin / Quitter & Eckhardt", logo: "/logos/quentin-quitter-eckhardt.png" },
    { name: "Kanzlei Kronbiegel", logo: "/logos/kanzlei-kronbiegel.png" },
    { name: "adam, wüst & partner" },
    { name: "Rendler & Hoferer" },
    { name: "Gilpert & Kollegen", logo: "/logos/gilpert-kollegen.png" },
    { name: "adfontis Steuerberatung", logo: "/logos/adfontis-steuerberatung.png" },
    { name: "Steuerkanzlei Neumann" },
    { name: "Bartholomä Kanzlei", logo: "/logos/bartholomae-kanzlei.png" },
    { name: "Dr. Schauer Steuerberater", logo: "/logos/dr-schauer.png" },
    { name: "Reichelt Steuerberatung", logo: "/logos/reichelt-steuerberatung.png" },
    { name: "Pfefferle Gruppe", logo: "/logos/pfefferle-gruppe.png" },
    { name: "Thau Steuerberater" },
    { name: "Werner & Wollscheid", logo: "/logos/werner-wollscheid.png" },
    { name: "ETL Nelles & Kollegen", logo: "/logos/etl-nelles-kollegen.svg" },
    { name: "KMS Partner", logo: "/logos/kms-partner.svg" },
    { name: "Beck Steuerberatung" },
    { name: "Bierhaus & Partner" },
    { name: "Steuerkanzlei Witte" },
    { name: "Fahrschule Schille" },
    { name: "Zahnärzte im Seerheincenter" },
  ];

  const renderPartner = (partner: { name: string; logo?: string }, i: number) => (
    <div
      key={`${partner.name}-${i}`}
      className="flex-shrink-0 flex items-center justify-center h-10 px-6 md:px-8"
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-7 md:h-8 w-auto max-w-[140px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mix-blend-multiply"
          loading="lazy"
        />
      ) : (
        <span className="text-sm md:text-base font-semibold text-muted-foreground/50 whitespace-nowrap tracking-tight">
          {partner.name}
        </span>
      )}
    </div>
  );

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

        <div className="flex items-center animate-scroll-left">
          {/* Double the items for seamless loop */}
          {[...partners, ...partners].map((partner, i) => renderPartner(partner, i))}
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
          animation: scroll-left 40s linear infinite;
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
