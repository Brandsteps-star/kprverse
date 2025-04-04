import { useState, useRef } from "react";

const ShuffleText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    // Clear any running interval
    clearInterval(intervalRef.current);
    let iterations = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:/,.;=";
    
    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            // Once we've reached this index, show the original letter
            if (index < iterations) {
              return text[index];
            }
            // Otherwise, show a random character
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      
      // Increase iterations to reveal more letters
      iterations += 1 / 3; // Adjust the fraction to control the speed
      
      // When complete, clear the interval and show the original text
      if (iterations >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 40); // Interval speed in ms
  };

  return (
    <span className={className} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};

export default ShuffleText;
