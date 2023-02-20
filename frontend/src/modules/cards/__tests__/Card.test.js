import Card, { getWrapperClassName, getCardColorClassName } from 'modules/cards/components/Card';
import { SUIT_TYPE, CARD_TYPE, COLORS } from 'modules/cards/const';
import { TEXT as HEART_CARD_TEXT } from 'modules/cards/images/Heart';
import { render } from 'modules/test';
import { CLASS } from 'modules/test/const';

describe('<Card />', () => {
  it('renders the component', () => {
    const { getByText, getAllByText } = render(
      <Card
        card={CARD_TYPE.ACE}
        suit={SUIT_TYPE.HEART}
        color={COLORS.RED}
        accessibilityOptions={{ cardType: CARD_TYPE.ACE, suitType: SUIT_TYPE.HEART }}
        className={CLASS}
      />
    );

    const cardDiv = getByText(CARD_TYPE.ACE);
    const wrapperDiv = cardDiv.parentNode.parentNode;
    const suitSVGDivs = getAllByText(HEART_CARD_TEXT);

    expect(cardDiv).toBeInTheDocument();
    expect(cardDiv.className).toBe(getCardColorClassName(COLORS.RED));
    expect(wrapperDiv.className).toBe(getWrapperClassName(CLASS));
    expect(suitSVGDivs.length).toBe(2);
    expect(suitSVGDivs[0]).toBeInTheDocument();
    expect(suitSVGDivs[1]).toBeInTheDocument();
  });
});
