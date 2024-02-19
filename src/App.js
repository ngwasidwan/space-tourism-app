import { useState } from "react";

import data from "./data.json";
import home from "./assets/home/home.jpg";
import destination from "./assets/destination/destination.jpg";
import crewImage from "./assets/crew/crew.jpg";
import technologyImage from "./assets/technology/technology.jpg";

// PLANETS
import moon from "./assets/destination/image-moon.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";
import mars from "./assets/destination/image-mars.png";

//CREW MEMBERS
import firstMember from "./assets/crew/image-victor-glover.png";
import secondMember from "./assets/crew/image-douglas-hurley.png";
import thirdMember from "./assets/crew/image-mark-shuttle-worth.png";
import forthMember from "./assets/crew/woman.png";

import techVehicle1 from "./assets/technology/launch-vehicle.jpg";
import techVehicle2 from "./assets/technology/image-space-capsule-portrait.jpg";
import techVehicle3 from "./assets/technology/image-spaceport-portrait.jpg";

const navData = ["home", "destinations", "crew", "technology"];

const planetImages = [moon, mars, europa, titan];

const crewImages = [firstMember, secondMember, thirdMember, forthMember];

const techImage = [techVehicle1, techVehicle2, techVehicle3];

const { destinations, crew, technology } = data;

// function creates images array
function createImage(img, index) {
  return [img.at(index)];
}

//DESTINATION DATA
const planetData = destinations.map((planet, i) => {
  return {
    name: planet.name,
    description: planet.description,
    distance: planet.distance,
    travel: planet.travel,
    image: planetImages.at(i),
    test: createImage(planetImages, i),
  };
});

//CREW DATA
const crewData = crew.map((crewMember, i) => {
  return {
    name: crewMember.name,
    bio: crewMember.bio,
    role: crewMember.role,
    image: createImage(crewImages, i),
  };
});

//TECHNOLOGY DATA
const techData = technology.map((tech, i) => {
  return {
    name: tech.name,
    description: tech.description,
    image: createImage(techImage, i),
  };
});

function App() {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="app">
      <Logo />
      <Nav isActive={isActive} setIsActive={setIsActive} />
      {isActive === 0 && <Home />}
      {isActive === 1 && <Destination />}
      {isActive === 2 && <Crew />}
      {isActive === 3 && <Technology />}
    </div>
  );
}
export default App;

function Nav({ isActive, setIsActive }) {
  function handleIsActive(index) {
    setIsActive(index);
  }

  return (
    <div>
      <p className="line">&nbsp;</p>
      <div className="nav">
        <ul className="list-box">
          {navData.map((data, i) => (
            <li
              key={i}
              className={`list-item ${isActive === i && "active"}`}
              onClick={() => handleIsActive(i)}
            >
              <span className="num">0{i}</span>
              {data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      className="logo"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  );
}

function Home() {
  return (
    <main className="main">
      <div className="explore-box">
        <p className="explore">EXPLORE</p>
      </div>
      <img src={home} alt="home-background " className="image" />
      <div className="main-box">
        <div>
          <p className="space-heading">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="space">SPACE</h1>
          <p className="intro-text">
            {" "}
            Let's face it; If you want to go to space, you might as well
            genuinely go outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience
          </p>
        </div>
      </div>
    </main>
  );
}

function Destination() {
  const [activePlanet, setActivePlanet] = useState(1);

  function handleActivePlanet(index) {
    setActivePlanet(index);
  }
  return (
    <div>
      <img
        src={destination}
        alt="destination background"
        className="destination-image"
      />
      <div className="destination-box">
        <div>
          <p className="destination">
            <span className="destination-num">01</span> pick your destination
          </p>
          <img
            src={planetData.at(activePlanet).image}
            alt="planet"
            className="planet-image"
          />
        </div>

        <div className="destination-text-box">
          <ul className="planet-nav">
            {planetData.map((planet, i) => (
              <li
                key={i}
                className={`destination-links ${
                  activePlanet === i && "active"
                }`}
                onClick={() => handleActivePlanet(i)}
              >
                {planet.name}
              </li>
            ))}
          </ul>
          <h1 className="planet-name">{planetData.at(activePlanet).name}</h1>
          <p className="description">
            {planetData.at(activePlanet).description}
          </p>

          <div className="distance-box">
            <div className="distance">
              <p>avg distance</p>
              <p className="value">{planetData.at(activePlanet).distance}</p>
            </div>
            <div className="travel-time">
              <p>est travel time</p>
              <p className="value">{planetData.at(activePlanet).travel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Crew() {
  const [activeCrew, setActiveCrew] = useState(3);
  const tempData = crewData.at(activeCrew);

  function handleActiveCrew(index) {
    setActiveCrew(index);
  }
  return (
    <div>
      <img
        src={crewImage}
        alt="destination background"
        className="destination-image"
      />
      <div className="crew-details-box">
        <div className="crew-box">
          <p className="crew">
            <span className="crew-num">02</span> meet your crew
          </p>
          <h5 className="job">{tempData.role}</h5>
          <h3 className="crew-name">{tempData.name}</h3>
          <p className="crew-text">{tempData.bio}</p>
          {crewData.map((_, i) => (
            <span
              className={`dots ${activeCrew === i && "active-dot"}`}
              key={i}
              onClick={() => handleActiveCrew(i)}
            >
              &nbsp;
            </span>
          ))}
        </div>
        <img src={tempData.image} alt="woman" className="crew-image" />
      </div>
    </div>
  );
}

function Technology() {
  const [activeTech, setActiveTech] = useState(0);
  const tempTechData = techData.at(activeTech);

  function handleActiveTech(index) {
    setActiveTech(index);
    console.log(index);
  }
  return (
    <div>
      <img src={technologyImage} alt="technology" className="technology" />

      <p className="space-launch">
        <span className="launch">03</span>space launch 101
      </p>
      <div className="tech-infos-box">
        <div>
          {technology.map((_, i) => (
            <p
              className={`number ${activeTech === i && "active-tech"}`}
              key={i}
              onClick={() => handleActiveTech(i)}
            >
              {i + 1}
            </p>
          ))}
        </div>
        <div>
          <p className="terminology"> the terminology...</p>
          <h3 className="launch-vehicle">{tempTechData.name}</h3>
          <p className="tech-text">{tempTechData.description}</p>
        </div>
        <img src={tempTechData.image} alt="rocket" className="rocket-image" />
      </div>
    </div>
  );
}
