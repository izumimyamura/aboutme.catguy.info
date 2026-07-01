'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Safely load 3D/Animation components for client-side only
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif', position: 'relative', overflow: 'hidden' }}>
      
      {/* Bulletproof Apple-Style Glass Navigation */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.2rem 2.5rem', backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.15em' }}>
          THE CAT GUY
        </div>
        <div style={{ display: 'flex', gap: '3rem', fontSize: '0.9rem', fontWeight: 500 }}>
          <a href="#hero" style={{ color: '#e5e5e5', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a>
          <Link href="https://kavin-portfolio-v2-4mowan065-catguy.vercel.app/#hero" target="_blank" style={{ color: '#EAB308', textDecoration: 'none' }}>
            Portfolio ↗
          </Link>
        </div>
        <a href="mailto:kavin123kavinl123@gmail.com" style={{
          backgroundColor: '#fff', color: '#000', padding: '0.6rem 1.5rem',
          borderRadius: '9999px', fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none'
        }}>
          Hire Me
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="hero" style={{ position: 'relative', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Z-Index 0: SideRays Canvas locked to Viewport */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <SideRays 
            speed={2.5} 
            rayColor1="#EAB308" 
            rayColor2="#96c8ff" 
            intensity={3.0} /* Boosted intensity to make it pop */
            spread={2.5} 
            origin="top-right" 
          />
        </div>
        
        {/* Z-Index 10: Ensures Typography stays above the light rays */}
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          
          {/* Massive Apple-Style Title */}
          <div style={{ 
            fontSize: 'clamp(4rem, 12vw, 13rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            lineHeight: 1,
            textShadow: '0px 10px 40px rgba(0,0,0,0.5)'
          }}>
            <BlurText text="THE CAT GUY" delay={50} />
          </div>

          {/* Sleek Subtitle */}
          <div style={{ 
            fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', 
            fontWeight: 600, 
            color: '#a1a1aa', 
            marginTop: '1.5rem', 
            letterSpacing: '-0.02em',
          }}>
            <BlurText text="Cinematic Video Editor" delay={100} />
          </div>

        </div>
      </section>

    </main>
  );
}
