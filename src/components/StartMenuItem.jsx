import React from "react";
const StartMenuItem = (props) => {
    return (
        <>
            {props.asAnchor ? (
                <a
                    href={props.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="menu-item"
                    onClick={props.onClick}>
                    <div className="menu-item-contents">{props.children}</div>
                </a>
            ) : (
                <div className="menu-item" onClick={props.onClick}>
                    <div className="menu-item-contents">{props.children}</div>
                </div>
            )}
        </>
    );
};

export default StartMenuItem;
