import CardsUI, { CARDS_ARIA_LABEL } from 'modules/cards/components/CardsUI';
import { AMOUNT_CARDS_DEALT_EACH_ROUND } from 'modules/cards/const';
import { getSuitsData, getRandomCardsWithUpdatedData } from 'modules/cards/utils';
import { render } from 'modules/test';

describe('<CardsUI />', () => {
  it('renders card components', () => {
    const suitsData = getSuitsData();
    const { cards } = getRandomCardsWithUpdatedData(suitsData, AMOUNT_CARDS_DEALT_EACH_ROUND);

    const { getByLabelText } = render(<CardsUI cards={[...cards]} />);

    const wrapperDiv = getByLabelText(CARDS_ARIA_LABEL);
    const cardNodes = wrapperDiv.childNodes;

    expect(wrapperDiv).toBeInTheDocument();
    expect(cardNodes.length).toBe(AMOUNT_CARDS_DEALT_EACH_ROUND);
  });
});
