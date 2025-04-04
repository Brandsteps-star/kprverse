import { forwardRef } from "react";

export const Section3 = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="section3 min-h-screen w-full relative z-20 flex justify-center font-whyte-inktrap"
    >
      <div className="h-full w-[97vw] max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col">
        <div className="relative z-20 bg-black/60 p-8 rounded-lg backdrop-blur-sm max-w-3xl">
          <h2 className="text-[44px] leading-[44px] max-md:text-[30px] max-sm:text-[23px] max-sm:leading-[26px] max-sm:tracking-0 font-black tracking-[-2px] text-white mb-6">
            EXPERIENCE THE WORLD
          </h2>
          <p className="text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt corrupti, iure impedit eveniet pariatur quis reiciendis, repellat neque qui placeat aspernatur! Ipsam nam, nihil atque sed facilis, necessitatibus maxime aspernatur laboriosam quos perferendis at mollitia nobis.
          </p>
        </div>
      </div>
    </section>
  );
});

// Add display name for DevTools
Section3.displayName = "Section3";