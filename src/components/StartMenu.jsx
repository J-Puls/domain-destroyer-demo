import React, { useContext } from "react";
import StartMenuItem from "./StartMenuItem";
import clearScreen from "../assets/icons/clear-screen.png";
import weapon from "../assets/icons/weapon.png";
import volume from "../assets/icons/volume.png";
import controls from "../assets/icons/controls.png";
import info from "../assets/icons/info.png";
import GameState from "../context/GameState";

const StartMenu = (props) => {
  const gs = useContext(GameState);
  let volumeSlider;
  const handleVolumeChange = () => {
    props.volumeChange(volumeSlider);
  };

  return (
    <div className={`start-menu-container ${gs.menuVisible ? "visible" : ""}`}>
      <div
        className={`start-menu win-95 container ${
          gs.menuVisible ? "visible" : ""
        }`}
      >
        <div className="start-menu-brand"></div>
        <div className="menu-contents">
          <StartMenuItem onClick={props.weaponClick}>
            <img className="menu-icon" src={weapon} alt="weapon-select" />
            <span>Weapons</span>
          </StartMenuItem>
          <StartMenuItem onClick={props.volumeClick}>
            <img className="menu-icon" src={volume} alt="volume" />
            <span>Volume</span>
            <span>&#x25b6;</span>
          </StartMenuItem>
          <StartMenuItem onClick={props.clearClick}>
            <img className="menu-icon" src={clearScreen} alt="clean-drive" />
            <span>Clear Screen</span>
          </StartMenuItem>
          <StartMenuItem onClick={props.controlsClick}>
            <img className="menu-icon" src={controls} alt="view-controls" />
            <span>View Controls</span>
          </StartMenuItem>
          <StartMenuItem
            asAnchor
            href="https://jpuls.dev"
            onClick={props.controlsClick}
          >
            <img className="menu-icon" src={info} alt="developer-info" />
            <span>Developer Info</span>
          </StartMenuItem>
        </div>
      </div>
      <div
        className={`volume-select win-95 container${
          gs.volumeVisible ? " visible" : ""
        }`}
      >
        <StartMenuItem>
          <input
            onChange={handleVolumeChange}
            ref={(el) => (volumeSlider = el)}
            type="range"
            name="volume"
            id="volume-control"
            min={0}
            max={1}
            step={0.1}
            defaultValue={1}
          />
          <div>volume</div>
        </StartMenuItem>
      </div>
    </div>
  );
};

export default StartMenu;
