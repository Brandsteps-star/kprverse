import React, { useState, useRef, useCallback } from 'react';

const ImageTilt = ({ 
  src, 
  alt, 
  className = '', 
  tiltOptions = {} 
}) => {
  const [transform, setTransform] = useState('');
  const cardRef = useRef(null);

  const {
    max = 15,
    perspective = 1000,
    scale = 1.05,
    speed = 400
  } = tiltOptions;

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const cardRect = card.getBoundingClientRect();
    
    // Calculate the center of the card
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;

    // Calculate how far the mouse is from the center
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;

    // Calculate rotation
    const rotateX = -(mouseY / cardRect.height * max).toFixed(2);
    const rotateY = (mouseX / cardRect.width * max).toFixed(2);

    setTransform(`
      perspective(${perspective}px) 
      scale3d(${scale},${scale},${scale}) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg)
    `);
  }, [max, perspective, scale]);

  const handleMouseLeave = useCallback(() => {
    setTransform(`
      perspective(${perspective}px) 
      scale3d(1,1,1) 
      rotateX(0deg) 
      rotateY(0deg)
    `);
  }, [perspective]);

  return (
    <div 
      ref={cardRef}
      className={`tilt-container relative w-full h-full transition-transform duration-${speed} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        transition: `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
      }}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover rounded-lg" 
        style={{
          transform: 'translateZ(20px)',
          willChange: 'transform'
        }}
        draggable="false"
      />
    </div>
  );
};

export default ImageTilt;