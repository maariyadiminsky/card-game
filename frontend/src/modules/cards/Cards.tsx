import React, { useCallback } from 'react';
import CardsUI from 'modules/cards/components/CardsUI';
import { LAST_DRAW_CARDS_LEFT_AMOUNT, AMOUNT_CARDS_DEALT_EACH_ROUND } from 'modules/cards/const';
import { getRandomCardsWithUpdatedData } from 'modules/cards/utils';
import { NUMBERS } from 'modules/common/const';
import { useCallFuncIfCheckPassed } from 'modules/common/hooks/useCallFuncIfCheckPassed';
import {
  SuitsDataType,
  CardsType,
  FunctionBooleanType,
  FunctionNumberType,
  FunctionCardDataType,
  FunctionSuitsDataType,
  FunctionNoParamType,
} from 'modules/common/types';
import { getAmountOrZero } from 'modules/common/utils/misc';

interface CardsProps {
  acesLeft: number;
  isLastRound: boolean;
  shouldReset: boolean;
  shouldDeal: boolean;
  cardSuitsData: SuitsDataType;
  cardsToShow: CardsType;
  setHasWon: FunctionNoParamType;
  setHasLost: FunctionNoParamType;
  setShouldReset: FunctionBooleanType;
  setShouldDeal: FunctionBooleanType;
  setAcesLeft: FunctionNumberType;
  setCardSuitsData: FunctionSuitsDataType;
  setCardsToShow: FunctionCardDataType;
}

const Cards = ({
  isLastRound,
  shouldDeal = false,
  shouldReset = false,
  acesLeft,
  cardSuitsData,
  cardsToShow,
  setShouldDeal,
  setShouldReset,
  setAcesLeft,
  setHasWon,
  setHasLost,
  setCardSuitsData,
  setCardsToShow,
}: CardsProps) => {
  const handleGameState = (aces: number) => {
    const hasAnAce = aces > NUMBERS.ZERO;
    const updatedAceAmount = acesLeft - aces;
    const acesAmountToShow = getAmountOrZero(updatedAceAmount);

    if (hasAnAce) {
      setAcesLeft(acesAmountToShow);
    }

    if (isLastRound && hasAnAce) {
      setHasWon();
    } else if (
      (!isLastRound && hasAnAce && acesAmountToShow === NUMBERS.ZERO) ||
      (isLastRound && !hasAnAce)
    ) {
      setHasLost();
    }
  };

  const handleCardDataUpdate = (cards: CardsType, dataToUpdate: SuitsDataType) => {
    if (cards) setCardsToShow([...cards]);
    setCardSuitsData([...dataToUpdate]);
    if (shouldDeal) setShouldDeal(false);
  };

  const handleReset = () => {
    setCardsToShow(null);
    setShouldReset(false);
  };

  const getRandomCardsAndUpdateData = useCallback(() => {
    const cardsToShowAmount = isLastRound
      ? LAST_DRAW_CARDS_LEFT_AMOUNT
      : AMOUNT_CARDS_DEALT_EACH_ROUND;
    const { cards, dataToUpdate, aces } = getRandomCardsWithUpdatedData(
      cardSuitsData,
      cardsToShowAmount
    );

    handleGameState(aces);
    handleCardDataUpdate(cards, dataToUpdate);
  }, [shouldDeal, cardsToShow]);

  useCallFuncIfCheckPassed(shouldReset, handleReset);
  useCallFuncIfCheckPassed(!cardsToShow || shouldDeal, getRandomCardsAndUpdateData);

  return <CardsUI cards={cardsToShow} isLastRound={isLastRound} />;
};

export default Cards;
