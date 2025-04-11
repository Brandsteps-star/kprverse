import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ImageTilt from "../effects/ImageTilt"

gsap.registerPlugin(ScrollTrigger)

export const AboutSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-section .section-title", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
        },
      })

      gsap.from(".about-section .image-tilt", {
        scale:0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 5%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if(window.innerWidth < 768){
    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 0%",
        scrub: true,
      },
    }).to(".left-side", {
      opacity: 0,
      ease: "power3.inOut",
    });
  }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="about-section min-h-screen w-full relative z-20 flex justify-center font-whyte-inktrap"
    >
      <div className="h-full w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col">
        {/* Left Side */}
        <div className="relative flex flex-col max-md:w-full w-[62%] h-[86vh]">
          {/* Left Side Top */}
          <div className="px-6 py-8 max-md:p-2 text-black border-b border-[#0000002a]">
            <div className="relative">
              <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">001</span>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black pl-20 tracking-[-2px]">
                A FAMILIAR WORLD... SET
              </h3>
              <h3 className="section-title text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black mt-[-5px] tracking-[-2px]">
                ON A DIFFERENT PATH
              </h3>
            </div>
          </div>

          {/* Left Side Bottom */}
          <div className="p-8 flex flex-col justify-between max-sm:justify-end gap-4 h-full left-side">
            <div className="w-1/4 max-sm:w-2/4 image-tilt">
              <ImageTilt
                src="./images/trailer-side-media.webp"
                alt="tailer side media"
                tiltOptions={{
                  max: 20,
                  scale: 1,
                  perspective: 1200,
                  speed: 400,
                }}
              />
            </div>
            <h6 className="block w-1/4 max-sm:w-full text-[13px] leading-[16px] section-title">
              Isolated within the New Eden safe zone, you witness humanity struggling to avoid descending into chaos.
            </h6>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[37%] h-[86vh] border-l border-[#0000002a] p-4 max-md:hidden">
          <div className="h-full w-full flex items-center justify-between p-4 image-tilt">
            <ImageTilt
              src="./images/about-image.png"
              alt="About Image"
              tiltOptions={{
                max: 20,
                scale: 1,
                perspective: 1200,
                speed: 400,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
