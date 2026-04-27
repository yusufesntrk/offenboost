# Branchen-Seiten + Navigation-Dropdown

## Kontext

OffenBoost hat Testimonials in 6 Branchen: Personaldienstleister (Recruiting), Kanzleien, Fahrschulen, Praxen, Finanzdienstleister, Restaurants. Aktuell existiert nur `/fahrschulen` als eigenständige Funnel-Seite. Es gibt kein "Branchen"-Element in der Navigation.

## Ziel

Jede Branche bekommt eine eigene Hormozi-Style Funnel-Seite. Die Navigation bekommt ein Dropdown "Branchen" das alle Seiten verlinkt.

---

## 1. Navigation

### Desktop

Neues Nav-Item "Branchen" zwischen "Leistungen" und "Über uns". Hover öffnet ein Dropdown-Panel mit:

1. Personaldienstleister → `/personaldienstleister`
2. Kanzleien → `/kanzleien`
3. Fahrschulen → `/fahrschulen`
4. Praxen → `/praxen`
5. Finanzdienstleister → `/finanzdienstleister`
6. Restaurants → `/restaurants`

Styling: Konsistent mit der bestehenden Nav (dunkler Hintergrund, weiße Schrift). Dropdown bekommt subtle border/shadow zur Abgrenzung.

### Mobile

Im Hamburger-Drawer wird "Branchen" als aufklappbare Gruppe dargestellt. Tap auf "Branchen" expandiert die Liste der Unterseiten. Gleiche Reihenfolge wie Desktop.

---

## 2. Branchen-Seiten

### URL-Struktur

Flache URLs direkt unter Root:

| Branche | URL | Status |
|---------|-----|--------|
| Personaldienstleister | `/personaldienstleister` | Neu |
| Kanzleien | `/kanzleien` | Neu |
| Fahrschulen | `/fahrschulen` | Existiert (CTA-Anpassung) |
| Praxen | `/praxen` | Neu |
| Finanzdienstleister | `/finanzdienstleister` | Neu |
| Restaurants | `/restaurants` | Neu |

### Seitenstruktur (identisch pro Branche)

Jede Seite folgt exakt dem Aufbau von `/fahrschulen`:

#### 2.1 Hero Section
- `min-h-screen`, volle Viewport-Höhe
- Branchenspezifische Headline mit konkretem Versprechen + Metrik
- Subheadline mit Erklärung
- CTA-Button → `/termin`
- Social Proof Badges (z.B. "30+ Recruiting-Agenturen vertrauen auf OffenBoost")

#### 2.2 PainStack
- 3 branchenspezifische Pain-Point-Cards
- Jeder Pain Point: Icon + Headline + kurze Beschreibung
- Beschreibt die Probleme der Zielgruppe ohne OffenBoost

#### 2.3 System/Methodik
- "Das [Name]-System in 5 Schritten"
- 5 Schritte mit Nummerierung, Titel und Beschreibung
- Branchenspezifisch angepasste Schritte

#### 2.4 Case Study
- Dunkler Hintergrund
- Bestes Testimonial der Branche als Featured Case
- Vorher/Nachher-Liste
- ROI-Badge mit Key-Metrik
- Foto + Quote + Firmenlogo
- Bei Branchen mit mehreren Testimonials: das stärkste als Haupt-Case, Rest als kleinere Testimonial-Karten darunter

#### 2.5 Angebot
- 3 Angebots-Cards (branchenspezifisch)
- Scarcity-Note ("Wir nehmen aktuell nur X neue [Branche] auf")

#### 2.6 FAQ
- 6 branchenspezifische FAQs
- Accordion-Style (aufklappbar)

#### 2.7 Abschluss-CTA
- Große Headline "Bereit für [branchenspezifisches Versprechen]?"
- CTA-Button → `/termin`

### SEO pro Seite

- `<title>` und `<meta description>` branchenspezifisch
- JSON-LD: BreadcrumbList + FAQPage Schema
- Canonical URL auf die jeweilige Seite

---

## 3. Branchenspezifischer Content

### 3.1 Personaldienstleister (`/personaldienstleister`)

**Hero:** Fokus auf Sales-Pipeline, mehr Aufträge, höhere Upfront Fees.
**Pain Points:** Kaltakquise ohne System, unqualifizierte Leads, Sales-Prozess nicht skalierbar.
**System:** Sales-Analyse → Positionierung → Outreach-Automatisierung → Qualifizierung → Skalierung.
**Case Study:** Yasar Sentürk (searched GmbH, 200k Upfront Fee) als Haupt-Case. Weitere: Rüdiger Bruns (5x Sales ROI), Alireza Nikjou (+300% Sales-Output), etc.
**8 Testimonials verfügbar** — Haupt-Case + weitere als Testimonial-Grid.

