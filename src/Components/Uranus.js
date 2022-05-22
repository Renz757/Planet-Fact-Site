import React from 'react'



function Uranus({ planetData, hoverState, RenderButtons }) {

    const uranusObject = planetData[6]
    const img = Object.values(uranusObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="uranusImage" alt="Planet Uranus" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(uranusObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="uranusImage" alt="Planet Uranus" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(uranusObject.images)[2];
            const img2 = Object.values(uranusObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="uranusImage planetImage1" alt="Planet Uranus" />
                        <img src={img1} className="planetImage2" alt="Planet Uranus" />
                    </div>
                </>
            )
        }
    }

    return (
        <>
            <section className="planetGrid">
                <div className="planetImageContainer">
                    {renderImage()}
                </div>
                <div className="planetDescription">
                    <h1>{uranusObject.name}</h1>
                    <p>{uranusObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={uranusObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{uranusObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{uranusObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{uranusObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{uranusObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Uranus;