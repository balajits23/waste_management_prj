import React, { useState, useEffect } from "react";
import "./AnimatedCounter.css";

const AnimatedCounter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * endValue));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [endValue, duration]);

  return (
    <div className="counter">
      <span className="count">{count}</span>
    </div>
  );
};

export default AnimatedCounter;
