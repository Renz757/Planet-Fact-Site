import planetData from "../shared/data.json";
import { useContext } from "react";
import PlanetContext from "../store/planet-context";

import ButtonOptions from "./ButtonOptions";
import ImageOptions from "./ImageOptions";

const PlanetComponent = (props) => {
  const planetCtx = useContext(PlanetContext);

  return (
    <>
      {planetData
        .filter((planet) => planetCtx.planetPage === planet.name)
        .map((currentPlanet) => (
          <section className="planetGrid">
            <ImageOptions planetCtx={planetCtx} currentPlanet={currentPlanet}/>
            <div className="planetDescription">
              <h1>{currentPlanet.name}</h1>
              <p>{currentPlanet.overview.content}</p>
              <span className="infoLink">
                Source:{" "}
                <a
                  href={currentPlanet.overview.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  Wikipedia<span className="linkIcon"></span>
                </a>
              </span>
            </div>
            {/* {RenderButtons()} */}
            <ButtonOptions planetCtx={planetCtx}/>
            <div className="planetInfo">
              <ul className="planetInfoList">
                <li className="planetInfoItem">
                  <p className="measurement">ROTATION TIME:</p>
                  <p className="unit">{currentPlanet.rotation}</p>
                </li>
                <li className="planetInfoItem">
                  <p className="measurement">REVOLUTION TIME:</p>
                  <p className="unit">{currentPlanet.revolution}</p>
                </li>
                <li className="planetInfoItem">
                  <p className="measurement">RADIUS:</p>
                  <p className="unit">{currentPlanet.radius}</p>
                </li>
                <li className="planetInfoItem">
                  <p className="measurement">AVERAGE TEMP:</p>
                  <p className="unit">{currentPlanet.temperature}</p>
                </li>
              </ul>
            </div>
          </section>
        ))}
    </>
  );
};

export default PlanetComponent;
