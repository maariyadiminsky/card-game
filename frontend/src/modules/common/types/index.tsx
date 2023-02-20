import { FC, ReactNode, MouseEventHandler } from 'react';

// general types
type LiteralUnion<T extends U, U = string> = T | (U & Record<never, never>);
export type ButtonType = 'button' | 'submit' | 'reset';
export type MouseEventType = MouseEventHandler;
export type ChildType = FC | ReactNode | null;
export type FunctionType = FC;

// accessibility types
export type ButtonAccessibilityOptionType = {
  id: string;
  children: ChildType;
};

export type CardAccessibilityOptionType = {
  cardType: CardSymbolType;
  suitType: CardSuitType;
};

// game state types
export type GameStateType = LiteralUnion<'won' | 'lost' | 'playing'>;

// card types
export type CardSuitType = LiteralUnion<'clover' | 'diamond' | 'spade' | 'heart'>;
export type CardColorType = LiteralUnion<'red' | 'black'>;
export type CardsType = Array<CardType> | null;
export type CardType = {
  suit: CardSuitType;
  card: string;
  color: CardColorType;
};
export type CardSymbolType = LiteralUnion<
  'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
>;
export type SuitsDataType = Array<SuitDataType>;
type SuitDataType = {
  suit: CardSuitType;
  data: Array<CardSymbolType>;
  color: CardColorType;
};

// function types expanded
export type FunctionBooleanType = (param: boolean) => void;
export type FunctionNumberType = (param: number) => void;
export type FunctionCardDataType = (param: CardsType) => void;
export type FunctionSuitsDataType = (param: SuitsDataType) => void;
export type FunctionNoParamType = () => void;
