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
            <div id="the-keep" className="absolute-pos z-50">
                <img src="/images/section3-image.png" className="img img-1" alt="" />
            </div>
            <div id="factions" className="absolute-pos z-[60]">
                <img src="/images/section3-bg.jpg" className="img img-2" alt="" />
            </div>
            <div id="the-world" className="absolute-pos z-[70]">
                <img src="/images/section3-image.png" className="img img-3" alt="" />
            </div>
            <div className="paragraph-container text1 z-[52]">
            <span className="extra-sm-text mt-4 max-md:mt-0">001 . THE KEEP</span>
            <span className="paragraph">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored.
            </span>
            </div>
            <div className="paragraph-container text2 z-[62]">
            <span className="extra-sm-text mt-4 max-md:mt-0">002 . FACTIONS</span>
            <span className="paragraph">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story
            </span>
            </div>
            <div className="paragraph-container text3 z-[72]">
            <span className="extra-sm-text mt-4 max-md:mt-0">003 . THE WORLD</span>
            <span className="paragraph">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored.
            </span>
            </div>
        </section>
    )
}