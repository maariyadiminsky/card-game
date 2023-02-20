import { SUIT_TYPE } from 'modules/cards/const';
import Clover from 'modules/cards/images/Clover';
import Diamond from 'modules/cards/images/Diamond';
import Heart from 'modules/cards/images/Heart';
import Spade from 'modules/cards/images/Spade';
import { CardSuitType, CardColorType } from 'modules/common/types';

interface SuitImageProps {
  suit: CardSuitType;
  color: CardColorType;
}

const SuitImage = ({ suit, color }: SuitImageProps) => {
  const className = `mx-auto text-${color}-500 fill-current`;

  switch (suit) {
    case SUIT_TYPE.CLOVER:
      return <Clover className={className} />;
    case SUIT_TYPE.DIAMOND:
      return <Diamond className={className} />;
    case SUIT_TYPE.HEART:
      return <Heart className={className} />;
    case SUIT_TYPE.SPADE:
      return <Spade className={className} />;
    default:
      return null;
  }
};

export default SuitImage;
