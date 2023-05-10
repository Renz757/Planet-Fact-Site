const ImageOptions = ({ planetCtx, currentPlanet }) => {
  const img = Object.values(currentPlanet.images)[0];
  if (planetCtx.overview.isSelected) {
    return (
        <div className="imgContainer">
          <img src={img} className="planetImg" alt="PlanetImg" />
        </div>

    );
  } else if (planetCtx.structure.isSelected) {
    const img = Object.values(currentPlanet.images)[1];

    return (
      <div className="imgContainer">
        <img src={img} className="planetImg" alt="PlanetImg" />
      </div>
    );
  } else if (planetCtx.surface.isSelected) {
    const img1 = Object.values(currentPlanet.images)[2];
    const img2 = Object.values(currentPlanet.images)[0];

    return (
 
        <div className="imgContainer">
          <img src={img2} className="planetImg" alt="PlanetImg" />
          <img src={img1} className="planetSurfaceImg" alt="PlanetImg" />
        </div>   
    );
  }
};

export default ImageOptions;
