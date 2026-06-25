
import React, { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], .cursor-pointer';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const rafId = useRef(null);
  const position = useRef({ x: -100, y: -100 });
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const applyTransform = () => {
      const { x, y } = position.current;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafId.current = null;
    };

    const handleMouseMove = (e) => {
      position.current.x = e.clientX;
      position.current.y = e.clientY;

      if (cursor.style.visibility !== 'visible') {
        cursor.style.visibility = 'visible';
      }

      const hovering = Boolean(e.target.closest(INTERACTIVE_SELECTOR));
      if (hovering !== isHovering.current) {
        isHovering.current = hovering;
        cursor.style.width = hovering ? '48px' : '16px';
        cursor.style.height = hovering ? '48px' : '16px';
        cursor.style.backgroundColor = hovering
          ? 'rgba(255, 255, 255, 1)'
          : 'rgba(6, 182, 212, 1)';
      }

      if (!rafId.current) {
        rafId.current = requestAnimationFrame(applyTransform);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        visibility: 'hidden',
        width: '16px',
        height: '16px',
        backgroundColor: 'rgba(6, 182, 212, 1)',
        willChange: 'transform',
        transition: 'width 150ms ease-out, height 150ms ease-out, background-color 150ms ease-out',
      }}
    />
  );
};

export default CustomCursor;
