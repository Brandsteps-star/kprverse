import { useState } from "react";
import { Navbar } from "../components/common/Navbar";
import { Sidebar } from "../components/common/Sidebar";
import { MiniSidebar } from "../components/common/MiniSidebar";
import { PreFooter } from "../components/common/PreFooter";
import { Footer } from "../components/common/Footer";
import { Vision } from "../components/ProtocolComponents/Vision";
import { World } from "../components/ProtocolComponents/World";
import { Characters } from "../components/ProtocolComponents/Characters";
import { Portal } from "../components/ProtocolComponents/Portal";
import { Union } from "../components/ProtocolComponents/Union";


const menuItems = [
    { text: "VISION", link: "#vision" },
    { text: "WORLD", link: "#world" },
    { text: "CHARACTERS", link: "#characters" },
    { text: "PROTOCOL", link: "#protocol" },
    { text: "UNION", link: "#union" }
  ]

export const Protocol = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <main className="relative w-full text-white">
            <img src="/images/protocol-bg.jpg" className="fixed w-full h-screen object-cover z-10" alt="" />
            
            
            <Vision />
            <World />
            {/* <Characters />
            <Portal />
            <Union /> */}
            <PreFooter />
            <Footer />
            <div className={`fixed z-50 pointer-events-none max-md:!border-none border border-[#ffffff] max-sm:w-full max-sm:h-full max-sm:rounded-none h-[94vh] w-[97vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent flex flex-col`}>
                <Navbar 
                  setIsSidebarOpen={setIsSidebarOpen} 
                  className="pointer-events-auto"
                  navborderColor="!border-[#ffffff]" 
                  btnColor="!bg-white !text-black"
                  menuColor="!text-white"
                  iconColor="!stroke-white"
                  Menu={menuItems}
                />
                <Sidebar 
                  isSidebarOpen={isSidebarOpen} 
                  setIsSidebarOpen={setIsSidebarOpen} 
                  className="pointer-events-auto"
                />
                <MiniSidebar 
                    className="pointer-events-auto"
                    borderColorProp="!border-[#ffffff]"
                    LogoColorProp="!invert-0"
                    iconColorProp="!bg-white"
                />
            </div>
        </main>
    )
}