import planetData from "../../shared/data.json";

const MobileNav = (props) => {
  return (
    <>
      {planetData.map((planet) => {
        return (
          <li
            key={planet.id}
            className="mobilePlanetItem"
            onClick={() => {
              props.getCurrentPlanet(planet.name);
              props.setMenu(false);
              props.setMenuColor("white");
            }}
          >
            <div className="flex-container">
              <div
                style={{
                  backgroundColor: planet.color,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                }}
              />
              <h3>{planet.name}</h3>
            </div>
            <div className="arrow"></div>
          </li>
        );
      })}
    </>
  );
};

export default MobileNav;
