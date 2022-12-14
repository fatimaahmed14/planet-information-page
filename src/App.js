import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import PlanetsPage from "./Pages/PlanetsPage";
// import PlanetFactDisplay from "./PlanetFactDisplay";
import MercuryDisplayPage from "./IndividualPlanets/mercury";
import VenusDisplayPage from "./IndividualPlanets/venus";
import EarthDisplayPage from "./IndividualPlanets/earth";
import MarsDisplayPage from "./IndividualPlanets/mars";
import JupiterDisplayPage from "./IndividualPlanets/jupiter";
import SaturnDisplayPage from "./IndividualPlanets/saturn";
import UranusDisplayPage from "./IndividualPlanets/uranus";
import NeptuneDisplayPage from "./IndividualPlanets/neptune";

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/planets")
      .then((res) => res.json())
      .then((planetData) => setPlanets(planetData));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/planets" element={<PlanetsPage planets={planets} />} />
        <Route
          path="/planets/mercury"
          element={<MercuryDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/venus"
          element={<VenusDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/earth"
          element={<EarthDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/mars"
          element={<MarsDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/jupiter"
          element={<JupiterDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/saturn"
          element={<SaturnDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/uranus"
          element={<UranusDisplayPage planet={planets} />}
        />
        <Route
          path="/planets/neptune"
          element={<NeptuneDisplayPage planet={planets} />}
        />
      </Routes>
    </>
  );
}

export default App;
