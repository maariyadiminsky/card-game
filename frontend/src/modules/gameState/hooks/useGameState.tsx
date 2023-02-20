import { useState } from 'react';
import { GAME_STATE } from 'modules/gameState/const';

export const useGameState = () => {
  const [gameState, setGameState] = useState(GAME_STATE.PLAYING);

  const setHasWon = () => setGameState(GAME_STATE.WON);

  const setHasLost = () => setGameState(GAME_STATE.LOST);

  const setIsPlaying = () => setGameState(GAME_STATE.PLAYING);

  return {
    gameState,
    setHasWon,
    setHasLost,
    setIsPlaying,
  };
};
