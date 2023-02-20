import { NUMBERS } from 'modules/common/const';

export const textToUpperCase = (text: string) => text.toUpperCase();

export const getRandomIndex = (items: Array<any>) => Math.floor(Math.random() * items.length);

export const getAmountOrZero = (amount: number) => (amount <= NUMBERS.ZERO ? NUMBERS.ZERO : amount);
