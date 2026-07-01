'use client';
import { motion } from 'framer-motion';

export default function BlurText({ text = '', className = '' }: { text: string, className?: string }) {
  return (
    <div className={className}>
      {text.split('').map((char: string, i: number) => (
        <motion.span 
          key={i} 
          initial={{ filter: 'blur(10px)', opacity: 0 }} 
          animate={{ filter: 'blur(0px)', opacity: 1 }} 
          transition={{ delay: i * 0.05 }}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}
