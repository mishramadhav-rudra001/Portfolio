import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailing, setTrailing] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches;

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, isTouchDevice]);

  // Smooth trailing effect
  useEffect(() => {
    if (isTouchDevice) return;
    let frameId;
    const updateTrailing = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.22,
        y: prev.y + (position.y - prev.y) * 0.22,
      }));
      frameId = requestAnimationFrame(updateTrailing);
    };
    frameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(frameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Small sharp inner dot */}
      <div
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          backgroundColor: isHovering ? '#06B6D4' : '#3B82F6',
          boxShadow: isHovering ? '0 0 8px #06B6D4' : '0 0 6px #3B82F6',
        }}
      />

      {/* Futuristic outer ring */}
      <div
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ease-out"
        style={{
          left: `${trailing.x}px`,
          top: `${trailing.y}px`,
          width: isHovering ? '44px' : '26px',
          height: isHovering ? '44px' : '26px',
          border: isHovering
            ? '1.5px solid rgba(6, 182, 212, 0.7)'
            : '1px solid rgba(139, 92, 246, 0.4)',
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.08)' : 'transparent',
          backdropFilter: isHovering ? 'blur(1px)' : 'none',
        }}
      />
    </>
  );
}
