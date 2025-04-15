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
    gsap.from(".section4 .text", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
          trigger: ".section4",
          start: "top 0%",
          end: "top bottom",
          scrub: 1,
      }
    })
    gsap.from(".section4 .border-animation", {
      opacity: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
          trigger: ".section4",
          start: "top 0%",
          end: "top bottom",
          scrub: 1,
      }
    })
    gsap.from(".section4 .image", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power3.inOut",
      scrollTrigger: {
          trigger: ".section4",
          start: "top 0%",
          end: "top bottom",
          scrub: 1,
      }
    })
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top 60%",
        end: "center 40%",
        scrub: 1, 
      },
    });

    const tlForImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".section5",
        start: "top 100%", 
        end: "top 0%", 
        scrub: 1, 
      }
    })


    tlForImg.to(".fixed-image", {
      scale: 0,

    })

    tl.fromTo(
      ".bg-block1",
      { scale: 0, y: window.innerWidth < 768 ? -200 : 0, transformOrigin: "center" },
      { scale: 1.1, y: 0, duration: 1, ease: "power3.inOut" }
    );

    tl.fromTo(
      ".bg-block2",
      { scale: 0, y: window.innerWidth < 768 ? -200 : 0, transformOrigin: "center" },
      { scale: 1.2, y: 0, duration: 1, ease: "power3.inOut" },
      "-=0.5"
    );
    tl.fromTo(
      ".bg-block3",
      { scale: 0, y: window.innerWidth < 768 ? -200 : 0, transformOrigin: "center" },
      { scale: 1.3, y: 0, duration: 1, ease: "power3.inOut" },
      "-=0.10" 
    );
  }, []);

  return (
    <section className="section4 mt-[200px] w-full relative z-20 flex justify-center font-whyte-inktrap overflow-hidden max-sm:min-h-screen ">
      {/* Background layers - positioned in stacking order */}
      <div className="fixed top-0 left-0 w-full h-screen flex-center pointer-events-none z-10">
        <div className="absolute w-[1300px] h-[1300px] bg-purple-400 bg-block1 scale-0 rounded-xl"></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen flex-center pointer-events-none z-20">
        <div className="absolute  w-[1300px] h-[1300px] bg-purple-600 bg-block2 scale-0 rounded-xl"></div>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen flex-center pointer-events-none z-20">
        <div className="absolute  w-[1300px] h-[1300px] bg-purple-500 bg-block3 scale-0 rounded-xl"></div>
      </div>

      {/* Content */}
      <div className="w-[97vw] pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col max-sm:flex-col-reverse max-md:w-full max-md:pl-0">
        <div className="flex-center w-[20vw] h-full max-sm:w-full max-sm:mt-8">
          <div className="rotate-270 h-[20vw] flex flex-col gap-2 text max-sm:rotate-0 max-sm:h-full max-sm:gap-8">
            <h1 className="text-[17vw] leading-[20vw] tracking-[-15px] font-black max-sm:text-[42vw] max-sm:leading-[42vw] font-hexaframe">
              10K
            </h1>
            <span className="mt-[-20px] small-text flex items-center gap-2 max-sm:mt-[-25px]">
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
        <div className="w-[50vw] h-full relative max-sm:w-full">
          <div className="fixed-image fixed w-full h-full top-0 left-0 hidden opacity-0 scale-0 px-4 z-50 max-sm:top-[-190px]">
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
          <div className="border-animation absolute w-[1px] bg-[#0000002a] h-[87vh] bottom-0 right-0 mb-6 max-sm:hidden"></div>
        </div>
        <div className="w-[30vw] h-full flex flex-col justify-center max-sm:hidden">
          <div className="border-animation h-[50%] p-6 relative border-b border-[#0000002a]">
            <ImageTilt
              src="/images/face-traits.webp"
              className="image"
              tiltOptions={{
                max: 40,
                scale: 0.9,
                perspective: 1200,
                speed: 2000,
              }}
            />
          </div>
          <div className="h-[40%] p-6 ">
            <ImageTilt
              src="/images/face-traits.webp"
              className="image"
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