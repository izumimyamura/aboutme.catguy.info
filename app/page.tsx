'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ScrollStackItem } from '../components/ScrollStack';

// Safely load 3D/Animation components for client-side only
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const ScrollFloat = dynamic(() => import('../components/ScrollFloat'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });
const ScrollStack = dynamic(() => import('../components/ScrollStack'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      
      {/* Apple-Style Navigation */}
      <nav className="apple-nav fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4">
        <div className="text-xl font-bold tracking-widest text-white">THE CAT GUY</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#hero" className="hover:text-white transition">Home</a>
          <a href="#showreel" className="hover:text-white transition">Showreel</a>
          <a href="#portfolio" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <Link href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank" className="text-yellow-500 hover:text-yellow-400 transition">
            Portfolio ↗
          </Link>
        </div>
        <a href="#contact" className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition">
          Hire Me
        </a>
      </nav>

      {/* HERO SECTION with SideRays & BlurText */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-80">
          <SideRays 
            speed={2.8} 
            rayColor1="#EAB308" 
            rayColor2="#96c8ff" 
            intensity={2.2} 
            spread={1} 
            origin="top-right" 
          />
        </div>
        <div className="z-10 flex flex-col items-center text-center">
          <BlurText 
            text="THE CAT GUY" 
            delay={100} 
            className="text-7xl md:text-9xl font-black tracking-tighter" 
          />
          <BlurText 
            text="Cinematic Video Editor" 
            delay={150} 
            className="text-xl md:text-3xl text-gray-400 mt-4 tracking-widest uppercase" 
          />
        </div>
      </section>

      {/* PORTFOLIO SECTION with ScrollStack */}
      <section id="portfolio" className="py-32 relative bg-neutral-950 z-10">
        <div className="text-center mb-20">
          <ScrollFloat animationDuration={1.2} ease="back.out(1.5)">
            Selected Work
          </ScrollFloat>
          <p className="text-gray-400 mt-4 text-lg">Proven retention edits built across multiple niches.</p>
        </div>

        <ScrollStack>
          <ScrollStackItem>
            <div className="w-full h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black to-transparent rounded-[40px] border border-white/10"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605335529061-68beaf5c92c8?q=80&w=1000)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="text-yellow-500 font-bold text-sm uppercase mb-2 tracking-wider">Cinematic</span>
              <h3 className="text-4xl font-bold text-white mb-2">The Midnight Chase</h3>
              <p className="text-gray-300">High-energy color grading and heavy velocity framing shifts.</p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black to-transparent rounded-[40px] border border-white/10"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="text-blue-400 font-bold text-sm uppercase mb-2 tracking-wider">Short-Form</span>
              <h3 className="text-4xl font-bold text-white mb-2">Viral Retention Reel</h3>
              <p className="text-gray-300">Micro-cut editing style keeping average watch time above 85%.</p>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div className="w-full h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black to-transparent rounded-[40px] border border-white/10"
                 style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <span className="text-purple-500 font-bold text-sm uppercase mb-2 tracking-wider">Commercial</span>
              <h3 className="text-4xl font-bold text-white mb-2">Cyberpunk Apparel Promo</h3>
              <p className="text-gray-300">Sound design matrix overlay synced with dynamic speed ramping.</p>
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-8 max-w-6xl mx-auto bg-black relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">Mastering The Timeline</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I’m a freelance video editor crafting high-energy cinematic edits, gaming montages, and motion graphics. 
            Using industry-standard tools, I turn raw footage into pacing-perfect stories that lock in viewer retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">DaVinci Resolve</h3>
            <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider block mb-4">Hollywood Standard</span>
            <p className="text-gray-400 text-sm">Utilizing advanced node-based color grading and the Fairlight audio engine to deliver flawless, cinematic visual depth and crisp sound design.</p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">After Effects</h3>
            <span className="text-blue-500 text-sm font-bold uppercase tracking-wider block mb-4">Motion Design</span>
            <p className="text-gray-400 text-sm">Creating seamless tracking, dynamic visual effects, and high-energy asset transitions.</p>
          </div>
          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5 hover:border-white/20 transition duration-500">
            <h3 className="text-2xl font-bold text-white mb-2">Premiere Pro</h3>
            <span className="text-purple-500 text-sm font-bold uppercase tracking-wider block mb-4">Speed & Delivery</span>
            <p className="text-gray-400 text-sm">Optimized for rapid cutting, viral formatting, and multi-platform short-form delivery.</p>
          </div>
        </div>
      </section>

      {/* FOOTER & CONTACT */}
      <section id="contact" className="py-32 bg-neutral-950 border-t border-white/10 text-center">
        <h2 className="text-5xl font-black mb-8">Let's Create.</h2>
        <a href="mailto:kavin123kavinl123@gmail.com" className="text-xl text-gray-300 hover:text-white transition block mb-4">
          kavin123kavinl123@gmail.com
        </a>
        <a href="https://www.instagram.com/thecatguy.editz/" target="_blank" className="text-xl text-yellow-500 hover:text-yellow-400 transition block mb-12">
          Instagram: @thecatguy.editz
        </a>
        <div className="mt-20 opacity-20">
          <p className="text-8xl font-black tracking-tighter">KAVIN</p>
        </div>
      </section>
    </main>
  );
}
