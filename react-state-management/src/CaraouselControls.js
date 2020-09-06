import React from "react";

let CaraouselControls = ({
  images,
  current,
  isPlaying,
  onPlay,
  onPrevious,
  onNext,
}) => {
  return (
    <div>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="dot"
            style={{ backgroundColor: image === current ? "red" : "#e3e3e3" }}
            // onClick={() => setCurrent(image)}
          ></div>
        );
      })}
      <button
        onClick={() => {
          onPrevious();
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          onPlay();
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button
        onClick={() => {
          onNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default CaraouselControls;
