import React, { useContext } from "react";
import GameState from "../context/GameState";

const WeaponSelect = () => {
    const gs = useContext(GameState);
    const changeWeapon = (id) => {
        gs.setWeapon(id);
        gs.setWeaponsVisible(false);
    };

    return (
        <div className="weapon-select">
            <button
                className="weapon-icon hammer"
                onClick={() => changeWeapon(0)}></button>
            <button
                className="weapon-icon machinegun"
                onClick={() => changeWeapon(1)}></button>
            <button
                className="weapon-icon stamp"
                onClick={() => changeWeapon(2)}></button>
        </div>
    );
};

export default WeaponSelect;
