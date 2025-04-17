import { useState } from "react"
import ShuffleText from "../../effects/ShuffleText"
import ImageTilt from "../../effects/ImageTilt"

const JournalItems = ["ALL NEWS", "UPDATES", "COMMUNITY", "FINDERS LAB"] 

export const JournalSection2 = () => {
    const [selectedText, setSelectedText] = useState(0);
    return(
        <section className="w-full relative z-20 flex flex-col justify-center font-whyte-inktrap">
            <div className="h-full w-[98vw] max-md:w-full pl-[82px] z-30 flex flex-col relative max-sm:pt-0  max-md:pl-0">
                <div className="flex w-full h-full mt-8 border-b border-[#0000002a] mb-20 max-sm:flex-col">
                    {/* Left Side */}
                    <div className="h-full w-[50%] flex flex-col max-sm:w-full border-r border-[#0000002a]">
                        <div className="h-[50vh] w-full border-b border-[#0000002a] p-8 max-sm:h-full">
                            <div className="flex items-start justify-between">
                                <ShuffleText text="32 STORIES" className="extra-sm-text cursor-default" />
                                <div>
                                    {
                                        JournalItems.map((item, index) => (
                                            <h2 key={index} 
                                                className={`text-[2rem] leading-[1.8rem] font-black cursor-pointer tracking-tight 
                                                ${ selectedText === index 
                                                    ? "text-black" 
                                                    : "text-[#cccccc]"
                                                }`}
                                                onClick={() => setSelectedText(index)}
                                            >
                                                {item}
                                            </h2>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="h-[80vh] w-full relative group cursor-pointer max-sm:h-full">
                            <div className="absolute h-full inset-0 rounded-md opacity-0 transition-all duration-200 group-hover:bg-black group-hover:opacity-100 group-hover:scale-[1.01]"></div>
                            
                                <div className="w-full h-full p-6 flex flex-col relative z-10  group-hover:text-white transition-colors duration-200">
                                <div className="flex items-start justify-between mb-4">
                                    <ShuffleText text="UPDATES" className="extra-sm-text cursor-default" />
                                    <ShuffleText text="01.04.25" className="extra-sm-text cursor-default" />
                                </div>
                                <h2 className="text-[2rem] leading-[1.8rem] max-sm:text-[1.5rem] font-black cursor-pointer tracking-tight mb-8">KPR Narrative Ruleset V0.5</h2>
                                    <ImageTilt 
                                        src="/images/protocol-bg.jpg"
                                        className="!h-[24rem] max-sm:!h-[20rem] w-full"
                                        tiltOptions={{
                                        max: 40,
                                        scale: 1,
                                        perspective: 1200,
                                        speed: 6000,
                                        }}
                                    />
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="h-full w-[50%] flex flex-col max-sm:w-full">
                        <div className="h-[80vh] w-full relative group border-b border-[#0000002a] cursor-pointer max-sm:h-full max-sm:border-y">
                                <div className="absolute h-full inset-0 rounded-md opacity-0 transition-all duration-200 group-hover:bg-black group-hover:opacity-100 group-hover:scale-[1.01]"></div>
                                
                                    <div className="w-full h-full p-6 flex flex-col relative z-10  group-hover:text-white transition-colors duration-200">
                                    <div className="flex items-start justify-between mb-4">
                                        <ShuffleText text="UPDATES" className="extra-sm-text cursor-default" />
                                        <ShuffleText text="01.04.25" className="extra-sm-text cursor-default" />
                                    </div>
                                    <h2 className="text-[2rem] leading-[1.8rem] max-sm:text-[1.5rem] font-black cursor-pointer tracking-tight mb-8">KPR Narrative Ruleset V0.5</h2>
                                        <ImageTilt 
                                            src="/images/protocol-bg.jpg"
                                            className="!h-[24rem] max-sm:!h-[20rem] w-full"
                                            tiltOptions={{
                                            max: 40,
                                            scale: 1,
                                            perspective: 1200,
                                            speed: 6000,
                                            }}
                                        />
                                </div>
                            </div>
                            <div className="h-[50vh] w-full max-sm:hidden"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}