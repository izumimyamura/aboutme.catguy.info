'use client';
import { useRef } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children }: any) => (
  <div className="scroll-stack-card">{children}</div>
);

export default function ScrollStack({ children }: any) {
  return (
    <div className="scroll-stack-container">
      <div className="scroll-stack-inner">{children}</div>
    </div>
  );
}
