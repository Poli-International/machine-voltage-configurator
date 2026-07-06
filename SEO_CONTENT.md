# Machine Voltage Configurator - Complete Guide

## Target Keywords

### Primary Keyword
tattoo machine voltage configurator

### Long-Tail Keywords
1. tattoo machine voltage settings chart
2. rotary tattoo machine voltage guide
3. coil machine voltage calculator
4. tattoo lining voltage settings
5. tattoo shading voltage range
6. color packing voltage for tattoo machines
7. tattoo machine stroke length voltage adjustment
8. tattoo machine Hz to voltage conversion
9. stippling voltage settings tattoo machine
10. tattoo power supply voltage recommendations
11. rotary pen machine voltage configurator
12. tattoo machine speed calculator volts to Hz
13. optimal voltage for 3.5mm stroke tattoo machine
14. tattoo machine voltage for lining vs shading

## Meta Title
```
Tattoo Voltage Configurator: Lining, Shading, Color Settings
```
(60 characters)

## Meta Description
```
Find the right voltage and needle speed for your tattoo machine. Syncs stroke length with hand speed to protect skin and reduce wrist fatigue.
```
(152 characters)

## H1/H2/H3 Content Outline

### H1: Machine Voltage Configurator, Find Your Optimal Tattoo Machine Settings

#### H2: What Is the Machine Voltage Configurator?
- H3: Precision Voltage Calibration for Tattoo Artists
- H3: How the Tool Calculates Voltage (Base Voltage + Stroke Modifier + Technique Modifier)

#### H2: Who Should Use This Tool
- H3: Professional Tattoo Artists
- H3: Tattoo Apprentices Learning Machine Setup
- H3: Studio Owners Standardizing Artist Protocols
- H3: Artists Switching Between Rotary and Coil Machines

#### H2: How to Use the Machine Voltage Configurator
- H3: Step 1: Select Your Machine Type
- H3: Step 2: Set Your Stroke Length
- H3: Step 3: Choose Your Technique
- H3: Step 4: Read the Recommended Voltage
- H3: Step 5: Interpret the Hz and Impact Force Data

#### H2: Understanding the Tool's Parameters
- H3: Machine Type, Rotary vs. Coil
- H3: Stroke Length Options (2.5mm to 4.5mm)
- H3: Technique Modes, Lining, Shading, Color Packing, Stippling
- H3: The Dynamic Voltage Dial Visualization

#### H2: Technique-Specific Voltage Recommendations
- H3: Lining Voltage Settings (100-140 Hz)
- H3: Shading Voltage Settings (70-90 Hz)
- H3: Color Packing Voltage Settings
- H3: Stippling Voltage Settings

#### H2: Real-World Use Cases
- H3: Use Case 1: Lining with a Rotary Pen Machine
- H3: Use Case 2: Shading with a Coil Machine
- H3: Use Case 3: Color Packing with a 4.0mm Stroke Rotary

#### H2: Frequently Asked Questions (FAQ)

#### H2: Technical Specifications
- H3: Voltage Calculation Formula
- H3: Hz Constant by Machine Type
- H3: Stroke Modifier Values

## What Is the Machine Voltage Configurator?

The **Machine Voltage Configurator** is a free web tool from Poli International that calculates the optimal voltage range for tattoo machines based on three key inputs: machine type, stroke length, and technique. It uses a multi-variable linear regression model grounded in standard motor constants and machine physics.

The tool accepts your machine's specifications and intended technique, then outputs:
- **Recommended voltage** (displayed on an interactive SVG dial with 0.1V precision)
- **Estimated speed in Hz** (hits per second)
- **Impact force** (soft, medium, or hard)
- **Duty cycle** information for your machine type
- **Technique-specific recommendation text**

The calculation follows this formula: `voltage = baseVoltage + strokeModifier[length] + techniqueModifier[tech]`. For example, a rotary machine (base voltage 5.0V) with a 3.5mm stroke (+0.5V) set to lining (+2.5V) yields 8.0V. The tool then converts voltage to Hz using the machine's Hz constant (15 Hz/V for rotary, 18 Hz/V for coil).

## Who Should Use This Tool

| Audience | Benefit |
|----------|---------|
| **Professional Tattoo Artists** | Quickly find optimal voltage for any technique without guesswork |
| **Tattoo Apprentices** | Learn the relationship between machine specs, voltage, and technique |
| **Studio Owners** | Standardize voltage protocols across all artists in the shop |
| **Artists Switching Machines** | Compare settings between rotary and coil machines easily |
| **Mobile Artists** | Quick reference when setting up at different locations |

## How to Use the Machine Voltage Configurator

