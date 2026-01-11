# OffenBoost - Projekt-Anweisungen

> Universelle Regeln (Plan-First, Agent-Format, Frontmatter, etc.) sind in `~/.claude/CLAUDE.md` definiert.
> Diese Datei enthält NUR projekt-spezifische Anweisungen.

## Unternehmen

**OffenBoost** - Wachstumspartner aus Offenburg

### Founder
- **Yusuf Esentürk** - Co-Founder
- **Manuel Engelhardt** - Co-Founder

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- shadcn/ui Komponenten
- Lucide React Icons

## Style Guide

Vollständiger Style Guide: `.claude/skills/offenboost-style-guide/SKILL.md`

## UI/UX Patterns (Projekt-spezifisch)

### Hero Section
- **IMMER** volle Viewport-Höhe (`min-h-screen` oder `h-screen`)
- Beim ersten Laden der Website darf NICHTS abgeschnitten sein
- Der nächste Abschnitt beginnt erst nach dem Scrollen
- Animationen/Elemente müssen vollständig im sichtbaren Bereich sein

### Horizontal Scrollbare Container
- **NIEMALS** Navigation-Pfeile (ChevronLeft/ChevronRight)
- Drag-to-Scroll Pattern (siehe Style Guide)
- `cursor-grab` / `cursor-grabbing` für Feedback
- `overflow-x-auto snap-x snap-mandatory scrollbar-hide`

### Card Alignment
- Parent Card: `flex flex-col`
- Variabler Content: `flex-1`
- Bottom-Element automatisch am unteren Rand

### Scroll vs Grid
- **≤4 Items:** Grid verwenden
- **5+ Items:** Horizontal Scroll erlaubt
- Responsive: `flex overflow-x-auto lg:grid lg:grid-cols-4 lg:overflow-visible`

### Hover-Effekte
- **KEIN** `hover:scale-*` bei Cards unter Tabs/Navigation
- Stattdessen: `hover:border-white/30 hover:bg-white/10`

### Full-Bleed Scroll
```tsx
<div className="-mx-4 md:-mx-8">
  <div className="px-4 md:px-8 overflow-x-auto">
    {/* Cards */}
  </div>
</div>
```

## Projekt-spezifische Agents

Diese Agents sind für dieses Projekt relevant:
- `offenboost-style-guide` - Projekt Style Guide
- `ui-review-agent` - UI Validierung
- `frontend-agent` - React Components

## MCP Config

Dieses Projekt nutzt:
```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"],
      "env": { "HEADLESS": "true" }
    }
  }
}
```
