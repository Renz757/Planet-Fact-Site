import React, { useState, useContext } from "react";
import planetData from '../../shared/data.json'
import BottomNav from "./BottomNav";
import MobileNav from "./MobileNav";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import PlanetContext from "../../store/planet-context";


function Navigation() {

    const [menu, setMenu] = useState(false);
    let [menuColor, setMenuColor] = useState("white");


    const planetCtx = useContext(PlanetContext)

    const getCurrentPlanet = planet => {
        planetCtx.updatePlanetPage(planet)
    }

    return (
        <>
            <nav>
                <div className="navStyles">
                    <div 
                        className="logo" 
                        onClick={(event) => { 
                            getCurrentPlanet('Mercury')
                            setMenu(false)
                            setMenuColor('white');
                        }}
                        >The Planets</div>
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
                            }

                        }
                    />
                    <ul className="planetList">
                        {planetData.map(planets => {
                            return (
                                <>
                                    <div
                                        key={planets.id}
                                        className='planet'
                                        onClick={() => {
                                            getCurrentPlanet(planets.name)   
                                        }
                                        }
                                        

                                    >
                                        {planets.name.toUpperCase()}
                                    </div>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </nav>

            {menu ? (
                <div className="mobileNav">
                    <ul className="mobilePlanetList">
                        <MobileNav setMenu={setMenu} setMenuColor={setMenuColor} getCurrentPlanet={getCurrentPlanet}/>
                    </ul>
                </div>) : (
                <div></div>
            )}

            <BottomNav planetCtx={planetCtx}/>
        </>
    );
}

export default Navigation;