const VOLTAGE_DATABASE = {
    rotary: {
        base_voltage: 5.0,
        stroke_modifiers: {
            "2.5": -0.5,
            "3.0": 0.0,
            "3.5": 0.5,
            "4.0": 1.0,
            "4.5": 1.5
        },
        tech_modifiers: {
            lining: 2.5,
            shading: 1.0,
            packing: 3.5,
            stippling: 1.5
        },
        hz_constant: 15, // Hz per volt approx
        duty_cycle: "Fixed 50-60%"
    },
    coil: {
        base_voltage: 4.5,
        stroke_modifiers: {
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
        hz_constant: 18,
        duty_cycle: "Adjustable 45-65%"
    }
};

const RECOMMENDATIONS = {
    lining: "Optimal for standard lining. Provides sharp, consistent needle drive with fast retraction.",
    shading: "Soft impact setting for smooth gradients and b&g work. Minimizes skin trauma.",
    packing: "High-torque output for solid color saturation. Ensure needle depth is consistent.",
    stippling: "Intermediate pulse speed for controlled dot-work and textured shading."
};
