import userEvent from '@testing-library/user-event';
import ButtonActionRounded, {
  getClassName,
} from 'modules/common/components/button/ButtonActionRounded';
import { render, waitFor } from 'modules/test';
import {
  TEXT,
  SCREEN_READER_CLASS,
  CLASS,
  BUTTON_ACCESSIBILITY_OPTIONS,
  FUNC,
} from 'modules/test/const';

describe('<ButtonActionRounded />', () => {
  it('renders component', () => {
    const { getByRole, getByText } = render(
      <ButtonActionRounded
        onClick={FUNC}
        className={CLASS}
        type="button"
        accessibilityOptions={BUTTON_ACCESSIBILITY_OPTIONS}
      >
        {TEXT}
      </ButtonActionRounded>
    );
    const button = getByRole('button');
    const screenReaderSpan = getByText(BUTTON_ACCESSIBILITY_OPTIONS.children);

    expect(button).toBeInTheDocument();
    expect(button.className).toBe(getClassName(CLASS));
    expect(button.textContent).toBe(TEXT);
    expect(screenReaderSpan).toBeInTheDocument();
    expect(screenReaderSpan.className).toBe(SCREEN_READER_CLASS);
  });

  it('handles callback when clicked', async () => {
    const { getByRole } = render(
      <ButtonActionRounded
        onClick={FUNC}
        className={CLASS}
        type="button"
        accessibilityOptions={BUTTON_ACCESSIBILITY_OPTIONS}
      >
        {TEXT}
      </ButtonActionRounded>
    );

    const button = getByRole('button');

    expect(button).toBeInTheDocument();

    await waitFor(() => userEvent.click(button));

    expect(FUNC).toHaveBeenCalledTimes(1);
  });
});
