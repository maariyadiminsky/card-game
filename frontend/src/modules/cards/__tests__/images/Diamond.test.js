import Diamond, { TEXT as IMAGE_TEXT } from 'modules/cards/images/Diamond';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Diamond />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Diamond className={CLASS} />);

    const suitImage = getByText(IMAGE_TEXT);

    expect(suitImage).toBeInTheDocument();
  });
});
