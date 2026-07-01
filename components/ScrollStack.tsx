'use client';
import './ScrollStack.css';

export const ScrollStackItem = ({ children }: { children: React.ReactNode }) => (
  <div className="scroll-stack-card sticky top-32 overflow-hidden shadow-2xl">
    {children}
  </div>
);

export default function ScrollStack({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-stack-container max-w-5xl mx-auto px-8 pb-32">
      {children}
    </div>
  );
}
