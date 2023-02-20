import userEvent from '@testing-library/user-event';
import { TEXT as BUTTON_TEXT } from 'modules/common/components/button/const';
import { textToUpperCase } from 'modules/common/utils/misc';
import PlayingGameState from 'modules/gameState/components/PlayingGameState';
import { DEAL, PLAYING_GAME_STATE_ACCESSIBILITY_TEXT } from 'modules/gameState/const';
import { render, waitFor } from 'modules/test';
import { FUNC, FUNC_2, TEXT, SCREEN_READER_CLASS } from 'modules/test/const';

describe('<PlayingGameState />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <PlayingGameState handleOnDeal={FUNC_2} handleOnReset={FUNC}>
        {TEXT}
      </PlayingGameState>
    );
  });

  it('renders the component', () => {
    const { getByRole, getByText } = component;

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

  it('handles resetButton callback when clicked', async () => {
    const { getByRole } = component;

    const resetButton = getByRole('button', { name: BUTTON_TEXT.RESET.DEFAULT });

    expect(resetButton).toBeInTheDocument();

    expect(FUNC).toHaveBeenCalledTimes(0);

    await waitFor(() => userEvent.click(resetButton));

    expect(FUNC).toHaveBeenCalledTimes(1);
  });

  it('handles dealButton callback when clicked', async () => {
    const { getByRole } = component;

    const dealButton = getByRole('button', { name: textToUpperCase(DEAL) });

    expect(dealButton).toBeInTheDocument();

    expect(FUNC_2).toHaveBeenCalledTimes(0);

    await waitFor(() => userEvent.click(dealButton));

    expect(FUNC_2).toHaveBeenCalledTimes(1);
  });
});
