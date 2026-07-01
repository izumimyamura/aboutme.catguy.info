'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Safely load 3D/Animation components for client-side only
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: 'sans-serif', position: 'relative', overflow: 'hidden' }}>
      
      {/* Bulletproof Apple-Style Glass Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem', backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.1em' }}>
          THE CAT GUY
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem' }}>
          <a href="#hero" style={{ color: '#ccc', textDecoration: 'none' }}>Home</a>
          <Link href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank" style={{ color: '#EAB308', textDecoration: 'none' }}>
            Portfolio ↗
          </Link>
        </div>
        <a href="mailto:kavin123kavinl123@gmail.com" style={{
          backgroundColor: '#fff', color: '#000', padding: '0.5rem 1rem',
          borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 'bold', textDecoration: 'none'
        }}>
          Hire Me
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Z-Index 0: SideRays Canvas perfectly locked to the background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <SideRays 
            speed={2.5} 
            rayColor1="#EAB308" 
            rayColor2="#96c8ff" 
            intensity={2} 
            spread={2} 
            origin="top-right" 
          />
        </div>
        
        {/* Z-Index 10: Ensures BlurText stays above the light rays */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 1rem' }}>
          <BlurText 
            text="THE CAT GUY" 
            delay={100} 
            className="text-7xl md:text-9xl font-black tracking-tighter" 
            style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.05em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          />
          <BlurText 
            text="Cinematic Video Editor" 
            delay={150} 
            className="text-xl md:text-3xl mt-4 tracking-widest uppercase" 
            style={{ fontSize: '1.25rem', color: '#aaa', marginTop: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          />
        </div>
      </section>

    </main>
  );
}
