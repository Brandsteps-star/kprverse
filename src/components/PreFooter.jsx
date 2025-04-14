import ShuffleText from "../effects/ShuffleText"

export const PreFooter = () => {
    return(
        <section className="prefooter min-h-[50vh] h-full w-full relative z-20 flex justify-center font-whyte-inktrap bg-black text-white">
                <div className="w-full max-md:w-full flex z-30 relative max-md:flex-col overflow-hidden border-b border-[#ffffff2a] max-sm:border-0">
                    <div className="w-1/4 h-full border-r border-[#ffffff2a] max-sm:border-r-0 max-sm:border-b p-8 flex items-end max-sm:w-full">
                        <ShuffleText
                            text={
                                "// INITIALIZING\n NEW FILES IN DATABASE\n\n KAI_53815.JPG\n AUDIO_LOG_2018116.WAV\n\n ACTIVATE CONSOLE FOR ACCESS..."
                            }
                            className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] text-[#ffffff6a]"
                            speed={1}
                        />
                    </div>
                    <div className="w-1/4 h-full border-r border-[#ffffff2a] max-sm:border-r-0 max-sm:border-b p-8 flex flex-col items-start justify-between max-sm:w-full max-sm:gap-6">
                        <ShuffleText
                                text={"Discover More"}
                                className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] uppercase"
                        />
                        <ul className="flex flex-col z-70 font-mono">
                            {
                                ["STORY", "JOURNAL", "MEDIA", "GALLERY", "ABOUT", "CAREER"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="small-text nav-item relative">
                                            <span><ShuffleText text={item} /></span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-1/4 h-full border-r border-[#ffffff2a] max-sm:border-r-0 max-sm:border-b p-8 flex flex-col items-start justify-between max-sm:w-full max-sm:gap-6">
                        <ShuffleText
                                    text={"JOIN THE CONVERSATION"}
                                    className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] uppercase"
                            />
                        <ul className="flex flex-col z-70 font-mono">
                            {
                                ["TWITTER", "DISCORD"].map((item, index) => (
                                    <li key={index}>
                                        <a href="#" className="small-text nav-item relative">
                                            <span><ShuffleText text={item} /></span>
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="w-1/4 h-full border-[#ffffff2a] max-sm:border-r-0 max-sm:border-b p-8 flex flex-col items-start justify-between max-sm:w-full max-sm:gap-6">
                        <ShuffleText
                                        text={"MORE DETAILS"}
                                        className="inline-block w-full whitespace-pre-line break-words font-mono text-[9px] uppercase"
                                />
                        <ul className="flex flex-col z-70 font-mono h-full">
                            <span className="text-[10px] text-[#ffffff6a]">CONTACT US AT</span>
                            <li>
                                <a href="#" className="small-text nav-item relative ">
                                    <span><ShuffleText text="HELLO@KPRVERSE.COM" /></span>
                                </a>
                            </li>
                            <a href="" className="mt-2">
                                <ShuffleText text="DOWNLOAD THE BOOK" className="footer-btn font-mono text-[10px] uppercase border p-4 !pr-[28px] bg-white text-black rounded-sm overflow-hidden" />
                            </a>
                        </ul>
                    </div>
                </div>
        </section>
    )
}