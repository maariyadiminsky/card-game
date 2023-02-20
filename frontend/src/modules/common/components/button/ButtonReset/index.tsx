import React from 'react';
import ButtonActionRounded from 'modules/common/components/button/ButtonActionRounded';
import { TEXT } from 'modules/common/components/button/const';
import { MouseEventType } from 'modules/common/types';

interface ButtonResetProps {
  onClick: MouseEventType;
  isPlayAgain?: boolean;
  className?: string;
}

export const getClassName = (className = '') =>
  `mt-10 h-10 w-48 text-xl text-yellow-300 border-2 border-yellow-300 ${className}`;
const ButtonReset = ({ onClick, isPlayAgain, className }: ButtonResetProps) => (
  <ButtonActionRounded
    className={getClassName(className)}
    onClick={onClick}
    type="reset"
    aria-describedby="reset-button"
    accessibilityOptions={{
      id: 'reset-button',
      children: isPlayAgain ? TEXT.PLAY_AGAIN.ACCESSIBILITY : TEXT.RESET.ACCESSIBILITY,
    }}
  >
    {isPlayAgain ? TEXT.PLAY_AGAIN.DEFAULT : TEXT.RESET.DEFAULT}
  </ButtonActionRounded>
);

export default ButtonReset;
