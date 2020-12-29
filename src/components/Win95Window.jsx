import React from "react";
const Win95Window = (props) => {
    return (
        <div
            className={`win-95 container window${
                props.visible ? " visible" : ""
            } ${props.className}`}>
            <div className="window-title-bar">
                <div className="text">{props.title}</div>
                {props.closeBtn && (
                    <button
                        className="win-95 btn close-btn"
                        title="close"
                        onClick={props.onCloseClick}>
                        <div className="close-icon">&#128473;</div>
                    </button>
                )}
            </div>
            <div className="window-heading">{props.heading}</div>
            <div className="window-contents">{props.children}</div>
            <div className="window-footer">{props.footer}</div>
        </div>
    );
};

export default Win95Window;
