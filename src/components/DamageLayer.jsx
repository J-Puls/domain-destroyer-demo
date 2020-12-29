import React, { forwardRef } from "react";

const DamageLayer = forwardRef((props, ref) => {
    return (
        <canvas
            height={window.innerHeight}
            ref={ref}
            width={window.innerWidth}
            className="damage-layer"></canvas>
    );
});

export default DamageLayer;
