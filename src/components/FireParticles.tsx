"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FireParticles = () => {
  const particles = Array.from({ length: 25 });

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 bg-brand-gold/40 rounded-full blur-sm"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, -1000],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 0.5],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FireParticles;