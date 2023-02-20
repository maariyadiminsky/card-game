import { TEXT as BUTTON_TEXT } from 'modules/common/components/button/const';
import { textToUpperCase } from 'modules/common/utils/misc';
import GameState from 'modules/gameState/GameState';
import {
  LOST_MESSAGE_TOP,
  LOST_MESSAGE_BOTTOM,
  GAME_STATE,
  DEAL,
  PLAYING_GAME_STATE_ACCESSIBILITY_TEXT,
} from 'modules/gameState/const';
import { TEXT as WINNER_BANNER_TEXT } from 'modules/gameState/images/Banner';
import { render } from 'modules/test';
import { FUNC, FUNC_2, TEXT, SCREEN_READER_CLASS } from 'modules/test/const';

describe('<GameState />', () => {
  it('renders the component with playing game state if no state is passed in', () => {
    const { getByRole, getByText } = render(
      <GameState handleOnDeal={FUNC_2} handleOnReset={FUNC}>
        {TEXT}
      </GameState>
    );

    const children = getByText(TEXT);
    const accessibilityDealButtonSpan = getByText(PLAYING_GAME_STATE_ACCESSIBILITY_TEXT);
    const accessibilityResetButtonSpan = getByText(BUTTON_TEXT.RESET.ACCESSIBILITY);
    const dealButton = getByRole('button', { name: textToUpperCase(DEAL) });
    const resetButton = getByRole('button', { name: BUTTON_TEXT.RESET.DEFAULT });

    expect(children).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(dealButton).toBeInTheDocument();
    expect(accessibilityDealButtonSpan).toBeInTheDocument();
    expect(accessibilityDealButtonSpan.className).toBe(SCREEN_READER_CLASS);
    expect(accessibilityResetButtonSpan).toBeInTheDocument();
    expect(accessibilityResetButtonSpan.className).toBe(SCREEN_READER_CLASS);
  });

  it('renders lost game state component when player lost the game', () => {
    const { getByRole, getByText } = render(
      <GameState gameState={GAME_STATE.LOST} handleOnDeal={FUNC_2} handleOnReset={FUNC}>
        {TEXT}
      </GameState>
    );

    const children = getByText(TEXT);
    const topMessageDivText = getByText(LOST_MESSAGE_TOP);
    const topMessageDivSpanText = getByText(LOST_MESSAGE_BOTTOM);
    const playAgainButton = getByRole('button', { name: BUTTON_TEXT.PLAY_AGAIN.DEFAULT });

    expect(children).toBeInTheDocument();
    expect(topMessageDivText).toBeInTheDocument();
    expect(topMessageDivSpanText).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
  });

  it('renders won game state when player wins the game', () => {
    const { getByRole, getByText } = render(
      <GameState gameState={GAME_STATE.WON} handleOnDeal={FUNC_2} handleOnReset={FUNC}>
        {TEXT}
      </GameState>
    );

    const banner = getByText(WINNER_BANNER_TEXT);
    const children = getByText(TEXT);
    const playAgainButton = getByRole('button', { name: BUTTON_TEXT.PLAY_AGAIN.DEFAULT });

    expect(banner).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
  });
});
