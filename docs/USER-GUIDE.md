# Machine Voltage Configurator: user guide

The Machine Voltage Configurator calculates empirical starting voltage windows, stroke mechanics, and printable workstation reference cards for tattoo artists operating rotary and coil machines.

## What it is for

The Machine Voltage Configurator establishes an empirical starting baseline for tattoo machine voltage, cam stroke throw, and power supply calibration. Artists match their machine architecture, stroke length, and technique to a tested starting window rather than guessing numbers. The tool also explains stroke mechanics, verifies electrical compatibility across cords and supplies, and saves custom workstation reference cards.

## Who it is for

This tool is designed for:

- Professional tattoo artists setting up rotary pens, direct drive machines, or coil machines.
- Apprentices studying how voltage, cam throw, and needle grouping momentum affect tissue.
- Studio owners creating standardized operational baselines across workstations.
- Traveling artists calibrating unfamiliar power supplies or wireless battery packs in guest studios.

## How to use it

### Baseline voltage and stroke calculation

1. Click `Voltage & Stroke Configurator` in the navigation bar.
2. Under `Machine Parameters`, choose `Rotary (Direct Drive, Slider, or Pen)` or `Coil Machine (Electromagnetic Armature)`.
3. Choose your `Stroke Length (Cam Throw)` between `2.5 mm (Short / Soft Shading & Fine Wash)` and `4.5 mm (Extra Long / Heavy Lining & Large Mags)`.
4. Select `Lining`, `Shading`, `Color Packing`, or `Dotwork / Stippling`.
5. Under `Recommended Starting Window`, read the `Baseline Starting Range`, `Relative Needle Speed`, `Relative Punch`, and `Duty Cycle`.
6. Click `💾 Save this setup to My Machines Reference Card` to copy the baseline into your records.

### Stroke throw and speed comparison

1. Click `Stroke & Speed Visualizer` in the navigation bar.
2. Under `Select Stroke to Compare:`, choose between `2.5 mm (Short Throw)` and `4.5 mm (Heavy Throw)`.
3. Under `Select Starting Voltage Level:`, toggle `Low`, `Medium`, or `High`.
4. Review the outputs: `Cam Throw:`, `Relative Cycle Rate:`, `Impact Momentum / Punch:`, and `Needle Skin Dwell Time:`.
5. Check the diagram showing `Motor Cam Throw`, `Needle Penetration Throw`, and the `Skin Surface Boundary (Dermis Line)`.

### Saving and managing personal machines

1. Click `My Machines (Reference Card)` in the navigation bar.
2. Under `Add Machine & Technique Setting`, enter your identifier in `Machine Name / Model *`.
3. Select `Rotary` or `Coil`, specify `Stroke (mm) *`, and select the `Technique *`.
4. Enter `Tested Voltage Setting (Volts) *` and specify the grouping in `Needle Configuration & Taper *`.
5. Add notes in `Notes / Session Observations`, select `Worked Well`, `Too Soft / Bogged`, or `Too Harsh / Chew`, and click `Save Machine Setting`.
6. Filter cards under `Saved Machine Reference Cards` with `All Architectures`, `Rotary`, or `Coil`, or click `Delete` to remove an entry.

### Verifying electrical connections and power supplies

1. Click `Connection & Supply Checker` in the navigation bar.
2. Under `1. Machine Connection Type`, select `RCA Jack (Most modern rotaries and pens)` or `Clip Cord (Traditional coil machines)`.
3. Under `2. Power Supply Type & Amperage`, choose `Bench Digital Supply (Continuous 2.0A - 3.0A output, jumpstart feature)` or `Wireless Modular Battery Pack (Lithium-ion, 1500-2000mAh)`.
4. Under `3. Connection Lead / Cable`, pick `Standard Heavy-Duty RCA Cord` or `Standard Spring Clip Cord`.
5. Click `Check Compatibility Checklist` to review match assessments such as `Cable Mismatch`, `Physical Incompatibility`, or `Current / Startup Limitation`.

### Practical tuning by feel and coil adjustments

1. Click `Tuning by Feel & Coil / Battery Guide` in the navigation bar.
2. Follow the skin test steps: `1. Listen to the Motor Pitch`, `2. Inspect the Needle Entry`, and `3. Adjust in Minimal Increments`.
3. Tune coils mechanically in order: `1. Mechanical alignment`, `2. Contact screw gap`, `3. Spring tension`, and `4. Fine voltage calibration`.
4. Review battery factors: `1. Voltage Sag Under Load`, `2. Jumpstart Features`, and `3. Low-Charge Output Drop`.

