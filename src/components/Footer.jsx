import ShuffleText from "../effects/ShuffleText";

export const Footer = () => {
  return (
    <section className="footer min-h-screen h-full w-full relative z-20 flex flex-col justify-end items-center overflow-hidden pb-4 font-whyte-inktrap bg-black text-white max-sm:min-h-full max-sm:pt-20">
        <h1 className="text-[600px] leading-[650px] font-black font-hexaframe max-md:tracking-normal max-md:text-[28vw] max-sm:leading-[28vw]">
          KPR
        </h1>
        <ul className="flex gap-8 items-center font-mono">
          {["PRIVACY POLICY", "TERMS OF SERVICE", "LEGAL LICENSE"].map(
            (item, index) => (
              <li key={index}>
                <a href="#" className="text-[9px] nav-item relative">
                  <span>
                    <ShuffleText text={item} />
                  </span>
                </a>
              </li>
            )
          )}
        </ul>
    </section>
  );
};
