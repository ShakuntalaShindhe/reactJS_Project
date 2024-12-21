// import React, { useState, useEffect } from 'react';
// import './Carousel.css';

// const Carousel = ({ children }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 2000); 
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className="carousel-container">
//       <button onClick={prevSlide}>Previous</button>
//       <div className="carousel-content">
//         {children[currentIndex]}
//       </div>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// export default Carousel;

import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const startInterval = () => {
    intervalRef.current = setInterval(nextSlide, 2000); // Change slide every 2 seconds
  };

  const stopInterval = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startInterval(); // Start automatic scrolling on mount
    return () => stopInterval(); // Cleanup interval on unmount
  }, [children.length]);

  const handleDotClick = (index) => {
    stopInterval(); // Stop auto-scroll when a dot is clicked
    setCurrentIndex(index); // Navigate to the selected slide
    startInterval(); // Restart auto-scroll
  };

  return (
    <div className="carousel-container">
      {/* Slide content */}
      <div className="carousel-content">{children[currentIndex]}</div>

      {/* Navigation dots */}
      <div className="carousel-dots">
        {children.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel
