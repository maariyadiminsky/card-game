import React from 'react';

interface HeartProps {
  className?: string;
}

export const TEXT = 'heart';
const Heart = (props: HeartProps) => (
  <svg role="img" aria-labelledby={TEXT} viewBox="0 0 100 100" {...props}>
    <title id={TEXT}>{TEXT}</title>
    <path d="M48.854 80c13.512-8.027 23.193-14.874 29.044-20.54 10.155-9.834 19.81-21.495 19.81-36.144 0-13.826-6.11-21.602-19.81-23.188C68.765-.929 59.07 4.54 48.815 16.533 37.055 4.539 26.827-.93 18.13.128 5.084 1.714 0 9.904 0 23.316 0 37.778 8.271 49.691 18.13 59.46 23.969 65.246 34.21 72.093 48.854 80Z" />
  </svg>
);

export default Heart;
