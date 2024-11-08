// Gravitational Constant
const G = 6.67430e-11; // in N·m²/kg²

// Masses of some common space bodies (in kg)
const masses = {
    earth: 5.972e24, // Mass of Earth in kg
    sun: 1.989e30,   // Mass of Sun in kg
    mars: 6.4171e23, // Mass of Mars in kg
    jupiter: 1.898e27, // Mass of Jupiter in kg
    moon: 7.342e22,  // Mass of the Moon in kg
    star: 1.989e30,  // Generic star, same mass as Sun
};

// Radii of some common space bodies (in meters)
const radii = {
    earth: 6.371e6,  // Radius of Earth in meters
    sun: 6.9634e8,   // Radius of Sun in meters
    mars: 3.3962e6,  // Radius of Mars in meters
    jupiter: 6.991e7, // Radius of Jupiter in meters
    moon: 1.737e6,   // Radius of the Moon in meters
    star: 6.9634e8,  // Radius of a generic star (same as Sun)
};

// Convert solar masses to kg
const solarMass = 1.989e30; // Mass of the Sun in kg

function calculateGravitationalForce() {
    const selectedObject = document.getElementById('object').value;
    const massUnit = document.querySelector('input[name="mass-unit"]:checked').value;
    let mass = parseFloat(document.getElementById('mass').value);
    const distance = parseFloat(document.getElementById('distance').value);

    // Convert mass to kg if it's in solar masses
    if (massUnit === "solarMass") {
        mass *= solarMass; // Convert mass in solar masses to kg
    }

    // Ensure valid input values
    if (isNaN(mass) || isNaN(distance) || mass <= 0 || distance <= 0) {
        alert("Please enter valid values for mass and distance.");
        return;
    }

    // Calculate gravitational force (F) on the object at the selected distance
    const gravitationalForce = (G * masses[selectedObject] * mass) / (distance * distance);

    // Calculate gravitational acceleration (g) at the surface of the selected object
    const gravitationalAcceleration = (G * masses[selectedObject]) / (radii[selectedObject] * radii[selectedObject]);

    // Display the results
    let resultText = `Gravitational Force (F) on the object at ${distance} meters distance: ${gravitationalForce.toExponential(3)} N<br>`;
    resultText += `Gravitational Acceleration (g) on the surface of the ${selectedObject}: ${gravitationalAcceleration.toFixed(2)} m/s²`;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = resultText;
    resultDiv.style.display = 'block';
}
