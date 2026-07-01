'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Safely load 3D/Animation components
const SideRays = dynamic(() => import('../components/SideRays'), { ssr: false });
const BlurText = dynamic(() => import('../components/BlurText'), { ssr: false });
const ScrollStack = dynamic(() => import('../components/ScrollStack'), { ssr: false });
const ScrollStackItem = dynamic(() => import('../components/ScrollStack').then(mod => mod.ScrollStackItem), { ssr: false });

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000', color: '#fff', fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", sans-serif', position: 'relative', overflowX: 'hidden' }}>
      
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
          <a href="#stack" style={{ color: '#e5e5e5', textDecoration: 'none', transition: 'color 0.2s' }}>My Stack</a>
          <a href="#reels" style={{ color: '#e5e5e5', textDecoration: 'none', transition: 'color 0.2s' }}>Reels</a>
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
          <SideRays speed={2.5} rayColor1="#EAB308" rayColor2="#96c8ff" intensity={3.0} spread={2.5} origin="top-right" />
        </div>
        <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <div style={{ fontSize: 'clamp(4rem, 12vw, 13rem)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 1, textShadow: '0px 10px 40px rgba(0,0,0,0.5)' }}>
            <BlurText text="THE CAT GUY" delay={50} />
          </div>
          <div style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', fontWeight: 600, color: '#a1a1aa', marginTop: '1.5rem', letterSpacing: '-0.02em' }}>
            <BlurText text="Cinematic Video Editor" delay={100} />
          </div>
        </div>
      </section>

      {/* SOFTWARE STACK SECTION */}
      <section id="stack" style={{ width: '100vw', backgroundColor: '#000', position: 'relative', zIndex: 20 }}>
        <ScrollStack useWindowScroll={false} itemDistance={80} blurAmount={2}>
          
          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #050505 40%, #1a0b2e 100%)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(153, 153, 255, 0.15)', filter: 'blur(100px)', top: '20%' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg" alt="After Effects" style={{ width: '100px', height: '100px', marginBottom: '2rem', zIndex: 10 }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>Adobe After Effects</h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto' }}>
                  The industry-standard tool for creating complex motion graphics, visual effects, and animated text.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #050505 40%, #2e0f0b 100%)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(239, 68, 68, 0.15)', filter: 'blur(100px)', top: '20%' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png" alt="DaVinci Resolve" style={{ width: '100px', height: '100px', marginBottom: '2rem', zIndex: 10 }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>DaVinci Resolve</h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto' }}>
                  A powerful, all-in-one software offering high-end color grading, audio mixing, and video editing in a single interface.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #050505 40%, #0b1a2e 100%)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.15)', filter: 'blur(100px)', top: '20%' }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, margin: 0, color: '#fff', letterSpacing: '-0.03em', textShadow: '0 4px 20px rgba(59, 130, 246, 0.3)' }}>Apple Motion</h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.3rem', marginTop: '1.5rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto' }}>
                  A streamlined, Mac-only motion graphics application built to design templates and animations directly for Final Cut Pro.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #050505 40%, #2e0b2a 100%)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(168, 85, 247, 0.15)', filter: 'blur(100px)', top: '20%' }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg" alt="Premiere Pro" style={{ width: '100px', height: '100px', marginBottom: '2rem', zIndex: 10 }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, margin: 0, color: '#fff', letterSpacing: '-0.03em' }}>Adobe Premiere Pro</h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto' }}>
                  The professional, flexible editing software of choice for television, film, and digital creators with a broad ecosystem of third-party plugins.
                </p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', background: 'linear-gradient(145deg, #050505 40%, #112222 100%)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem', textAlign: 'center' }}>
              <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(100px)', top: '20%' }} />
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, margin: 0, color: '#fff', letterSpacing: '-0.03em', textShadow: '0 4px 20px rgba(255, 255, 255, 0.2)' }}>CapCut</h2>
                <p style={{ color: '#a1a1aa', fontSize: '1.3rem', marginTop: '1.5rem', maxWidth: '700px', lineHeight: 1.6, marginInline: 'auto' }}>
                  A highly accessible, user-friendly editor for mobile and desktop, packed with AI tools and templates for rapid social media content.
                </p>
              </div>
            </div>
          </ScrollStackItem>

        </ScrollStack>
      </section>

      {/* NEW INSTAGRAM REELS SECTION */}
      <section id="reels" style={{ width: '100vw', backgroundColor: '#000', position: 'relative', zIndex: 20, paddingTop: '10vh' }}>
        
        {/* Apple-Style Section Header */}
        <div style={{ textAlign: 'center', paddingBottom: '10vh' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em', margin: 0 }}>
            Sample Reels.
          </h2>
          <p style={{ color: '#a1a1aa', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginTop: '1rem', fontWeight: 500 }}>
            Retention-focused edits. Proof in the pacing.
          </p>
        </div>

        {/* Reels Scroll Stack */}
        <ScrollStack useWindowScroll={false} itemDistance={100} blurAmount={2}>
          
          {/* Reel Card 1 */}
          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0' }}>
              
              {/* Left Side: Video Container */}
              <div style={{ flex: '0 0 45%', height: '100%', position: 'relative', overflow: 'hidden', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                {/* NOTE: Change 'src' below to your actual downloaded MP4 file name */}
                <video src="/reel1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Fallback image shown until you add the video */}
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                   <p style={{ color: '#555', fontWeight: 600 }}>[Drop reel1.mp4 in public folder]</p>
                </div>
              </div>

              {/* Right Side: Text & Instagram Link */}
              <div style={{ flex: '1', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>High-Velocity Hooks</h3>
                <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Micro-cut editing designed specifically for the Instagram algorithm. Fast pacing, aggressive sound design, and relentless retention.
                </p>
                <a href="https://www.instagram.com/thecatguy.editz/" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', backgroundColor: '#EAB308', color: '#000', padding: '0.8rem 2rem', 
                  borderRadius: '999px', fontWeight: 700, textDecoration: 'none', alignSelf: 'flex-start' 
                }}>
                  View on Instagram ↗
                </a>
              </div>
            </div>
          </ScrollStackItem>

          {/* Reel Card 2 */}
          <ScrollStackItem>
            <div style={{ width: '100%', height: '100%', position: 'relative', backgroundColor: '#050505', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0' }}>
              
              <div style={{ flex: '0 0 45%', height: '100%', position: 'relative', overflow: 'hidden', borderRight: '1px solid rgba(255,255,255,0.08)' }}>
                {/* NOTE: Change 'src' below to your actual downloaded MP4 file name */}
                <video src="/reel2.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: -1 }}>
                   <p style={{ color: '#555', fontWeight: 600 }}>[Drop reel2.mp4 in public folder]</p>
                </div>
              </div>

              <div style={{ flex: '1', padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 1rem 0', letterSpacing: '-0.03em' }}>Cinematic Atmosphere</h3>
                <p style={{ color: '#a1a1aa', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Transforming raw footage into a moody, cinematic experience. Advanced color grading nodes mixed with environmental soundscapes.
                </p>
                <a href="https://www.instagram.com/thecatguy.editz/" target="_blank" rel="noreferrer" style={{ 
                  display: 'inline-block', backgroundColor: '#fff', color: '#000', padding: '0.8rem 2rem', 
                  borderRadius: '999px', fontWeight: 700, textDecoration: 'none', alignSelf: 'flex-start' 
                }}>
                  View on Instagram ↗
                </a>
              </div>
            </div>
          </ScrollStackItem>

        </ScrollStack>
      </section>

      {/* FOOTER */}
      <footer style={{ width: '100vw', padding: '10vh 0', backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', position: 'relative', zIndex: 20 }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, marginBottom: '2rem' }}>Ready to cut?</h2>
        <a href="https://www.instagram.com/thecatguy.editz/" target="_blank" rel="noreferrer" style={{ display: 'block', color: '#EAB308', fontSize: '1.2rem', textDecoration: 'none', marginBottom: '1rem', fontWeight: 600 }}>
          @thecatguy.editz
        </a>
      </footer>

    </main>
  );
}
