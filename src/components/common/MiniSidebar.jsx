import { useEffect, useRef, useState } from 'react';
import logo from '/images/logo.png'
import MusicBarIcon from '../../effects/MusicBarIcon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const MiniSidebar = ({className = "", LogoColorProp, borderColorProp, iconColorProp}) => {
  const miniSidebarRef = useRef(null);
  const [iconColor, setIconColor] = useState('bg-white');
  const [logoColor, setLogoColor] = useState('');
  const [borderColor, setBorderColor] = useState('border-[#FFFFFF33]');

  useEffect(() => {

    gsap.to(miniSidebarRef.current, {
      autoAlpha: 0, 
      ease: "none",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 90%", 
        end: "top 50%",  
        scrub: true,
        toggleActions: "play none none none"
      }
    });
  
    ScrollTrigger.create({
      trigger: ".footer",
      start: "top 90%",
      end: "top 100%",
      onEnterBack: () => {
        gsap.to(miniSidebarRef.current, { autoAlpha: 1, duration: 0.3 });
      },
    });

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
            setIconColor('bg-black');
            setLogoColor('invert');
            setBorderColor('border-[#0000002a]');
          } else {
            setIconColor('bg-white');
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

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section4',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          
          // Color changes at 0% scroll progress
          if (progress > 0) {
            setIconColor('bg-black');
            setLogoColor('invert');
            setBorderColor('border-[#0000002a]');
          } else {
            setIconColor('bg-white');
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

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 0%", 
        end: "bottom top",
        scrub: true,
        onUpdate: self => {
          const progress = self.progress;
          
          // Color changes at 0% scroll progress
          if (progress > 0) {
            setIconColor('bg-white');
            setLogoColor('');
            setBorderColor('border-[#FFFFFF33]');
          } else {
            setIconColor('bg-black');
            setLogoColor('invert');
            setBorderColor('border-[#0000002a]');
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
      className={`${className} ${borderColor} ${borderColorProp} w-[68px] z-60 mini-sidebar-h flex-between flex-col px-2 pt-48 pb-6 border-r max-sm:!hidden`}
    >
      <img 
        src={logo} 
        alt="logo" 
        width="100%" 
        className={`${logoColor} ${LogoColorProp}`} 
      />
      <MusicBarIcon color={`${iconColor} ${iconColorProp}`} />
    </div>
  )
}