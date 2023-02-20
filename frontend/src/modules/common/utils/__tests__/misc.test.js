import { textToUpperCase, getRandomIndex, getAmountOrZero } from 'modules/common/utils/misc';

describe('textToUppercase', () => {
  it('capitalizes each letter in the text', () => {
    const input = 'test';
    const output = 'TEST';

    expect(textToUpperCase(input)).toBe(output);
  });
});

describe('getRandomIndex', () => {
  it('should not give index outside the amount of items passed', () => {
    const input = [1, 2, 3];
    const output = 3;

    expect(getRandomIndex(input)).not.toBe(output);
  });
});

describe('getAmountOrZero', () => {
  it('should never return a value less than 0', () => {
    const input = -1;
    const output = 0;

    expect(getAmountOrZero(input)).toBe(output);
  });
});
