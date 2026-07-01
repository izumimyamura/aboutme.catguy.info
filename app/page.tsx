'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import ALL heavy React Bits components to prevent Vercel crashes
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });
const ScrollStack = dynamic(() => import('../components/ScrollStack'), { ssr: false });
const ScrollStackItem = dynamic(() => import('../components/ScrollStack').then(mod => mod.ScrollStackItem), { ssr: false });

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
          <a href="#portfolio" style={{ color: '#e5e5e5', textDecoration: 'none', transition: 'color 0.2s' }}>Work</a>
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
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
          <SideRays 
            speed={2.5} 
            rayColor1="#EAB308" 
            rayColor2="#96c8ff" 
            intensity={3.0} 
            spread={2.5} 
            origin="top-right" 
          />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <div style={{ 
            fontSize: 'clamp(4rem, 12vw, 13rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            lineHeight: 1,
            textShadow: '0px 10px 40px rgba(0,0,0,0.5)'
          }}>
            <BlurText text="THE CAT GUY" delay={50} />
          </div>
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

      {/* SCROLL STACK PORTFOLIO SECTION */}
      <section id="portfolio" style={{ width: '100vw', height: '100vh', backgroundColor: '#000', position: 'relative', zIndex: 20 }}>
        
        <ScrollStack useWindowScroll={false} itemDistance={80} blurAmount={2}>
          
          {/* Card 1 */}
          <ScrollStackItem>
            <div style={{
              width: '100%', height: '100%', position: 'relative',
              backgroundImage: 'url(https://images.unsplash.com/photo-1605335529061-68beaf5c92c8?q=80&w=1000)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem'
            }}>
              {/* Gradient Overlay to make text readable */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p style={{ color: '#EAB308', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Cinematic</p>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>The Midnight Chase</h2>
                <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '0.5rem' }}>High-energy color grading and heavy velocity framing shifts.</p>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 2 */}
          <ScrollStackItem>
            <div style={{
              width: '100%', height: '100%', position: 'relative',
              backgroundImage: 'url(https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p style={{ color: '#96c8ff', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Short-Form</p>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>Viral Retention Reel</h2>
                <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '0.5rem' }}>Micro-cut editing style keeping average watch time above 85%.</p>
              </div>
            </div>
          </ScrollStackItem>

          {/* Card 3 */}
          <ScrollStackItem>
            <div style={{
              width: '100%', height: '100%', position: 'relative',
              backgroundImage: 'url(https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000)',
              backgroundSize: 'cover', backgroundPosition: 'center',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '3rem'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }} />
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <p style={{ color: '#a855f7', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Commercial</p>
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>Cyberpunk Promo</h2>
                <p style={{ color: '#aaa', fontSize: '1.2rem', marginTop: '0.5rem' }}>Sound design matrix overlay synced with dynamic speed ramping.</p>
              </div>
            </div>
          </ScrollStackItem>

        </ScrollStack>
      </section>

    </main>
  );
}
