'use client';
import { useEffect, useRef } from 'react';
import './SideRays.css';

export default function SideRays() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: any;
    
    // Safely load OGL only in the browser to prevent Vercel crashes
    import('ogl').then(({ Renderer }) => {
      if (!containerRef.current) return;
      
      renderer = new Renderer({ dpr: 2, alpha: true });
      renderer.gl.canvas.style.position = 'absolute';
      renderer.gl.canvas.style.top = '0';
      renderer.gl.canvas.style.left = '0';
      renderer.gl.canvas.style.width = '100%';
      renderer.gl.canvas.style.height = '100%';
      
      containerRef.current.appendChild(renderer.gl.canvas);

      const resize = () => {
        if (!containerRef.current || !renderer) return;
        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      };
      window.addEventListener('resize', resize, false);
      resize();
    });

    return () => {
      if (renderer && renderer.gl.canvas.parentNode) {
        renderer.gl.canvas.parentNode.removeChild(renderer.gl.canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="side-rays-container" />;
}
