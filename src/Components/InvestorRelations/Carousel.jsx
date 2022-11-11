import { useRef } from "react";
import { useEffect, useState } from "react";
import sliderImg from "./sliderImage.json";
import "./styles.css";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === sliderImg.length - 1 ? 0 : prevIndex + 1
        ),
      5000
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <p style={{ fontSize: "1rem" }}>slider</p>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {sliderImg.map(({ id, image, count, detail }) => (
          <div key={id} className="slide">
            <img src={image} alt="" className="image" width="100%" />
            <div className="detail">
              <div className="part1">
                <h2 className="title">{count}</h2>
                <span className="description">{detail}</span>
              </div>
              <div className="part2">
                <span className="year">*FY 2022</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="slideshowDots">
        {sliderImg.map((_, idx) => (
          <div
            key={idx}
            className={`dot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Carousel;
