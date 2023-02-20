import Clover, { TEXT as IMAGE_TEXT } from 'modules/cards/images/Clover';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Clover />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Clover className={CLASS} />);

    const suitImage = getByText(IMAGE_TEXT);

    expect(suitImage).toBeInTheDocument();
  });
});
