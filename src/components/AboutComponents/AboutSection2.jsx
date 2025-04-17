import ImageTilt from "../../effects/ImageTilt"
import ShuffleText from "../../effects/ShuffleText"
import { useState } from "react"
import { TeamBox } from "../common/TeamBox";

export const AboutSection2 = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    return(
        <section className="w-full relative z-20 flex flex-col justify-center font-whyte-inktrap bg-purple-400 overflow-hidden">
            <div className="h-full w-[98vw] max-md:w-full pl-[82px] z-30 flex flex-col relative max-sm:pt-0 max-md:pl-0">

                <div className="h-[50vh] w-full border-b border-[#0000002a] flex max-sm:flex-col max-sm:h-full">
                    <div className="w-1/2 h-full p-8 border-r border-[#0000002a] max-sm:w-full">
                        <ShuffleText
                            text={"// WHAT KPR IS ABOUT"}
                            className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] uppercase"
                        />
                    </div>
                    <div className="w-1/2 h-full p-8 max-sm:w-full">
                        <p className="text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] w-2/3 max-sm:w-full">
                            KPR is reimagining how stories are being told and experienced.
                            <br/>
                            <br/>
                            You, the Keepers, will breathe life into this world, explore its secrets, and forge its future. Together, we will empower the very essence of Web3, which is technology, community and culture.
                            <br/>
                            <br/>
                            Are you ready to be a Keeper?
                        </p>
                    </div>
                </div>

                <div className="h-full w-full flex-center border-b border-[#0000002a] py-12">
                    <h1 className="font-hexaframe text-[30vw] leading-[27vw] tracking-[-30px] max-sm:tracking-[-4px] mt-[-8vw] py-4">
                        TEAM
                    </h1>
                </div>

                <div 
                    className="h-[50vh] w-full flex relative mb-20 border-b border-[#0000002a]"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {[0, 1, 2, 3].map((index) => (
                        <TeamBox 
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}