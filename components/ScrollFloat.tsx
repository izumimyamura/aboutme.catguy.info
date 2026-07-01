'use client';
import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFloat({ children, animationDuration = 1, ease = 'back.out(1.7)', scrollStart = 'center bottom', scrollEnd = 'bottom bottom', stagger = 0.03 }: any) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const text = typeof children === 'string' ? children : '';
  
  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll('.char');
    gsap.fromTo(chars, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger, scrollTrigger: { trigger: containerRef.current, start: scrollStart, end: scrollEnd, scrub: true } });
  }, []);

  return (
    <h2 ref={containerRef} className="scroll-float">
      {text.split('').map((char, i) => <span key={i} className="char">{char}</span>)}
    </h2>
  );
}
