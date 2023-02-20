import { NUMBERS } from 'modules/common/const';
import Counter from 'modules/counter/components/Counter';
import { render } from 'modules/test';
import { TEXT } from 'modules/test/const';

describe('<Counter />', () => {
  it('renders component', () => {
    const { getByText, queryByText } = render(<Counter amount={NUMBERS.THREE} text={TEXT} />);

    const amountDiv = getByText(NUMBERS.THREE);
    const textDiv = getByText(TEXT);
    const nonExistentTextDiv = queryByText('random');

    expect(amountDiv).toBeInTheDocument();
    expect(textDiv).toBeInTheDocument();
    expect(nonExistentTextDiv).not.toBeInTheDocument();
  });
});
