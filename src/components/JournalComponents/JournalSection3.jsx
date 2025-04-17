import img from '/images/section3-image.png'
import discordIcon from "/svg/discord-icon.svg"
import twitterIcon from "/svg/twitter-icon.svg"

export const JournalSection3 = () => {
    return(
        <section className="w-full relative z-20 flex flex-col justify-center font-whyte-inktrap">
            <img src={img} alt="" className='absolute w-full h-full' />
            <div className="h-full pt-80 w-[98vw] max-md:w-full pl-[82px] z-30 flex flex-col relative max-sm:pt-0 max-md:pl-0">
                <div className="h-[50vh] w-full border-t border-[#ffffff2a] flex text-white max-sm:flex-col max-sm:h-full">
                    
                    {/* Right */}
                    <div className='h-full w-[74%] border-r border-[#ffffff2a] p-8 max-sm:w-full'>
                        <div className="relative">
                            <span className="dot pl-2 font-mono extra-sm-text absolute top-2 left-2">To be Continued</span>
                            {
                                ["The Keepers World", "is ever evolving."].map((item, index) => (
                                index == 0 ? (
                                    <h3 key={index} className="section-title title uppercase !text-[4rem] !leading-[4rem] max-sm:!text-[1.5rem] max-sm:!leading-[1.8rem] pl-30">
                                    {item}
                                    </h3>
                                ) : (
                                    <h3 key={index} className="section-title title uppercase !text-[4rem] !leading-[4rem] max-sm:!text-[1.5rem] max-sm:!leading-[1.8rem] mt-[-5px]">
                                    {item}
                                    </h3>
                                )
                                ))
                            }
                        </div>
                    </div>

                    {/* Left */}
                    <div className='h-full w-[26%] max-sm:w-full'>
                        <div className='h-[30%] w-full border-b border-[#ffffff2a] flex max-sm:h-full max-sm:border-t'>
                            <div className='w-1/2 h-full border-r border-[#ffffff2a] transition-colors duration-75 hover:border-white hover:border flex-center max-sm:py-8'>
                                <img src={twitterIcon} className="w-6" alt="" />
                            </div>
                            <div className='w-1/2 h-full transition-colors duration-75 hover:border-white hover:border flex-center max-sm:py-8'>
                                <img src={discordIcon} className="w-6" alt="" />
                            </div>
                        </div>
                        <div className='h-[70%] w-full p-8 flex items-end max-sm:hidden'>
                            <span className='text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]'>
                                There is the life you have, and there is the life you want. <br/>
                                The difference? The choices you make, and the calls you answer.
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}