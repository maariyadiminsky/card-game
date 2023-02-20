import React from 'react';
import ButtonActionRounded from 'modules/common/components/button/ButtonActionRounded';
import ButtonReset from 'modules/common/components/button/ButtonReset';
import { ChildType, MouseEventType } from 'modules/common/types';
import { textToUpperCase } from 'modules/common/utils/misc';
import { DEAL, PLAYING_GAME_STATE_ACCESSIBILITY_TEXT } from 'modules/gameState/const';

interface PlayingGameStateProps {
  children: ChildType;
  handleOnReset: MouseEventType;
  handleOnDeal: MouseEventType;
}

const PlayingGameState = ({ children, handleOnDeal, handleOnReset }: PlayingGameStateProps) => (
  <>
    {children}
    <div className="flex-none my-auto h-full">
      <div className="flex flex-col w-full">
        <ButtonActionRounded
          onClick={handleOnDeal}
          className="m-auto h-24 w-72 text-6xl bg-yellow-300 animate-pulse"
          accessibilityOptions={{
            id: 'deal-button',
            children: PLAYING_GAME_STATE_ACCESSIBILITY_TEXT,
          }}
        >
          {textToUpperCase(DEAL)}
        </ButtonActionRounded>
        <ButtonReset onClick={handleOnReset} className="mx-auto md:mr-0" />
      </div>
    </div>
  </>
);

export default PlayingGameState;
