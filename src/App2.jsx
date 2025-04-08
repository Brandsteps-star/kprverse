import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useEffect, useRef} from "react";

gsap.registerPlugin(ScrollTrigger);

export const App2 = () => {
    const page1Ref = useRef(null);
    const page2Ref = useRef(null);
    const page3Ref = useRef(null);

    useEffect(() => {
        gsap.from("#box1", {
            scale: 0,
            delay: 1,
            duration: 2,
            rotate: 360
        });
        gsap.from("#box2", {
            scale: 0,
            duration: 2,
            rotate: 360,
            scrollTrigger: {
                trigger: "#box2",
                markers: true,
                start: "top 50%",
            }
        });

        gsap.from("#box3", {
            scale: 0,
            duration: 2,
            rotate: 360,
        });
    }, []);

    return(
        <>
        <div ref={page1Ref} className="w-full h-screen flex items-center justify-center bg-yellow-500">
            <div className="w-[300px] h-[300px] bg-white" id="box1"></div>
        </div>
        <div ref={page2Ref} className="w-full h-screen flex items-center justify-center bg-orange-500">
            <div className="w-[300px] h-[300px] bg-white" id="box2"></div>
        </div>
        <div ref={page3Ref} className="w-full h-screen flex items-center justify-center bg-purple-500">
            <div className="w-[300px] h-[300px] bg-white" id="box3"></div>
        </div>  
        </>
    )
}