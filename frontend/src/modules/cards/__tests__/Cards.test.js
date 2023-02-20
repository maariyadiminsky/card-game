import Cards from 'modules/cards/Cards';
import { CARDS_ARIA_LABEL } from 'modules/cards/components/CardsUI';
import {
  AMOUNT_CARDS_DEALT_EACH_ROUND,
  MAX_CARD_TYPE_FOR_EACH_SUIT,
  LAST_DRAW_CARDS_LEFT_AMOUNT,
} from 'modules/cards/const';
import { getSuitsData, getRandomCardsWithUpdatedData } from 'modules/cards/utils';
import { render } from 'modules/test';
import { FUNC } from 'modules/test/const';

describe('<Cards />', () => {
  let setShouldDeal;
  let setShouldReset;
  let setAcesLeft;
  let setHasWon;
  let setHasLost;
  let setCardsToShow;
  let setCardSuitsData;

  const defaultProps = {
    shouldReset: false,
    shouldDeal: false,
    isLastRound: false,
    acesLeft: MAX_CARD_TYPE_FOR_EACH_SUIT,
  };

  let componentWithProps;

  let suitsData;

  beforeAll(() => {
    suitsData = getSuitsData();
  });

  beforeEach(() => {
    setShouldDeal = FUNC;
    setShouldReset = FUNC;
    setAcesLeft = FUNC;
    setHasWon = FUNC;
    setHasLost = FUNC;
    setCardsToShow = FUNC;
    setCardSuitsData = FUNC;

    componentWithProps = (props = defaultProps, cards) =>
      render(
        <Cards
          shouldReset={props.shouldReset}
          setShouldReset={setShouldReset}
          shouldDeal={props.shouldDeal}
          setShouldDeal={setShouldDeal}
          isLastRound={props.isLastRound}
          acesLeft={props.acesLeft}
          setAcesLeft={setAcesLeft}
          setHasWon={setHasWon}
          setHasLost={setHasLost}
          cardSuitsData={suitsData}
          cardsToShow={cards}
          setCardSuitsData={setCardSuitsData}
          setCardsToShow={setCardsToShow}
        />
      );
  });

  it('renders five card components initially', () => {
    const { cards } = getRandomCardsWithUpdatedData(suitsData, AMOUNT_CARDS_DEALT_EACH_ROUND);

    const { getByLabelText } = componentWithProps(defaultProps, cards);

    const cardUIWrapperDiv = getByLabelText(CARDS_ARIA_LABEL);
    const cardNodes = cardUIWrapperDiv.childNodes;

    expect(cardUIWrapperDiv).toBeInTheDocument();
    expect(cardNodes.length).toBe(AMOUNT_CARDS_DEALT_EACH_ROUND);
  });

  it('renders two card components if last round', () => {
    const { cards } = getRandomCardsWithUpdatedData(suitsData, LAST_DRAW_CARDS_LEFT_AMOUNT);

    const { getByLabelText } = componentWithProps({ ...defaultProps, isLastRound: true }, cards);

    const cardUIWrapperDiv = getByLabelText(CARDS_ARIA_LABEL);
    const cardNodes = cardUIWrapperDiv.childNodes;

    expect(cardUIWrapperDiv).toBeInTheDocument();
    expect(cardNodes.length).toBe(LAST_DRAW_CARDS_LEFT_AMOUNT);
  });
});
