import React, { useState, useEffect, useRef } from "react";
import styles from "./MadicalSpec.module.css";

const MadicalSpec = ({ slides }) => {
  const slidesToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // duplicate slides for infinite effect
//   const extendedSlides = [
//     ...slides.slice(-slidesToShow),
//     ...slides,
//     ...slides.slice(0, slidesToShow),
//   ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length + slidesToShow) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slidesToShow);
      }, 500);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length, slidesToShow]);

  return (
    <div className={styles.sliderContainer}>
      <div
        ref={sliderRef}
        className={styles.sliderWrapper}
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          width: `${(slides.length / slidesToShow) * 100}%`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
      >
        {slides.map((slide, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ width: `${100 / slidesToShow}%` }}
          >
            <img src={slide.image} alt={slide.name} />
            <h3>{slide.name}</h3>
            <p>{slide.speciality}</p>
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              (currentIndex - slidesToShow + slides.length) % slides.length ===
              index
                ? styles.active
                : ""
            }`}
            onClick={() => setCurrentIndex(index + slidesToShow)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default MadicalSpec;
