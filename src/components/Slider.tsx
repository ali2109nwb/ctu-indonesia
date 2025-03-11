import { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const slides = [
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' },
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' },
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' },
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' },
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' },
    { id: 1, color: 'bg-blue-400', text: 'Slide 1' },
    { id: 2, color: 'bg-green-400', text: 'Slide 2' },
    { id: 3, color: 'bg-red-400', text: 'Slide 3' },
    { id: 4, color: 'bg-yellow-400', text: 'Slide 4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // To handle transition end
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, [isTransitioning]);

  // Handle transition end to reset the state
  const handleTransitionEnd = () => {
    // When the transition ends, check if we need to reset the position for infinite effect
    if (currentIndex === totalSlides) {
      setCurrentIndex(0);
      setIsTransitioning(false);
    } else {
      setIsTransitioning(false);
    }
  };

  return (
    <div className="relative overflow-hidden w-full h-64">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Adjust position based on index
        }}
        onTransitionEnd={handleTransitionEnd} // Handle transition end
      >
        {/* Render slides */}
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`w-full h-full ${slide.color} text-white flex justify-center items-center`}
          >
            {slide.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;