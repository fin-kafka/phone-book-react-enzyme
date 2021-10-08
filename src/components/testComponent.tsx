import React, { useState, useEffect } from "react";

type MousePositionType = {
  x: number;
  y: number;
};

type WindowSizeType = {
  height: number;
  width: number;
};

type MouseMoveEventType = { clientX: number; clientY: number };

const mathLib = () => {
  const distanceCalculator = (point1: any, point2: any): number =>
    Math.sqrt(
      Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2)
    );
  return { distanceCalculator };
};

function App() {
  const [position, setPosition] = useState<MousePositionType>({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState<WindowSizeType>({
    height: 0,
    width: 0,
  });
  // we can use 'const' instead of 'let' for useState hook
  // use type 'number' for distance
  const [distance, setDistance] = useState<number>(0);
  const { distanceCalculator } = mathLib();
  const handleMouseMove = (e: MouseMoveEventType) =>
    setPosition({ x: e.clientX, y: e.clientY });
  const handleResize = () =>
    setWindowSize({ height: window.innerHeight, width: window.innerWidth });

  useEffect(() => {
    setDistance(
      distanceCalculator(position, {
        x: windowSize.width / 2,
        y: windowSize.height / 2,
      })
    );
  }, [position, windowSize.width, windowSize.height]);

  // we need a separate useEffect with empty dependency array for event listeners
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    // we need to remove EventListeners to avoid memory leak issues
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div>
        Mouse Position: {position.x}:{position.y}
      </div>
      <div>
        Window Size: {windowSize.width}:{windowSize.height}{" "}
      </div>
      <div>Distance to center: {distance.toFixed(2)}</div>
    </>
  );
}
export default App;
