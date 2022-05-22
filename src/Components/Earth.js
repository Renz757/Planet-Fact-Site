import React from 'react'



function Earth({ planetData, hoverState, RenderButtons }) {

    const earthObject = planetData[2]
    const img = Object.values(earthObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="earthImage" alt="Planet Earth" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(earthObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="earthImage" alt="Planet Earth" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(earthObject.images)[2];
            const img2 = Object.values(earthObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="earthImage planetImage1" alt="Planet Earth" />
                        <img src={img1} className="planetImage2" alt="Planet Earth" />
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
                    <h1>{earthObject.name}</h1>
                    <p>{earthObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={earthObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{earthObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{earthObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{earthObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{earthObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Earth;