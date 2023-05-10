import { useReducer } from "react"

import PlanetContext from "./planet-context"

const defaultState = {
    planetPage: 'Mercury',
    overview: {
        isSelected: true,
        className: 'Mercury'
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

const planetReducer = (state, action) => {
    if (action.type === 'UPDATE_PLANET') {
        return {
            planetPage: action.planetPage,
            overview: {
                isSelected: true,
                className: action.planetPage
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

    }
    if (action.type === 'STRUCTURE') {
        return {
            planetPage: state.planetPage,
            overview: {
                isSelected: false,
                className: ''
            },
            structure: {
                isSelected: true,
                className: state.planetPage
            },
            surface: {
                isSelected: false,
                className: ''
            }
        }
    }
    if (action.type === 'SURFACE') {
        return {
            planetPage: state.planetPage,
            overview: {
                isSelected: false,
                className: ''
            },
            structure: {
                isSelected: false,
                className: ''
            },
            surface: {
                isSelected: true,
                className: state.planetPage
            }
        }
    }
    if (action.type === 'OVERVIEW') {
        return {
            planetPage: state.planetPage,
            overview: {
                isSelected: true,
                className: state.planetPage
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
    }

    return defaultState;
}

const PlanetProvider = props => {
    const [planetState, dispatchPlanetAction] = useReducer(planetReducer, defaultState);

    const planetPageHandler = planet => {
        dispatchPlanetAction({ type: 'UPDATE_PLANET', planetPage: planet });
    }
    const overviewHandler = () => {
        dispatchPlanetAction({ type: 'OVERVIEW' })
    }

    const structureHandler = () => {
        dispatchPlanetAction({ type: 'STRUCTURE' })
    }

    const surfaceHandler = () => {
        dispatchPlanetAction({ type: 'SURFACE' })
    }

    const planetContext = {
        planetPage: planetState.planetPage,
        overview: planetState.overview,
        structure: planetState.structure,
        surface: planetState.surface,
        updatePlanetPage: planetPageHandler,
        overviewHandler: overviewHandler,
        structureHandler: structureHandler,
        surfaceHandler: surfaceHandler
    }

    return <PlanetContext.Provider value={planetContext}>
        {props.children}
    </PlanetContext.Provider>
}

export default PlanetProvider