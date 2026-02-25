---
name: logo-carousel
description: Find, download, process and display company/partner logos in an infinite scrolling carousel. Use when the user asks to "add partner logos", "logo carousel", "company logos section", "trusted by logos", "find logos for companies", or needs to display brand logos with consistent styling.
user-invocable: false
---

# Logo Carousel - Full Workflow

Kompletter Workflow: Logos finden, herunterladen, Hintergrund entfernen und als endloses Karussell darstellen.

## Phase 1: Logos finden und herunterladen

### Verzeichnis erstellen

```bash
mkdir -p public/logos
```

### Logo-Quellen (Priorität)

| Quelle | Methode | Qualität |
|--------|---------|----------|
| Firmenwebsite | WebFetch → Logo-URL finden | Beste |
| Google Images | WebSearch: "[Firma] logo" | Gut |
| LinkedIn | Profilbild als Fallback | Niedrig |
| Favicon | `https://domain.de/favicon.ico` | Notfall |

### WebFetch Workflow

```
1. WebSearch: "[Firmenname] offizielle Website"
2. WebFetch auf Website: "Find the logo URL. Look for og:image, header img, logo class, SVG logos"
3. curl -L -o public/logos/firmenname.png "LOGO_URL"
4. file public/logos/firmenname.png  # Verify
```

### Dateinamen-Konvention

- Kebab-case: `firma-name.png`
- Umlaute ersetzen: ä→ae, ö→oe, ü→ue
- Sonderzeichen weglassen: `b-l-berger.png`

## Phase 2: Hintergründe entfernen

### Problem

Viele Logos haben weißen Hintergrund statt transparent. Auf der Website sieht man dann weiße/graue Rechtecke.

### Lösung: ImageMagick

```bash
# Einzelnes Logo
magick logo.png -fuzz 15% -transparent white logo-transparent.png

# JPG → PNG mit Transparenz
magick logo.jpg -fuzz 15% -transparent white logo.png && rm logo.jpg

# Batch: Alle PNGs im Ordner
cd public/logos
for f in *.png; do
  magick "$f" -fuzz 15% -transparent white "${f%.png}-tmp.png" && mv "${f%.png}-tmp.png" "$f"
done

# JPGs konvertieren und Originale löschen
for f in *.jpg; do
  magick "$f" -fuzz 15% -transparent white "${f%.jpg}.png" && rm "$f"
done
```

### Fuzz-Wert

- `10%` - Nur reines Weiß (#fff)
- `15%` - Weiß und leicht gräulich (empfohlen)
- `20%` - Auch hellgrau (kann zu viel entfernen)

### Prüfen

```bash
identify -verbose logo.png | grep "Alpha"
# Sollte "Alpha: 8-bit" zeigen
```

## Phase 3: Karussell-Komponente

### Infinite Scroll Pattern (CSS-only, kein JS)

```tsx
const PartnerLogos = () => {
  const partners: { name: string; logo?: string }[] = [
    { name: "Firma A", logo: "/logos/firma-a.png" },
    { name: "Firma B", logo: "/logos/firma-b.svg" },
    { name: "Firma C" }, // Text-Fallback wenn kein Logo
  ];

  const renderPartner = (partner: typeof partners[0], i: number) => (
    <div
      key={`${partner.name}-${i}`}
      className="flex-shrink-0 flex items-center justify-center h-10 px-6 md:px-8"
    >
      {partner.logo ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-7 md:h-8 w-auto max-w-[140px] object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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

      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex items-center animate-scroll-left">
          {[...partners, ...partners].map((p, i) => renderPartner(p, i))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
```

### Wie es funktioniert

1. **Duplizierung:** Array wird verdoppelt `[...partners, ...partners]`
2. **CSS Animation:** `translateX(-50%)` scrollt exakt eine Hälfte
3. **Nahtloser Loop:** Da beide Hälften identisch sind, ist der Übergang unsichtbar
4. **Kein JS-Timer:** Pure CSS = kein Lag, kein Jank, performant

### Wichtige CSS-Details

| Element | Zweck |
|---------|-------|
| `width: max-content` | Container passt sich an Inhalt an |
| `translateX(-50%)` | Scrollt genau eine Hälfte |
| `40s linear infinite` | Gleichmäßig, endlos |
| `hover: animation-play-state: paused` | Pausiert bei Hover |
| Fade-Divs mit Gradient | Sanfte Kanten links/rechts |

### Logo-Styling

| Klasse | Zweck |
|--------|-------|
| `grayscale` | Einheitlich grau (nicht `brightness-0`!) |
| `opacity-40` | Dezenter Look |
| `hover:grayscale-0 hover:opacity-100` | Farbe bei Hover |
| `max-w-[140px]` | Einheitliche Maximalgröße |
| `object-contain` | Kein Cropping |

### NICHT verwenden

| Falsch | Problem | Richtig |
|--------|---------|---------|
| `brightness-0` | Logos ohne Transparenz werden schwarze Rechtecke | `grayscale` |
| `brightness-0 invert` | Weiße Rechtecke auf hellem BG | `grayscale` |
| JS-basiertes Scrolling | Lag, Jank, Performance | CSS `@keyframes` |
| `overflow-x: scroll` | Scrollbar sichtbar | `overflow: hidden` auf Parent |

## Checkliste

- [ ] Logos heruntergeladen in `public/logos/`
- [ ] Alle Dateien verifiziert (`file` command)
- [ ] Weiße Hintergründe entfernt (ImageMagick)
- [ ] JPGs zu PNGs konvertiert
- [ ] Komponente mit Logo-Array erstellt
- [ ] Text-Fallback für fehlende Logos
- [ ] Fade-Edges an beiden Seiten
- [ ] Hover pausiert Animation
- [ ] Mobile responsive getestet
