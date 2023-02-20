import {
  MAX_CARD_TYPE_FOR_EACH_SUIT,
  CARD_AMOUNT_FOR_EACH_SUIT,
  LAST_DRAW_CARDS_LEFT_AMOUNT,
} from 'modules/cards/const';
import { getSuitsData, getRandomCardsWithUpdatedData } from 'modules/cards/utils';

describe('getSuitsData', () => {
  it('returns four suits with each type of card', () => {
    const input = getSuitsData();

    expect(input.length).toBe(MAX_CARD_TYPE_FOR_EACH_SUIT);
    expect(input[0].data.length).toBe(CARD_AMOUNT_FOR_EACH_SUIT);
    expect(input[1].data.length).toBe(CARD_AMOUNT_FOR_EACH_SUIT);
    expect(input[2].data.length).toBe(CARD_AMOUNT_FOR_EACH_SUIT);
    expect(input[3].data.length).toBe(CARD_AMOUNT_FOR_EACH_SUIT);
    expect('suit' in input[1]).toBe(true);
    expect('color' in input[1]).toBe(true);
  });
});

describe('getRandomCardsWithUpdatedData', () => {
  it('returns five cards if there is enough data by default', () => {
    const data = getSuitsData();
    const input = getRandomCardsWithUpdatedData(data);

    expect(input.cards.length).toBe(5);
    expect(input.dataToUpdate.length).toBe(4);
    expect('aces' in input).toBe(true);
  });

  it('returns two cards if requested', () => {
    const data = getSuitsData();
    const input = getRandomCardsWithUpdatedData(data, LAST_DRAW_CARDS_LEFT_AMOUNT);

    expect(input.cards.length).toBe(2);
    expect(input.dataToUpdate.length).toBe(4);
    expect('aces' in input).toBe(true);
  });
});
