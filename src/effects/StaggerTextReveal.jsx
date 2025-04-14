import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StaggerTextReveal = ({ lines = [], className = '' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const linesEls = gsap.utils.toArray('.stagger-line');

    gsap.from(linesEls, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return (
    <div ref={containerRef} className={`space-y-2 ${className}`}>
      {lines.map((line, idx) => (
        <div key={idx} className="stagger-line relative overflow-hidden">
          <span className="block border-b-2 border-black pb-1">{line}</span>
        </div>
      ))}
    </div>
  );
};

export default StaggerTextReveal;
