import React from 'react'



function Mars({ planetData, hoverState, RenderButtons }) {

    const marsObject = planetData[3]
    const img = Object.values(marsObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="marsImage" alt="Planet Mars" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(marsObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="marsImage" alt="Planet Mars" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(marsObject.images)[2];
            const img2 = Object.values(marsObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="marsImage planetImage1" alt="Planet Mars" />
                        <img src={img1} className="planetImage2" alt="Planet Mars" />
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
                    <h1>{marsObject.name}</h1>
                    <p>{marsObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={marsObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{marsObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{marsObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{marsObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{marsObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Mars;