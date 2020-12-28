import React, { useEffect, useState } from "react";
import Destroyer from "domain-destroyer";
import "domain-destroyer/dist/css/destroyer.min.css";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";
import Win95Window from "./components/Win95Window";
import ControlsTable from "./components/ControlsTable";
import WeaponSelect from "./components/WeaponSelect";
import SplashScreen from "./components/SplashScreen";
import { GameStateProvider } from "./context/GameState";
import { Howl } from "domain-destroyer/node_modules/howler";
import win95Start from "./assets/sounds/Windows-95-startup-sound.webm";
import "./sass/main.sass";

export const App = () => {
  const [destroyer, setDestroyer] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [volumeVisible, setVolumeVisible] = useState(false);
  const [weaponsVisible, setWeaponsVisible] = useState(false);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  let container, volumeSlider;

  useEffect(() => {
    container && setDestroyer(new Destroyer(container, { zIndexStart: 10 }));
  }, [container, volumeSlider]);

  useEffect(() => {
    window.destroyer = destroyer;
  }, [destroyer]);

  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }, []);

  const hideMenu = () => setMenuVisible(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const closeControlsWindow = () => setControlsVisible(false);
  const closeWeaponsWindow = () => setWeaponsVisible(false);
  const closeWelcomeWindow = () => setWelcomeVisible(false);
  const closeVolumeMenu = () => setVolumeVisible(false);
  const handleVolumeMenuClick = () => setVolumeVisible(!volumeVisible);
  const setWeapon = (id) => destroyer && destroyer.setWeapon(id);
  const handleClearClick = () => destroyer && destroyer.clear();

  const handleStartClick = () => {
    if (!menuVisible) {
      destroyer && destroyer.parent.addEventListener("click", hideMenu);
    } else destroyer && destroyer.parent.removeEventListener("click", hideMenu);
    setVolumeVisible(false);
    toggleMenu();
  };

  const closeWindows = () => {
    closeVolumeMenu();
    hideMenu();
    closeControlsWindow();
    closeWelcomeWindow();
    closeWeaponsWindow();
  };

  const handleWeaponMenuClick = () => {
    closeWindows();
    setWeaponsVisible(true);
  };
  const handleControlsMenuClick = () => {
    closeWindows();
    setControlsVisible(true);
  };

  const handleVolumeChange = (slider) => {
    slider && destroyer && destroyer.setVolume(slider.value);
  };

  const handleStartGame = () => {
    setGameStarted(true);
    const sound = new Howl({ src: win95Start, volume: 0.7 });
    sound.play();
  };

  useEffect(() => {
    gameStarted && destroyer.inject();
  }, [gameStarted]);

  const context = {
    controlsVisible,
    setControlsVisible,
    weaponsVisible,
    setWeaponsVisible,
    menuVisible,
    setMenuVisible,
    volumeVisible,
    setVolumeVisible,
    setWeapon,
    handleStartClick,
  };

  return (
    <GameStateProvider value={context}>
      <div ref={(el) => (container = el)}></div>
      <Taskbar onStartClick={toggleMenu} />
      <StartMenu
        weaponClick={handleWeaponMenuClick}
        volumeClick={handleVolumeMenuClick}
        clearClick={handleClearClick}
        controlsClick={handleControlsMenuClick}
        volumeChange={handleVolumeChange}
        setWeapon={setWeapon}
      />
      <SplashScreen onCloseClick={handleStartGame} visible={!gameStarted} />
      <Win95Window
        heading="Controls"
        onCloseClick={closeControlsWindow}
        title="Domain Destroyer | Controls"
        visible={controlsVisible}
      >
        <ControlsTable />
      </Win95Window>
      <Win95Window
        heading="Weapon Select"
        onCloseClick={closeWeaponsWindow}
        title="Domain Destroyer | Weapon Select"
        visible={weaponsVisible}
      >
        <WeaponSelect />
      </Win95Window>
    </GameStateProvider>
  );
};

export default App;
