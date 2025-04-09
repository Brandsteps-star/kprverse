import { useState, useEffect, useRef } from "react";

export default function PerspectiveCardGallery() {
  // Define the perspective transformations for each side
  const leftPerspectives = [
    { x: -10, z: -4 },
    { x: -20, z: -8 },
    { x: -30, z: -12 },
    { x: -40, z: -16 },
    { x: -50, z: -20 },
    { x: 10, z: -4 }
  ];
  
  const rightPerspectives = [
    { x: 10, z: -4 },
    { x: 20, z: -8 },
    { x: 30, z: -12 },
    { x: 40, z: -16 },
    { x: 50, z: -20 },
    { x: -10, z: -4 }
  ];

  // State to track current position for each card
  const [leftCounters, setLeftCounters] = useState([1, 2, 3, 4, 5, 6]);
  const [rightCounters, setRightCounters] = useState([1, 2, 3, 4, 5, 6]);
  
  // Setup interval for animation
  useEffect(() => {
    const interval = setInterval(() => {
      // Update left cards position
      setLeftCounters(prevCounters => 
        prevCounters.map(count => count === 6 ? 1 : count + 1)
      );
      
      // Update right cards position
      setRightCounters(prevCounters => 
        prevCounters.map(count => count === 6 ? 1 : count + 1)
      );
    }, 1000);
    
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Create transform styles based on current counter values
  const getLeftTransform = (index) => {
    const perspective = leftPerspectives[leftCounters[index] - 1];
    return `translate3d(${perspective.x}rem, 0, ${perspective.z}rem)`;
  };
  
  const getRightTransform = (index) => {
    const perspective = rightPerspectives[rightCounters[index] - 1];
    return `translate3d(${perspective.x}rem, 0, ${perspective.z}rem)`;
  };

  return (
    <div className="flex h-screen ">
      {/* Left Side */}
      <div className="flex items-center relative overflow-hidden w-1/2">
        <div className="relative w-full flex items-center" style={{ perspective: "500px", transformStyle: "preserve-3d", perspectiveOrigin: "right center" }}>
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <img
              key={`left-${num}`}
              src={`https://kprverse.com/images/compressed/webp/collection/card-left-0${num}.webp`}
              alt={`Card ${num}`}
              className="absolute w-48 h-56 transition-transform duration-300"
              style={{
                right: "-10rem",
                transform: getLeftTransform(index),
                transitionTimingFunction: "cubic-bezier(0, 0.55, 0.45, 1)"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Right Side */}
      <div className="flex items-center relative overflow-hidden w-1/2">
        <div className="relative w-full flex items-center" style={{ perspective: "500px", transformStyle: "preserve-3d", perspectiveOrigin: "left center" }}>
          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <img
              key={`right-${num}`}
              src={`https://kprverse.com/images/compressed/webp/collection/card-right-0${num}.webp`}
              alt={`Card ${num}`}
              className="absolute w-48 h-56 transition-transform duration-300"
              style={{
                left: "-10rem",
                transform: getRightTransform(index),
                transitionTimingFunction: "cubic-bezier(0, 0.55, 0.45, 1)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}