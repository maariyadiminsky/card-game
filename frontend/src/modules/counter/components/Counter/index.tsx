import React from 'react';

interface CounterProps {
  amount: number;
  text: string;
  id: string;
}

const Counter = ({ amount, text, id }: CounterProps) => (
  <div
    id={id}
    aria-labelledby="counter-amount counter-text"
    className="flex flex-col m-auto justify-center align-middle w-full h-28 text-center bg-black border border-yellow-300"
  >
    <div id="counter-amount" className="text-white text-3xl font-courier-prime-bold">
      {amount}
    </div>
    <div id="counter-text" className="text-white text-lg md:text-sm font-courier-prime px-1">
      {text}
    </div>
  </div>
);

export default Counter;
