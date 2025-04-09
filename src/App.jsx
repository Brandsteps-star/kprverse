import { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MiniSidebar } from "./components/MiniSidebar";
import LenisSmoothScroll from "./effects/LenisSmothScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import {Section3} from "./components/Section3";
import { Section4 } from "./components/Section4";
import { Section5 } from "./components/Section5";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [borderColor, setBorderColor] = useState('border-[#FFFFFF33]');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const imgRef = useRef(null);
  const backgroundContainerRef = useRef(null);


  useEffect(() => {

    gsap.to(backgroundContainerRef.current, {
      x: window.innerWidth > 768 ? "14%" : '0%',
      y: window.innerWidth > 768 ? "22%" : "2%",
      keyframes: {
        scale: window.innerWidth > 768 ? [1, 0, .5] : [1, 0, .8]
      },
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    const imageTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

    imageTl.fromTo(
      imgRef.current,
      { 
        scale: 1.2,
        objectFit: "cover" 
      },
      { 
        scale: 1,
        width: "36rem",
        height: "36rem",
        objectFit: "contain",
        ease: "power2.out",
        onUpdate: function() {
          const progress = this.progress();
          const startObjectFit = "cover";
          const endObjectFit = "contain";
          
          if (imgRef.current) {
            imgRef.current.style.objectFit = 
              progress < 0.8 ? startObjectFit : 
              progress < 1 ? 
                (progress > 0.75 ? endObjectFit : startObjectFit) : 
                endObjectFit;
          }
        }
      }
    );

    gsap.to(".hero-section", {
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".about-section",
      { opacity: 0, duration: 1, transitionDuration: 1 },
      {
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 5%",
          end: "bottom 100%",
          scrub: true,
        },
      },
    );

    gsap.to(
      ".about-section",
      {
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top -20%",
          end: "bottom 100%",
          scrub: true,
        },
      },
    )
    gsap.to(
      backgroundContainerRef.current,
      {
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top -10%",
          end: "bottom 100%",
          scrub: true,
        },
      },
    )
    gsap.to(
      imgRef.current,
      {
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top -10%",
          end: "bottom 100%",
          scrub: true,
        },
      },
    )

    ScrollTrigger.create({
      trigger: ".about-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: self => {
        const progress = self.progress;
        setBorderColor(progress > 0 ? 'border-[#0000002a]' : 'border-[#FFFFFF33]');
      }
    });
    
    ScrollTrigger.create({
      trigger: ".section4",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: self => {
        const progress = self.progress;
        setBorderColor(progress > 0 ? 'border-[#0000002a]' : 'border-[#FFFFFF33]');
      }
    });

    ScrollTrigger.create({
        trigger: ".section3",
        start: "top 0%", 
        end: "bottom top",
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          setBorderColor(progress > 0 ? 'border-[#FFFFFF33]' : 'border-[#0000002a]');
        } 
    })
    
  }, []);

  return (
    <>
    <LenisSmoothScroll />
    <main className="relative w-full min-h-screen overflow-x-hidden">
      <div className="relative w-full min-h-screen z-40">
        <div
          ref={backgroundContainerRef}
          className="fixed inset-0 w-full h-full z-0 overflow-hidden"
        >
          <img
            src="./images/hero-bg.png"
            className="h-full w-full object-cover scale-[1.2] transition-transform duration-300"
            alt="Background"
            ref={imgRef}
          />
        </div>
        
        <HeroSection />
        <AboutSection />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>

      <div className={`fixed z-50 pointer-events-none max-md:!border-none border ${borderColor} max-sm:w-full max-sm:h-full max-sm:rounded-none h-[94vh] w-[97vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent flex flex-col`}>
        <Navbar 
          setIsSidebarOpen={setIsSidebarOpen} 
          className="pointer-events-auto" 
        />
        <Sidebar 
          isSidebarOpen={isSidebarOpen} 
          setIsSidebarOpen={setIsSidebarOpen} 
          className="pointer-events-auto"
        />
        <MiniSidebar className="pointer-events-auto" />
      </div>
    </main>
  </>
  );
}

export default App;