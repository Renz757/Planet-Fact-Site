const BottomNav = (props) => {
  return (
    <div className="bottomNav">
      <ul className="bottomNavList">
        <li
          className={`${props.planetCtx.overview.className}NavColor bottomNavStyle`}
          onClick={() => {
            if (!props.planetCtx.overview.isSelected) {
              props.planetCtx.overviewHandler();
            }
          }}
        >
          OVERVIEW
        </li>
        <li
          className={`${props.planetCtx.structure.className}NavColor bottomNavStyle`}
          onClick={() => {
            if (!props.planetCtx.structure.isSelected) {
              props.planetCtx.structureHandler();
            }
          }}
        >
          STRUCTURE
        </li>
        <li
          className={`${props.planetCtx.surface.className}NavColor bottomNavStyle`}
          onClick={() => {
            if (!props.planetCtx.surface.isSelected) {
              props.planetCtx.surfaceHandler();             
            }
          }}
        >
          SURFACE
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
