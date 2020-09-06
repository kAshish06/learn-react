import React, { useState, useEffect, useReducer } from "react";
import CaraouselControls from "./CaraouselControls";
import CaraouselSlides from "./CaraouselSlides";
import Progress from "./Progress";
import { connect } from "react-redux";
function getPreviousImage(currentImage, images) {
  let currentIndex = images.indexOf(currentImage);
  return currentIndex > 0
    ? images[currentIndex - 1]
    : images[images.length - 1];
}

function getNextImage(currentImage, images) {
  let currentIndex = images.indexOf(currentImage);
  return currentIndex < images.length - 1
    ? images[currentIndex + 1]
    : images[0];
}

function caraouselReducer(state, action) {
  switch (action.type) {
    case "PLAY": {
      return {
        ...state,
        isPlaying: !state.isPlaying,
      };
    }
    case "NEXT": {
      let newCurrent = getNextImage(state.current, state.images);
      return {
        ...state,
        current: newCurrent,
      };
    }
    case "PREVIOUS": {
      let newCurrent = getPreviousImage(state.current, state.images);
      return {
        ...state,
        current: newCurrent,
      };
    }
    default: {
      return { ...state };
    }
  }
}

function calculateProgress(state) {
  return (
    (100 / state.images.length) * (state.images.indexOf(state.current) + 1)
  );
}

let Caraousel = ({ images }) => {
  let initialState = {
    images,
    current: images[0],
    isPlaying: false,
  };
  let [progress, setProgress] = useState(1);
  let [state, dispatch] = useReducer(caraouselReducer, initialState);

  useEffect(() => {
    if (state.isPlaying) {
      let remove = setTimeout(() => {
        dispatch({ type: "NEXT" });
        setProgress(calculateProgress(state));
      }, 2000);
      return () => {
        clearTimeout(remove);
      };
    }
  }, [state]);
  return (
    <div style={{ width: "50%" }}>
      <CaraouselSlides image={state.current}>
        <div>
          <CaraouselControls
            images={state.images}
            current={state.current}
            isPlaying={state.isPlaying}
            onPlay={() => {
              dispatch({ type: "PLAY" });
            }}
            onPrevious={() => {
              dispatch({ type: "PREVIOUS" });
            }}
            onNext={() => {
              dispatch({ type: "NEXT" });
            }}
          />
          <Progress width={progress} />
        </div>
      </CaraouselSlides>
    </div>
  );
};
// const mapStateToProps = ({ images, current, isPlaying }) => ({
//   images,
//   current,
//   isPlaying,
// });
// const mapDispatchToProps = (dispatch) => ({
//   onNext: () => dispatch({ type: "NEXT" }),
//   onPrevious: () => dispatch({ type: "PREVIOUS" }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Caraousel);

export default Caraousel;
