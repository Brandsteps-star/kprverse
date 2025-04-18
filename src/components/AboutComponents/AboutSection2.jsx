import teamLogo from "/svg/team-square.svg"
import ShuffleText from "../../effects/ShuffleText"
import { useState } from "react"
import { TeamBox } from "../common/TeamBox";

const TeamData = [
    {name: "END", role: "CO-FOUNDER", number: "001"},
    {name: "ADVENTURE", role: "CO-FOUNDER", number: "002"},
    {name: "NFDOGGO", role: "LEGAL ADVISOR", number: "003"},
    {name: "NOISEWAR", role: "PRODUCT LEAD", number: "004"},
    {name: "LAFFY", role: "DESIGN DIRECTOR", number: "005"},
    {name: "FEATURESIGHT", role: "LORE MASTER", number: "006"},
    {name: "KHOA VIET", role: "PRINCIPAL ARTIST", number: "007"},
    {name: "IKNOWGOOD", role: "COMMUNITY MANAGER", number: "008"},
    {name: "ANDIAMO", role: "LORE DESIGNER", number: "009"},
    {name: "MINH HONG", role: "ARTIST", number: "010"},
] 

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
                    className="h-[50vh] w-full flex relative border-b border-[#0000002a] max-sm:h-full max-sm:flex-col"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <TeamBox 
                        index={0}
                        hoveredIndex={hoveredIndex} 
                        setHoveredIndex={setHoveredIndex}
                        name={TeamData[0].name}
                        role={TeamData[0].role}
                        number={TeamData[0].number}
                    />
                    
                    <div className="w-1/4 h-full relative border-r border-[#0000002a] max-sm:hidden"></div> 
                    
                    {[1, 2].map((index) => (
                        <TeamBox 
                            key={index}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            name={TeamData[index].name}
                            role={TeamData[index].role}
                            number={TeamData[index].number}
                        />
                    ))}
                </div>
               
                <div 
                    className="h-[50vh] w-full flex relative border-b border-[#0000002a] max-sm:h-full max-sm:flex-col"
                    onMouseLeave={() => setHoveredIndex(null)}
                >                
                        <div className="w-2/4 h-full relative border-r border-[#0000002a] flex flex-col items-start justify-between p-6 max-sm:w-full max-sm:min-h-[30vh] max-sm:border-b">
                            <div className="">
                                <h2 className="uppercase text-[1rem] leading-[1rem] font-bold">
                                    Join the Keep. Find your voice.<br/>
                                    Your indelible mark. Our story.
                                </h2>
                                <ShuffleText
                                    text={"// LET’S FORGE THE FUTURE TOGETHER"}
                                    className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] uppercase"
                                />
                            </div>
                            <a href="" className="mt-2">
                                <ShuffleText text="SEE OPEN POSITIONS" className="font-mono text-[10px] uppercase border p-4  bg-transparent text-black rounded-sm overflow-hidden" />
                            </a>
                        </div>
                        <TeamBox 
                            index={3}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            name={TeamData[3].name}
                            role={TeamData[3].role}
                            number={TeamData[3].number}
                        />
                        <div className="w-1/4 h-full relative border-r border-[#0000002a] flex-center max-sm:!hidden">
                            <img src={teamLogo} alt={teamLogo} />
                        </div>
                </div>

                <div 
                    className="h-[50vh] w-full flex relative border-b border-[#0000002a] max-sm:h-full max-sm:flex-col"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <TeamBox 
                        index={4}
                        hoveredIndex={hoveredIndex} 
                        setHoveredIndex={setHoveredIndex}
                        name={TeamData[4].name}
                        role={TeamData[4].role}
                        number={TeamData[4].number}
                    />
                    
                    <div className="w-1/4 h-full relative border-r border-[#0000002a] max-sm:hidden"></div> 
                    
                    {[5, 6].map((index) => (
                        <TeamBox 
                            key={index}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            name={TeamData[index].name}
                            role={TeamData[index].role}
                            number={TeamData[index].number}
                        />
                    ))}
                </div>
                
                <div 
                    className="h-[50vh] w-full flex relative border-b border-[#0000002a] max-sm:h-full max-sm:flex-col"
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {[7, 8].map((index) => (
                        <TeamBox 
                            key={index}
                            index={index}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            name={TeamData[index].name}
                            role={TeamData[index].role}
                            number={TeamData[index].number}
                        />
                    ))}

                    <div className="w-1/4 h-full relative border-r border-[#0000002a] flex-center max-sm:!hidden">
                        <img src={teamLogo} alt={teamLogo} />
                    </div>

                    <TeamBox 
                        index={9}
                        hoveredIndex={hoveredIndex} 
                        setHoveredIndex={setHoveredIndex}
                        name={TeamData[9].name}
                        role={TeamData[9].role}
                        number={TeamData[9].number}
                    />
                    
                </div>

            </div>
        </section>
    )
}