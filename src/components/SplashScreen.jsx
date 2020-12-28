import React from "react";
import Win95Window from "./Win95Window";
import WelcomeInfo from "./WelcomeInfo";
import Win95Button from "./Win95Button";

const SplashScreen = (props) => {
  return (
    <div className={`splash-screen ${props.visible ? "" : "closed"}`}>
      <Win95Window
        heading="Domain Destroyer"
        footer={
          <Win95Button className="start-game-btn" onClick={props.onCloseClick}>
            Start Game
          </Win95Button>
        }
        onCloseClick={props.onCloseClick}
        title="Domain Destroyer | Welcome"
        visible={props.visible}
      >
        <WelcomeInfo />
      </Win95Window>
    </div>
  );
};

export default SplashScreen;
