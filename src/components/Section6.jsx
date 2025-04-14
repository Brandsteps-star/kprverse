import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export const Section6 = () => {
    useEffect(() => {
        const totalHeight = window.innerHeight * 3;
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

        tl.to(".text1", {
            opacity: 1,
            ease: "none"
        }, -.4)

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
        tl.to(".text2", {
            opacity: 1,
            ease: "none"
        }, 0)
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

        tl.to(".text3", {
            opacity: 1,
            ease: "none"
        }, )
    }, []);


    return(
        <section className="section6 w-full min-h-screen z-50 relative perspective-[1000px] font-whyte-inktrap text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-50">
                <img src="/images/section3-image.png" className="w-full h-full object-cover img-1" alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[60]">
                <img src="/images/section3-bg.jpg" className="w-full h-full object-cover img-2" alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[70]">
                <img src="/images/section3-image.png" className="w-full h-full object-cover img-3" alt="" />
            </div>
            <div className="absolute w-1/2 max-sm:w-[80%] bottom-[6%] left-1/2 translate-x-[-50%] opacity-0 flex text1 z-[52] flex-col items-center gap-2">
            <span className="font-mono extra-sm-text mt-4 max-md:mt-0">001 . THE KEEP</span>
            <span className="font-normal text-center text-[17px] w-1/2 max-sm:w-full leading-4 block font-whyte-inktrap max-md:place-self-end max-md:text-[17px] max-sm:leading-6 max-md:h-full">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored.
            </span>
            </div>
            <div className="absolute w-1/2 max-sm:w-[80%] bottom-[6%] left-1/2 translate-x-[-50%] opacity-0 flex text2 z-[62] flex-col items-center gap-2">
            <span className="font-mono extra-sm-text mt-4 max-md:mt-0">002 . FACTIONS</span>
            <span className="font-normal text-center text-[17px] w-1/2 max-sm:w-full leading-4 block font-whyte-inktrap max-md:place-self-end max-md:text-[17px] max-sm:leading-6 max-md:h-full">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story
            </span>
            </div>
            <div className="absolute w-1/2 max-sm:w-[80%] bottom-[6%] left-1/2 translate-x-[-50%] opacity-0 flex text3 z-[72] flex-col items-center gap-2">
            <span className="font-mono extra-sm-text mt-4 max-md:mt-0">003 . THE WORLD</span>
            <span className="font-normal text-center text-[17px] w-1/2 max-sm:w-full leading-4 block font-whyte-inktrap max-md:place-self-end max-md:text-[17px] max-sm:leading-6 max-md:h-full">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored.
            </span>
            </div>
        </section>
    )
}