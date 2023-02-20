/* eslint-disable react/button-has-type */
import React from 'react';
import ScreenReaderOnlySpan from 'modules/common/components/accessibility/ScreenReaderOnly/ScreenReaderOnlySpan';
import {
  ChildType,
  ButtonType,
  ButtonAccessibilityOptionType,
  MouseEventType,
} from 'modules/common/types';

interface ButtonActionRoundedProps {
  children: ChildType;
  onClick: MouseEventType;
  className?: string;
  type?: ButtonType;
  accessibilityOptions: ButtonAccessibilityOptionType;
}

export const getClassName = (className = '') =>
  `text-center rounded-xl font-alfa-slab-one tracking-wide ${className}`;
const ButtonActionRounded = ({
  children,
  onClick,
  className,
  type,
  accessibilityOptions,
}: ButtonActionRoundedProps) => (
  <>
    <button type={type || 'button'} onClick={onClick} className={getClassName(className)}>
      {children}
    </button>
    <ScreenReaderOnlySpan id={accessibilityOptions.id}>
      {accessibilityOptions.children}
    </ScreenReaderOnlySpan>
  </>
);

export default ButtonActionRounded;
