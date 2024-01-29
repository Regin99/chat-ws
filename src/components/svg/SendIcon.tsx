import * as React from 'react';

export const SendIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      viewBox='0 0 24 24'
      height='1.5em'
      width='1.5em'
      {...props}
    >
      <path d='M22 2l-7 20-4-9-9-4zM22 2L11 13' />
    </svg>
  );
};
