import {
  getClassNameBasedOnCardPlacement,
  getClassNameDependingOnCardAmount,
} from 'modules/cards/utils/style';

describe('getClassNameBasedOnCardPlacement', () => {
  const defaultPosition = 'md:-translate-y-3';

  it('should return correct css based on index', () => {
    const output1 = (index) => `md:-translate-y-6 md:${index === 3 ? '-' : ''}rotate-6`;
    const output2 = (index) => `md:-translate-y-16 md:${index === 4 ? '-' : ''}rotate-12`;
    const output3 = defaultPosition;

    const input0 = getClassNameBasedOnCardPlacement(0);
    const input1 = getClassNameBasedOnCardPlacement(1);
    const input2 = getClassNameBasedOnCardPlacement(2);
    const input3 = getClassNameBasedOnCardPlacement(3);
    const input4 = getClassNameBasedOnCardPlacement(4);

    expect(input0).toBe(output2(0));
    expect(input4).toBe(output2(4));
    expect(input1).toBe(output1(1));
    expect(input3).toBe(output1(3));
    expect(input2).toBe(output3);
  });

  it('should return defaultPosition css if it is the last round', () => {
    const index = 1;
    const isLastRound = true;

    const input = getClassNameBasedOnCardPlacement(index, isLastRound);
    const output = defaultPosition;

    expect(input).toBe(output);
  });
});

describe('getClassNameDependingOnCardAmount', () => {
  it('should return correct style based on card amount', () => {
    const twoCardCSS = 'grid-rows-1 gap-3 md:w-1/3';
    const fiveCardCSS = 'md:flex md:flex-wrap md:w-full grid-rows-2 w-2/3 md:px-20';

    const input1 = getClassNameDependingOnCardAmount(2);
    const input2 = getClassNameDependingOnCardAmount(5);

    expect(input1).toBe(twoCardCSS);
    expect(input2).toBe(fiveCardCSS);
  });
});
