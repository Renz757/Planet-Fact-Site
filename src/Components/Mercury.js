import React from 'react'




function Mercury({ planetData, hoverState,  RenderButtons }) {

    
    const mercuryObject = planetData[0]
    const img = Object.values(mercuryObject.images)[0];


    function renderImage() {
        //if user selects overview, structure, or surface tab, planet image will 
        //show accordingly
        if (hoverState.overview.isSelected) {
            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="mercuryImage" alt="Planet Mercury" />
                    </div>
                </>
            )
        } else if (hoverState.structure.isSelected) {
            const img = Object.values(mercuryObject.images)[1];

            return (
                <>
                    <div className="planetImage">
                        <img src={img} className="mercuryImage" alt="Planet Mercury" />
                    </div>
                </>
            )
        } else if (hoverState.surface.isSelected) {
            const img1 = Object.values(mercuryObject.images)[2];
            const img2 = Object.values(mercuryObject.images)[0];

            return (
                <>
                    <div className="planetImage">
                        <img src={img2} className="mercuryImage planetImage1" alt="Planet Mercury" />
                        <img src={img1} className="planetImage2" alt="Planet Mercury" />
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
                    <h1>{mercuryObject.name}</h1>
                    <p>{mercuryObject.overview.content}</p>
                    <span className="infoLink">Source: <a href={mercuryObject.overview.source} target="_blank" rel="noreferrer">Wikipedia<span className="linkIcon"></span></a></span>
                </div>

                {RenderButtons()}

                <div className="planetInfo">
                    <ul className="planetInfoList">
                        <li className="planetInfoItem">
                            <p className="measurement">ROTATION TIME:</p>
                            <p className="unit">{mercuryObject.rotation}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">REVOLUTION TIME:</p>
                            <p className="unit">{mercuryObject.revolution}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">RADIUS:</p>
                            <p className="unit">{mercuryObject.radius}</p>
                        </li>
                        <li className="planetInfoItem">
                            <p className="measurement">AVERAGE TEMP:</p>
                            <p className="unit">{mercuryObject.temperature}</p>
                        </li>
                    </ul>
                </div>
            </section>

        </>
    );
}

export default Mercury;