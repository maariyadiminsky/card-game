import Heart, { TEXT as IMAGE_TEXT } from 'modules/cards/images/Heart';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Heart />', () => {
  it('renders the component', () => {
    const { getByText } = render(<Heart className={CLASS} />);

    const suitImage = getByText(IMAGE_TEXT);

    expect(suitImage).toBeInTheDocument();
  });
});