### Step 1: Select Your Machine Type
Open the tool and locate the **Machine Type** dropdown. Choose between:
- **Rotary Machine (Pen/Slider)**, base voltage 5.0V, 15 Hz/V constant
- **Coil Machine (Traditional)**, base voltage 4.5V, 18 Hz/V constant

### Step 2: Set Your Stroke Length
From the **Stroke Length (mm)** dropdown, select your machine's stroke:
- **2.5mm**, Soft Shading (-0.5V adjustment)
- **3.0mm**, All-rounder (no adjustment)
- **3.5mm**, Standard (+0.5V adjustment, default)
- **4.0mm**, Power Lining (+1.0V adjustment)
- **4.5mm**, Hard Hitting (+1.5V adjustment)

### Step 3: Choose Your Technique
Click one of the four **Technique** buttons:
- **Lining** (+2.5V modifier), Fast, sharp retraction
- **Shading** (+1.0V modifier), Soft impact, low trauma
- **Color Packing** (+3.5V modifier), High-torque saturation
- **Stippling** (+1.5V modifier), Controlled pulse intervals

### Step 4: Read the Recommended Voltage
The **dynamic SVG dial** updates instantly. The large number shows your voltage (e.g., 7.5V). Below the dial, the recommendation box displays technique-specific guidance.

### Step 5: Interpret the Hz and Impact Force Data
The tool calculates:
- **Speed in Hz**, Voltage × Hz constant (e.g., 8.0V × 15 = 120 Hz for rotary lining)
- **Impact Force**, Soft (<6.5V), Medium (6.5-8.5V), or Hard (>8.5V)
- **Duty Cycle**, Fixed 50-60% for rotary, adjustable 45-65% for coil

## Real-World Use Cases

### Use Case 1: Lining with a Rotary Pen Machine
**Inputs:**
- Machine Type: Rotary Machine (Pen/Slider)
- Stroke Length: 3.5mm (Standard)
- Technique: Lining

**Output:**
- Voltage: 8.0V
- Speed: 120 Hz
- Impact Force: Medium
- Recommendation: "Optimal for standard lining. Provides sharp, consistent needle drive with fast retraction."

**Result:** The artist sets their power supply to 8.0V and achieves clean, consistent lines with proper needle retraction and minimal skin trauma.

### Use Case 2: Shading with a Coil Machine
**Inputs:**
- Machine Type: Coil Machine (Traditional)
- Stroke Length: 2.5mm (Soft Shading)
- Technique: Shading

**Output:**
- Voltage: 6.8V
- Speed: 122 Hz
- Impact Force: Medium
- Recommendation: "Soft impact setting for smooth gradients and b&g work. Minimizes skin trauma."

**Result:** The artist uses 6.8V for soft, controlled shading passes, achieving smooth transitions without overworking the skin.

### Use Case 3: Color Packing with a 4.0mm Stroke Rotary
**Inputs:**
- Machine Type: Rotary Machine (Pen/Slider)
- Stroke Length: 4.0mm (Power Lining)
- Technique: Color Packing

**Output:**
- Voltage: 9.5V
- Speed: 142 Hz
- Impact Force: Hard
- Recommendation: "High-torque output for solid color saturation. Ensure needle depth is consistent."

**Result:** The artist runs at 9.5V for dense color saturation, maintaining consistent needle depth to pack pigment efficiently.

## Frequently Asked Questions (FAQ)

### Q1: What voltage range does the Machine Voltage Configurator support?
The tool calculates voltages from approximately 4.0V to 12.0V, displayed on the dial with 0.1V precision. The actual range depends on your machine type, stroke length, and technique combination.

### Q2: How does the tool convert volts to hertz?
The tool multiplies the calculated voltage by the machine's Hz constant: 15 Hz/V for rotary machines and 18 Hz/V for coil machines. For example, 8.0V on a rotary equals 120 Hz (8.0 × 15).

### Q3: Should I use the same voltage for lining and shading?
No. The tool applies different technique modifiers: lining adds +2.5V, while shading adds only +1.0V. This reflects the different speed requirements for each technique.

### Q4: What stroke length should I use for lining?
The tool defaults to 3.5mm (Standard) for lining, but 4.0mm (Power Lining) is also common. The 4.0mm option adds +1.0V compared to the 3.5mm's +0.5V adjustment.

### Q5: Does the tool work for both rotary and coil machines?
Yes. The tool has separate databases for rotary (base voltage 5.0V, 15 Hz/V) and coil (base voltage 4.5V, 18 Hz/V) machines, with different stroke and technique modifiers for each.

