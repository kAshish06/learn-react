import { UseState, useEffect } from "react";

let useProgress = ({ animate, time }) => {
  let [progress, setProgress] = useState(0);
  useEffect(() => {
    if (animate) {
      let rafId = null;
      let start = null;
      let step = (timestamp) => {
        if (!start) start = timestamp;
        let progress = time;
        setProgress(progress);
        if (progress < time) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    }
  });
  return progress;
};

export default useProgress;
