import { useState } from "react";
import { PreFooter } from "../components/common/PreFooter";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { Sidebar } from "../components/common/Sidebar";
import { MiniSidebar } from "../components/common/MiniSidebar";

const menuItems = []
export const Gallery = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="relative w-full">
      <img
        src="/images/protocol-bg.jpg"
        className="fixed w-full h-screen object-cover z-10"
        alt=""
      />
      <h1 className="h-screen z-20 relative text-white pt-60 pl-60 font-hexaframe text-6xl uppercase">
        Gallery
      </h1>

      <PreFooter />
      <Footer />
      <div
        className={`fixed z-50 pointer-events-none max-md:!border-none border border-[#ffffff2a] max-sm:w-full max-sm:h-full max-sm:rounded-none h-[94vh] w-[97vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent flex flex-col`}
      >
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          className="pointer-events-auto"
          navborderColor="!border-[#ffffff2a]"
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
          borderColorProp="!border-[#ffffff2a]"
          LogoColorProp="!invert-0"
          iconColorProp="!bg-white"
        />
      </div>
    </main>
  );
};
