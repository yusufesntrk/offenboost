const PartnerLogos = () => {
  const partners = [
    { name: "searched", highlight: "searched" },
    { name: "SalesWorx", highlight: "Worx" },
    { name: "Experiton", highlight: "ton" },
    { name: "Zerberus IT", highlight: "IT" },
  ];

  return (
    <section className="py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-medium text-muted-foreground mb-8 text-center">
          Vertraut von <span className="text-primary font-bold">14+</span> Recruiting-Agenturen
        </p>

        {/* Logo Grid - Elegant Text Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => {
            const highlightIndex = partner.name.indexOf(partner.highlight);
            const beforeHighlight = partner.name.slice(0, highlightIndex);
            const afterHighlight = partner.name.slice(highlightIndex + partner.highlight.length);

            return (
              <div
                key={partner.name}
                className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-lg md:text-xl font-semibold tracking-tight text-foreground/80">
                  {beforeHighlight}
                  <span className="text-primary">{partner.highlight}</span>
                  {afterHighlight}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
