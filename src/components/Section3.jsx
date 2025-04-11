import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export const Section3 = forwardRef(() => {

  useEffect(() => {
    const scaleUpAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 30%",
        end: "top -30%",
        scrub: true,
      },
    });
  
    scaleUpAnimation.fromTo(
      ".s3image",
      { 
        scale: 0, 
        y: window.innerWidth < 768 ? -200 : 0, 
        transformOrigin: "center" 
      },
      { 
        scale: 1.1, 
        y: 0, 
        ease: "power3.inOut" 
      }
    );
  
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section4",
        start: "top 20%",
        end: "center center",
        scrub: true,
      },
    }).to(".s3image", {
      scale: 0,
      ease: "power3.inOut",
    });
  
  }, []);

  const terminalText = [
    "//INITIALIZING",
    "KEEPER STORY",
    "",
    "LOADING...[47%]",
    "",
    "LOCATION_DATA",
    "CHARACTER_ATTRIBUTES",
    "KLMX TRANSMISSIONS",
  ];

  return (
    <section
      className="section3 min-h-screen w-full relative z-20 flex flex-col justify-center font-whyte-inktrap"
    >
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none z-10">
        <img src="/images/section3-image.png" className="absolute object-cover w-[1300px] h-[1300px] scale-0 rounded-xl s3image" />
      </div>
      <div className="h-full mt-[700px] max-sm:mt-[950px] w-[98vw] max-md:w-full max-md:pl-0 pl-[82px] pt-[70px] z-30 relative max-md:flex-col">
        {/* Row 1 */}
        <div className="relative h-[60vh] flex max-sm:items-end max-sm:h-[30vh] max-md:w-full w-full text-white  border-y border-[#FFFFFF33]">
          <div className="px-6 py-8 w-[70%] max-sm:w-full max-md:p-2 border-r border-[#FFFFFF33] max-sm:border-none">
            <div className="relative">
              <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">002</span>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 max-sm:pl-12 tracking-[-2px] uppercase">
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

          <div className="p-8  w-[30%] z-30 max-sm:hidden">
            {terminalText.map((line, index) => (
              <p className="block max-sm:w-full text-[6px] leading-[10px] section-title font-mono" key={index}>{line}</p>
            ))}
          </div>
        </div>
        {/* Row 2 */}
        <div className="relative h-[60vh] max-sm:h-[20vh] flex max-md:w-full w-full text-white  border-b border-[#FFFFFF33]">
          <div className="px-6 py-8 w-[70%] max-sm:w-[50%] max-md:p-2 border-r border-[#FFFFFF33]"></div>

          <div className="p-8 w-[30%] max-sm:w-[50%] z-30">
            <div className="w-full flex items-center justify-between">
              <div>
              {["N 35°27.37","E 139°38.57"].map((line, index) => (
                <p className="block max-sm:w-full text-[7px] leading-[10px] section-title font-mono" key={index}>{line}</p>
              ))}
            </div>
            <img src="https://kprverse.com/svg/degrees.svg" alt="Degrees" className="w-12" />
            </div>
          <div className="">
            <video playsInline loop autoPlay muted className="w-full">
              <source src="https://kprverse.com/videos/project/topo-landing.mp4" type="video/mp4" />
              <source src="https://kprverse.com/videos/project/topo-landing.webm" type="video/webm" />
            </video>
          </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="relative h-[50vh] max-sm:h-[15vh] flex max-sm:items-center max-md:w-full w-full text-white  border-b border-[#FFFFFF33]">
          <div className="px-6 py-8 w-[30%] max-md:p-2 border-r border-[#FFFFFF33] relative max-sm:hidden">
            <div className="absolute top-[-67px] left-50 rotate-[45deg] h-[142%] w-[1px] bg-[#ffffff33]"></div>
          </div>

          <div className="px-6 py-8 w-[70%] max-sm:w-full max-md:p-2 border-r border-[#FFFFFF33] max-sm:border-r-0">
            <div className="relative">
              <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">003</span>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 max-sm:pl-12 tracking-[-2px] uppercase">
              What will you do with this
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              power? Will you choose to
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              protect or destroy? To give
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] uppercase">
              or to take?
              </h3>
            </div>
          </div>
        </div>
        {/* Row 4 */}
        <div className="relative h-[100vh] max-sm:hidden flex max-md:w-full w-full text-white  border-b border-[#FFFFFF33]">
          <div className="px-6 py-8 h-[100%] w-[30%] max-md:p-2 border-r border-[#FFFFFF33] relative"></div>
          <div className="px-6 py-8 h-[100%] w-[35%] max-md:p-2 border-r border-[#FFFFFF33] relative">
          <p className="block max-sm:w-full text-[9px] leading-[9px] section-title uppercase font-mono">Keepers <br /> Symbol</p>
          </div>
          <div className="px-6 py-8 h-[100%] w-[35%] max-md:p-2 relative"></div>
        </div>
      </div>
    </section>
  );
});

Section3.displayName = "Section3";