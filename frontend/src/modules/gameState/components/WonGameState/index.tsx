import React from 'react';
import ButtonReset from 'modules/common/components/button/ButtonReset';
import { ChildType, MouseEventType } from 'modules/common/types';
import Banner from 'modules/gameState/images/Banner';

interface WonGameStateProps {
  children: ChildType;
  handleOnReset: MouseEventType;
}

const WonGameState = ({ children, handleOnReset }: WonGameStateProps) => (
  <div aria-label="winner view" className="relative h-full md:h-auto md:my-0">
    {children}
    <Banner className="absolute top-28 md:top-40 flex-no-shrink fill-current h-48 md:h-20 w-full" />
    <div className="flex-none pt-10">
      <div className="flex flex-col m-auto">
        <ButtonReset onClick={handleOnReset} className="m-auto" isPlayAgain />
      </div>
    </div>
  </div>
);

export default WonGameState;
