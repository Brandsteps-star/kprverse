import JournalImg from "/images/journal-bg.png"
export const JournalSection1 = () => {
    return(
        <section className="w-full relative z-20 flex flex-col justify-center font-whyte-inktrap">
        <div className="h-full w-[97vw] max-md:w-full pl-[68px] pt-[70px] z-30 flex flex-col relative max-sm:pt-0  max-md:pl-0">
        
        {/* First Part */}
        <div className="w-full flex flex-col justify-between pb-12 max-sm:h-full max-sm:pb-0">
        {/* Top part */}
        <div className="flex flex-col gap-4 px-4 max-sm:mt-16 max-sm:justify-center max-sm:flex-col-reverse max-sm:gap-40 max-sm:mb-4">
          <h1 className="font-hexaframe text-[17vw] leading-[17vw] tracking-[-12px] text-center max-sm:tracking-[-4px]">
            JOURNAL
          </h1>
          <div className="flex items-center !justify-between mx-8 max-sm:m-0">
            <span className="extra-sm-text max-sm:hidden">DISCOVER WHAT'S NEW IN THE KEEPERS WORLD</span>
            <span className="extra-sm-text hidden max-sm:flex">DISCOVER WHAT'S NEW IN <br/>THE KEEPERS WORLD</span>
            <span className="extra-sm-text">LATEST ARTICLE</span>
          </div>
        </div>
        </div>
        </div>
            <img src={JournalImg} alt="" />
    </section>
    )
}