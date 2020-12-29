import { createContext } from "react";

export const GameState = createContext({
    displayName: "GameState"
});

// Provide shorthand version of Provider and Consumer
export const GameStateConsumer = GameState.Consumer;
export const GameStateProvider = GameState.Provider;

export default GameState;
