import React from 'react'



function Neptune({ planetData, hoverState, RenderButtons }) {

    const neptuneObject = planetData[7]
    const img = Object.values(neptuneObject.images)[0];



    function renderImage() {
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="neptuneImage" alt="Planet Neptune" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(neptuneObject.images)[1];


            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="neptuneImage" alt="Planet Neptune" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(neptuneObject.images)[2];
            const img2 = Object.values(neptuneObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="neptuneImage planetImage1" alt="Planet Neptune" />
                        <img src={img1} className="planetImage2"  alt="Planet Neptune" />
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
                    <h1>{neptuneObject.name}</h1>
                    <p>{neptuneObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={neptuneObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>
                {RenderButtons()}
                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{neptuneObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{neptuneObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{neptuneObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{neptuneObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Neptune;