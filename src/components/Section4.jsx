import ImageTilt from "../effects/ImageTilt"

export const Section4 = () => {
    return(
        <section
              className="section4 mt-[200px] w-full relative z-20 flex justify-center font-whyte-inktrap overflow-hidden"
            >
              <div className="w-[97vw] max-md:w-full max-md:pl-0 pl-[68px] pt-[70px] flex items-start z-30 relative max-md:flex-col">
                    <div className="flex items-center justify-center w-[20vw] h-full ">
                        <div className="rotate-270 h-[20vw]  flex flex-col">
                            <h1 className="text-[20vw] leading-[20vw] font-black">10K</h1>
                            <span className="mt-[-20px] font-mono small-text flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" id="Layer_1" data-name="Layer 1" viewBox="0 0 7.21 5.08"><path d="M0,1.51a.26.26,0,0,1,.43-.19L3.05,3.6a.26.26,0,0,1,0,.39L.44,6.27A.26.26,0,0,1,0,6.07Z" transform="translate(-0.01 -1.25)"/><path d="M4.09,1.51a.26.26,0,0,1,.44-.19L7.13,3.6a.26.26,0,0,1,0,.39L4.53,6.27a.27.27,0,0,1-.44-.2Z" transform="translate(-0.01 -1.25)"/></svg>
                              Initial Collection
                            </span>
                        </div>
                    </div>
                    <div className="w-[50vw] h-full relative">
                      <ImageTilt 
                        src="/images/section4-image.png"
                        className="scale-[.78] !object-contain"
                        tiltOptions={{
                          max: 40,
                          scale: 1.04,
                          perspective: 1200,
                          speed: 2000,
                        }}
                      />
                      <div className="absolute w-[1px] bg-[#0000002a] h-[87vh] bottom-0 right-0 mb-6"></div>
                    </div>
                    <div className="w-[30vw] h-full flex flex-col justify-center">
                      <div className="h-[50%] p-6 relative border-b border-[#0000002a]">
                        <ImageTilt 
                          src="/images/face-traits.webp"
                          className=""
                          tiltOptions={{
                            max: 40,
                            scale: .9,
                            perspective: 1200,
                            speed: 2000,
                          }}
                        />
                      </div>
                      <div className="h-[40%] p-6">
                        <ImageTilt 
                          src="/images/face-traits.webp"
                          className=""
                          tiltOptions={{
                            max: 40,
                            scale: .9,
                            perspective: 1200,
                            speed: 2000,
                          }}
                        />
                      </div>
                    </div>
              </div>
            </section>
    )
}