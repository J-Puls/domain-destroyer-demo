import ControlsTable from "./components/ControlsTable";
import Destroyer from "domain-destroyer";
import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import StartMenu from "./components/StartMenu";
import Taskbar from "./components/Taskbar";
import WeaponSelect from "./components/WeaponSelect";
import Win95Window from "./components/Win95Window";
import win95Start from "./assets/sounds/Windows-95-startup-sound.webm";
import { GameStateProvider } from "./context/GameState";
import { Howl } from "howler";

import "domain-destroyer/dist/css/destroyer.min.css";
import "./sass/main.css";

export const App = () => {
    const [controlsVisible, setControlsVisible] = useState(false);
    const [destroyer, setDestroyer] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [volumeVisible, setVolumeVisible] = useState(false);
    const [weaponsVisible, setWeaponsVisible] = useState(false);
    let container;

    useEffect(() => {
        // enable firing via left or right mouse button
        document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
        });
    }, []);

    useEffect(() => {
        // once the destroyer parent target is rendered, instantiate the game
        if (container) {
            setDestroyer(
                new Destroyer(container, {
                    zIndexStart: 10,
                    defaultVolume: 0.5
                })
            );
        }
    }, [container]);

    useEffect(() => {
        // once game instance is created, inject it and make it globally accessible
        if (destroyer) {
            destroyer.inject();
            window.destroyer = destroyer;
        }
    }, [destroyer]);

    // shortcut functions
    const closeControlsWindow = () => setControlsVisible(false);
    const closeVolumeMenu = () => setVolumeVisible(false);
    const closeWeaponsWindow = () => setWeaponsVisible(false);
    const handleClearClick = () => destroyer && destroyer.clear();
    const handleVolumeMenuClick = () => setVolumeVisible(!volumeVisible);
    const hideMenu = () => setMenuVisible(false);
    const setWeapon = (id) => destroyer && destroyer.setWeapon(id);
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const handleStartClick = () => {
        // create a listener that closes the start menu if you click away from it when open
        if (!menuVisible) {
            destroyer && destroyer.parent.addEventListener("click", hideMenu);
        }
        // remove the listener if the menu is closed
        else
            destroyer &&
                destroyer.parent.removeEventListener("click", hideMenu);
        setVolumeVisible(false); // make sure volume slider is closed with the menu
        toggleMenu(); // open or close the menu when the button is clicked
    };

    // shortcut to close all windows at once
    const closeWindows = () => {
        closeVolumeMenu();
        hideMenu();
        closeControlsWindow();
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

    // trigger game instantiation and play the Windows95 startup chime
    const handleStartGame = () => {
        setGameStarted(true);
        const sound = new Howl({ src: win95Start, volume: 0.5 });
        sound.play();
    };

    const context = {
        controlsVisible,
        handleStartClick,
        menuVisible,
        setControlsVisible,
        setMenuVisible,
        setVolumeVisible,
        setWeapon,
        setWeaponsVisible,
        volumeVisible,
        weaponsVisible
    };

    return (
        <GameStateProvider value={context}>
            <SplashScreen
                onCloseClick={handleStartGame}
                visible={!gameStarted}
            />
            <div ref={(el) => (container = el)}></div>
            {gameStarted && (
                <>
                    <Taskbar onStartClick={toggleMenu} />
                    <StartMenu
                        clearClick={handleClearClick}
                        controlsClick={handleControlsMenuClick}
                        defaultVolume={destroyer ? destroyer.defaultVolume : 1}
                        setWeapon={setWeapon}
                        volumeChange={handleVolumeChange}
                        volumeClick={handleVolumeMenuClick}
                        weaponClick={handleWeaponMenuClick}
                    />

                    <Win95Window
                        closeBtn
                        heading="Controls"
                        onCloseClick={closeControlsWindow}
                        title="Domain Destroyer | Controls"
                        visible={controlsVisible}>
                        <ControlsTable />
                    </Win95Window>
                    <Win95Window
                        closeBtn
                        heading="Weapon Select"
                        onCloseClick={closeWeaponsWindow}
                        title="Domain Destroyer | Weapon Select"
                        visible={weaponsVisible}>
                        <WeaponSelect />
                    </Win95Window>
                </>
            )}
        </GameStateProvider>
    );
};

export default App;
