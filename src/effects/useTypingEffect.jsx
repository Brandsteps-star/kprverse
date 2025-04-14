// hooks/useTypingEffect.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useTypingEffect(text, speed = 0.05) {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    gsap.fromTo(
      el.current,
      { textContent: '' },
      {
        textContent: text,
        duration: text.length * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: el.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: function () {
          el.current.innerHTML = el.current.textContent;
        },
      }
    );
  }, [text, speed]);

  return el;
}
