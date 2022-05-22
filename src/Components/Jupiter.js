import React from 'react'



function Jupiter({ planetData, hoverState, RenderButtons }) {

    const jupiterObject = planetData[4]
    const img = Object.values(jupiterObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="jupiterImage" alt="Planet Jupiter" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(jupiterObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="jupiterImage" alt="Planet Jupiter" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(jupiterObject.images)[2];
            const img2 = Object.values(jupiterObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="jupiterImage planetImage1" alt="Planet Jupiter" />
                        <img src={img1} className="planetImage2" alt="Planet Jupiter" />
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
                    <h1>{jupiterObject.name}</h1>
                    <p>{jupiterObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={jupiterObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{jupiterObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{jupiterObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{jupiterObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{jupiterObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Jupiter;