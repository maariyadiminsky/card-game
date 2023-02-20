import React from 'react';

interface SpadeProps {
  className?: string;
}

export const TEXT = 'spade';
const Spade = (props: SpadeProps) => (
  <svg role="img" aria-labelledby={TEXT} viewBox="0 0 100 100" {...props}>
    <title id={TEXT}>{TEXT}</title>
    <path d="M48.854 0C63.5 7.907 73.74 14.754 79.58 20.54c9.858 9.77 18.13 21.682 18.13 36.144 0 13.412-5.084 21.602-18.13 23.188-8.348 1.014-18.107-3.983-29.277-14.993-.004.399-.005.802-.005 1.21 0 7.839.602 17.66 1.808 29.464H45c1.141-13.674 1.712-23.496 1.712-29.465l-.001-.157c-9.451 10.276-18.418 14.922-26.9 13.94C6.11 78.287 0 70.512 0 56.685c0-14.649 9.656-26.31 19.81-36.144C25.662 14.874 35.343 8.027 48.854 0Z" />
  </svg>
);

export default Spade;
