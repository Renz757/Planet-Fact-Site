import React from "react";

const PlanetContext = React.createContext({
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
});

export default PlanetContext;