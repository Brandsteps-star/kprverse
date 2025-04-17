import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger);

const Heading = [
    "A brand for the metaverse,",
    "focusing on collective narrative. Our",
    "world brings together art, stories",
    "and people to reimagine a new genre",
    "of media and entertainment."
]

export const AboutSection1 = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if(window.innerWidth > 768) {
            const images = document.querySelectorAll(".img");
        
            images.forEach(img => {
                gsap.fromTo(img, 
                    { 
                        width: "80%",
                        padding: img.classList.contains("left-0") ? "7rem 0" : "3rem 0"
                    }, 
                    {
                        width: "100%",
                        padding: "0",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current, 
                            start: "top 70%",
                            end: "bottom 100%",
                            scrub: true 
                        }
                    }
                );
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return(
        <section className="w-full relative z-20 flex flex-col justify-center font-whyte-inktrap">
            <div className="h-full w-[98vw] max-md:w-full pl-[82px] pt-[70px] z-30 flex flex-col relative max-sm:pt-0 max-md:pl-0">

                {/* Top part */}
                <div className="px-8 py-16 text-black border-b border-[#0000002a] max-sm:h-full max-sm:mt-20 max-sm:p-2 max-sm:pb-8">
                    <div className="relative">
                    <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">KPR IS</span>
                    {
                        Heading.map((item, index) => (
                        index == 0 ? (
                            <h3 key={index} className="section-title title uppercase max-sm:hidden pl-20">
                            {item}
                            </h3>
                        ) : (
                            <h3 key={index} className="section-title title uppercase max-sm:hidden mt-[-5px]">
                            {item}
                            </h3>
                        )
                        ))
                    }
                    <h3 className="section-title title uppercase pl-20 hidden max-sm:flex">
                        A brand for the metaverse,
                        focusing on collective narrative. Our
                        world brings together art, stories
                        and people to reimagine a new genre
                        of media and entertainment.
                    </h3>
                    </div>
                </div>

                {/* Bottom Part */}
                <div ref={sectionRef} className="min-h-screen h-full w-full relative flex max-sm:flex-col max-sm:min-h-full">
                    <div className="relative w-[50%] border-r border-[#0000002a] max-sm:w-full max-sm:h-[30vh]">
                        <img src="/images/protocol-bg.jpg" className="absolute h-full img right-0 w-4/5 py-12 object-contain max-sm:relative max-sm:p-0 " alt="" />
                    </div>
                    <div className="relative w-[50%] max-sm:w-full max-sm:h-[30vh]">
                        <img src="/images/section3-image.png" className="absolute h-full img left-0 w-4/5 py-28 object-contain max-sm:relative max-sm:p-0" alt="" />
                    </div>
                </div>

                
            </div>
        </section>
    )
}