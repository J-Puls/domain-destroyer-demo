import React, { useContext } from "react";
import Win95Button from "./Win95Button";
import startIcon from "../assets/icons/start-btn-logo.svg";
import GameState from "../context/GameState";
import hmm from "../assets/icons/hmm.svg";

const Taskbar = () => {
    const gs = useContext(GameState);
    return (
        <div className="taskbar">
            <Win95Button className="start-btn" onClick={gs.handleStartClick}>
                <img
                    className="start-btn-logo"
                    src={startIcon}
                    alt="start-icon"
                    width={20}
                    height={20}
                />
                <div className="start-btn-text">Start</div>
            </Win95Button>

            <div className="clock">
                <a
                    href="https://jpuls.dev"
                    rel="noreferrer noopener"
                    target="_blank"
                    title="developer portfolio">
                    <img
                        src={hmm}
                        alt="jpuls.dev logo"
                        width={20}
                        height={20}
                    />
                </a>

                <div className="time">4:20PM</div>
            </div>
        </div>
    );
};

export default Taskbar;
