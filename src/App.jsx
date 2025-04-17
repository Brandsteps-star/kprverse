import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Protocol } from "./pages/Protocol";
import { Journal } from "./pages/Journal";
import { Media } from "./pages/Media";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

function App() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Add this line
        
        const lenis = new Lenis()
        lenis.on("scroll", ScrollTrigger.update)
    
        gsap.ticker.add((time) => {
            lenis.raf(time * 800)
        })
        gsap.ticker.lagSmoothing(0);
    
        // Cleanup function
        return () => {
            lenis.destroy();
        };
    }, [])
    return(
      <Router>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/protocol" element={<Protocol />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/media" element={<Media />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </Router>
    )
}

export default App;