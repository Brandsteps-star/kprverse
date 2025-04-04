import { useEffect, useRef, useState } from 'react';
import logo from '../../public/images/logo.png'
import MusicBarIcon from '../effects/MusicBarIcon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const MiniSidebar = ({className = ""}) => {
  const miniSidebarRef = useRef(null);
  const [iconColor, setIconColor] = useState('white');
  const [logoColor, setLogoColor] = useState('');
  const [borderColor, setBorderColor] = useState('border-[#FFFFFF33]');

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          
          // Color changes at 0% scroll progress
          if (progress > 0) {
            setIconColor('black');
            setLogoColor('invert');
            setBorderColor('border-[#0000002a]');
          } else {
            setIconColor('white');
            setLogoColor('');
            setBorderColor('border-[#FFFFFF33]');
          }
        }
      }
    });

    return () => {
      tl.kill(); // Clean up the animation
    }
  }, []);

  return (
    <div 
      ref={miniSidebarRef} 
      className={`${className} max-md:hidden w-[68px] z-60 mini-sidebar-h flex flex-col items-center justify-between px-2 pt-48 pb-6 border-r ${borderColor}`}
    >
      <img 
        src={logo} 
        alt="logo" 
        width="100%" 
        className={logoColor} 
      />
      <MusicBarIcon color={iconColor} />
    </div>
  )
}