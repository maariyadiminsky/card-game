import Banner, { TEXT as WINNER_BANNER_TEXT } from 'modules/gameState/images/Banner';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Banner />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Banner className={CLASS} />);

    const banner = getByText(WINNER_BANNER_TEXT);

    expect(banner).toBeInTheDocument();
  });
});
