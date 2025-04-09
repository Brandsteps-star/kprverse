import gsap from "gsap";
import ImageTilt from "../effects/ImageTilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const Section4 = () => {
  // Animation for the main image
  useEffect(() => {
    gsap.fromTo(
      ".fixed-image",
      { display: "block", scale: 0.3, opacity: 0 },
      {
        scale: 1,
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".section4",
          start: "top 20%",
          end: "center center",
          scrub: 1,
        },
      }
    );
  }, []);

  // Animation for the background boxes
  useEffect(() => {
    // Create a timeline for sequenced animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top 60%", // Adjust when animation starts
        end: "center 40%", // Adjust when animation ends
        scrub: 1, // Smooth scrubbing effect
      },
    });

    const tlForImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top 100%", // Adjust when animation starts
        end: "top 0%", // Adjust when animation ends
        scrub: 1, // Smooth scrubbing effect
        markers: true // Uncomment for debugging
      }
    })


    tlForImg.to(".fixed-image", {
      scale: 0,

    })

    // First background box animation
    tl.fromTo(
      ".bg-block1",
      { scale: 0, transformOrigin: "center" },
      { scale: 1.1, duration: 1, ease: "power3.inOut" }
    );

    // Second background box animation (starts after first is 50% complete)
    tl.fromTo(
      ".bg-block2",
      { scale: 0, transformOrigin: "center" },
      { scale: 1.2, duration: 1, ease: "power3.inOut" },
      "-=0.5" // Overlap with previous animation
    );
    tl.fromTo(
      ".bg-block3",
      { scale: 0, transformOrigin: "center" },
      { scale: 1.3, duration: 1, ease: "power3.inOut" },
      "-=0.10" // Overlap with previous animation
    );
  }, []);

  return (
    <section className="section4 mt-[200px] w-full max-sm:min-h-screen relative z-20 flex justify-center font-whyte-inktrap overflow-hidden">
      {/* Background layers - positioned in stacking order */}
      <div className="fixed top-0 left-0 w-[1300px] h-screen flex items-center justify-center pointer-events-none z-10">
        <div className="absolute w-[1300px] h-[1300px] bg-purple-400 bg-block1 scale-0 rounded-xl"></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-20">
        <div className="absolute  w-[1300px] h-[1300px] bg-purple-600 bg-block2 scale-0 rounded-xl"></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-20">
        <div className="absolute  w-[1300px] h-[1300px] bg-purple-500 bg-block3 scale-0 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col max-sm:flex-col-reverse">
        <div className="flex items-center justify-center w-[20vw] h-full max-sm:w-full max-sm:mt-8">
          <div className="rotate-270 max-sm:rotate-0 h-[20vw] max-sm:h-full flex flex-col">
            <h1 className="text-[20vw] leading-[20vw] font-black max-sm:text-[42vw] max-sm:leading-[42vw]">
              10K
            </h1>
            <span className="mt-[-20px] max-sm:mt-[-25px] font-mono small-text flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 7.21 5.08"
              >
                <path
                  d="M0,1.51a.26.26,0,0,1,.43-.19L3.05,3.6a.26.26,0,0,1,0,.39L.44,6.27A.26.26,0,0,1,0,6.07Z"
                  transform="translate(-0.01 -1.25)"
                />
                <path
                  d="M4.09,1.51a.26.26,0,0,1,.44-.19L7.13,3.6a.26.26,0,0,1,0,.39L4.53,6.27a.27.27,0,0,1-.44-.2Z"
                  transform="translate(-0.01 -1.25)"
                />
              </svg>
              Initial Collection
            </span>
          </div>
        </div>
        <div className="w-[50vw] max-sm:w-full h-full relative">
          <div className="fixed w-full h-full max-sm:top-[-190px] top-0 left-0 hidden opacity-0 scale-0 fixed-image px-4 z-50">
            <ImageTilt
              src="/images/section4-image.png"
              className="scale-[.7] !object-contain max-sm:scale-[1]"
              tiltOptions={{
                max: 40,
                scale: 1.04,
                perspective: 1200,
                speed: 2000,
              }}
            />
          </div>
          <div className="absolute w-[1px] bg-[#0000002a] h-[87vh] bottom-0 right-0 mb-6 max-sm:hidden"></div>
        </div>
        <div className="w-[30vw] h-full flex flex-col justify-center max-sm:hidden">
          <div className="h-[50%] p-6 relative border-b border-[#0000002a]">
            <ImageTilt
              src="/images/face-traits.webp"
              className=""
              tiltOptions={{
                max: 40,
                scale: 0.9,
                perspective: 1200,
                speed: 2000,
              }}
            />
          </div>
          <div className="h-[40%] p-6">
            <ImageTilt
              src="/images/face-traits.webp"
              className=""
              tiltOptions={{
                max: 40,
                scale: 0.9,
                perspective: 1200,
                speed: 2000,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};