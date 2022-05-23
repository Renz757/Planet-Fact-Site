import React, { useState } from "react";
import { Link } from 'react-router-dom'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


function Navigation({ planetData, getCurrentPage, hoverState, handleOverview, handleStructure, handleSurface, planetPage }) {

    const [menu, setMenu] = useState(false);
    let [menuColor, setMenuColor] = useState("white");

    const mobilePlanetList = planetData.map(planet => {
        return (
            <Link to={`/${planet.name}`}
                key={planet.id}
                className="mobilePlanetItem"
                onClick={() => {
                    getCurrentPage(planet.name)
                    setMenu(false)
                    handleOverview()
                }}>

                <div className="flex-container">
                    <div style={{
                        backgroundColor: planet.color,
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%"
                    }} />
                    <h3>{planet.name}</h3>
                </div>
                <div className="arrow"></div>
            </Link>
        )
    })

    return (
        <>
            <nav>
                <div className="navStyles">
                    <Link to={`/Mercury`} className="logo" onClick={() => { getCurrentPage('Mercury') }}>The Planets</Link>
                    <MenuOutlinedIcon
                        className="menuIcon"
                        fontSize="large"
                        style={
                            {
                                cursor: "pointer",
                                color: menuColor
                            }
                        }

                        onClick={
                            () => {
                                setMenu(!menu)
                                setMenuColor(menuColor === "white" ? menuColor = "grey" : menuColor = "white");
                                handleOverview()
                            }

                        }
                    />
                    <ul className="planetList">
                        {planetData.map(planets => {
                            return (
                                <>
                                    <Link
                                        to={`/${planets.name}`}
                                        key={planets.id}
                                        className="planet"
                                        onClick={() => {
                                            getCurrentPage(planets.name)
                                        }
                                        }

                                    >
                                        {planets.name.toUpperCase()}
                                    </Link>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </nav>

            {menu ? (
                <div className="mobileNav">
                    <ul className="mobilePlanetList">
                        {mobilePlanetList}
                    </ul>
                </div>) : (
                <div></div>
            )}

            <div className="bottomNav">
                <ul className="bottomNavList">
                    <li
                        className={`${hoverState.overview.className}NavColor bottomNavStyle`}
                        onClick={() => {
                            if (!hoverState.overview.isSelected) {
                                handleOverview()
                            }
                        }}

                    >OVERVIEW</li>
                    <li
                        className={`${hoverState.structure.className}NavColor bottomNavStyle`}
                        onClick={() => {
                            if (!hoverState.structure.isSelected) {
                                handleStructure()
                            }
                        }}

                    >STRUCTURE</li>
                    <li
                        className={`${hoverState.surface.className}NavColor bottomNavStyle`}
                        onClick={() => {
                            if (!hoverState.surface.isSelected) {
                                handleSurface()
                            }
                        }}

                    >SURFACE</li>
                </ul>
            </div>
        </>
    );
}

export default Navigation;