import { Link } from "react-router-dom";

function MercuryDisplayPage({ planet }) {
  return (
    <>
      <div className="fact-page-grid">
        <div className="planet-image">
          <img
            src="https://cdn.mos.cms.futurecdn.net/w3kqDGBSTqVnNTpd5pajWm-1200-80.jpg.webp"
            alt="mercury"
          ></img>
        </div>
        <div className="right-side-of-page">
          <div className="planet-name">
            <h1>{planet[0].name}</h1>
          </div>
          <div className="planet-facts">
            <p>What colour is this planet : {planet[0].colour} </p>
            <p>How many moons does this planet have: {planet[0].moons} moons</p>
            <p>
              How many days does this planet take to orbit The Sun:{"  "}
              {planet[0].orbit}
            </p>
            <p>
              What is the average surface temperature of this planet:{"  "}
              {planet[0].temperature}
            </p>
            <p>
              What is the position of this planet from the sun:{"  "}
              {planet[0].distance}
            </p>
          </div>
        </div>
      </div>
      <button className="go-back-button">
        <Link to="/planets">GO BACK</Link>
      </button>
    </>
  );
}
export default MercuryDisplayPage;