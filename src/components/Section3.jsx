import { forwardRef, useEffect, useRef } from "react";
import ImageTilt from "../effects/ImageTilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const Section3 = forwardRef(() => {

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 50%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    tl.fromTo(
      ".s3image",
      { scale: 0, y: window.innerWidth < 768 ? -200 : 0, transformOrigin: "center" },
      { scale: 1.1, y: 0, ease: "power3.inOut" }
    );

    gsap.to(".s3image", 
      {
      scale: 0,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".section4",
        start: "top 20%",
        end: "center center",
        scrub: true,
      },
    })


  }, [])

  return (
    <section
      className="section3 min-h-screen w-full relative z-20 flex flex-col justify-center font-whyte-inktrap"
    >
      {/* <img src="/images/hero-2.webp" className="absolute top-0 left-0 h-full w-full scale-[1.5]" ref={bgImageRef} alt="" /> */}
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
        <img src="/images/face-traits.webp" className="absolute object-cover w-[1300px] h-[1300px] scale-0 rounded-xl s3image" />
      </div>
      <div className="h-full mt-[1500px] w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col">
        {/* Left Side */}
        <div className="relative flex flex-col max-md:w-full w-[62%] h-[86vh] text-white">
          {/* Left Side Top */}
          <div className="px-6 py-8 h-[100%] max-md:p-2 border-b border-[#FFFFFF33]">
            <div className="relative">
              <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">002</span>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 tracking-[-2px] uppercase">
                You are a Keeper: an agent
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              of power and change in this
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              world.
              </h3>
            </div>
          </div>

          {/* Left Side Bottom */}
          <div className="p-8 flex flex-col justify-between max-sm:justify-end gap-4 h-full z-30">
            <div className="w-1/4 max-sm:w-full image-tilt">
              <ImageTilt
                src="./images/trailer-side-media.webp"
                alt="tailer side media"
                tiltOptions={{
                  max: 20,
                  scale: 1,
                  perspective: 1200,
                  speed: 400,
                }}
              />
            </div>
            <h1 className="block w-1/4 max-sm:w-full text-[13px] leading-[16px] section-title">
              Isolated within the New Eden safe zone, you witness humanity struggling to avoid descending into chaos.
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[37%] h-[86vh] border-l border-[#FFFFFF33] p-4 max-md:hidden">
          <div className="h-full w-full flex items-center justify-between p-4 image-tilt">
            
          </div>
        </div>
      </div>
      <div className="h-full w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col">
        {/* Left Side */}
        <div className="relative flex flex-col max-md:w-full w-[62%] h-[86vh] text-white">
          {/* Left Side Top */}
          <div className="px-6 py-8 h-[100%] max-md:p-2 border-b border-[#FFFFFF33]">
            <div className="relative">
              <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">002</span>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 tracking-[-2px] uppercase">
                You are a Keeper: an agent
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              of power and change in this
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              world.
              </h3>
            </div>
          </div>

          {/* Left Side Bottom */}
          <div className="p-8 flex flex-col justify-between max-sm:justify-end gap-4 h-full z-30">
            <div className="w-1/4 max-sm:w-full image-tilt">
              <ImageTilt
                src="./images/trailer-side-media.webp"
                alt="tailer side media"
                tiltOptions={{
                  max: 20,
                  scale: 1,
                  perspective: 1200,
                  speed: 400,
                }}
              />
            </div>
            <h1 className="block w-1/4 max-sm:w-full text-[13px] leading-[16px] section-title">
              Isolated within the New Eden safe zone, you witness humanity struggling to avoid descending into chaos.
            </h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[37%] h-[86vh] border-l border-[#FFFFFF33] p-4 max-md:hidden">
          <div className="h-full w-full flex items-center justify-between p-4 image-tilt">
            
          </div>
        </div>
      </div>
    </section>
  );
});

Section3.displayName = "Section3";