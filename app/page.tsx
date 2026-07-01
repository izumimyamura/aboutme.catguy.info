'use client';
import SideRays from '../components/SideRays';
import ScrollFloat from '../components/ScrollFloat';
import BlurText from '../components/BlurText';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10 p-6 flex justify-between items-center px-10">
        <h1 className="font-bold text-xl">THE CAT GUY</h1>
        <div className="space-x-6">
          <a href="#hero">Home</a>
          <a href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank">Portfolio</a>
        </div>
      </nav>

      <section id="hero" className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        <SideRays speed={2} rayColor1="#EAB308" rayColor2="#96c8ff" />
        <BlurText text="THE CAT GUY" className="text-8xl font-black z-10" />
      </section>

      <section className="py-20 px-10">
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
