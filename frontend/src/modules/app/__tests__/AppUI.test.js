import { INITIAL_DRAW_CARDS_LEFT } from 'modules/app/App';
import AppUI from 'modules/app/components/AppUI';
import { CARDS_ARIA_LABEL } from 'modules/cards/components/CardsUI';
import { AMOUNT_CARDS_DEALT_EACH_ROUND, MAX_CARD_TYPE_FOR_EACH_SUIT } from 'modules/cards/const';
import { getSuitsData, getRandomCardsWithUpdatedData } from 'modules/cards/utils';
import { TEXT as BUTTON_TEXT } from 'modules/common/components/button/const';
import { textToUpperCase } from 'modules/common/utils/misc';
import { CARDS_LEFT, ACES_LEFT } from 'modules/counter/const';
import { GAME_STATE, DEAL, PLAYING_GAME_STATE_ACCESSIBILITY_TEXT } from 'modules/gameState/const';
import { render } from 'modules/test';
import { FUNC, SCREEN_READER_CLASS } from 'modules/test/const';

describe('<AppUI />', () => {
  let setShouldDeal;
  let setShouldReset;
  let setAcesLeft;
  let setHasWon;
  let setHasLost;
  let setCardsToShow;
  let setCardSuitsData;
  let handleOnDeal;
  let handleOnReset;

  const defaultProps = {
    gameState: GAME_STATE.IS_PLAYING,
    shouldReset: false,
    shouldDeal: false,
    isLastRound: false,
    acesLeft: MAX_CARD_TYPE_FOR_EACH_SUIT,
    cardsLeft: INITIAL_DRAW_CARDS_LEFT,
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
    handleOnDeal = FUNC;
    handleOnReset = FUNC;

    componentWithProps = (props = defaultProps, cards) =>
      render(
        <AppUI
          gameState={props.gameState}
          handleOnDeal={handleOnDeal}
          handleOnReset={handleOnReset}
          shouldReset={props.shouldReset}
          setShouldReset={setShouldReset}
          shouldDeal={props.shouldDeal}
          setShouldDeal={setShouldDeal}
          isLastRound={props.isLastRound}
          cardsLeft={props.cardsLeft}
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

  it('renders components with initial state - playing state, full deck/aces counter, five cards showing', () => {
    const { cards } = getRandomCardsWithUpdatedData(suitsData, AMOUNT_CARDS_DEALT_EACH_ROUND);

    const { getByLabelText, getByText, getByRole } = componentWithProps(defaultProps, cards);

    // 47(because 5 are visible) cards left and 4(unless there are some visible) aces left
    const cardsLeftCounterText = getByText(CARDS_LEFT);
    const acesLeftCounterText = getByText(ACES_LEFT);

    expect(cardsLeftCounterText).toBeInTheDocument();
    expect(acesLeftCounterText).toBeInTheDocument();

    // playing game state
    const accessibilityDealButtonSpan = getByText(PLAYING_GAME_STATE_ACCESSIBILITY_TEXT);
    const accessibilityResetButtonSpan = getByText(BUTTON_TEXT.RESET.ACCESSIBILITY);
    const dealButton = getByRole('button', { name: textToUpperCase(DEAL) });
    const resetButton = getByRole('button', { name: BUTTON_TEXT.RESET.DEFAULT });

    expect(resetButton).toBeInTheDocument();
    expect(dealButton).toBeInTheDocument();
    expect(accessibilityDealButtonSpan).toBeInTheDocument();
    expect(accessibilityDealButtonSpan.className).toBe(SCREEN_READER_CLASS);
    expect(accessibilityResetButtonSpan).toBeInTheDocument();
    expect(accessibilityResetButtonSpan.className).toBe(SCREEN_READER_CLASS);

    // five cards
    const cardUIWrapperDiv = getByLabelText(CARDS_ARIA_LABEL);
    const cardNodes = cardUIWrapperDiv.childNodes;

    expect(cardUIWrapperDiv).toBeInTheDocument();
    expect(cardNodes.length).toBe(AMOUNT_CARDS_DEALT_EACH_ROUND);
  });
});
