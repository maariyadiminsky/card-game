import React from 'react';

interface CloverProps {
  className?: string;
}

export const TEXT = 'clover';
const Clover = (props: CloverProps) => (
  <svg role="img" aria-labelledby={TEXT} viewBox="0 0 100 100" {...props}>
    <title id={TEXT}>{TEXT}</title>
    <path d="M45 0c12.426 0 22.5 9.543 22.5 21.316 0 2.968-.64 5.794-1.797 8.361a22.311 22.311 0 0 1 1.797-.072c12.426 0 22.5 10.074 22.5 22.5 0 12.427-10.074 22.5-22.5 22.5-9.342 0-17.354-5.693-20.756-13.8v-.27c0 7.84.603 17.662 1.809 29.465h-7.106c1.11-13.3 1.68-22.956 1.71-28.966-3.455 7.985-11.403 13.571-20.657 13.571-12.426 0-22.5-10.073-22.5-22.5 0-12.426 10.074-22.5 22.5-22.5.605 0 1.204.024 1.797.071a20.273 20.273 0 0 1-1.797-8.36C22.5 9.543 32.574 0 45 0Z" />
  </svg>
);

export default Clover;
