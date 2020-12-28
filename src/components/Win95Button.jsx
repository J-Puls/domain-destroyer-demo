import React from "react";
const Win95Button = (props) => {
  return (
    <button className={`win-95 btn ${props.className}`} onClick={props.onClick}>
      <div className="btn-contents">{props.children}</div>
    </button>
  );
};

export default Win95Button;
