export const HeroSection = () => {
    return(
        <section className="hero-section relative h-screen z-20 pt-24 px-8 pl-28  max-md:px-2 max-md:pt-16 w-full text-white">
            <div className="flex flex-col justify-between gap-8 pb-8 max-sm:pb-16 max-sm:pr-0 pr-8 relative z-30 h-full mb-12">
                <span className="w-[17rem] font-normal text-[13px] leading-4 block font-whyte-inktrap max-md:place-self-end max-md:text-[11px] max-md:h-full">
                    KPR is a brand that focuses on collective narrative and empowering storytellers. Keepers is a living story, an uncharted world waiting to be explored, to be imagined.
                </span>
                <div className="relative gap-0 w-full flex flex-col items-end max-sm:items-start justify-end mt-auto">
                    <div className="flex items-start">
                        <span className="number max-md:mt-0">01K</span>
                        <h1 className="hero-heading max-md:!tracking-normal max-md:!text-[13vw]">KEEP.</h1>
                    </div>
                    <div className="flex self-end">
                        <span className="number max-md:mt-0">02K</span>
                        <h1 className="hero-heading max-md:!tracking-normal max-md:!text-[13vw]">PROTECT.</h1>
                    </div>
                    <div className="flex items-start pl-4">
                        <span className="number max-md:mt-0">03K</span>
                        <h1 className="hero-heading max-md:!tracking-normal max-md:!text-[13vw]">REIMAGINE.</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}