### Q6: What does "impact force" mean in this tool?
Impact force is a qualitative measure based on voltage: Soft (<6.5V), Medium (6.5-8.5V), or Hard (>8.5V). It helps artists understand how aggressively the machine will hit the skin.

### Q7: Can I adjust the voltage manually on the dial?
The dial is a visualization of the calculated voltage. To change the voltage, adjust the inputs (machine type, stroke length, technique). The dial updates automatically.

### Q8: What is the duty cycle information telling me?
Duty cycle indicates the percentage of time the machine is active vs. resting. Rotary machines have a fixed 50-60% duty cycle, while coil machines have an adjustable 45-65% range.

### Q9: Is this tool suitable for beginners?
Yes. Apprentices can use it to understand the relationship between machine specs, voltage, and technique. The recommendation text provides guidance for each technique.

### Q10: How accurate is the voltage calculation?
The tool uses standard motor constants and machine physics formulas. However, individual machines may vary. Use the calculated voltage as a starting point and adjust based on your specific machine and skin type.

## Structured Data

### SoftwareApplication JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Machine Voltage Configurator",
  "url": "https://poliinternational.com/tools/machine-voltage-configurator/",
  "description": "Find the right voltage and needle speed for your tattoo machine. Syncs stroke length with hand speed to protect skin and reduce wrist fatigue.",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "author": {
    "@type": "Organization",
    "name": "Poli International",
    "url": "https://poliinternational.com"
  }
}
```

### FAQPage JSON-LD

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What voltage range does the Machine Voltage Configurator support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool calculates voltages from approximately 4.0V to 12.0V, displayed on the dial with 0.1V precision. The actual range depends on your machine type, stroke length, and technique combination."
      }
    },
    {
      "@type": "Question",
      "name": "How does the tool convert volts to hertz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool multiplies the calculated voltage by the machine's Hz constant: 15 Hz/V for rotary machines and 18 Hz/V for coil machines. For example, 8.0V on a rotary equals 120 Hz."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use the same voltage for lining and shading?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The tool applies different technique modifiers: lining adds +2.5V, while shading adds only +1.0V. This reflects the different speed requirements for each technique."
      }
    },
    {
      "@type": "Question",
      "name": "What stroke length should I use for lining?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool defaults to 3.5mm (Standard) for lining, but 4.0mm (Power Lining) is also common. The 4.0mm option adds +1.0V compared to the 3.5mm's +0.5V adjustment."
      }
    },
    {
      "@type": "Question",
      "name": "Does the tool work for both rotary and coil machines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool has separate databases for rotary (base voltage 5.0V, 15 Hz/V) and coil (base voltage 4.5V, 18 Hz/V) machines, with different stroke and technique modifiers for each."
      }
    },
    {
      "@type": "Question",
      "name": "What does impact force mean in this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Impact force is a qualitative measure based on voltage: Soft (<6.5V), Medium (6.5-8.5V), or Hard (>8.5V). It helps artists understand how aggressively the machine will hit the skin."
      }
    },
    {
      "@type": "Question",
      "name": "Can I adjust the voltage manually on the dial?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The dial is a visualization of the calculated voltage. To change the voltage, adjust the inputs (machine type, stroke length, technique). The dial updates automatically."
      }
    },
    {
      "@type": "Question",
      "name": "What is the duty cycle information telling me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Duty cycle indicates the percentage of time the machine is active vs. resting. Rotary machines have a fixed 50-60% duty cycle, while coil machines have an adjustable 45-65% range."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool suitable for beginners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Apprentices can use it to understand the relationship between machine specs, voltage, and technique. The recommendation text provides guidance for each technique."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate is the voltage calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool uses standard motor constants and machine physics formulas. However, individual machines may vary. Use the calculated voltage as a starting point and adjust based on your specific machine and skin type."
      }
    }
  ]
}
```

## Internal Linking Suggestions

Link to these Poli International resources from the tool's documentation or blog posts about this tool:

1. **Poli International Blog: Tattoo Machine Maintenance Guide**, Discusses voltage consistency and machine care
2. **Poli International Wiki: Rotary vs. Coil Machines**, Explains the differences in motor types and power requirements
3. **Poli International Blog: Needle Depth and Voltage Relationship**, Covers how voltage affects needle penetration
4. **Poli International Wiki: Power Supply Selection Guide**, Helps artists choose the right power supply for their machine
5. **Poli International Blog: Hand Speed and Machine Speed Synchronization**, Explains the ergonomic benefits of proper voltage settings
6. **Poli International Tools: Coverage Calculator**, For planning ink usage alongside voltage settings
7. **Poli International Wiki: Tattoo Machine Stroke Length Guide**, Detailed explanation of how stroke affects performance
