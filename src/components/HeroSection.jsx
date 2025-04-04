export const HeroSection = () => {
    return(
        <section className="hero-section relative h-screen z-20 pt-24 px-8 pl-28  max-md:px-2 max-md:pt-16 w-full text-white">
            <div className="flex flex-col justify-between gap-8 relative z-30">
                <span className="w-[17rem] font-normal text-[13px] leading-4 block font-whyte-inktrap max-sm:place-self-end max-sm:text-[11px] max-sm:h-full">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.
                </span>
                <div className="place-self-end relative gap-0 w-full h-[70vh] flex items-end justify-end">
                    <div className="flex items-start absolute top-0 left-1/2 translate-x-[-50%] max-sm:top-[78%]">
                        <span className="font-mono extra-sm-text mt-4 max-sm:mt-0">01K</span>
                        <h1 className="text-[12vw] leading-[12vw] font-black font-whyte-inktrap tracking-[-13px] max-sm:tracking-normal max-sm:text-[13vw]">KEEP.</h1>
                    </div>
                    <div className="flex items-start absolute top-[9.5vw] right-0 max-sm:top-[85%]">
                        <span className="font-mono extra-sm-text mt-4 max-sm:mt-0">02K</span>
                        <h1 className="text-[12vw] leading-[12vw] font-black font-whyte-inktrap tracking-[-13px] max-sm:tracking-normal max-sm:text-[13vw]">PROTECT.</h1>
                    </div>
                    <div className="flex items-start absolute top-[19vw] left-0 max-sm:top-[92%]">
                        <span className="font-mono extra-sm-text mt-4 max-sm:mt-0">03K</span>
                        <h1 className="text-[12vw] leading-[12vw] font-black font-whyte-inktrap tracking-[-13px] max-sm:tracking-normal max-sm:text-[13vw]">REIMAGINE.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}