import React, { useState } from "react";
import "./Dashboard.css";

const planetData = {
  mercury: {
    name: "Mercury",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Mercury_in_true_color.jpg",
    description: "Closest planet to the Sun",
    diameter: "4,879 km",
  },

  venus: {
    name: "Venus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
    description: "Hottest planet in the solar system",
    diameter: "12,104 km",
  },

  earth: {
    name: "Earth",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    description: "Only planet known to support life",
    diameter: "12,742 km",
  },

  mars: {
    name: "Mars",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    description: "Known as the Red Planet",
    diameter: "6,779 km",
  },

  jupiter: {
    name: "Jupiter",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Jupiter.jpg",
    description: "Largest planet",
    diameter: "139,820 km",
  },

  saturn: {
    name: "Saturn",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    description: "Famous for its rings",
    diameter: "116,460 km",
  },

  uranus: {
    name: "Uranus",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    description: "Rotates on its side",
    diameter: "50,724 km",
  },

  neptune: {
    name: "Neptune",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    description: "Farthest planet from the Sun",
    diameter: "49,244 km",
  },
};

function Dashboard() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="space">
      <div className="sun">Sun</div>

      {Object.keys(planetData).map((planet) => (
        <div key={planet} className={`orbit ${planet}-orbit`}>
          <div
            className={`planet ${planet}`}
            onClick={() => setSelectedPlanet(planet)}
          ></div>
        </div>
      ))}

      {selectedPlanet && (
        <div className="info-panel">
          <img
            src={planetData[selectedPlanet].image}
            alt={planetData[selectedPlanet].name}
            className="planet-image"
          />

          <h2>{planetData[selectedPlanet].name}</h2>

          <p>{planetData[selectedPlanet].description}</p>

          <p>
            <strong>Diameter:</strong> {planetData[selectedPlanet].diameter}
          </p>

          <button onClick={() => setSelectedPlanet(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
