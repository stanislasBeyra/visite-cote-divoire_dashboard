# Design System Minimaliste Noir & Blanc

Produire du HTML/CSS/JS autonome, fichier unique, respectant à la lettre le design system minimaliste noir & blanc décrit ci-dessous. Tout le contenu est en français.

---

## Principes non-négociables (règles absolues)

1. **Deux couleurs uniquement** : blanc pur (`#ffffff`) et noir (`#0a0a0a`). Aucune couleur d'accent, aucun gradient coloré.
2. **Aucune ombre** : interdiction d'utiliser `box-shadow` ou `filter: drop-shadow`. Les bordures `1px solid var(--line)` remplacent toutes les ombres.
3. **Trois familles typo seulement** :
   - **Geist** (sans-serif) → corps, UI, titres
   - **Instrument Serif** italique → accents éditoriaux, citations, lettres de logo
   - **Geist Mono** → eyebrows, badges, chiffres, code
4. **Animations douces** : `cubic-bezier(.2, .7, .2, 1)`, durées 180 ms–700 ms. Jamais d'animation brutale.
5. **Thème clair/sombre** via `data-theme="light|dark"` sur `<html>`.
6. **Densité** via `data-density="compact|normal|spacious"`.
7. **Mode typo** via `data-typo="mixed|editorial|mono"`.
8. **Pas d'emoji**. Pas d'icônes colorées. Icônes SVG hairline `stroke-width: 1.4`.
9. **Code défaut**.

---

## Import des fonts (toujours inclure en premier dans `<head>`)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
```

---

## Tokens CSS (bloc `:root` obligatoire)

```css
:root {
  --bg: #ffffff;
  --fg: #0a0a0a;
  --muted: #7a7a7a;
  --faint: #b8b8b8;
  --line: #ececec;
  --hover: #f6f6f6;
  --active: #f0f0f0;
  --chip: #f4f4f4;
  --r-sm: 7px;
  --r-md: 10px;
  --r-lg: 14px;
  --r-full: 999px;
  --pad-y: 140px;
  --container: 1280px;
  --font-display: 'Geist', -apple-system, sans-serif;
  --font-body: 'Geist', -apple-system, sans-serif;
  --font-serif: 'Instrument Serif', serif;
  --font-mono: 'Geist Mono', monospace;
  --ease: cubic-bezier(.2, .7, .2, 1);
  --dur-fast: 180ms;
  --dur-base: 260ms;
  --dur-slow: 420ms;
}

html[data-theme="dark"] {
  --bg: #0a0a0a;
  --fg: #ffffff;
  --muted: #8a8a8a;
  --faint: #4a4a4a;
  --line: #1a1a1a;
  --hover: #111;
  --active: #161616;
  --chip: #141414;
}

html[data-density="compact"] {
  --pad-y: 96px;
}

html[data-density="spacious"] {
  --pad-y: 180px;
}

html[data-typo="editorial"] {
  --font-display: 'Instrument Serif', serif;
}

html[data-typo="mono"] {
  --font-display: 'Geist Mono', monospace;
  --font-body: 'Geist Mono', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--fg);
  font-size: 15px;
  line-height: 1.55;
  letter-spacing: -.005em;
  -webkit-font-smoothing: antialiased;
  transition: background 360ms ease, color 360ms ease;
}

h1, h2, h3 {
  margin: 0;
  font-weight: 500;
  letter-spacing: -.028em;
  line-height: 1.02;
}

.mono {
  font-family: var(--font-mono);
}

.serif {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
}
```

---

## Composants de base (classes CSS à toujours inclure)

```css
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 32px;
}

.section {
  padding: var(--pad-y) 0;
  border-top: 1px solid var(--line);
}

/* Eyebrow */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .14em;
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.eyebrow::before {
  content: '';
  width: 6px;
  height: 6px;
  background: var(--fg);
  border-radius: 50%;
}

