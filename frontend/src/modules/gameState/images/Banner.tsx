import React from 'react';

interface BannerProps {
  className?: string;
}

export const TEXT = 'winner banner';
const Banner = (props: BannerProps) => (
  <svg role="img" aria-labelledby="winner-banner" viewBox="0 0 1028 160" {...props}>
    <title id="winner-banner">{TEXT}</title>
    <g fill="none">
      <path fill="#ED973E" d="M0 31h207v129H0l58.531-64.5z" />
      <path fill="#A15A0D" d="M127 31h80v129l-80-28.5z" />
      <path fill="#ED973E" d="M1028 160H821V31h207l-58.531 64.5z" />
      <path fill="#A15A0D" d="M901 31h-80v129l80-28.5z" />
      <path stroke="#979797" strokeWidth={0.5} fill="#ED973E" d="M120 0h789v129H120z" />
      <path
        d="m347.676 45.02 8.578 25.417 8.121-25.417h-4.887v-9h19.09v9h-4.887l8.684 25.417 8.367-25.417h-5.344v-9h21.27v9h-5.766L386.207 89.28h-9.809l-8.332-24.187-7.91 24.187h-10.16L334.88 45.02h-5.625v-9h23.906v9h-5.484Zm81.808 0V80h8.157v9h-29.954v-9h7.981V45.02h-7.98v-9h29.953v9h-8.157Zm52.91 0h-6.82v-9h23.66v9h-7.382v44.332h-11.743l-22.921-39.305V80h6.644v9h-23.203v-9h7.137V45.02h-7.137v-9h22.254l19.512 33.117V45.02Zm61.77 0h-6.82v-9h23.66v9h-7.383v44.332H541.88l-22.922-39.305V80h6.645v9h-23.204v-9h7.137V45.02h-7.137v-9h22.254l19.512 33.117V45.02Zm57.094 7.77v-7.77H584.84v12.164h13.254v8.93H584.84V80h16.418v-7.84h10.16V89h-46.723v-9h6.399V45.02h-6.399v-9h46.723v16.77h-10.16Zm63.668-2.321c0 3.234-.756 5.953-2.268 8.156-1.512 2.203-3.803 3.996-6.873 5.379L664.328 80h6.856v9h-16.137l-11.953-23.168h-6.047V80h6.644v9h-27.738v-9h7.277V45.02h-7.277v-9h30.235c5.859 0 10.447 1.236 13.763 3.709 3.317 2.472 4.975 6.052 4.975 10.74Zm-14.414.597c0-2.015-.645-3.527-1.934-4.535s-3.047-1.511-5.273-1.511h-6.258v12.304h5.062c5.602 0 8.403-2.086 8.403-6.258Zm37.02 19.442h-5.485l-3.305-19.969V36.02h11.813v14.52l-3.024 19.969ZM678.46 89V76.168h12.797V89H678.46Z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default Banner;
