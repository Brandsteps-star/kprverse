import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { MiniSidebar } from "./components/MiniSidebar";

export const Protocol = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return(
        <main className="relative w-full">
            <img src="/images/protocol-bg.jpg" className="fixed w-full h-screen object-cover z-10" alt="" />
            <div className={`fixed z-50 pointer-events-none max-md:!border-none border border-[#ffffff2a] max-sm:w-full max-sm:h-full max-sm:rounded-none h-[94vh] w-[97vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent flex flex-col`}>
                        <Navbar 
                          setIsSidebarOpen={setIsSidebarOpen} 
                          className="pointer-events-auto"
                          navborderColor="!border-[#ffffff2a]" 
                          btnColor="!bg-white !text-black"
                          menuColor="!text-white"
                          iconColor="!stroke-white"
                        />
                        <Sidebar 
                          isSidebarOpen={isSidebarOpen} 
                          setIsSidebarOpen={setIsSidebarOpen} 
                          className="pointer-events-auto"
                        />
                        <MiniSidebar className="pointer-events-auto"  />
                      </div>
        </main>
    )
}