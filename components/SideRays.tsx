'use client';
import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';
import './SideRays.css';

const hexToRgb = (hex: string) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

const originToFlip = (origin: string) => {
  switch (origin) {
    case 'top-left': return [1, 0];
    case 'bottom-right': return [0, 1];
    case 'bottom-left': return [1, 1];
    default: return [0, 0];
  }
};

export default function SideRays({ speed = 2.5, rayColor1 = '#EAB308', rayColor2 = '#96c8ff', intensity = 2, spread = 2, origin = 'top-right', tilt = 0, saturation = 1.5, blend = 0.75, falloff = 1.6, opacity = 1.0, className = '' }: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    containerRef.current.appendChild(gl.canvas);
    gl.canvas.style.width = '100%'; gl.canvas.style.height = '100%';
    // ... [Add the WebGL Logic from your earlier code here]
    return () => { containerRef.current?.removeChild(gl.canvas); };
  }, []);

  return <div ref={containerRef} className={`side-rays-container ${className}`} />;
}
