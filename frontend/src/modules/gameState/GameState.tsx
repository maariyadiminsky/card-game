import React from 'react';
import { GameStateType, ChildType, MouseEventType } from 'modules/common/types';
import LostGameState from 'modules/gameState/components/LostGameState';
import PlayingGameState from 'modules/gameState/components/PlayingGameState';
import WonGameState from 'modules/gameState/components/WonGameState';
import { GAME_STATE } from 'modules/gameState/const';

interface GameStateProps {
  gameState: GameStateType;
  children: ChildType;
  handleOnDeal: MouseEventType;
  handleOnReset: MouseEventType;
}

const GameState = ({
  gameState = GAME_STATE.PLAYING,
  children,
  handleOnDeal,
  handleOnReset,
}: GameStateProps) => {
  switch (gameState) {
    case GAME_STATE.WON:
      return <WonGameState handleOnReset={handleOnReset}>{children}</WonGameState>;
    case GAME_STATE.LOST:
      return <LostGameState handleOnReset={handleOnReset}>{children}</LostGameState>;
    default:
      return (
        <PlayingGameState handleOnDeal={handleOnDeal} handleOnReset={handleOnReset}>
          {children}
        </PlayingGameState>
      );
  }
};

export default GameState;
