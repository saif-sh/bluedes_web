import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '../hooks/useMousePosition';

const MaskCursor = ({ isHovering }) => {
  const { x, y } = useMousePosition();

  const size = isHovering ? 250 : 0; // 0 hides the circle when not hovering

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-0"
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px ${size}px`,
      }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.3 }}
      style={{
        WebkitMaskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
        maskImage: 'radial-gradient(circle, white 100%, transparent 100%)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        backgroundColor: '#0ef',
      }}
    />
  );
};

export default MaskCursor;
