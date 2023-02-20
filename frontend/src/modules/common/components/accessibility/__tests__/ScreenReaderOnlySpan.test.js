import ScreenReaderOnlySpan from 'modules/common/components/accessibility/ScreenReaderOnly/ScreenReaderOnlySpan';
import { render } from 'modules/test';
import { TEXT, SCREEN_READER_CLASS } from 'modules/test/const';

describe('<ScreenReaderOnlySpan />', () => {
  it('renders component', () => {
    const { getByText } = render(<ScreenReaderOnlySpan id="some-id">{TEXT}</ScreenReaderOnlySpan>);

    const component = getByText(TEXT);

    expect(component).toBeInTheDocument();
    expect(component.textContent).toBe(TEXT);
    expect(component.className).toBe(SCREEN_READER_CLASS);
  });
});
