import React, { useState, useRef } from 'react';

const MusicBarIcon = ({ color }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [barHeights, setBarHeights] = useState([0.5, 0.5, 0.5, 0.5, 0.5]);
  const audioRef = useRef(null);
  const animationRef = useRef(null);

  // Handle play/pause
  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/bgm.mp3');
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
      clearInterval(animationRef.current);
      setBarHeights([0.5, 0.5, 0.5, 0.5, 0.5]); // Reset bars
    } else {
      audioRef.current.play();
      
      animationRef.current = setInterval(() => {
        const newHeights = barHeights.map(() => {
          const scale = 0.4 + Math.random() * 0.8; // Vary scale between 0.4 and 1.2
          return Math.random() > 0.5 ? scale : -scale; // Randomly go up or down
        });
        setBarHeights(newHeights);
      }, 200);
    }
    
    setIsPlaying(!isPlaying);
  };

  return (
    <button 
      onClick={togglePlay} 
      className="flex items-center h-5 w-5 p-1 bg-transparent rounded-md cursor-pointer"
    >
      {barHeights.map((scale, index) => (
        <div 
          key={index}
          className={`mx-[1px] w-[2px] bg-${color} rounded transition-transform duration-200`}
          style={{ 
            height: '10px', // Base height (adjusted for 20px icon size)
            transform: `scaleY(${scale})`, // Animate up & down
          }}
        ></div>
      ))}
    </button>
  );
};

export default MusicBarIcon;
