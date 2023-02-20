import { NUMBERS } from 'modules/common/const';
import Counters from 'modules/counter/Counters';
import { render } from 'modules/test';

describe('<Counters />', () => {
  it('renders component', () => {
    const { getByText } = render(<Counters cardsLeft={NUMBERS.TWELVE} acesLeft={NUMBERS.THREE} />);

    const cardsLeftAmountDiv = getByText(NUMBERS.TWELVE);
    const acesLeftAmountDiv = getByText(NUMBERS.THREE);

    expect(cardsLeftAmountDiv).toBeInTheDocument();
    expect(acesLeftAmountDiv).toBeInTheDocument();
  });

  it('renders 0 cards left if amount is less than 0', () => {
    const { getByText } = render(
      <Counters cardsLeft={NUMBERS.NEGATIVE_ONE} acesLeft={NUMBERS.THREE} />
    );

    const cardsLeftAmountDiv = getByText(NUMBERS.ZERO);

    expect(cardsLeftAmountDiv).toBeInTheDocument();
    expect(cardsLeftAmountDiv.textContent).toBe(`${NUMBERS.ZERO}`);
    expect(cardsLeftAmountDiv.textContent).not.toBe(NUMBERS.NEGATIVE_ONE);
  });
});
