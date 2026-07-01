'use client';
import './ScrollFloat.css';

export default function ScrollFloat({ children }: { children: React.ReactNode }) {
  return (
    <div className="scroll-float-container">
      <h2 className="text-4xl font-bold mb-10 text-center">{children}</h2>
    </div>
  );
}
