'use client';
import dynamic from 'next/dynamic';

const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const ScrollFloat = dynamic(() => import('../components/ScrollFloat'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });
const ScrollStack = dynamic(() => import('../components/ScrollStack'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 z-50 flex w-full justify-between p-6 px-10">
        <h1 className="text-xl font-bold">THE CAT GUY</h1>
      </nav>

      <section id="hero" className="flex h-screen flex-col items-center justify-center">
        <SideRays />
        <BlurText text="THE CAT GUY" className="text-8xl font-black" />
      </section>

      <section className="px-10 py-20">
        <ScrollFloat>Selected Work</ScrollFloat>
        <ScrollStack />
      </section>
    </main>
  );
}
