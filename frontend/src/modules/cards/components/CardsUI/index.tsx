import React from 'react';
import Card from 'modules/cards/components/Card';
import {
  getClassNameBasedOnCardPlacement,
  getClassNameDependingOnCardAmount,
} from 'modules/cards/utils/style';
import { CardsType } from 'modules/common/types';

interface CardsUIProps {
  cards: CardsType;
  isLastRound: boolean;
}

export const getWrapperClassName = (cards: CardsType, isLastRound: boolean) =>
  `grid grid-flow-col mx-auto md:pt-10 ${
    cards ? getClassNameDependingOnCardAmount(cards.length) : ''
  } ${isLastRound ? 'mx-auto w-2/5' : ''}`;
export const getCardClassName = (index: number, isLastRound: boolean) =>
  `transform animate-show-2 md:animate-show-${index} ${getClassNameBasedOnCardPlacement(
    index,
    isLastRound
  )}`;
export const CARDS_ARIA_LABEL = 'cards';
const CardsUI = ({ cards, isLastRound }: CardsUIProps) =>
  cards && (
    <div aria-label={CARDS_ARIA_LABEL} className={getWrapperClassName(cards, isLastRound)}>
      {cards.map(({ suit, color, card }, index) => (
        <Card
          key={`${card}-${suit}`}
          className={getCardClassName(index, isLastRound)}
          card={card}
          suit={suit}
          color={color}
          accessibilityOptions={{ cardType: card, suitType: suit }}
        />
      ))}
    </div>
  );

export default CardsUI;
