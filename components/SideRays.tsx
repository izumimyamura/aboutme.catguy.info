'use client';
import { useEffect, useRef } from 'react';
import './SideRays.css';

export default function SideRays() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import OGL only when the component mounts in the browser
    import('ogl').then((ogl) => {
      const { Renderer } = ogl;
      const renderer = new Renderer({ dpr: 2, alpha: true });
      // ... your logic ...
      containerRef.current?.appendChild(renderer.gl.canvas);
    });
  }, []);

  return <div ref={containerRef} />;
}
