'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Safely load 3D/Animation components for client-side only
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      
      {/* Apple-Style Glass Navigation */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-black/40 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="text-xl font-bold tracking-widest text-white">THE CAT GUY</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <Link href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank" className="text-yellow-500 hover:text-yellow-400 transition">
            Portfolio ↗
          </Link>
        </div>
        <a href="mailto:kavin123kavinl123@gmail.com" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
          Hire Me
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" className="relative w-full h-screen flex flex-col items-center justify-center">
        
        {/* FIX: SideRays Wrapper given strict dimensions to force WebGL rendering */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" style={{ minHeight: '100vh', minWidth: '100vw' }}>
          <SideRays 
            speed={2.8} 
            rayColor1="#EAB308" 
            rayColor2="#96c8ff" 
            intensity={2.2} 
            spread={1} 
            origin="top-right" 
          />
        </div>
        
        {/* Z-index 10 ensures the BlurText stays above the SideRays canvas */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <BlurText 
            text="THE CAT GUY" 
            delay={100} 
            className="text-7xl md:text-9xl font-black tracking-tighter drop-shadow-lg" 
          />
          <BlurText 
            text="Cinematic Video Editor" 
            delay={150} 
            className="text-xl md:text-3xl text-gray-400 mt-4 tracking-widest uppercase drop-shadow-md" 
          />
        </div>
      </section>

    </main>
  );
}
