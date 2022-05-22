import React from 'react'



function Venus({ planetData, hoverState,RenderButtons }) {

    const venusObject = planetData[1]
    const img = Object.values(venusObject.images)[0];


    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="venusImage" alt="Planet Venus" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(venusObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="venusImage" alt="Planet Venus" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(venusObject.images)[2];
            const img2 = Object.values(venusObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="venusImage planetImage1" alt="Planet Venus" />
                        <img src={img1} className="planetImage2" alt="Planet Venus" />
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
                    <h1>{venusObject.name}</h1>
                    <p>{venusObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={venusObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{venusObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{venusObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{venusObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{venusObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Venus;