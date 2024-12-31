// components/AnimatedBackground.js
"use client";

import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const AnimatedBackground = () => {
  // Animation for the gradient shapes
  const [springs, api] = useSpring(() => ({
    from: { x: -100, y: -100, rotate: 0 },
    to: { x: 100, y: 100, rotate: 360 },
    config: { duration: 10000 },
    loop: { reverse: true },
  }));

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Gradient Shape 1 */}
      <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #6EE7B7, #3B82F6, #9333EA)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
        }}
        className="dark:hidden" // Only visible in light mode
      />
      <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #4F46E5, #9333EA, #DB2777)',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
        }}
        className="hidden dark:block" // Only visible in dark mode
      />

      {/* Gradient Shape 2 */}
      <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #3b82f6, #00bfff, #00bfff)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
        className="dark:hidden" // Only visible in light mode
      />
      <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #3b82f6, #00bfff, #00bfff)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
          top: '50%',
          left: '50%',
        }}
        className="hidden dark:block" // Only visible in dark mode
      />

      {/* Gradient Shape 3 */}
      {/* <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #A78BFA, #7C3AED, #4C1D95)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
          bottom: '0',
          right: '0',
        }}
        className="dark:hidden" // Only visible in light mode
      /> */}
      {/* <animated.div
        style={{
          ...springs,
          background: 'linear-gradient(45deg, #7C3AED, #4C1D95, #1E3A8A)',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          filter: 'blur(100px)',
          position: 'absolute',
          bottom: '0',
          right: '0',
        }}
        className="hidden dark:block" // Only visible in dark mode
      /> */}
    </div>
  );
};

export default AnimatedBackground;