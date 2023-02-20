import React from 'react';
import SuitImage from 'modules/cards/components/SuitImage';
import {
  CardSuitType,
  CardColorType,
  CardSymbolType,
  CardAccessibilityOptionType,
} from 'modules/common/types';

interface CardProps {
  card: CardSymbolType;
  suit: CardSuitType;
  color: CardColorType;
  className?: string;
  accessibilityOptions: CardAccessibilityOptionType;
}

export const getWrapperClassName = (className = '') =>
  `mx-auto bg-white flex flex-col justify-center mb-3 w-24 h-32 md:w-48 md:h-full rounded-lg md:rounded-3xl ${className}`;
export const getCardColorClassName = (color: CardColorType) =>
  `mr-auto ml-3 md:ml-6 font-courier-prime-bold text-4xl md:text-8xl text-${color}-500`;
const Card = ({ card, suit, color, className, accessibilityOptions }: CardProps) => {
  const SuitImageComponent = <SuitImage suit={suit} color={color} />;
  const { cardType, suitType } = accessibilityOptions;

  return (
    <div aria-labelledby={`${cardType} ${suitType}`} className={getWrapperClassName(className)}>
      <div className="mt-6">
        <div id={cardType} className={getCardColorClassName(color)}>
          {card}
        </div>
        <div className="mr-auto ml-3 md:ml-6 mx-auto h-5 w-5 md:h-10 md:w-10">
          {SuitImageComponent}
        </div>
      </div>
      <div id={suitType} className="ml-auto mb-6 mr-3 md:mr-10">
        <div className="h-10 w-10 md:h-20 md:w-20">{SuitImageComponent}</div>
      </div>
    </div>
  );
};

export default Card;
