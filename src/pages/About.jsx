import { useState } from "react";
import { PreFooter } from "../components/common/PreFooter";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { Sidebar } from "../components/common/Sidebar";
import { MiniSidebar } from "../components/common/MiniSidebar";
import { AboutSection1 } from "../components/AboutComponents/AboutSection1";
import { AboutSection2 } from "../components/AboutComponents/AboutSection2";

const menuItems = []
export const About = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="relative w-full">
      <AboutSection1 />
      <AboutSection2 />
      <PreFooter />
      <Footer />
      <div
        className={`fixed z-50 pointer-events-none max-md:!border-none border border-[#0000002a] max-sm:w-full max-sm:h-full max-sm:rounded-none h-[94vh] w-[97vw] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-transparent flex flex-col`}
      >
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          className="pointer-events-auto"
          navborderColor="!border-[#0000002a]"
          btnColor="!bg-black !text-white"
          menuColor="!text-black"
          iconColor="!stroke-black"
          Menu={menuItems}
        />
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          className="pointer-events-auto"
        />
        <MiniSidebar
          className="pointer-events-auto"
          borderColorProp="!border-[#0000002a]"
          LogoColorProp="!invert"
          iconColorProp="!bg-black"
        />
      </div>
    </main>
  );
};
