import { useState } from "react";
import { Footer } from "../components/common/Footer";
import { MiniSidebar } from "../components/common/MiniSidebar";
import { Navbar } from "../components/common/Navbar";
import { PreFooter } from "../components/common/PreFooter";
import { Sidebar } from "../components/common/Sidebar";
import { JournalSection1 } from "../components/JournalComponents/JournalSection1";
import { JournalSection2 } from "../components/JournalComponents/JournalSection2";
import { JournalSection3 } from "../components/JournalComponents/JournalSection3";

const menuItems = [
  { text: "VISION", link: "#vision" },
  { text: "WORLD", link: "#world" },
  { text: "CHARACTERS", link: "#characters" },
  { text: "PROTOCOL", link: "#protocol" },
  { text: "UNION", link: "#union" }
]

export const Journal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <main className="relative w-full overflow-x-hidden">

      <JournalSection1 />
      <JournalSection2 />
      <JournalSection3 />
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
