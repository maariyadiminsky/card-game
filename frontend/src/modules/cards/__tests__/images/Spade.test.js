import Spade, { TEXT as IMAGE_TEXT } from 'modules/cards/images/Spade';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Spade />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Spade className={CLASS} />);

    const suitImage = getByText(IMAGE_TEXT);

    expect(suitImage).toBeInTheDocument();
  });
});
