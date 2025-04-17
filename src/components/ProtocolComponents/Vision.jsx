const terminalText = [
    "//INITIALIZING",
    "KEEPER STORY",
    "",
    "LOADING...[47%]",
    "",
    "LOCATION_DATA",
    "CHARACTER_ATTRIBUTES",
    "KLMX TRANSMISSIONS",
];

export const Vision = () => {
  return (
    <section className="w-full relative z-20 flex justify-center font-whyte-inktrap" id="vision">
      <div className="h-full w-[97vw] max-md:w-full pl-[68px] pt-[70px] z-30 flex flex-col relative max-sm:pt-0  max-md:pl-0">
        
        {/* First Part */}
        <div className="w-full min-h-[86vh] flex flex-col justify-between pb-12 max-sm:h-full max-sm:pb-0">
        {/* Top part */}
        <div className="flex flex-col gap-4 px-4 max-sm:h-screen max-sm:justify-center">
          <h1 className="font-hexaframe text-[15.5vw] leading-[15.5vw] tracking-[-12px] text-center max-sm:tracking-[-4px]">
            PROTOCOL
          </h1>
          <div className="flex items-center !justify-between ml-4">
            <span className="extra-sm-text">FUNDAMENTAL VISION</span>
            <span className="extra-sm-text">KEEP. PROTECT. REIMAGINE</span>
          </div>
        </div>

        {/* Bottom part */}
        <span className="block w-1/4 max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] pl-8 max-sm:hidden">
            Today we face many existential threats to our being, a crossroads where we must unite and find a better path forward. With each new day, we rise together as Keepers and choose life by seeing the beauty of our connections with one another and the power of our collective action.
        </span>
        </div>

        {/* Second Part */}
        <div className="w-full h-[50vh] max-sm:h-full border-y border-[#ffffff33] p-8 max-sm:p-4">
            {terminalText.map((line, index) => (
                <p className="block max-sm:w-full text-[6px] leading-[10px] font-mono" key={index}>{line}</p>
            ))}
        </div>

        {/* Third Part */}
        <div className="w-full h-[70vh] border-b border-[#ffffff33] flex max-sm:h-full">
            <div className="w-[75%] border-r border-[#ffffff33] p-8 max-sm:p-4 flex flex-col justify-between max-sm:w-full max-sm:gap-12">
                <div>
                    <span className="extra-sm-text">CHAPTER 01</span>
                    <h2 className="text-[6rem] leading-[6rem] tracking-tighter font-whyte-inktrap font-black max-sm:text-[3rem] max-sm:leading-[3rem]">VISION</h2>
                </div>
                <span className="block w-[45%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                    KPR will empower the most talented creators of today with the technology of tomorrow, so that together we can face the challenges of the modern world. We believe that Web3 is a new paradigm and our goal is to bridge art, storytelling, gamification and design to reimagine our ability to change the world and foster a collective vision for a better future.
                </span>
            </div>
            <div className="w-[25%] max-sm:hidden"></div>
        </div>

        {/* Fourth Part */}
        <div className="w-full h-screen border-b border-[#ffffff33] flex max-sm:h-full">
            <div className="w-[50%] max-sm:hidden"></div>
            <div className="w-[50%] border-l border-[#ffffff33] flex flex-col justify-between max-sm:w-full">
                <div className="border-b border-[#ffffff33] p-12 h-[70%] flex flex-col justify-center max-sm:p-4">
                    <h2 className="text-[1.5rem] leading-[1.5rem] font-whyte-inktrap font-black mb-4">What Is KPR</h2>
                    <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] mb-4">
                        KPR is a collaborative, open world built through the power of decentralised co-IP creation. We believe that gamification is one of the most effective ways to build long-term IP and a loyal audience; and that storytelling is the most powerful tool humanity has to understand and respond to the existential questions of every age.
                    </span>        
                    <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px] mb-4">            
                        Our aim is to provide the highest quality activations while retaining a grassroots ethos, showcasing immersive and compelling experiences across multiple media and platforms that inspire those who interact with them.
                    </span>
                    <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">            
                        By pushing the boundaries of what is considered possible in Web3, we can bring together the best and most talented people to be part of the cutting edge of digital culture - including leading creators, thinkers, designers, brands and, most importantly, YOU.
                    </span>
                </div>
                <div className="p-12 h-[30%] flex flex-col justify-center max-sm:p-4 max-sm:h-full">
                    <h2 className="text-[1.5rem] leading-[1.5rem] font-whyte-inktrap font-black mb-4">Mission</h2>
                    <span className="block w-[65%] max-sm:w-full text-[13px] leading-[16px] max-sm:text-[11px] max-sm:leading-[13px]">
                        Build an evolving underground world of play where art, storytelling and entertainment combine to create emergent narratives and immersive experiences that go beyond the confines of traditional media.
                    </span>    
                </div>
            </div>
        </div>
        
        {/* Fifth Part */}
        <div className="w-full h-[40vh] border-b border-[#ffffff33] flex max-sm:hidden">
            <div className="w-[20%] border-r border-[#ffffff33] relative">
                <div className="absolute top-[-52px] left-[125px] rotate-[44deg] h-[142%] w-[1px] bg-[#ffffff33]"></div>
            </div>
            <div className="w-[80%]"></div>
        </div>
      </div>
    </section>
  );
};