### 3.2 Kanzleien (`/kanzleien`)

**Hero:** Fokus auf Kanzleigewinn, Honorarvolumen, profitable Mandate.
**Pain Points:** Zu viele C-Mandate, Abhängigkeit von Empfehlungen, keine planbare Mandantengewinnung.
**System:** Kanzlei-Analyse → Mandanten-Profiling → Marketing-Strategie → Qualifizierung → Skalierung.
**Case Study:** Christian Eckhardt (Quentin / Quitter & Eckhardt, +85% Kanzleigewinn) als Haupt-Case. 17+ weitere Testimonials verfügbar.
**Stärkste Branche nach Testimonial-Anzahl** — Haupt-Case + Testimonial-Grid.

### 3.3 Fahrschulen (`/fahrschulen`)

**Existiert bereits.** Einzige Änderung: AuditForm-CTA wird durch Termin-Link ersetzt (`/termin` statt Webhook-Formular).

### 3.4 Praxen (`/praxen`)

**Hero:** Fokus auf Neupatientenanfragen, Online-Sichtbarkeit.
**Pain Points:** Abhängigkeit von Laufkundschaft, keine Online-Präsenz, Konkurrenz durch Ketten.
**System:** Praxis-Analyse → Patienten-Profiling → Online-Marketing → Terminbuchung → Bewertungsmanagement.
**Case Study:** Dr. Schmidt (Zahnärzte im Seerheincenter, +140% Neupatientenanfragen).
**1 Testimonial** — Featured Case ohne Grid.

### 3.5 Finanzdienstleister (`/finanzdienstleister`)

**Hero:** Fokus auf neue Mandanten, planbare Akquise.
**Pain Points:** Abhängigkeit von Empfehlungen, kein digitales Marketing, hohe Streuverluste.
**System:** Markt-Analyse → Zielgruppen-Definition → Lead-Generierung → Qualifizierung → Mandanten-Onboarding.
**Case Study:** Jürgen Mildenberger (Finanzberatung Mildenberger, +47 neue Mandanten/Monat).
**1 Testimonial** — Featured Case ohne Grid.

### 3.6 Restaurants (`/restaurants`)

**Hero:** Fokus auf Online-Reservierungen, Bewertungen, Sichtbarkeit.
**Pain Points:** Leere Tische unter der Woche, keine Online-Strategie, schlechte Bewertungen.
**System:** Restaurant-Analyse → Online-Präsenz → Bewertungs-Strategie → Reservierungs-Optimierung → Stammkunden-System.
**Case Study:** Dr. Frieder Baldner (Baldner's Gasthof Schwanen, +210% Online-Reservierungen) als Haupt-Case.
**2 Testimonials** — Haupt-Case + Hasan Kaya (DeDi's Tantuni & Grill).

---

## 4. Komponenten-Architektur

### Neue Astro-Komponenten pro Branche

Jede Branche bekommt eigene Komponenten im Pattern `src/components/branchen/[branche]/`:

```
src/components/branchen/personaldienstleister/
  PersonaldienstleisterHero.astro
  PersonaldienstleisterPainStack.astro
  PersonaldienstleisterSystem.astro
  PersonaldienstleisterCase.astro
  PersonaldienstleisterOffer.astro
  PersonaldienstleisterFAQ.tsx (React, client:visible)

src/components/branchen/kanzleien/
  KanzleienHero.astro
  KanzleienPainStack.astro
  KanzleienSystem.astro
  KanzleienCase.astro
  KanzleienOffer.astro
  KanzleienFAQ.tsx

... (gleiches Pattern für praxen, finanzdienstleister, restaurants)
```

### Navbar-Änderung

`src/components/layout/Navbar.astro` bekommt:
- Desktop: Dropdown-Trigger + Panel für "Branchen"
- Mobile: Aufklappbare Gruppe im Drawer

### Bestehende Fahrschulen-Komponenten

Bleiben in `src/components/fahrschulen/` — werden nicht verschoben. Nur der CTA im AuditForm wird angepasst.

---

## 5. Nicht im Scope

- Testimonial-Daten zentralisieren (eigenes Feature)
- n8n Webhooks pro Branche (eigenes Feature)
- Neue Branchen ohne bestehende Testimonials
- Änderungen an der Homepage oder `/casestudies`
