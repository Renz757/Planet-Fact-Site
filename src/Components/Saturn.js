import React from 'react'



function Saturn({ planetData, hoverState, RenderButtons}) {

    const saturnObject = planetData[5]
    const img = Object.values(saturnObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="saturnImage" alt="Planet Saturn" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(saturnObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="saturnImage" alt="Planet Saturn" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(saturnObject.images)[2];
            const img2 = Object.values(saturnObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="saturnImage planetImage1" alt="Planet Saturn" />
                        <img src={img1} className="planetImage2" alt="Planet Saturn" />
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
                    <h1>{saturnObject.name}</h1>
                    <p>{saturnObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={saturnObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{saturnObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{saturnObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{saturnObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{saturnObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Saturn;