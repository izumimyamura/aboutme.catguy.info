'use client';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export default function BlurText({ text = '', className = '' }: any) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  
  return (
    <div ref={ref} className={className}>
      {text.split('').map((char, i) => (
        <motion.span key={i} initial={{ filter: 'blur(10px)', opacity: 0 }} animate={{ filter: 'blur(0px)', opacity: 1 }} transition={{ delay: i * 0.05 }}>
          {char}
        </motion.span>
      ))}
    </div>
  );
}
