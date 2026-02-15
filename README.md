# Tattoo Machine Voltage Configurator

> **Professional voltage and speed calibration tool for rotary and traditional coil tattoo machines.**

[![License](https://img.shields.io/github/license/Poli-International/machine-voltage-configurator)](LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/Poli-International/machine-voltage-configurator)](https://github.com/Poli-International/machine-voltage-configurator/commits/main)
[![GitHub Stars](https://img.shields.io/github/stars/Poli-International/machine-voltage-configurator?style=social)](https://github.com/Poli-International/machine-voltage-configurator/stargazers)

**Live Tool:** [https://poliinternational.com/machine-voltage-configurator/](https://poliinternational.com/machine-voltage-configurator/)

---

## 📋 Overview

The **Tattoo Machine Voltage Configurator** is a high-precision engineering tool designed to help professional tattoo artists calibrate their power supplies. By analyzing machine physics, stroke length, and dermal interaction, it provides the optimal voltage range for specific techniques while maintaining dermal integrity.

### Key Features

1. **⚡ Dynamic Voltage Dial**
   - Interactive SVG-based visualization of power output.
   - Real-time calibration based on machine motor characteristics.
   - Precise 0.1V adjustment increments.

2. **⚙️ Machine Type Mapping**
   - **Rotary Profiles:** Calibration for slider and pen-style motors.
   - **Coil Profiles:** Traditional electromagnetic frequency mapping.

3. **🎨 Technique-Specific Hertz (Hz) Engine**
   - **Lining:** Fast, sharp retraction settings (100-140Hz).
   - **Shading:** Soft impact, low trauma mapping (70-90Hz).
   - **Color Packing:** High-torque saturation curves.
   - **Stippling:** Controlled pulse intervals for dot-work.

4. **🔬 Technical Analysis Hub**
   - Real-time conversion of Volts to Hertz (Machine cycles per second).
   - Impact Force estimation (Soft, Medium, Hard hitting).
   - Duty Cycle characteristics for specific machine setups.

---

## 🔧 Technical Logic & Algorithms

### Power Calibration Formula

The tool uses a multi-variable linear regression model based on standard motor constants ($K_v$) and machine physics:

```javascript
voltage = baseVoltage + strokeModifier[length] + techniqueModifier[tech]
speedHz = voltage × hertzConstant[machineType]
impactForce = f(voltage, techniqueWeight)
```

#### Base Parameters

| Machine Type | Base Voltage | Hz Constant |
| :--- | :--- | :--- |
| **Rotary** | 5.0V | 15 Hz/V |
| **Coil** | 4.5V | 18 Hz/V |

#### Stroke Modifiers (2.5mm - 4.5mm)
- **2.5mm:** -0.5V (Reduced mass momentum)
- **3.5mm:** +0.5V (Standard equilibrium)
- **4.5mm:** +1.5V (High resistance compensation)

---

## 📁 File Structure

```
machine-voltage-configurator/
├── index.html              # Main technical interface
├── css/
│   └── style.css          # BEM-standard "Streetwise" styles
├── js/
│   ├── database.js        # Motor and technique modifiers
│   ├── main.js            # Dial logic and Hz calculations
│   └── common.js          # Unified theme & embed logic
└── images/
    └── Poli-International-Co.webp  # Brand Identity
```

---

## 🚀 Deployment & Usage

### Live Production
This tool is integrated into the Poli International ecosystem via the **Poli Core System**. It features full synchronization with the site-wide dark mode and scientific wiki links.

### Standalone Embed
To use this tool on your own studio website, use the following iframe:

```html
<iframe src="https://poliinternational.com/wp-content/standalone-tools/machine-voltage-configurator/index.html" 
        width="100%" 
        height="1000" 
        frameborder="0" 
        style="border-radius: 12px; border: 1px solid #333;">
</iframe>
```

---

## 🎨 Branding & Standards

- **Theme:** Streetwise Dark Mode (Primary: #0693e3, Accent: #9b51e0)
- **Naming:** BEM (Block Element Modifier)
- **SEO Keywords:** Tattoo machine voltage, rotary machine speed, coil machine tuning, tattoo hertz calculator, lining voltage, shading power settings.

---

## 👨‍💻 Credits

**Built by:** Claude Code Agent System (opencode)
**Client:** Poli International
**Scientific Foundation:** [Needle Geometry & Dermal Physics Wiki](https://poliinternational.com/wp-content/standalone-tools/standards/needle-geometry-physics.html)

---

## 📧 Contact & Support

**Technical Support:** [patrick@poli-international.com](mailto:patrick@poli-international.com)
**Support Innovation:** [Buy Me a Coffee](https://ko-fi.com/patrickkofi)

---

© 2026 Poli International Ltd. | Precision Engineering for the Body Art Industry.
