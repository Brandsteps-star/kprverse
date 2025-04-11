import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
export const Section6 = () => {
    useEffect(() => {
        const totalHeight = window.innerHeight * 4;
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

        tl.to(".img-1", {
            scale: 1.25,
            ease: "none"
        }, 0);

        tl.to(".img-2", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            scale: 1.25,
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
        tl.to(".my-text", {
            display: "flex"
        })

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
        }, ); 

    }, []);


    return(
        <section className="section6 w-full min-h-screen z-50 relative perspective-[1000px] font-whyte-inktrap text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-50">
                <img src="/images/section3-image.png" className="w-full h-full object-cover img-1" alt="" />
                <h1 className="z-80">Welcome to the experience</h1>
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[60]">
                <img src="/images/section3-bg.jpg" className="w-full h-full object-cover img-2" alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[70]">
                <img src="/images/section3-image.png" className="w-full h-full object-cover img-3" alt="" />
            </div>
            <div className="absolute w-1/2 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden my-text z-[62]">
                <h3 className="section-title uppercase text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 tracking-[-2px] text">
                    Ukasha is here
                </h3>
            </div>
        </section>
    )
}