import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.0, // Increase duration for smoother scrolling
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
      direction: 'vertical',
      smooth: true,
      smoothTouch: false, // Disable smooth scrolling on touch devices for performance
      touchMultiplier: 2, // Adjust touch sensitivity
    });

    // Optimize performance with throttled RAF
    let rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);

    // Make Lenis available globally for debugging
    window.lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy(); // Cleanup to avoid memory leaks
    };
  }, []);

  return null; // This component only handles smooth scrolling
};

export default LenisSmoothScroll;