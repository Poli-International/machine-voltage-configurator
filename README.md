# Machine Voltage Configurator (V2)

> **Empirical starting voltage ranges, stroke mechanics visualizer, and station reference card for tattoo artists.**

[![License](https://img.shields.io/github/license/Poli-International/machine-voltage-configurator)](LICENSE)

**Live Demo:** [https://poliinternational.com/tools/machine-voltage-configurator/](https://poliinternational.com/tools/machine-voltage-configurator/)

---

## 🎯 Overview

The **Machine Voltage Configurator (V2)** provides tattoo artists with an empirical starting voltage window based on machine architecture (rotary or coil), cam stroke length (2.5mm – 4.5mm), and intended tattooing technique (lining, shading, color packing, stippling). 

It is designed as a baseline to tune from rather than an absolute rule: always prioritize the machine manufacturer's stated voltage operating limits.

This is a free, open-source tool published by [Poli International](https://poliinternational.com/tools/) for tattoo artists and studio owners. It runs entirely in the browser with zero external dependencies and zero tracking.

---

## ✨ Features

- **Starting Voltage Ranges**: Empirically grounded minimum and maximum starting windows with relative speed and punch profiles.
- **Stroke & Speed Mechanics Visualizer**: Interactive SVG demonstrating that a longer stroke at the same voltage hits harder with greater momentum but cycles at a relatively lower frequency.
- **My Machines (Personal Reference Card)**: Save custom machine settings, stroke, technique, tested voltage, needle configuration & taper, and session notes in local browser storage.
- **Station Wall Printable Reference**: Generates a clean, print-optimized physical reference card with local timestamp.
- **3-Tap Post-Session Evaluation**: Quick tags (`Worked Well`, `Too Soft / Bogged`, `Too Harsh / Chew`) to refine machine setups across client sessions.
- **Connection & Supply Compatibility Checker**: Verifies machine connection type (RCA, clip cord, 3.5mm mini-jack, wireless battery), power supply amperage, and cables before powering up.
- **Tuning by Feel & Mechanical Guides**: Practical studio checks for listening to motor pitch, inspecting needle entry, coil mechanical tuning order, and wireless battery voltage sag management.
- **Zero External Dependencies**: Self-contained vanilla JavaScript, CSS custom properties, and SVG. No CDN links, no telemetry, runs under Content-Security-Policy `script-src 'self'` restrictions.

---

## 🚀 Usage & Deployment

### Run Locally

Clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/Poli-International/machine-voltage-configurator.git
cd machine-voltage-configurator
# open index.html in your browser
```

Or serve via Node.js:

```bash
npm install
npm run dev
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
