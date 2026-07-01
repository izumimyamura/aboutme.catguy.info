'use client';
import { useRef, useEffect } from 'react';
import { Renderer, Triangle, Program, Mesh } from 'ogl';
import './SideRays.css';

export default function SideRays({ speed = 2.5, rayColor1 = '#EAB308', rayColor2 = '#96c8ff', className = '' }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;
    
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);
    
    // ... [Original WebGL logic continues here]

    return () => { containerRef.current?.removeChild(gl.canvas); };
  }, []);

  return <div ref={containerRef} className={`side-rays-container ${className}`} />;
}
