import React from 'react';

interface DiamondProps {
  className?: string;
}

export const TEXT = 'diamond';
const Diamond = (props: DiamondProps) => (
  <svg role="img" aria-labelledby={TEXT} viewBox="0 0 100 100" {...props}>
    <title id={TEXT}>{TEXT}</title>
    <path d="M50.864 99.49C41.957 85.69 34.669 76.05 29 70.577 23.33 65.102 13.834 58.53.51 50.864 13.694 41.932 23.191 34.458 29 28.442 34.809 22.427 41.521 13.116 49.136.51c9.357 12.656 17.124 21.967 23.302 27.932 6.177 5.966 15.194 12.864 27.052 20.694-11.492 7.518-20.51 14.665-27.052 21.44-6.543 6.776-13.735 16.414-21.574 28.914Z" />
  </svg>
);

export default Diamond;
