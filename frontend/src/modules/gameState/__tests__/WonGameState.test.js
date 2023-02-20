import userEvent from '@testing-library/user-event';
import { TEXT as BUTTON_TEXT } from 'modules/common/components/button/const';
import WonGameState from 'modules/gameState/components/WonGameState';
import { TEXT as WINNER_BANNER_TEXT } from 'modules/gameState/images/Banner';
import { render, waitFor } from 'modules/test';
import { FUNC, TEXT } from 'modules/test/const';

describe('<WonGameState />', () => {
  let component;

  beforeEach(() => {
    component = render(<WonGameState handleOnReset={FUNC}>{TEXT}</WonGameState>);
  });

  it('renders the component', () => {
    const { getByRole, getByText } = component;

    const banner = getByText(WINNER_BANNER_TEXT);
    const children = getByText(TEXT);
    const playAgainButton = getByRole('button', { name: BUTTON_TEXT.PLAY_AGAIN.DEFAULT });

    expect(banner).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(playAgainButton).toBeInTheDocument();
  });

  it('handles callback when clicked', async () => {
    const { getByRole } = component;

    const playAgainButton = getByRole('button', { name: BUTTON_TEXT.PLAY_AGAIN.DEFAULT });

    expect(playAgainButton).toBeInTheDocument();

    expect(FUNC).toHaveBeenCalledTimes(0);

    await waitFor(() => userEvent.click(playAgainButton));

    expect(FUNC).toHaveBeenCalledTimes(1);
  });
});
