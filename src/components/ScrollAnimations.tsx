
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Mouse Follower */}
      <motion.div
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        className="absolute w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-sm"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.sin(scrollY * 0.001 + i) * 50, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
          style={{
            left: `${5 + (i * 6) % 90}%`,
            top: `${10 + (i * 8) % 80}%`
          }}
        />
      ))}

      {/* Grid Lines */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 98%, rgba(59, 130, 246, 0.1) 100%),
              linear-gradient(0deg, transparent 98%, rgba(59, 130, 246, 0.1) 100%)
            `,
            backgroundSize: '50px 50px',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
      </div>

      {/* Scroll Progress Line */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
        style={{
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
        }}
      />
    </div>
  );
};

export default ScrollAnimations;
