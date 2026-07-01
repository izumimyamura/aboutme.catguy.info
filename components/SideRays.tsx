'use client';
import { useRef, useEffect, useState } from 'react';
import { Renderer, Program, Triangle, Mesh } from 'ogl';
import './SideRays.css';

const hexToRgb = (hex: string) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

export default function SideRays({
  speed = 2.5,
  rayColor1 = '#EAB308',
  rayColor2 = '#96c8ff',
  intensity = 2,
  spread = 2,
  origin = 'top-right',
  tilt = 0,
  saturation = 1.5,
  blend = 0.75,
  falloff = 1.6,
  opacity = 1.0,
  className = ''
}: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const renderer = new Renderer({ dpr: 2, alpha: true });
    const gl = renderer.gl;
    gl.canvas.style.width = '100%';
    gl.canvas.style.height = '100%';
    gl.canvas.style.position = 'absolute';
    
    containerRef.current.appendChild(gl.canvas);

    const vert = `attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`;
    const frag = `precision highp float;
      uniform float iTime;
      uniform vec2 iResolution;
      uniform vec3 iRayColor1;
      uniform float iOpacity;
      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution.xy;
        float ray = sin(uv.x * 10.0 + iTime) * cos(uv.y * 10.0 + iTime);
        gl_FragColor = vec4(iRayColor1 * ray, ray * 0.15 * iOpacity);
      }`;

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      iRayColor1: { value: hexToRgb(rayColor1) },
      iOpacity: { value: opacity }
    };

    const geometry = new Triangle(gl);
    const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
    const mesh = new Mesh(gl, { geometry, program });

    const updateSize = () => {
      if (!containerRef.current) return;
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      uniforms.iResolution.value = [containerRef.current.clientWidth, containerRef.current.clientHeight];
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    let animationId: number;
    const loop = (t: number) => {
      uniforms.iTime.value = t * 0.001;
      renderer.render({ scene: mesh });
      animationId = requestAnimationFrame(loop);
    };
    animationId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateSize);
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas);
    };
  }, [isMounted, rayColor1, opacity]);

  if (!isMounted) return null;

  return <div ref={containerRef} className={`absolute inset-0 w-full h-full z-0 pointer-events-none ${className}`} style={{ minHeight: '100vh' }} />;
}
