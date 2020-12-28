import React, { forwardRef } from "react";

const DamageLayer = forwardRef((props, ref) => {
  return (
    <canvas
      ref={ref}
      width={window.innerWidth}
      height={window.innerHeight}
      className="damage-layer"
    ></canvas>
  );
});

export default DamageLayer;
