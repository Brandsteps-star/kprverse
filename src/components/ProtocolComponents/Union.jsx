import discordIcon from "/svg/discord-icon.svg"
const terminalText = [
    "Time is permanent, dates are simply a matter of record keeping.",
    "The former causes the latter, but the latter is powerless against the former.",
];

export const Union = () => {
    return(
        <section className="w-full relative z-20 flex justify-center font-whyte-inktrap">
            <div className="h-full w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] z-30 flex flex-col relative">
        
                {/* First Part */}
                <div className="w-full h-[70vh] border-b border-[#ffffff33] flex max-sm:h-full">
                <div className="w-[75%] border-r border-[#ffffff33] p-8 flex flex-col justify-between max-sm:w-full max-sm:w-full max-sm:gap-12  max-sm:p-4">
                    <div>
                        <span className="extra-sm-text">CHAPTER 05</span>
                        <h2 className="text-[6rem] leading-[6rem] tracking-tighter font-whyte-inktrap font-black max-sm:text-[3rem] max-sm:leading-[3rem]">
                            UNION
                        </h2>
                    </div>
                    <div>
                        <span className="block w-[45%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                            Whether you are a content creator, community builder, self-taught expert or someone who enjoys telling stories in any medium… we are here to welcome you in New Eden and unleash your creativity! A new world has been born and we are all part of creating its destiny.
                        </span>
                    </div>
                </div>
                <div className="w-[25%] max-sm:hidden"></div>
                </div>

                {/* Second Part */}
                <div className="w-full h-full border-b border-[#ffffff33] flex">
                <div className="w-[50%] max-sm:hidden"></div>
                <div className="w-[50%] border-l border-[#ffffff33] flex flex-col justify-between max-sm:w-full">
                    <div className="border-b border-[#ffffff33] p-12 flex flex-col justify-center max-sm:p-4">
                        <span className="extra-sm-text mb-4">In Progress</span>
                        <h2 className="text-[1.5rem] leading-[1.5rem] font-whyte-inktrap font-black mb-4">
                            KLMx Radio
                        </h2>
                        <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] mb-4">
                            KLMx is our weekly broadcast that shines a light on talented KPR community members, events happening in our world and updates for the project. In addition to these broadcasts, if you are a musician and want to explore New Eden through sound, we would love to highlight your work on the KLMx Radio Station.
                        </span>
                        <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                            With over 50 episodes broadcast so far to thousands of listeners, KLMx is a beacon that spreads the message and mission of KPR throughout Web3.
                        </span>
                    </div>
                    <div className="border-b border-[#ffffff33] p-12 flex flex-col justify-center max-sm:p-4">
                        <span className="extra-sm-text mb-4">IN PROGRESS</span>
                        <h2 className="text-[1.5rem] leading-[1.5rem] font-whyte-inktrap font-black mb-4">
                            Narrative Ruleset
                        </h2>
                        <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] mb-4">
                            At the core of the KPR experience is your ability to enter into a shared world of imagination and limitless possibility. Our Narrative Ruleset (available in our Discord) is a living document designed to facilitate collective storytelling, in a manner similar to traditional roleplaying games but with particular aspects of Web3 and NFT ownership included in its design.
                        </span>
                        <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                            Scenarios will be run multiple times a month, tailored to small groups of Keepers so that your unique stories can be told. Join us on Discord to begin your journey!
                        </span>
                    </div>
                    <div className="border-b border-[#ffffff33] p-12 flex flex-col justify-center max-sm:p-4">
                        <span className="extra-sm-text mb-4">Completed</span>
                        <h2 className="text-[1.5rem] leading-[1.5rem] font-whyte-inktrap font-black mb-4">
                            Wallpaper Generator
                        </h2>
                        <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                            Our community tool (Focus Art on Discord) generates wallpapers and banners personalized to your Keeper(s), so that you can share the IP that you own in whatever medium you choose. You’ll also find a collective of creators in our community ready to help you bring your Keepers to life in new and exciting ways.
                        </span>
                    </div>
                </div>
                </div>

                {/* Third Part */}
                <div className="w-full h-[40vh] border-b border-[#ffffff33] flex max-sm:h-full">
                    <div className="w-[75%] p-8 max-sm:w-1/2">
                        {terminalText.map((line, index) => (
                            <p className="block max-sm:w-full text-[6px] leading-[10px] font-mono uppercase" key={index}>{line}</p>
                        ))}
                    </div>
                    <div className="w-[25%] border-l border-[#ffffff33] relative flex-center max-sm:w-1/2">
                        <img src={discordIcon} className="w-16" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}