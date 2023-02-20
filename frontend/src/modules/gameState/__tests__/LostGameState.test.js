import userEvent from '@testing-library/user-event';
import { TEXT as BUTTON_TEXT } from 'modules/common/components/button/const';
import LostGameState from 'modules/gameState/components/LostGameState';
import { LOST_MESSAGE_TOP, LOST_MESSAGE_BOTTOM } from 'modules/gameState/const';
import { render, waitFor } from 'modules/test';
import { FUNC, TEXT } from 'modules/test/const';

describe('<LostGameState />', () => {
  let component;

  beforeEach(() => {
    component = render(<LostGameState handleOnReset={FUNC}>{TEXT}</LostGameState>);
  });

  it('renders the component', () => {
    const { getByRole, getByText } = component;

    const children = getByText(TEXT);
    const topMessageDivText = getByText(LOST_MESSAGE_TOP);
    const topMessageDivSpanText = getByText(LOST_MESSAGE_BOTTOM);
    const playAgainButton = getByRole('button', { name: BUTTON_TEXT.PLAY_AGAIN.DEFAULT });

    expect(children).toBeInTheDocument();
    expect(topMessageDivText).toBeInTheDocument();
    expect(topMessageDivSpanText).toBeInTheDocument();
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
