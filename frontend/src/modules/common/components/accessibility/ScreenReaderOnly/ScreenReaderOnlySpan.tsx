import React from 'react';
import { ChildType } from 'modules/common/types';

interface ScreenReaderOnlySpanProps {
  id: string;
  children: ChildType;
}

const ScreenReaderOnlySpan = ({ id, children }: ScreenReaderOnlySpanProps) => (
  <span id={id} className="sr-only">
    {children}
  </span>
);

export default ScreenReaderOnlySpan;
