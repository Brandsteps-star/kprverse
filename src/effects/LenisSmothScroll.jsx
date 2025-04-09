import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const LenisSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Dispatch lenis instance to window for access
    const event = new CustomEvent("lenis-init", { detail: lenis });
    window.dispatchEvent(event);
  }, []);

  return null;
};

export default LenisSmoothScroll;