### Embedding the tool on an external studio website

1. Click `Embed Code` in the navigation bar.
2. Locate the snippet under `Copy iframe code below (uses official Poli International hosted URL):`.
3. Click `📋 Copy Embed Code` to copy the HTML iframe tag.

## What it does not do

The Machine Voltage Configurator focuses strictly on voltage baselines, stroke dynamics, and power compatibility. It does not provide:

- Needle taper selection, cartridge diameters, or grouping geometry. Use the Needle Selector at https://poliinternational.com/needle-selector/.
- Electrical hardware diagnostics for broken foot switches, severed cord wires, or transformer faults. Use the Power Supply Troubleshooter at https://poliinternational.com/power-supply-troubleshooter/.
- Equipment servicing schedules, spring replacement logs, autoclave tracking, or maintenance records. Use the Machine Maintenance Logbook at https://poliinternational.com/machine-maintenance-logbook/.

## Where your data lives

All machine records, voltage notes, and station settings created in this tool are saved exclusively in your local browser on this device. Data is preserved through client-side `localStorage` under the key `poli_tattoo_machines`. 

No records, names, or machine configurations are ever transmitted to an external server or cloud database. Your data remains stored across sessions until you deliberately click `Delete` on an individual card or clear your browser site data.

## Printing and exporting

To generate a physical bench card for your workstation:

1. Click `My Machines (Reference Card)` and review your saved setups.
2. Click `🖨️ Print Reference Card for Station Wall`.
3. The browser opens its print dialog with clean, high-contrast print styling that omits navigation tabs and interactive buttons.
4. Print the resulting reference table on standard letter or A4 paper, laminate it, and place it at your workstation for immediate reference.

## Questions and answers

### What voltage should I run for lining with a rotary tattoo machine?
Most rotary machines operate between 6.5V and 8.5V for linework, depending on cam throw and motor torque. Start at the lower end and increase power in 0.2V increments until lines deposit cleanly in a single pass.

### How does stroke length affect tattoo machine voltage?
A short stroke (2.5 mm to 3.0 mm) cycles quickly with soft impact, requiring higher voltage against membrane resistance. A long stroke (4.0 mm to 4.5 mm) carries greater momentum, driving large groupings at moderate voltage while demanding faster hands.

### Why does my tattoo machine slow down when the needle touches skin?
Skin resistance and cartridge membrane tension increase mechanical load on the motor, causing power supply voltage to sag. If motor pitch drops audibly on skin contact, increase voltage by 0.2V to 0.4V or use a 2.0A continuous supply.

### Can I run a coil tattoo machine with a wireless battery pack?
Coil machines should only connect to wireless batteries engineered for inductive loads. Standard rotary battery packs lack inductive surge dampening, causing contact spark back-EMF to overheat cells or trigger shutoff circuits.

### What is the difference between a 3.5 mm and 4.0 mm stroke?
A 3.5 mm stroke balances cycle speed with moderate punch for smooth shading, blends, and medium lining. A 4.0 mm stroke provides longer needle travel and stronger impact force, excelling at bold lines and heavy color packing.

### Why will not my cartridge tattoo machine start at low voltage?
Cartridge needles contain internal rubber return membranes that resist forward motor drive. Brushless rotary motors often lack sufficient starting torque to overcome this resistance below 6.5V without an automatic 9V to 12V startup pulse.

### How do I adjust contact screw gap on a coil tattoo machine?
Loosen the lock screw and adjust the contact screw until it lightly touches the front spring with the armature bar resting. Set the gap to 1.0 mm for fast lining, or open it to 1.5 mm to 2.0 mm for softer shading.

### Does increasing voltage make a tattoo machine hit harder?
On a rotary machine, higher voltage increases cycling frequency rather than impact punch, which is governed by cam stroke length. On a coil machine, higher voltage increases magnetic pull, increasing speed and firmness up to spring limits.

## Limits

The Machine Voltage Configurator provides empirical starting baselines based on standard workshop testing and mechanical principles. It cannot measure internal motor winding resistance, cam bearing friction, spring fatigue, or cartridge membrane stiffness.

Furthermore, this tool cannot assess the elasticity, thickness, or hydration of individual client skin sites. The tattoo artist remains solely responsible for assessing tissue response, controlling needle depth, monitoring motor sound, and keeping operating voltages within manufacturer limits.