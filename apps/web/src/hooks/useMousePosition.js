
import { useEffect, useRef } from 'react';

const useMousePosition = () => {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId = null;

    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return positionRef;
};

export default useMousePosition;
