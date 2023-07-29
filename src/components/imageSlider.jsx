import { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Fade } from "react-reveal";
import Pulse from "react-reveal/Pulse";

const slideStyles = {
  width: "100%",
  height: "100vh",
  borderRadius: "10px",
  backgroundSize: "100% 100%",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  display: "unset",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  top: "90%",
};

const dotStyle = {
  position: "relative",
  padding: "7px",
  margin: "20px 10px 0",
  cursor: "pointer",
  border: "2px solid white",
  fontSize: "10px",
  borderRadius: "50%",
  width: "10px",
  height: "10px",
};

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null);
  const isFirstIndex = currentIndex === 0;
  const isLastIndex = currentIndex === slides.length - 1;
  const timeSlideTransition = 500;

  const goToSlide = (slideIndex) => {
    setSlideDirection(slideIndex < currentIndex ? "left" : "right");
    setCurrentIndex(slideIndex);
  };
  const goToPrevious = () => goToSlide(currentIndex - 1);
  const goToNext = () => goToSlide(currentIndex + 1);
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].source})`,
  };

  return (
    <div style={sliderStyles}>
      <div>
        {!isFirstIndex && (
          <div onClick={goToPrevious} style={leftArrowStyles}>
            <FaArrowCircleLeft />
          </div>
        )}
        {!isLastIndex && (
          <div onClick={goToNext} style={rightArrowStyles}>
            <FaArrowCircleRight />
          </div>
        )}
      </div>
      {slides.map((slide, index) => {
        if (slide && index === currentIndex)
          if (slideDirection === "right")
            return (
              <Fade key={slide.id} right duration={timeSlideTransition}>
                <Pulse>
                  <div style={slideStylesWidthBackground} />
                </Pulse>
              </Fade>
            );
          else if (slideDirection === "left")
            return (
              <Fade key={slide.id} left duration={timeSlideTransition}>
                <Pulse>
                  <div style={slideStylesWidthBackground} />
                </Pulse>
              </Fade>
            );
          else
            return (
              <Fade key={slide.id} bottom duration={timeSlideTransition}>
                <Pulse>
                  <div style={slideStylesWidthBackground} />
                </Pulse>
              </Fade>
            );
      })}
      <div style={dotsContainerStyles}>
        {slides.map((slide, index) => {
          if (currentIndex === index)
            return (
              <div
                style={{
                  ...dotStyle,
                  backgroundColor: "#aeadac",
                  transition: "500ms all",
                }}
                key={slide.id}
              ></div>
            );
          else
            return (
              <div
                style={dotStyle}
                key={slide.id}
                onClick={() => goToSlide(index)}
              ></div>
            );
        })}
      </div>
    </div>
  );
}
