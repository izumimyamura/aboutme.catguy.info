'use client';
import './ScrollStack.css';

export const ScrollStackItem = ({ children }: { children: React.ReactNode }) => (
  <div className="scroll-stack-card">{children}</div>
);

export default function ScrollStack() {
  return (
    <div className="scroll-stack-container">
      <ScrollStackItem><h3>Cinematic Chase</h3></ScrollStackItem>
      <ScrollStackItem><h3>Viral Retention</h3></ScrollStackItem>
      <ScrollStackItem><h3>Cyberpunk Promo</h3></ScrollStackItem>
    </div>
  );
}
