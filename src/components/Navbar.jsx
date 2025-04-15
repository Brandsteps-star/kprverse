import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ShuffleText from "../effects/ShuffleText"

gsap.registerPlugin(ScrollTrigger)

export const Navbar = ({ setIsSidebarOpen, className = '' }) => {
    const navRef = useRef(null);
    const [borderColor, setBorderColor] = useState('border-[#FFFFFF33]');
    const [progressWidth, setProgressWidth] = useState('0%');
    const [progressColor, setProgressColor] = useState('bg-[#FFFFFF33]');
    const [progressBorderColor, setProgressBorderColor] = useState('bg-[#FFFFFF66]');

    useEffect(() => {
        // Color change animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-section", 
                start: "top bottom", 
                end: "bottom top", 
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress
                    
                    // Interpolate between white and black based on scroll progress
                    gsap.to(navRef.current, {
                        color: progress > 0 ? 'black' : 'white',
                    })

                    // Change login button colors
                    const loginBtn = navRef.current.querySelector('.login-btn')
                    gsap.to(loginBtn, {
                        backgroundColor: progress > 0 ? 'black' : 'white',
                        color: progress > 0 ? 'white' : 'black'
                    })

                    // Change SVG stroke color
                    const menuIcon = navRef.current.querySelector('svg')
                    gsap.to(menuIcon, {
                        stroke: progress > 0 ? 'black' : 'white'
                    })

                    if (progress > 0) {
                        setBorderColor('border-[#0000002a]');
                        setProgressColor('bg-[#1A1A1A11]');
                        setProgressBorderColor('border-[#1A1A1A33]');
                    } else {
                        setBorderColor('border-[#FFFFFF33]');
                        setProgressColor('bg-[#FFFFFF33]');
                        setProgressBorderColor('border-[#FFFFFF66]');
                      }
                }
            }
        })

        return () => {
            tl.kill() // Clean up the animation
        }
    }, [])

    useEffect(() => {
        // Color change animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section4", 
                start: "top bottom", 
                end: "bottom top", 
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress
                    
                    // Interpolate between white and black based on scroll progress
                    gsap.to(navRef.current, {
                        color: progress > 0 ? 'black' : 'white',
                    })

                    // Change login button colors
                    const loginBtn = navRef.current.querySelector('.login-btn')
                    gsap.to(loginBtn, {
                        backgroundColor: progress > 0 ? 'black' : 'white',
                        color: progress > 0 ? 'white' : 'black'
                    })

                    // Change SVG stroke color
                    const menuIcon = navRef.current.querySelector('svg')
                    gsap.to(menuIcon, {
                        stroke: progress > 0 ? 'black' : 'white'
                    })

                    if (progress > 0) {
                        setBorderColor('border-[#0000002a]');
                        setProgressColor('bg-[#1A1A1A11]');
                        setProgressBorderColor('border-[#1A1A1A33]');
                    } else {
                        setBorderColor('border-[#FFFFFF33]');
                        setProgressColor('bg-[#FFFFFF33]');
                        setProgressBorderColor('border-[#FFFFFF66]');
                      }
                }
            }
        })

        return () => {
            tl.kill() // Clean up the animation
        }
    }, [])

    useEffect(() => {
        // Color change animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section3",
                start: "top 0%", 
                end: "bottom top",
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress
                    
                    // Interpolate between white and black based on scroll progress
                    gsap.to(navRef.current, {
                        color: progress > 0 ? 'white' : 'black',
                    })

                    // Change login button colors
                    const loginBtn = navRef.current.querySelector('.login-btn')
                    gsap.to(loginBtn, {
                        backgroundColor: progress > 0 ? 'white' : 'black',
                        color: progress > 0 ? 'black' : 'white'
                    })

                    // Change SVG stroke color
                    const menuIcon = navRef.current.querySelector('svg')
                    gsap.to(menuIcon, {
                        stroke: progress > 0 ? 'white' : 'black'
                    })

                    if (progress > 0) {
                        setBorderColor('border-[#FFFFFF33]');
                        setProgressColor('bg-[#FFFFFF33]');
                        setProgressBorderColor('border-[#FFFFFF66]');
                    } else {
                         setBorderColor('border-[#0000002a]');
                        setProgressColor('bg-[#1A1A1A11]');
                        setProgressBorderColor('border-[#1A1A1A33]');
                      }
                }
            }
        })

        return () => {
            tl.kill() // Clean up the animation
        }
    }, [])


    useEffect(() => {
        const updateProgress = () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrollProgress = (window.scrollY / totalHeight) * 100;

            setProgressWidth(`${scrollProgress}%`)
        }

        window.addEventListener('scroll',  updateProgress);
        window.addEventListener('resize', updateProgress);

        return () => {
            window.removeEventListener('scroll',  updateProgress);
            window.removeEventListener('resize', updateProgress);
        }
    }, [])    

    return (
        <nav 
            ref={navRef}
            className={`relative text-white font-mono flex-between border-b-[1px] ${borderColor} p-0 m-0 h-[50px] z-50 ${className} overflow-hidden`}
        >
            <div className='absolute w-full ml-[67px] h-full left-0 top-0 z-60'>
                <div className={`h-full ${progressColor} transition-all duration-300 border-r ${progressBorderColor}`} style={{ width: progressWidth }}></div>
            </div>
            <button className={`h-full border-r-[1px] ${borderColor} p-[20px] flex-center z-70`}>
                <svg 
                    onClick={() => setIsSidebarOpen(true)} 
                    fill="none" 
                    viewBox="0 0 27 6" 
                    className="stroke-white stroke-1 w-[27px] cursor-pointer"
                >
                    <path d="M.867.711h25.634M.867 5.25h21.429"></path>
                </svg>
            </button>
            <h2 className='font-hexaframe hidden text-4xl m-0 p-0 font-bold z-70 max-sm:block '>KPR</h2>
            <ul className="flex items-center gap-6 z-70 max-sm:hidden">
                {
                    [
                        { text: "PROJECT", link: "#project" },
                        { text: "THE KEEP", link: "#the-keep" },
                        { text: "FACTIONS", link: "#factions" },
                        { text: "THE WORLD", link: "#the-world" }
                    ].map((item, index) => (
                        <li key={index}>
                            <a href={item.link} className="small-text nav-item px-2 relative">
                                <span><ShuffleText text={item.text} /></span>
                            </a>
                        </li>
                    ))
                }
            </ul>
            <a 
                href="" 
                className="login-btn flex-center bg-white text-black text-sm font-semibold uppercase p-4 w-28 z-70 max-sm:!rounded-none"
            >
                Sign In
            </a>
        </nav>
    )
}