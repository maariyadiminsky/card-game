import React from 'react';
import { LAST_DRAW_CARDS_LEFT_AMOUNT } from 'modules/cards/const';
import { NUMBERS } from 'modules/common/const';
import Counter from 'modules/counter/components/Counter';
import { CARDS_LEFT, ACES_LEFT } from 'modules/counter/const';

interface CountersProps {
  cardsLeft: number;
  acesLeft: number;
}

export const getCardsLeft = (cardsLeft: number) =>
  cardsLeft < LAST_DRAW_CARDS_LEFT_AMOUNT ? NUMBERS.ZERO : cardsLeft;
const Counters = ({ cardsLeft, acesLeft }: CountersProps) => (
  <div
    aria-labelledby="cards-left-counter aces-left-counter"
    aria-live="polite"
    aria-relevant="text"
    className="flex flex-row w-3/4 md:w-1/4 m-auto"
  >
    <Counter id="cards-left-counter" text={CARDS_LEFT} amount={getCardsLeft(cardsLeft)} />
    <Counter id="aces-left-counter" text={ACES_LEFT} amount={acesLeft} />
  </div>
);

export default Counters;
