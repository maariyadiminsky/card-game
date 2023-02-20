import {
  COLORS,
  SUIT_TYPE,
  SUITS_ARRAY,
  CARD_TYPE,
  CARD_TYPE_ARRAY,
  AMOUNT_CARDS_DEALT_EACH_ROUND,
} from 'modules/cards/const';
import { CardSuitType, SuitsDataType, CardsType } from 'modules/common/types';
import { getRandomIndex } from 'modules/common/utils/misc';

const isSuitRed = (suit: CardSuitType) => suit === SUIT_TYPE.DIAMOND || suit === SUIT_TYPE.HEART;
const getSuitColor = (suit: CardSuitType) => (isSuitRed(suit) ? COLORS.RED : COLORS.BLACK);
export const getSuitsData = () =>
  SUITS_ARRAY.map((suit) => ({
    suit,
    data: [...CARD_TYPE_ARRAY],
    color: getSuitColor(suit),
  }));

export const getRandomCardsWithUpdatedData = (
  data: SuitsDataType,
  amount = AMOUNT_CARDS_DEALT_EACH_ROUND
) => {
  let cards: CardsType = [];
  let aces = 0;
  const dataToUpdate = [...data];

  while (cards.length !== amount && dataToUpdate.length !== 0) {
    const randomSuitIndex = getRandomIndex(dataToUpdate);
    const randomSuit = dataToUpdate[randomSuitIndex];
    const randomCardTypeIndex = getRandomIndex(randomSuit.data);
    const randomCardType = randomSuit.data[randomCardTypeIndex];

    cards = [...cards, { suit: randomSuit.suit, color: randomSuit.color, card: randomCardType }];

    // remove card types to ensure no duplicates
    randomSuit.data.splice(randomCardTypeIndex, 1);

    // remove suit to avoid unnecessary loops with empty data
    if (randomSuit.data.length === 0) {
      dataToUpdate.splice(randomSuitIndex, 1);
    }

    // passing this here to avoid unnecessary loop later
    if (randomCardType === CARD_TYPE.ACE) {
      aces += 1;
    }
  }

  return {
    cards,
    dataToUpdate,
    aces,
  };
};
