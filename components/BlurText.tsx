'use client';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function BlurText({ text = '', className = '' }: any) {
  return (
    <div className={className}>
      {text.split('').map((char: string, i: number) => (
        <motion.span 
          key={i} 
          initial={{ filter: 'blur(10px)', opacity: 0 }} 
          animate={{ filter: 'blur(0px)', opacity: 1 }} 
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
