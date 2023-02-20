import { LAST_DRAW_CARDS_LEFT_AMOUNT } from '../const';

export const getClassNameBasedOnCardPlacement = (index: number, isLastRound = false) => {
  const defaultPosition = 'md:-translate-y-3';

  if (isLastRound) return defaultPosition;

  switch (index) {
    case 1:
    case 3:
      return `md:-translate-y-6 md:${index === 3 ? '-' : ''}rotate-6`;
    case 0:
    case 4:
      return `md:-translate-y-16 md:${index === 4 ? '-' : ''}rotate-12`;
    default:
      return defaultPosition;
  }
};

export const getClassNameDependingOnCardAmount = (amount: number) =>
  amount === LAST_DRAW_CARDS_LEFT_AMOUNT
    ? 'grid-rows-1 gap-3 md:w-1/3'
    : 'md:flex md:flex-wrap md:w-full grid-rows-2 w-2/3 md:px-20';
