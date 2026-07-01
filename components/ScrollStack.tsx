'use client';
import './ScrollStack.css';

export const ScrollStackItem = ({ children }: { children: React.ReactNode }) => (
  <div className="scroll-stack-card">{children}</div>
);

export default function ScrollStack({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-stack-container">
      {children}
    </div>
  );
}
