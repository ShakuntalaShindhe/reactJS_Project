import { useEffect, useState } from "react";

const Carousel = ({ children = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
    };
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }, [children.length]);
  
    return (
      <div className="carousel-container">
        <div className="carousel-content">{children[currentIndex]}</div>
      </div>
    );
  };
  
  export default Carousel;
  