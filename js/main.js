document.addEventListener('DOMContentLoaded', function() {
    const machineType = document.getElementById('machine-type');
    const strokeLength = document.getElementById('stroke-length');
    const techBtns = document.querySelectorAll('.tech-btn');
    const voltageDisplay = document.getElementById('voltage-display');
    const dialFill = document.getElementById('dial-value');
    const recText = document.getElementById('recommendation-text');
    
    const speedHz = document.getElementById('speed-hz');
    const impactForce = document.getElementById('impact-force');
    const dutyCycle = document.getElementById('duty-cycle');

    let currentTech = 'lining';

    function updateConfig() {
        const type = machineType.value;
        const stroke = strokeLength.value;
        const db = VOLTAGE_DATABASE[type];

        // Calculation
        let voltage = db.base_voltage + db.stroke_modifiers[stroke] + db.tech_modifiers[currentTech];
        
        // Random variation to make it feel "real" or technical? No, keep it precise.
        voltage = Math.round(voltage * 10) / 10;

        // UI Updates
        voltageDisplay.textContent = voltage.toFixed(1);
        
        // Dial animation (0-12V range)
        const maxV = 12;
        const circumference = 2 * Math.PI * 80;
        const offset = circumference - (voltage / maxV) * circumference;
        dialFill.style.strokeDashoffset = offset;

        // Recommendations
        recText.textContent = RECOMMENDATIONS[currentTech];

        // Specs
        speedHz.textContent = Math.round(voltage * db.hz_constant) + " Hz";
        dutyCycle.textContent = db.duty_cycle;
        
        let force = "Medium";
        if (voltage > 8.5) force = "Hard";
        if (voltage < 6.5) force = "Soft";
        impactForce.textContent = force;
    }

    // Listeners
    machineType.addEventListener('change', updateConfig);
    strokeLength.addEventListener('change', updateConfig);
    
    techBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            techBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTech = btn.dataset.tech;
            updateConfig();
        });
    });

    // Initial run
    updateConfig();
});
