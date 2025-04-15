import gsap from "gsap"
import ImageTilt from "../../effects/ImageTilt"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"


gsap.registerPlugin(ScrollTrigger)

export const Section7 = () => {

    useEffect(() => {
        gsap.from(".scale-up", {
            scale: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.section7',
                start: "top 50%",
                end: "top 0%",
                scrub: true,
            }
        })
        gsap.from(".fade-up", {
            opacity: .5,
            y: 150,
            ease: "power3.out",
            scrollTrigger: {
                trigger: '.section7',
                start: "top 50%",
                end: "top 0%",
                scrub: true,
            }
        })
    }, [])

    return(
         <section
              className="section7 min-h-screen w-full relative z-20 flex justify-center font-whyte-inktrap bg-white"
            >
              <div className="h-full w-[97vw] max-md:w-full pt-[70px] flex flex-col z-30 relative overflow-hidden max-md:pl-0 pl-[68px] max-md:flex-col">
                    <div className="h-[44vh] w-full border-b border-[#0000002a] p-8 flex items-end justify-center fade-up max-sm:h-full max-sm:p-4">
                        <h1 className="text-[18vw] leading-[18vw] font-black tracking-[-13px] max-md:tracking-normal max-md:text-[16vw] font-hexaframe">KEEPERS</h1>
                    </div>
                    <div className="hidden max-sm:block border-b border-[#0000002a] py-8">
                        <ImageTilt 
                                src="/images/section4-image.png"
                                className="scale-[.9] !object-contain scale-up"
                                tiltOptions={{
                                max: 40,
                                scale: 1.04,
                                perspective: 1200,
                                speed: 2000,
                                }}
                        />
                    </div>
                    <div className="h-[42vh] w-full flex flex-col justify-between py-8 px-12 max-sm:flex-row max-sm:p-4">
                        <span className="extra-sm-text mt-4 max-md:mt-0 max-sm:w-[35%] fade-up">BECOME A KEEPER</span>
                        <span className="font-normal text-[13px] w-1/5 leading-4 block font-whyte-inktrap max-sm:w-[65%] max-md:place-self-end max-md:text-[13px] max-md:h-full fade-up">
                            KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story
                        </span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-40%] flex w-full h-full max-sm:hidden">
                        <ImageTilt 
                            src="/images/section4-image.png"
                            className="scale-[.6] !object-contain scale-up"
                            tiltOptions={{
                            max: 40,
                            scale: 1.04,
                            perspective: 1200,
                            speed: 2000,
                            }}
                        />
                    </div>
              </div>
        </section>
    )
}