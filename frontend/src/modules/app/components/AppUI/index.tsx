import React from 'react';
import Cards from 'modules/cards/Cards';
import {
  GameStateType,
  MouseEventType,
  SuitsDataType,
  CardsType,
  FunctionBooleanType,
  FunctionNumberType,
  FunctionCardDataType,
  FunctionSuitsDataType,
  FunctionNoParamType,
} from 'modules/common/types';
import Counters from 'modules/counter/Counters';
import GameState from 'modules/gameState/GameState';

interface AppUIProps {
  gameState: GameStateType;
  cardsLeft: number;
  acesLeft: number;
  isLastRound: boolean;
  shouldReset: boolean;
  shouldDeal: boolean;
  cardSuitsData: SuitsDataType;
  cardsToShow: CardsType;
  setHasWon: FunctionNoParamType;
  setHasLost: FunctionNoParamType;
  handleOnDeal: MouseEventType;
  handleOnReset: MouseEventType;
  setShouldReset: FunctionBooleanType;
  setShouldDeal: FunctionBooleanType;
  setAcesLeft: FunctionNumberType;
  setCardSuitsData: FunctionSuitsDataType;
  setCardsToShow: FunctionCardDataType;
}

const AppUI = ({
  gameState,
  handleOnDeal,
  handleOnReset,
  cardsLeft,
  acesLeft,
  shouldReset,
  setShouldReset,
  shouldDeal,
  setShouldDeal,
  setAcesLeft,
  setHasWon,
  setHasLost,
  cardSuitsData,
  cardsToShow,
  setCardSuitsData,
  setCardsToShow,
  isLastRound,
}: AppUIProps) => (
  <div className="bg-gradient-to-b from-green-600 to-green-900">
    <div role="main" className="min-h-screen h-full flex flex-col w-full md:w-4/6 m-auto">
      <GameState gameState={gameState} handleOnDeal={handleOnDeal} handleOnReset={handleOnReset}>
        <div className="flex-none pt-20">
          <Counters cardsLeft={cardsLeft} acesLeft={acesLeft} />
        </div>
        <div className="flex-none pt-16">
          <Cards
            shouldReset={shouldReset}
            setShouldReset={setShouldReset}
            shouldDeal={shouldDeal}
            setShouldDeal={setShouldDeal}
            isLastRound={isLastRound}
            acesLeft={acesLeft}
            setAcesLeft={setAcesLeft}
            setHasWon={setHasWon}
            setHasLost={setHasLost}
            cardSuitsData={cardSuitsData}
            cardsToShow={cardsToShow}
            setCardSuitsData={setCardSuitsData}
            setCardsToShow={setCardsToShow}
          />
        </div>
      </GameState>
    </div>
  </div>
);

export default AppUI;
