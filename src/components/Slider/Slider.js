import React, { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";

const Slider = ({ slides, ...props }) => {
  const slidesToShow = props?.slidetoshow || 3.5; // Show and scroll 3 slides at a time
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  // Clone first slide(s) to the end for seamless looping
  const extendedSlides = [...slides, ...slides.slice(0, slidesToShow)];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentIndex === slides.length) {
      // When reaching the cloned slide, jump back to the real first slide without transition
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length]);

  // When transition is turned off for the jump, turn it back on for next scroll
  useEffect(() => {
    if (!isTransitioning && currentIndex === 0) {
      // Next tick, re-enable transition
      setTimeout(() => setIsTransitioning(true), 20);
    }
  }, [isTransitioning, currentIndex]);

  return (
    <div
      className={`${props?.container ? "container" : ""} ${
        styles.sliderContainer
      } ${props?.class === "medical" ? styles.medicalSection : ""}`}
    >
      <div
        ref={sliderRef}
        className={styles.sliderWrapper}
        style={{
          transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          width: `${(extendedSlides.length / slidesToShow) * 100}%`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
          display: "flex",
        }}
      >
        {extendedSlides.map((slide, index) => (
          <div
            className={styles.slide}
            key={index}
            style={{ width: `${100 / slidesToShow}%`, flex: "0 0 auto" }}
          >
            <img src={slide.image} alt={`slide-${index}`} />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex % slides.length === index ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
