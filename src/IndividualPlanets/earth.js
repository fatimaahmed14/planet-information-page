import { Link } from "react-router-dom";
function EarthDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1200-80.jpg.webp"
            alt="earth"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[2].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[2].colour} </p>
            <p>How many moons does this planet have: {planet[2].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[2].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[2].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[2].position}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet[2].distance}
            </p>
          </div>
        </div>
      </div>
      <button className="go-back-button-earth">
        <Link to="/planets">GO BACK</Link>
      </button>
    </>
  );
}
export default EarthDisplayPage;