/* Boutons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--r-full);
  font-size: 13.5px;
  font-weight: 500;
  font-family: var(--font-body);
  border: 1px solid var(--line);
  cursor: pointer;
  transition: all 220ms var(--ease);
  background: transparent;
  color: var(--fg);
  text-decoration: none;
}

.btn-primary {
  background: var(--fg);
  color: var(--bg);
  border-color: var(--fg);
}

.btn-primary:hover {
  transform: translateY(-1px);
}

.btn-ghost:hover {
  background: var(--hover);
}

.btn svg {
  width: 14px;
  height: 14px;
  stroke: currentColor;
  stroke-width: 1.5;
  fill: none;
}

/* Card / Chip / Input */
.card {
  border: 1px solid var(--line);
  border-radius: var(--r-lg);
  padding: 22px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: var(--r-full);
  border: 1px solid var(--line);
  background: var(--chip);
  font-size: 11.5px;
}

.input {
  width: 100%;
  padding: 11px 14px;
  border: 1px solid var(--line);
  border-radius: var(--r-sm);
  background: transparent;
  color: var(--fg);
  font-family: inherit;
  font-size: 14px;
  transition: border-color 180ms ease;
}

.input:focus {
  outline: none;
  border-color: var(--fg);
}

/* Reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms var(--ease), transform 700ms var(--ease);
}

.reveal.in {
  opacity: 1;
  transform: none;
}

.reveal-d1 { transition-delay: 80ms; }
.reveal-d2 { transition-delay: 160ms; }
.reveal-d3 { transition-delay: 240ms; }
.reveal-d4 { transition-delay: 320ms; }
.reveal-d5 { transition-delay: 400ms; }
```

---

## Échelle typographique

| Usage | Taille | Poids | Famille |
|-------|--------|-------|---------|
| Hero titre | `clamp(56px, 9vw, 136px)` / line-height 0.92 | 500 | Geist |
| H2 section | `clamp(44px, 5vw, 64px)` | 500 | Geist |
| H3 | 20–22px | 500 | Geist |
| Body | 15–16px | 400 | Geist |
| Body large | 18–19px | 400 | Geist |
| Caption | 12–13px | 400 | Geist `color: var(--muted)` |
| Eyebrow | 11px uppercase 0.14em | 400 | Geist Mono |

**Règle d'or** : sur un titre hero, combiner `Texte sans <br/> <span class="serif">accent italique.</span>`.

---

## Patterns de page par type

### Dashboard

- **Layout** : sidebar 248px fixe + main flex:1
- **Sidebar** : logo, groupes nav avec icônes SVG + badge utilisateur avec avatar mono
- **Topbar** : breadcrumb mono à gauche, cloche + toggle thème + avatar à droite
- **Contenu** : H1+sous-titre → grille 4 KPIs bordée (sparklines SVG, chips ↑↓%) → line chart SVG → table
- **Tables** : `<thead>` uppercase tracking 0.08em, rows `border-top: 1px solid var(--line)`

### Landing page

- **Nav** fixe avec `backdrop-filter: blur(12px)` + `background: color-mix(in oklab, var(--bg) 80%, transparent)` au scroll
- **Hero** : eyebrow + titre `clamp(56px, 9vw, 136px)` avec `.serif` sur la 2e ligne + sous-titre muted + 2 boutons
- **Features** : grille 3 colonnes bordées (border-right entre cells, aucun gap)
- **CTA final** : centré, titre géant, 2 boutons

### Auth (connexion / inscription)

- **Layout** split 50/50 : colonne gauche avec citation `.serif` + logo + copyright, colonne droite formulaire centré max-width 380px
- **Toggle** pill connexion/inscription, labels `.mono` uppercase 12px, `.input` border 1px
- **CTA principal** : `.btn-primary` block 100% + icône flèche

### Documentation

- **Grille 3 colonnes** : TOC latérale 240px | contenu 1fr | sidebar sticky avec recherche + raccourci ⌘K en chip mono
- **Prose** : max-width 680px, line-height 1.7, `<pre>` avec `background: var(--chip)`

### Tarifs

- **3 plans** en grille bordée ; plan milieu : `background: var(--chip)` + badge POPULAIRE chip noir
- **Toggle** mensuel/annuel pill, prix 56px

### Blog

- **Index** : onglets catégories (souligné actif), liste tabulaire 120px 1fr auto auto
- **Article** : titre centré 40–72px + `.serif` sur un mot, chapeau `.serif` italique 22px

### 404

- **Layout** centré viewport, eyebrow "Erreur 404", titre géant `clamp(80px, 14vw, 200px)` avec "Page" en `.serif`, 2 boutons

---

## Animations standards

```javascript
// Reveal au scroll (toujours inclure)
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

- **Classes de délai** : `.reveal-d1` (80ms) … `.reveal-d5` (400ms) via `transition-delay`.
- **Hover cards** : `transform: translateY(-3px)` + `transition: transform 320ms var(--ease)`.

---

## Panneau Tweaks (obligatoire — bas à droite)

Toujours inclure ce panneau en bas à droite avec :

- Toggle thème clair/sombre
- Toggle densité compact/normal/spacious
- Toggle typo mixed/editorial/mono

```html
<script>
window.__MD_TWEAKS = /*EDITMODE-BEGIN*/{"theme":"light","density":"normal","typo":"mixed"}/*EDITMODE-END*/;
(function(){
  const t = window.__MD_TWEAKS;
  document.documentElement.setAttribute('data-theme', t.theme);
  document.documentElement.setAttribute('data-density', t.density);
  document.documentElement.setAttribute('data-typo', t.typo);
})();
</script>
```

**Protocole postMessage** :

```javascript
window.parent.postMessage({ type: '__edit_mode_available' }, '*');
window.addEventListener('message', e => {
  if (e.data?.type === '__activate_edit_mode') { /* ouvrir panel */ }
  if (e.data?.type === '__deactivate_edit_mode') { /* fermer panel */ }
});
```

---

## Footer

Fond noir en thème clair, fond blanc en thème sombre :

```css
footer {
  background: var(--fg);
  color: var(--bg);
}
```

---

## Checklist avant livraison

- ✓ Uniquement `var(--bg)` / `var(--fg)` / `var(--muted)` / `var(--line)` / `var(--chip)` — aucune couleur hardcodée
- ✓ Aucun `box-shadow`
- ✓ Aucun gradient coloré (gradients bg→transparent OK pour masques)
- ✓ Aucun emoji
- ✓ Texte en français
- ✓ `.serif` italique sur le titre hero
- ✓ `.eyebrow` mono avant chaque grand titre
- ✓ `.reveal` + délais en cascade sur les blocs principaux
- ✓ Thème sombre fonctionnel
- ✓ Panneau Tweaks présent
- ✓ Fichier HTML unique autonome

---

## Style rédactionnel

- **Ton** calme, confiant, jamais commercial
- **Phrases** courtes, rythme binaire : « Rapide par défaut. » / « Sécurisé, sans effort. »
- **Typographie française** : espaces fines avant `: ; ! ? »`, apostrophes courbes `'`
- **Citations** `.serif` italique avec guillemets français `« »`
- **Chiffres** : `tabular-nums`, format français (42 890 FCFA)

