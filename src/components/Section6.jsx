import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export const Section6 = () => {
    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const totalHeight = isMobile ? window.innerHeight * 4 : window.innerHeight * 3;
        const section = ".section6";

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${totalHeight}`,
                scrub: true,
                pin: true,
                pinSpacing: true,
            }
        });

        // Set initial mobile states
        if(isMobile) {
            gsap.set([".img-1", ".img-2", ".img-3"], {
                width: "80vw",
                height: "80vw",
                x: "-50%",
                left: "50%"
            });
        }

        // Animation tweens
        tl.to(".img-1", {
            scale: isMobile ? 2 : 1.25,
            width: isMobile ? "100%" : "100%",
            height: isMobile ? "100%" : "100%",
            left: isMobile ? "0%" : "0%",
            x: isMobile ? 0 : 0,
            ease: "none"
        }, 0);

        tl.to(".img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: isMobile ? 2 : 1.25,
            width: "100%",
            height: "100%",
            left: "0%",
            x: 0,
            ease: "none",
            onUpdate: function() {
                const progress = this.progress();
                gsap.set(".img-2", {
                    clipPath: `polygon(
                        ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
                        ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
                        ${gsap.utils.interpolate(60, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%,
                        ${gsap.utils.interpolate(40, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%
                    )`
                });
            }
        }, 0);

        tl.to(".my-text", { display: "flex" });

        tl.to(".img-3", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "none",
            onUpdate: function() {
                const progress = this.progress();
                gsap.set(".img-3", {
                    clipPath: `polygon(
                        ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
                        ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(25, 0, progress)}%,
                        ${gsap.utils.interpolate(50, 100, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%,
                        ${gsap.utils.interpolate(50, 0, progress)}% ${gsap.utils.interpolate(75, 100, progress)}%
                    )`
                });
            }
        }); 

    }, []);

    return(
        <section className="section6 w-full min-h-screen z-50 relative font-whyte-inktrap text-white">
            {/* Image 1 Container */}
            <div className="absolute top-1/2 md:top-0 left-1/2 md:left-0 -translate-y-1/2 md:translate-y-0 
                -translate-x-1/2 md:translate-x-0 w-full h-full overflow-hidden z-50">
                <img src="/images/section3-image.png" 
                    className="w-full h-full object-cover img-1 max-md:absolute max-md:top-1/2 max-md:left-1/2" 
                    alt="" 
                />
                <h1 className="z-80 md:text-4xl text-2xl text-center md:text-left md:absolute md:top-4 md:left-4">
                    Welcome to the experience
                </h1>
            </div>

            {/* Image 2 Container */}
            <div className="absolute top-1/2 md:top-0 left-1/2 md:left-0 -translate-y-1/2 md:translate-y-0 
                -translate-x-1/2 md:translate-x-0 w-full h-full overflow-hidden z-[60]">
                <img src="/images/section3-bg.jpg" 
                    className="w-full h-full object-cover img-2 max-md:absolute max-md:top-1/2 max-md:left-1/2" 
                    alt="" 
                />
            </div>

            {/* Image 3 Container */}
            <div className="absolute top-1/2 md:top-0 left-1/2 md:left-0 -translate-y-1/2 md:translate-y-0 
                -translate-x-1/2 md:translate-x-0 w-full h-full overflow-hidden z-[70]">
                <img src="/images/section3-image.png" 
                    className="w-full h-full object-cover img-3 max-md:absolute max-md:top-1/2 max-md:left-1/2" 
                    alt="" 
                />
            </div>

            {/* Text Overlay */}
            <div className="absolute w-full md:w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                hidden my-text z-[62] px-4 md:px-0">
                <h3 className="section-title uppercase text-[24px] leading-[26px] md:text-[44px] md:leading-[44px] 
                    font-black md:pl-20 tracking-[-1px] md:tracking-[-2px] text-center md:text-left">
                    Ukasha is here
                </h3>
            </div>
        </section>
    )
}