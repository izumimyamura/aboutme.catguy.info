'use client';
import dynamic from 'next/dynamic';

const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const ScrollFloat = dynamic(() => import('../components/ScrollFloat'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });
const ScrollStack = dynamic(() => import('../components/ScrollStack'), { ssr: false });
import { ScrollStackItem } from '../components/ScrollStack';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/50 p-6 px-10 backdrop-blur-md">
        <h1 className="text-xl font-bold text-white">THE CAT GUY</h1>
        <div className="space-x-6 text-white">
          <a href="#hero">Home</a>
          <a href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank">Portfolio</a>
        </div>
      </nav>

      <section id="hero" className="relative flex h-screen flex-col items-center justify-center">
        <SideRays speed={2} rayColor1="#EAB308" rayColor2="#96c8ff" />
        <BlurText text="THE CAT GUY" className="z-10 text-8xl font-black text-white" />
      </section>

      <section className="px-10 py-20">
        <ScrollFloat>Selected Work</ScrollFloat>
        <ScrollStack>
          <ScrollStackItem><h3>Cinematic Chase</h3></ScrollStackItem>
          <ScrollStackItem><h3>Viral Retention</h3></ScrollStackItem>
          <ScrollStackItem><h3>Cyberpunk Promo</h3></ScrollStackItem>
        </ScrollStack>
      </section>
    </main>
  );
}
