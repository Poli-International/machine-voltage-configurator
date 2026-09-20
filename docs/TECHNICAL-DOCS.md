# Machine Voltage Configurator: Technical Documentation

## Architecture Overview

The Machine Voltage Configurator is a client-side web application engineered for tattoo artists and studio owners. It operates with zero external network requests, zero CDN dependencies, and strictly under Content-Security-Policy `script-src 'self'`.

### Technology Stack
- **Markup**: Semantic HTML5 with tabbed layout and ARIA attributes.
- **Styling**: Vanilla CSS3 with CSS custom properties for dark and light mode, accessible contrast ratios exceeding 4.5:1, and dedicated print stylesheets.
- **Scripting**: Modular vanilla JavaScript (ES6+), running in standard document order without build compilation or third-party runtime dependencies.
- **Visualizations**: 100% inline SVG for stroke visualization, voltage dial arc, speed gauge, and waveform representations. No canvas or bitmap graphics.

### File Structure
```
machine-voltage-configurator/
├── index.html              # Main workstation interface
├── documentation.html      # In-app reference manual
├── css/
│   └── style.css           # Full styling, themes, and print layouts
├── js/
│   ├── i18n.js             # 7-language translation engine and dictionaries
│   ├── database.js         # Empirical baseline starting ranges and compatibility data
│   ├── main.js             # Reactive calculation engine and SVG updates
│   ├── my-machines.js      # Local machine card management and print card generation
│   └── common.js           # Theme switching, embed snippet, and iframe resizing
├── docs/
│   ├── USER-GUIDE.md       # Primary English user manual
│   ├── USER-GUIDE-de.md    # German user manual
│   ├── USER-GUIDE-es.md    # Spanish user manual
│   ├── USER-GUIDE-fr.md    # French user manual
│   ├── USER-GUIDE-it.md    # Italian user manual
│   ├── USER-GUIDE-nl.md    # Dutch user manual
│   ├── USER-GUIDE-pt.md    # Portuguese user manual
│   └── TECHNICAL-DOCS.md   # System architecture and data specification
├── images/
│   └── Poli-International-Co.webp  # Publisher brand asset
├── README.md               # Repository summary and quickstart
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # License documentation
├── metadata.json           # Application platform configuration
└── package.json            # Node.js project manifest
```

---

## Data Schemas and Engineering Rules

### Baseline Starting Ranges (`js/database.js`)
Voltage recommendations are structured as empirical starting ranges rather than single fixed numbers:
- **Rotary Machines**: Mapped across stroke lengths (2.5 mm, 3.0 mm, 3.5 mm, 4.0 mm, 4.5 mm) and techniques (`lining`, `shading`, `packing`, `stippling`). Each profile contains minimum starting voltage, maximum starting voltage, relative needle speed, and relative mechanical punch force.
- **Coil Machines**: Mapped across stroke classifications and techniques, including duty cycle boundaries (48% to 58%).

### Dynamic Adjustments
The calculator dynamically applies physical compensation offsets:
- **Needle Grouping Resistance**: Large groupings (such as 14+ Round Liners or 15+ Magnums) add empirical voltage headroom (+0.3V to +0.6V) to maintain needle momentum.
- **Cartridge Membrane Tension**: Stiff cartridge safety membranes require additional torque, applying a calculated voltage offset (+0.3V) to prevent motor drag.
- **Cord Resistance and Voltage Drop**: Cable length and gauge introduce ohmic losses. The engine calculates estimated voltage drops and displays real-time compensation recommendations.

### Compatibility Engine
The system cross-checks three hardware inputs:
1. Machine connection port (RCA, Clip Cord, 3.5 mm Mini-Jack, Direct Wireless Battery).
2. Power supply type (Mains Digital Bench, Mains Analog Bench, Wireless Battery Pack).
3. Connection lead or cable.

Hardware conflicts (such as inductive EMF back-voltage when connecting coil machines to battery packs lacking inductive surge suppression, or physical jack mismatches) trigger diagnostic warning cards.

---

## Localization Engine (`js/i18n.js`)

- Supported locales: English (`en`), Spanish (`es`), Dutch (`nl`), Portuguese (`pt`), German (`de`), French (`fr`), and Italian (`it`).
- Storage key: `poli_tools_language` in `localStorage`.
- Architecture: Immediate dictionary loading before DOM binding. Updates DOM attributes (`data-i18n`, `data-i18n-placeholder`, `data-i18n-aria`, `data-i18n-title`) and dynamically re-renders active templates (result cards, evaluation tags, saved machine lists).

---

## Data Persistence & Security

- All user data (saved workstation machine profiles) is persisted locally via `localStorage` under the key `poli_user_machines`.
- No remote network requests, analytical trackers, or external databases are initialized.
- Machine profile timestamps utilize client local dates rather than UTC ISO slices.
