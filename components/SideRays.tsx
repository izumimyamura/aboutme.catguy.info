'use client';
import { useEffect, useRef } from 'react';

export default function SideRays({
  speed = 2.5,
  rayColor1 = '#EAB308',
  rayColor2 = '#96c8ff',
  intensity = 2,
  spread = 2,
  origin = 'top-right',
}: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let renderer: any;
    import('ogl').then(({ Renderer, Program, Triangle, Mesh }) => {
      if (!containerRef.current) return;
      
      renderer = new Renderer({ dpr: 2, alpha: true });
      const gl = renderer.gl;
      gl.canvas.style.position = 'absolute';
      gl.canvas.style.top = '0';
      gl.canvas.style.left = '0';
      gl.canvas.style.width = '100%';
      gl.canvas.style.height = '100%';
      
      containerRef.current.appendChild(gl.canvas);

      // WebGL Shaders provided in your snippet
      const vert = `attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`;
      const frag = `
        precision highp float;
        uniform float iTime;
        uniform vec2 iResolution;
        void main() {
          vec2 uv = gl_FragCoord.xy / iResolution.xy;
          float ray = sin(uv.x * 10.0 + iTime) * cos(uv.y * 10.0 + iTime);
          gl_FragColor = vec4(1.0 * ray, 0.8 * ray, 0.2 * ray, ray * 0.15); // Fallback subtle glow
        }`;

      const uniforms = {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] }
      };

      const geometry = new Triangle(gl);
      const program = new Program(gl, { vertex: vert, fragment: frag, uniforms });
      const mesh = new Mesh(gl, { geometry, program });

      const updateSize = () => {
        if (!containerRef.current || !renderer) return;
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
    });
  }, []);

  return <div ref={containerRef} className="w-full h-full absolute top-0 left-0 z-0 pointer-events-none" />;
}
