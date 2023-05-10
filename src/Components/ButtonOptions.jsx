const ButtonOptions = ({planetCtx}) => {
  return (
    <>
      <div className="planetButtonGroup">
        <button
          className={`${planetCtx.overview.className}Button button-styles`}
          onClick={() => {
            if (!planetCtx.overview.isSelected) {
                planetCtx.overviewHandler()
            }
        
        }} 
        >
          <span>01</span>OVERVIEW
        </button>

        <button
          className={`${planetCtx.structure.className}Button button-styles`}
          onClick={() => {
            if (!planetCtx.structure.isSelected) {
                planetCtx.structureHandler()
            }
        }} 
        >
          <span>02</span>INTERNAL STRUCTURE
        </button>

        <button
          className={`${planetCtx.surface.className}Button button-styles`}
          onClick={() => {
            if (!planetCtx.surface.isSelected) {
                planetCtx.surfaceHandler()
            }
        }} 
        >
          <span>03</span>SURFACE GEOLOGY
        </button>
      </div>
    </>
  );
};

export default ButtonOptions;
