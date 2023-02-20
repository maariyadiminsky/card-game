import React from 'react';
import ButtonReset from 'modules/common/components/button/ButtonReset';
import { ChildType, MouseEventType } from 'modules/common/types';
import { LOST_MESSAGE_TOP, LOST_MESSAGE_BOTTOM } from 'modules/gameState/const';

interface LostGameStateProps {
  children: ChildType;
  handleOnReset: MouseEventType;
}

const LostGameState = ({ children, handleOnReset }: LostGameStateProps) => (
  <>
    {children}
    <div aria-labelledby="message button-reset" className="flex-none h-full my-auto">
      <div className="flex flex-col">
        <div id="message" className="font-courier-prime text-2xl text-center text-white ">
          {LOST_MESSAGE_TOP}
          <span className="block">{LOST_MESSAGE_BOTTOM}</span>
        </div>
        <div id="button-reset" className="m-auto">
          <ButtonReset onClick={handleOnReset} isPlayAgain />
        </div>
      </div>
    </div>
  </>
);

export default LostGameState;
