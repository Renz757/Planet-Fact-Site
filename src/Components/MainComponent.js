import React, { useState, useEffect } from "react";
import planetData from '../shared/data.json'
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./NavigationComponent";
import Mercury from "./Mercury";
import Venus from "./Venus"
import Earth from "./Earth";
import Mars from "./Mars";
import Jupiter from './Jupiter';
import Saturn from "./Saturn";
import Uranus from './Uranus';
import Neptune from './Neptune';
import { Router } from "react-router-dom";

function Main() {

    const [planets] = useState(planetData)

    const [planetPage, setPlanetPage] = useState('Mercury')

    function getCurrentPage(currentPage) {
        planetData.map(planet => {
            if (planet.name === currentPage) {
                setPlanetPage(currentPage)
            }
            return currentPage;
        })
    }


    const [hoverState, setHoverState] = useState(
        {
            overview: {
                isSelected: true,
                className: planetPage
            },
            structure: {
                isSelected: false,
                className: ''
            },
            surface: {
                isSelected: false,
                className: ''
            }
        }
    )

    function handleOverview() {
        setHoverState({
            ...hoverState,
            structure: {
                ...hoverState.structure,
                isSelected: false,
                className: ''
            },
            overview: {
                ...hoverState.overview,
                isSelected: true,
                className: planetPage
            },
            surface: {
                ...hoverState.surface,
                isSelected: false,
                className: ''
            }
        })
    }

    function handleStructure() {
        setHoverState({
            ...hoverState,
            structure: {
                ...hoverState.structure,
                isSelected: true,
                className: planetPage
            },
            overview: {
                ...hoverState.overview,
                isSelected: false,
                className: ''
            },
            surface: {
                ...hoverState.surface,
                isSelected: false,
                className: ''
            }
        })
    }

    function handleSurface() {
        setHoverState({
            ...hoverState,
            structure: {
                ...hoverState.structure,
                isSelected: false,
                className: ''
            },
            overview: {
                ...hoverState.overview,
                isSelected: false,
                className: ''
            },
            surface: {
                ...hoverState.surface,
                isSelected: true,
                className: planetPage
            }
        })
    }


    // eslint-disable-next-line
    useEffect(() => {
        handleSurface()
        handleStructure()
        handleOverview()

    }, [planetPage]);

    function RenderButtons() {
        return (
            <>
                <div className="planetButtonGroup">
                    <button
                        className={`${hoverState.overview.className}Button button-styles`}
                        onClick={() => {
                            if (!hoverState.overview.isSelected) {
                                handleOverview()
                            }
                        }}
                    ><span>01</span>OVERVIEW</button>

                    <button
                        className={`${hoverState.structure.className}Button button-styles`}
                        onClick={() => {
                            if (!hoverState.structure.isSelected) {
                                handleStructure()
                            }
                        }}
                    ><span>02</span>INTERNAL STRUCTURE</button>

                    <button
                        className={`${hoverState.surface.className}Button button-styles`}
                        onClick={() => {
                            if (!hoverState.surface.isSelected) {
                                handleSurface()
                            }
                        }}
                    ><span>03</span>SURFACE GEOLOGY</button>
                </div>
            </>
        )
    }

    //show Mercury on page refresh / load 
    useEffect(()=> {
        window.addEventListener('load', ()=> {
            return (
                <>
                   {console.log('this is working')}
                <Route path="/Mercury" render={()=> <Mercury planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                </>
            );
        });
    },[]);

    return (
        <>
            <Navigation
                planetData={planets}
                hoverState={hoverState}
                handleStructure={handleStructure}
                handleSurface={handleSurface}
                handleOverview={handleOverview}
                getCurrentPage={getCurrentPage}
                planetPage={planetPage}
            />

            <Switch>
                <Route path="/Mercury" render={()=> <Mercury planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Venus" render={()=> <Venus planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Earth" render={()=> <Earth planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Mars" render={()=> <Mars planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Jupiter" render={()=> <Jupiter planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Saturn" render={()=> <Saturn planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Uranus" render={()=> <Uranus planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Route path="/Neptune" render={()=> <Neptune planetData={planets} hoverState={hoverState} RenderButtons={RenderButtons} />} />
                <Redirect to="/Mercury" />
            </Switch>
        </>
    );

}

export default Main