---

## Template de base (fichier HTML autonome)

```html
<!DOCTYPE html>
<html lang="fr" data-theme="light" data-density="normal" data-typo="mixed">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page</title>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">

  <style>
    :root {
      --bg: #ffffff; --fg: #0a0a0a;
      --muted: #7a7a7a; --faint: #b8b8b8;
      --line: #ececec; --hover: #f6f6f6; --active: #f0f0f0; --chip: #f4f4f4;
      --r-sm: 7px; --r-md: 10px; --r-lg: 14px; --r-full: 999px;
      --pad-y: 140px; --container: 1280px;
      --font-display: 'Geist', -apple-system, sans-serif;
      --font-body: 'Geist', -apple-system, sans-serif;
      --font-serif: 'Instrument Serif', serif;
      --font-mono: 'Geist Mono', monospace;
      --ease: cubic-bezier(.2, .7, .2, 1);
      --dur-fast: 180ms; --dur-base: 260ms; --dur-slow: 420ms;
    }
    html[data-theme="dark"] {
      --bg: #0a0a0a; --fg: #ffffff;
      --muted: #8a8a8a; --faint: #4a4a4a;
      --line: #1a1a1a; --hover: #111; --active: #161616; --chip: #141414;
    }
    html[data-density="compact"] { --pad-y: 96px; }
    html[data-density="spacious"] { --pad-y: 180px; }
    html[data-typo="editorial"] { --font-display: 'Instrument Serif', serif; }
    html[data-typo="mono"] {
      --font-display: 'Geist Mono', monospace;
      --font-body: 'Geist Mono', monospace;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: var(--font-body); background: var(--bg); color: var(--fg);
      font-size: 15px; line-height: 1.55; letter-spacing: -.005em;
      -webkit-font-smoothing: antialiased;
      transition: background 360ms ease, color 360ms ease;
    }
    h1, h2, h3 { margin: 0; font-weight: 500; letter-spacing: -.028em; line-height: 1.02; }
    .mono { font-family: var(--font-mono); }
    .serif { font-family: var(--font-serif); font-style: italic; font-weight: 400; }

    .container { max-width: var(--container); margin: 0 auto; padding: 0 32px; }
    .section { padding: var(--pad-y) 0; border-top: 1px solid var(--line); }

    .eyebrow {
      font-family: var(--font-mono); font-size: 11px;
      text-transform: uppercase; letter-spacing: .14em;
      color: var(--muted); display: inline-flex; align-items: center; gap: 8px;
    }
    .eyebrow::before {
      content: ''; width: 6px; height: 6px;
      background: var(--fg); border-radius: 50%;
    }

    .btn {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 12px 20px; border-radius: var(--r-full);
      font-size: 13.5px; font-weight: 500; font-family: var(--font-body);
      border: 1px solid var(--line); cursor: pointer;
      transition: all 220ms var(--ease); background: transparent; color: var(--fg);
      text-decoration: none;
    }
    .btn-primary { background: var(--fg); color: var(--bg); border-color: var(--fg); }
    .btn-primary:hover { transform: translateY(-1px); }
    .btn-ghost:hover { background: var(--hover); }
    .btn svg { width: 14px; height: 14px; stroke: currentColor; stroke-width: 1.5; fill: none; }

    .card { border: 1px solid var(--line); border-radius: var(--r-lg); padding: 22px; }
    .chip {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 3px 10px; border-radius: var(--r-full);
      border: 1px solid var(--line); background: var(--chip); font-size: 11.5px;
    }
    .input {
      width: 100%; padding: 11px 14px;
      border: 1px solid var(--line); border-radius: var(--r-sm);
      background: transparent; color: var(--fg);
      font-family: inherit; font-size: 14px;
      transition: border-color 180ms ease;
    }
    .input:focus { outline: none; border-color: var(--fg); }

    .reveal {
      opacity: 0; transform: translateY(24px);
      transition: opacity 700ms var(--ease), transform 700ms var(--ease);
    }
    .reveal.in { opacity: 1; transform: none; }
    .reveal-d1 { transition-delay: 80ms; }
    .reveal-d2 { transition-delay: 160ms; }
    .reveal-d3 { transition-delay: 240ms; }
    .reveal-d4 { transition-delay: 320ms; }
    .reveal-d5 { transition-delay: 400ms; }

    footer { background: var(--fg); color: var(--bg); }

    /* Panneau Tweaks */
    .tweaks-panel {
      position: fixed; bottom: 24px; right: 24px;
      background: var(--bg); border: 1px solid var(--line);
      border-radius: var(--r-md); padding: 16px;
      display: flex; flex-direction: column; gap: 12px;
      font-size: 12px; z-index: 1000;
    }
    .tweaks-toggle {
      display: flex; gap: 4px; padding: 2px;
      background: var(--chip); border-radius: var(--r-sm);
    }
    .tweaks-toggle button {
      padding: 4px 8px; border: none; background: transparent;
      color: var(--fg); cursor: pointer; border-radius: 4px;
      font-size: 11px; transition: background 180ms ease;
    }
    .tweaks-toggle button.active {
      background: var(--fg); color: var(--bg);
    }
  </style>
</head>
<body>

  <!-- Contenu ici -->

  <!-- Panneau Tweaks -->
  <div class="tweaks-panel">
    <div class="mono" style="font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);">Réglages</div>

    <div>
      <div class="mono" style="font-size:10px;margin-bottom:4px;">Thème</div>
      <div class="tweaks-toggle">
        <button onclick="setTheme('light')" data-theme-btn="light" class="active">Clair</button>
        <button onclick="setTheme('dark')" data-theme-btn="dark">Sombre</button>
      </div>
    </div>

    <div>
      <div class="mono" style="font-size:10px;margin-bottom:4px;">Densité</div>
      <div class="tweaks-toggle">
        <button onclick="setDensity('compact')" data-density-btn="compact">Compact</button>
        <button onclick="setDensity('normal')" data-density-btn="normal" class="active">Normal</button>
        <button onclick="setDensity('spacious')" data-density-btn="spacious">Large</button>
      </div>
    </div>

    <div>
      <div class="mono" style="font-size:10px;margin-bottom:4px;">Typo</div>
      <div class="tweaks-toggle">
        <button onclick="setTypo('mixed')" data-typo-btn="mixed" class="active">Mixte</button>
        <button onclick="setTypo('editorial')" data-typo-btn="editorial">Édito</button>
        <button onclick="setTypo('mono')" data-typo-btn="mono">Mono</button>
      </div>
    </div>
  </div>

  <script>
    // Tweaks state
    window.__MD_TWEAKS = /*EDITMODE-BEGIN*/{"theme":"light","density":"normal","typo":"mixed"}/*EDITMODE-END*/;

    (function(){
      const t = window.__MD_TWEAKS;
      document.documentElement.setAttribute('data-theme', t.theme);
      document.documentElement.setAttribute('data-density', t.density);
      document.documentElement.setAttribute('data-typo', t.typo);
    })();

    function setTheme(theme) {
      window.__MD_TWEAKS.theme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      document.querySelectorAll('[data-theme-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.themeBtn === theme);
      });
    }

    function setDensity(density) {
      window.__MD_TWEAKS.density = density;
      document.documentElement.setAttribute('data-density', density);
      document.querySelectorAll('[data-density-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.densityBtn === density);
      });
    }

    function setTypo(typo) {
      window.__MD_TWEAKS.typo = typo;
      document.documentElement.setAttribute('data-typo', typo);
      document.querySelectorAll('[data-typo-btn]').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.typoBtn === typo);
      });
    }

    // Reveal au scroll
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // PostMessage protocol
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    window.addEventListener('message', e => {
      if (e.data?.type === '__activate_edit_mode') {
        document.querySelector('.tweaks-panel').style.display = 'flex';
      }
      if (e.data?.type === '__deactivate_edit_mode') {
        document.querySelector('.tweaks-panel').style.display = 'none';
      }
    });
  </script>
</body>
</html>
```

---

## Instructions d'utilisation du skill

Quand vous utilisez ce skill pour générer une page :

1. **Commencez toujours par le template de base** ci-dessus
2. **Respectez strictement les règles** : pas de couleurs autres que noir/blanc, pas d'ombres, uniquement les 3 familles de polices
3. **Utilisez les classes CSS définies** : `.container`, `.section`, `.eyebrow`, `.btn`, `.card`, `.chip`, `.input`, `.reveal`, etc.
4. **Ajoutez la classe `.reveal`** sur les sections importantes pour les animations au scroll
5. **Utilisez `.serif` en italique** pour les accents éditoriaux dans les titres
6. **Incluez toujours le panneau Tweaks** en bas à droite
7. **Footer avec inversion de couleurs** : `background: var(--fg); color: var(--bg);`
8. **Contenu en français** avec typographie française correcte (espaces fines, guillemets français, apostrophes courbes)
9. **Fichier unique autonome** : tout le HTML/CSS/JS dans un seul fichier
10. **Vérifiez la checklist** avant de livrer

Ce skill permet de générer rapidement des pages web élégantes, minimalistes et cohérentes avec le design system noir & blanc.
