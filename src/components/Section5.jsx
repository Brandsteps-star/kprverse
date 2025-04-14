import ScrollTrigger from "gsap/ScrollTrigger"
import PerspectiveCardGallery from "./CardGallery"
import gsap from "gsap"
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
export const Section5 = () => {

    useEffect(() => {
        gsap.from(".section5 .text", {
            opacity: 0,
            y: 50,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".section5",
                start: "top 40%",
                end: "top bottom",
                scrub: 1,
            }
        })
        gsap.from(".section5 .gallery", {
            opacity: 0,
            scale: 0,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".section5",
                start: "top 40%",
                end: "top bottom",
                scrub: 1,
            }
        })
        gsap.from(".section5 .border-animation", {
            opacity: 0,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: ".section5",
                start: "top 40%",
                end: "top bottom",
                scrub: 1,
            }
        })
    }, [])

    return(
        <div className="section5 relative z-50 w-[98vw] min-h-screen pl-[68px] pt-[70px] overflow-x-hidden font-whyte-inktrap flex flex-col gap-18 max-sm:gap-0  max-sm:w-full max-md:pl-0">
            <div className="flex items-center w-full">
                <div className="relative flex flex-col w-[50%] ml-[15px] max-sm:m-0 max-md:w-full">
                <div className="border-animatio h-[25vh] flex-start p-4 max-md:p-2 text-white border-bn  border-[#ffffff2a] max-sm:h-[10vh]">
                    <div className="relative">
                    <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2 text">004</span>
                    <h3 className="section-title uppercase text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 tracking-[-2px] text">
                        10,000 unique digital
                    </h3>
                    <h3 className="section-title uppercase text-[44px] leading-[44px] max-md:text-[30px]  max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px] text">
                        collectibles.
                    </h3>
                    </div>
                </div>
                </div>
                <div className="relative flex flex-col max-md:w-full w-[50%] max-sm:hidden">
                <div className="h-[25vh] flex items-center justify-center p-4 max-md:p-2 text-white border-animation border-b  border-[#ffffff2a]">
                    <div className="relative">
                    <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2 text">Initial Collection</span>
                    <h6 className="block w-3/4 pl-40 max-sm:w-full text-[13px] leading-[16px] section-title text">
                        Every Keeper is born, endowed with attributes from a collection of over 400 meticulously hand-painted assets. They are personable, iconic possessions that represent KPR's foundational pillars of evolution, inclusion, and imagination.
                    </h6>
                    </div>
                </div>
                </div>
            </div>
            <div className="absolute w-[1px] bg-[#ffffff2a] h-[86vh] left-[53%] bottom-0 mb-6 max-sm:hidden border-animation"></div>
            <PerspectiveCardGallery className="gallery" />
            <div className="relative flex flex-col max-md:w-full w-[50%] ml-[15px] max-sm:m-0 sm:hidden">
                <div className="h-[25vh] max-sm:h-fit max-sm:py-4 flex items-center justify-start p-4 max-md:p-2 text-white border-y  border-[#ffffff2a]">
                    <div className="relative">
                    <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">Initial Collection</span>
                    <h6 className="block w-3/4 pl-40 max-sm:w-full text-[13px] leading-[16px] section-title">
                        Every Keeper is born, endowed with attributes from a collection of over 400 meticulously hand-painted assets. They are personable, iconic possessions that represent KPR's foundational pillars of evolution, inclusion, and imagination.
                    </h6>
                    </div>
                </div>
                </div>
        </div>
    )
}