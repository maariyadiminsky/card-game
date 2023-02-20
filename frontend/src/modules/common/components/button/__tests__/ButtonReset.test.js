import userEvent from '@testing-library/user-event';
import { getClassName as buttonActionRoundedClassName } from 'modules/common/components/button/ButtonActionRounded';
import ButtonReset, { getClassName } from 'modules/common/components/button/ButtonReset';
import { TEXT } from 'modules/common/components/button/const';
import { render, waitFor } from 'modules/test';
import { SCREEN_READER_CLASS, CLASS, FUNC } from 'modules/test/const';

describe('<ButtonReset />', () => {
  it('renders component', () => {
    const { getByRole, getByText } = render(<ButtonReset onClick={FUNC} className={CLASS} />);
    const button = getByRole('button');
    const screenReaderSpan = getByText(TEXT.RESET.ACCESSIBILITY);

    expect(button).toBeInTheDocument();
    expect(button.className).toBe(buttonActionRoundedClassName(getClassName(CLASS)));
    expect(button.textContent).toBe(TEXT.RESET.DEFAULT);
    expect(screenReaderSpan).toBeInTheDocument();
    expect(screenReaderSpan.className).toBe(SCREEN_READER_CLASS);
  });

  it('renders correct inner and accessibility text if it is a Play Again button', () => {
    const { getByRole, getByText } = render(
      <ButtonReset onClick={FUNC} className={CLASS} isPlayAgain />
    );

    const button2 = getByRole('button');
    const screenReaderSpan2 = getByText(TEXT.PLAY_AGAIN.ACCESSIBILITY);

    expect(button2).toBeInTheDocument();
    expect(button2.textContent).toBe(TEXT.PLAY_AGAIN.DEFAULT);
    expect(screenReaderSpan2).toBeInTheDocument();
  });

  it('handles callback when clicked', async () => {
    const { getByRole } = render(<ButtonReset onClick={FUNC} className={CLASS} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();

    expect(FUNC).toHaveBeenCalledTimes(0);

    await waitFor(() => userEvent.click(button));

    expect(FUNC).toHaveBeenCalledTimes(1);
  });
});
