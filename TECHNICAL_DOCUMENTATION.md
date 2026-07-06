# Machine Voltage Configurator - Technical Documentation

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Data Schemas](#data-schemas)
3. [Calculation / Logic Algorithms](#calculation--logic-algorithms)
4. [API Reference](#api-reference)
5. [Integration Guide](#integration-guide)
6. [Customization](#customization)
7. [Performance](#performance)
8. [Browser Compatibility](#browser-compatibility)
9. [Security](#security)
10. [Version History](#version-history)
11. [Support and Contact](#support-and-contact)

## Architecture Overview

### Technology Stack

The Machine Voltage Configurator is a dependency-free static web application built with:

- **HTML5** - Semantic markup with tabbed interface layout
- **CSS3** - Custom stylesheets with dark/light mode support
- **Vanilla JavaScript (ES6+)** - No frameworks, libraries, or build tools
- **SVG** - Interactive voltage dial visualization

### File Structure

```
machine-voltage-configurator/
├── index.html              # Main tool interface with tabbed layout
├── documentation.html      # Standalone documentation page (loaded in iframe)
├── css/
│   ├── poli-standard.css   # Standard Poli International styling
│   └── style.css           # Tool-specific styles
└── js/
    ├── database.js         # Voltage configuration data constants
    ├── main.js             # Core tool logic and UI updates
    └── common.js           # Shared utilities (theme, embed, resize)
```

### Component Breakdown

| Component | File | Description |
|-----------|------|-------------|
| Tab System | index.html | Three-tab interface (Tool, Documentation, Embed Code) |
| Input Panel | index.html | Machine type selector, stroke length dropdown, technique buttons |
| Voltage Dial | index.html | SVG circle with animated fill showing voltage value |
| Recommendation Box | index.html | Text display for technique-specific guidance |
| Documentation Frame | documentation.html | Full technical documentation loaded in iframe |
| Embed Modal | index.html | Modal dialog for copying iframe embed code |
| Theme System | common.js | Dark/light mode toggle with localStorage persistence |
| Auto-Resize | common.js | Sends iframe height to parent window on changes |

## Data Schemas

### `VOLTAGE_DATABASE` (defined in `database.js`)

Primary configuration object containing machine-specific parameters.

```javascript
const VOLTAGE_DATABASE = {
    rotary: {
        base_voltage: 5.0,           // Number: Starting voltage for rotary machines
        stroke_modifiers: {           // Object: Voltage adjustments per stroke length
            "2.5": -0.5,             // Number: 2.5mm stroke adjustment
            "3.0": 0.0,              // Number: 3.0mm stroke adjustment
            "3.5": 0.5,              // Number: 3.5mm stroke adjustment
            "4.0": 1.0,              // Number: 4.0mm stroke adjustment
            "4.5": 1.5               // Number: 4.5mm stroke adjustment
        },
        tech_modifiers: {            // Object: Voltage adjustments per technique
            lining: 2.5,             // Number: Lining technique modifier
            shading: 1.0,            // Number: Shading technique modifier
            packing: 3.5,            // Number: Color packing technique modifier
            stippling: 1.5           // Number: Stippling technique modifier
        },
        hz_constant: 15,             // Number: Hertz per volt conversion factor
        duty_cycle: "Fixed 50-60%"   // String: Duty cycle description
    },
    coil: {
        base_voltage: 4.5,           // Number: Starting voltage for coil machines
        stroke_modifiers: {           // Object: Voltage adjustments per stroke length
            "2.5": -0.2,
            "3.0": 0.0,
            "3.5": 0.5,
            "4.0": 1.2,
            "4.5": 2.0
        },
        tech_modifiers: {
            lining: 3.5,
            shading: 1.5,
            packing: 4.0,
            stippling: 2.0
        },
        hz_constant: 18,             // Number: Higher Hz constant for coil machines
        duty_cycle: "Adjustable 45-65%"
    }
};
```

### `RECOMMENDATIONS` (defined in `database.js`)

Static recommendation strings mapped to each technique.

```javascript
const RECOMMENDATIONS = {
    lining:    "Optimal for standard lining. Provides sharp, consistent needle drive with fast retraction.",
    shading:   "Soft impact setting for smooth gradients and b&g work. Minimizes skin trauma.",
    packing:   "High-torque output for solid color saturation. Ensure needle depth is consistent.",
    stippling: "Intermediate pulse speed for controlled dot-work and textured shading."
};
```

### UI State Variables (defined in `main.js`)

| Variable | Type | Initial Value | Description |
|----------|------|---------------|-------------|
| `currentTech` | String | `'lining'` | Currently selected technique identifier |

### DOM Element References (defined in `main.js`)

| Variable | Element ID | Type | Description |
|----------|------------|------|-------------|
| `machineType` | `machine-type` | `<select>` | Machine type dropdown |
| `strokeLength` | `stroke-length` | `<select>` | Stroke length dropdown |
| `techBtns` | `.tech-btn` | NodeList | Technique selection buttons |
| `voltageDisplay` | `voltage-display` | `<span>` | Voltage value display |
| `dialFill` | `dial-value` | `<circle>` | SVG dial fill circle |
| `recText` | `recommendation-text` | `<p>` | Recommendation text container |
| `speedHz` | `speed-hz` | `<span>` | Hertz speed display |
| `impactForce` | `impact-force` | `<span>` | Impact force display |
| `dutyCycle` | `duty-cycle` | `<span>` | Duty cycle display |

## Calculation / Logic Algorithms

### `updateConfig()` Function (defined in `main.js`)

This is the sole calculation function that runs on every input change. It performs the following steps:

**Step 1: Retrieve Input Values**
```javascript
const type = machineType.value;    // "rotary" or "coil"
const stroke = strokeLength.value; // "2.5", "3.0", "3.5", "4.0", or "4.5"
const db = VOLTAGE_DATABASE[type]; // Select machine database
```

**Step 2: Calculate Voltage**
```javascript
let voltage = db.base_voltage + db.stroke_modifiers[stroke] + db.tech_modifiers[currentTech];
```
Formula: `voltage = baseVoltage + strokeModifier + techniqueModifier`

Example calculation for rotary, 3.5mm stroke, lining:
- `5.0 + 0.5 + 2.5 = 8.0V`

**Step 3: Round to One Decimal**
```javascript
voltage = Math.round(voltage * 10) / 10;
```

**Step 4: Update Voltage Display**
```javascript
voltageDisplay.textContent = voltage.toFixed(1);
```

**Step 5: Animate SVG Dial**
```javascript
const maxV = 12;
const circumference = 2 * Math.PI * 80; // 502.65px
const offset = circumference - (voltage / maxV) * circumference;
dialFill.style.strokeDashoffset = offset;
```
The dial uses stroke-dashoffset animation. At 0V the circle is empty, at 12V it is fully filled.

**Step 6: Update Recommendation Text**
```javascript
recText.textContent = RECOMMENDATIONS[currentTech];
```

**Step 7: Calculate and Display Hertz Speed**
```javascript
speedHz.textContent = Math.round(voltage * db.hz_constant) + " Hz";
```
Formula: `speedHz = voltage × hzConstant`

Example: `8.0V × 15 = 120 Hz`

**Step 8: Update Duty Cycle**
```javascript
dutyCycle.textContent = db.duty_cycle;
```

**Step 9: Calculate Impact Force**
```javascript
let force = "Medium";
if (voltage > 8.5) force = "Hard";
if (voltage < 6.5) force = "Soft";
impactForce.textContent = force;
```
Simple threshold-based classification:
- Below 6.5V: "Soft"
- 6.5V to 8.5V: "Medium"
- Above 8.5V: "Hard"

## API Reference

### Public Functions

#### `updateConfig()`
- **Location**: `main.js`
- **Parameters**: None (reads from DOM elements)
- **Returns**: `undefined`
- **Behavior**: Calculates voltage, updates all UI displays including SVG dial animation, recommendation text, Hz speed, impact force, and duty cycle
- **Called by**: Event listeners on `machineType`, `strokeLength`, and `techBtns`

#### `copyEmbedCode()`
- **Location**: `index.html` (inline script)
- **Parameters**: None
- **Returns**: `undefined`
- **Behavior**: Selects text in `embedCodeTab` textarea, executes `document.execCommand('copy')`, shows alert confirmation

#### `sendHeight()`
- **Location**: `common.js`
- **Parameters**: None
- **Returns**: `undefined`
- **Behavior**: Calculates `document.body.scrollHeight + 50`, posts `{ height: height }` to parent window via `window.parent.postMessage`

#### `setTheme(theme, save)`
- **Location**: `common.js`
- **Parameters**:
  - `theme` (String): `'light'` or `'dark'`
  - `save` (Boolean, default `true`): Whether to persist to localStorage
- **Returns**: `undefined`
- **Behavior**: Toggles `light-mode`/`dark-mode` classes on body, updates toggle button icon, optionally saves to localStorage

### Event Handlers

| Handler | Element | Event | Behavior |
|---------|---------|-------|----------|
| `machineType.addEventListener('change', updateConfig)` | `<select id="machine-type">` | `change` | Recalculates on machine type change |
| `strokeLength.addEventListener('change', updateConfig)` | `<select id="stroke-length">` | `change` | Recalculates on stroke length change |
| `techBtns.forEach(btn => btn.addEventListener('click', ...))` | `.tech-btn` | `click` | Sets `currentTech`, updates active button styling, recalculates |
| `themeToggle.addEventListener('click', ...)` | `#darkModeToggle` | `click` | Toggles between dark and light themes |
| `window.addEventListener('message', ...)` | `window` | `message` | Listens for `event.data.theme` from parent frame |
| `window.addEventListener('resize', sendHeight)` | `window` | `resize` | Sends updated height to parent iframe |
| `embedBtn.addEventListener('click', ...)` | `#embedBtn` or `#embed-button` | `click` | Opens embed modal |
| `copyBtn.addEventListener('click', ...)` | `#copyEmbedCode` | `click` | Copies embed code to clipboard |

## Integration Guide

### Standalone Embedding

The tool can be embedded on any website using an iframe:

```html
<iframe 
    src="https://poliinternational.com/tools/machine-voltage-configurator/index.html" 
    width="100%" 
    height="1000" 
    frameborder="0" 
    style="border-radius:12px;">
</iframe>
```

### Embed Code Access

Users can copy the embed code directly from the tool's "Embed Code" tab, which provides a pre-formatted textarea with the iframe code.

### Parent-Child Communication

The tool supports two-way communication with parent pages:

1. **Height Auto-Resize**: The tool posts its height to `window.parent.postMessage` on load, resize, click, and DOM mutations
2. **Theme Inheritance**: When loaded in an iframe, the tool listens for `message` events with `{ type: 'poli-theme', light: boolean }` to sync with parent theme

### Dependencies

The tool has zero external dependencies. It requires no CDN links, no npm packages, and no build tools. All functionality is implemented in vanilla JavaScript.

## Customization

### CSS Customization

The tool uses two CSS files:
- `poli-standard.css` - Base Poli International styling
- `style.css` - Tool-specific styles

To customize appearance, override styles in your parent page or modify the CSS files directly. The tool respects CSS specificity and can be styled via parent page stylesheets.

### Theme Support

The tool supports dark and light modes:
- Default: Dark mode (`dark-mode` class on `<body>`)
- Toggle: Via `#darkModeToggle` button
- Persistence: Theme preference saved to `localStorage` key `'theme'`
- Parent override: Accepts `{ theme: 'light' | 'dark' }` via `postMessage`

### Configuration Constants

The `VOLTAGE_DATABASE` object in `database.js` can be modified to:
- Adjust base voltages per machine type
- Change stroke length modifiers
- Update technique modifiers
- Modify Hz constants
- Change duty cycle descriptions

## Performance

- **Bundle Size**: Approximately 15KB total (HTML + CSS + JS)
- **Zero Network Requests**: No external resources, CDNs, or fonts
- **DOM Manipulation**: Minimal, targeted updates only on `updateConfig()`
- **Event Listeners**: 6 total listeners, all using passive where applicable
- **Animation**: SVG stroke-dashoffset transitions use GPU-accelerated CSS
- **Memory**: No memory leaks; all variables are function-scoped or module-level constants

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome 60+ | Full support |
| Firefox 55+ | Full support |
| Safari 11+ | Full support |
| Edge 16+ | Full support |
| Opera 47+ | Full support |
| IE 11 | Not supported (no SVG stroke-dashoffset animation) |

Requires:
- ES6 (Arrow functions, `const`, `let`, template literals)
- SVG 1.1 (Circle elements with stroke-dasharray/dashoffset)
- `navigator.clipboard.writeText()` (Embed code copy)
- `window.parent.postMessage()` (Iframe communication)

## Security

### Input Handling

- **No user text input**: The tool uses only `<select>` dropdowns and `<button>` elements
- **No form submission**: All data processing occurs client-side
- **No data storage**: No cookies, no server requests, no data transmission
- **No DOM injection**: All text content is set via `textContent`, not `innerHTML`

### XSS Prevention

- All dynamic content uses `textContent` property (safe, no HTML parsing)
- No `eval()`, `innerHTML`, or `document.write()` calls
- Embed code textarea is `readonly` and populated programmatically
- Iframe `src` is hardcoded, not user-configurable

### Cross-Origin Communication

- `postMessage` accepts messages from any origin (`'*'`)
- Only processes messages with `event.data.type === 'poli-theme'`
- Only reads `event.data.light` boolean property
- No sensitive data transmitted

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-01 | Initial release |

## Support and Contact

For technical support, integration assistance, or custom development:

- **Email**: support@poliinternational.com
- **Contact Form**: https://poliinternational.com/contact-us/
- **Tool URL**: https://poliinternational.com/tools/machine-voltage-configurator/

---

*Technical Standard provided by Poli International Engineering*
