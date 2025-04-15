import MusicBarIcon from "../effects/MusicBarIcon"
import ShuffleText from "../effects/ShuffleText"
import opensea from '../../public/svg/opensea.svg';
import logo from '../../public/images/logo.png'

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, className = "" }) => {
    return(
        
        // isSidebarOpen && 
        // ( 
            <main className={`${className} ${isSidebarOpen ? 'left-0' : 'left-[-100%]'} w-full h-full fixed top-0 z-70 transition-all duration-500 ease-in-out max-sm:p-0`}>
                <section className="flex bg-black max-w-fit w-full h-full rounded-lg text-white max-sm:rounded-none max-sm:max-w-full">

                    {/* Left side */}
                    <div className="pt-8 flex flex-col h-full justify-between w-[500px] max-sm:w-full">

                        {/* Left Top */}
                        <div className="flex items-start gap-16 px-6 max-sm:flex-col">
                            <span className="extra-sm-text">
                                <ShuffleText text="Discover" />
                            </span>
                            <ul className="font-whyte-inktrap flex flex-col gap-1">
                                {
                                    ["STORY", "PROTOCOL", "JOURNAL", "MEDIA", "GALLERY", "ABOUT"].map((item, index) => (
                                        index == 0 ? (
                                            
                                                <a key={index} href="" className="sidebar-item active">
                                                    <ShuffleText className="font-black" text={item} />
                                                </a>
                                           
                                        ) : (
                                            
                                                <a key={index} href="" className="sidebar-item">
                                                    <ShuffleText className="font-black" text={item} />
                                                </a>
                                           
                                        )
                                    ))
                                }
                            </ul>
                        </div>
                        
                        {/* Left Bottom */}
                        <div className="w-full mt-4">
                            <div className="flex items-start gap-20 border-t-[1px] border-[#FFFFFF33] p-4">
                                <span className="extra-sm-text">
                                    <ShuffleText text="Connect" />
                                </span>
                                <div className="flex flex-col mt-[-7px]">
                                    {
                                        ["TWITTER", "DISCORD"].map((item, index) => (
                                            <a href="" key={index}>
                                                <span className="small-text">
                                                    <ShuffleText text={item} />
                                                </span>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="flex items-center gap-20 border-t-[1px] border-[#FFFFFF33] p-4">
                                <span className="extra-sm-text">
                                    <ShuffleText text="BUY ON" />
                                </span>
                                <div className="flex flex-col">
                                    <a href="/" className="flex items-center gap-1">
                                        <img src={opensea} alt="opeasea" width="16" />
                                        <span className="extra-sm-text">
                                            <ShuffleText text="OPENSEA" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-20 border-t-[1px] border-[#FFFFFF33] p-4">
                                <span className="extra-sm-text">
                                    <ShuffleText text="US-EN" />
                                </span>
                                <div className="flex flex-col">
                                    <a href="">
                                        <span className="extra-sm-text">
                                            <ShuffleText text="© 2025" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex-between flex-col h-full w-[67px] border-l-[1px]  border-[#FFFFFF33] pb-6">
                        <button onClick={() => setIsSidebarOpen(false)} class="group relative cursor-pointer border-b-[1px] border-[#FFFFFF33] w-full py-4 px-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12.82 12.28"
                                class="w-4 h-4 stroke-current text-white"
                            >
                                <path
                                d="M12.82 12.16 8.34 7.91M0 0l4.56 4.32"
                                class="stroke"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-dasharray="6.2283px, 6.3283px"
                                ></path>
                                <path
                                d="M.34 12.28 12.54.22"
                                class="stroke2"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                ></path>
                            </svg>
                        </button>
                        <img src={logo} alt="logo" />
                        <MusicBarIcon color="white" />
                    </div>
                </section>
            </main>
        )
    // )
}