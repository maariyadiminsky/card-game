import React, { FC, useState, useCallback } from 'react';
import AppUI from 'modules/app/components/AppUI';
import {
  AMOUNT_CARDS_DEALT_EACH_ROUND,
  MAX_CARD_TYPE_FOR_EACH_SUIT,
  MAX_CARDS,
} from 'modules/cards/const';
import { getSuitsData } from 'modules/cards/utils';
import { NUMBERS } from 'modules/common/const';
import { CardsType } from 'modules/common/types';
import { getAmountOrZero } from 'modules/common/utils/misc';
import { GAME_STATE } from 'modules/gameState/const';
import { useGameState } from 'modules/gameState/hooks/useGameState';

export const INITIAL_DRAW_CARDS_LEFT = MAX_CARDS - AMOUNT_CARDS_DEALT_EACH_ROUND;
const App: FC = () => {
  const { gameState, setIsPlaying, setHasWon, setHasLost } = useGameState();

  const [shouldDeal, setShouldDeal] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);

  const [cardsLeft, setCardsLeft] = useState(INITIAL_DRAW_CARDS_LEFT);
  const [cardSuitsData, setCardSuitsData] = useState(() => getSuitsData());
  const [cardsToShow, setCardsToShow] = useState<CardsType>(null);
  const [acesLeft, setAcesLeft] = useState(MAX_CARD_TYPE_FOR_EACH_SUIT);

  const handleOnDeal = useCallback(() => {
    if (gameState === GAME_STATE.LOST || gameState === GAME_STATE.WON) return;

    setShouldDeal(true);
    setCardsLeft((cards) => getAmountOrZero(cards - AMOUNT_CARDS_DEALT_EACH_ROUND));
  }, [gameState]);

  const handleOnReset = () => {
    setCardSuitsData([...getSuitsData()]);
    setCardsLeft(INITIAL_DRAW_CARDS_LEFT);
    setAcesLeft(MAX_CARD_TYPE_FOR_EACH_SUIT);
    setShouldReset(true);
    setIsPlaying();
  };

  return (
    <AppUI
      gameState={gameState}
      handleOnDeal={handleOnDeal}
      handleOnReset={handleOnReset}
      cardsLeft={cardsLeft}
      shouldReset={shouldReset}
      setShouldReset={setShouldReset}
      shouldDeal={shouldDeal}
      setShouldDeal={setShouldDeal}
      isLastRound={cardsLeft === NUMBERS.ZERO}
      acesLeft={acesLeft}
      setAcesLeft={setAcesLeft}
      setHasWon={setHasWon}
      setHasLost={setHasLost}
      cardSuitsData={cardSuitsData}
      cardsToShow={cardsToShow}
      setCardSuitsData={setCardSuitsData}
      setCardsToShow={setCardsToShow}
    />
  );
};

export default App;
