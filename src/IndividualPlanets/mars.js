import { Link } from "react-router-dom";

function MarsDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://spaceplace.nasa.gov/review/all-about-mars/mars1.en.jpg"
            alt="mars"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[3].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[3].colour} </p>
            <p>How many moons does this planet have: {planet[3].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[3].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[3].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[3].distance}
            </p>
            <p>
              How many miles away is the planet from the sun:{"  "}
              {planet[3].distance}
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
export default MarsDisplayPage;
