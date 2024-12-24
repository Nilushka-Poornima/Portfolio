import React, { useEffect, useState } from "react";

const BlurBackground = () => {
  const [positions, setPositions] = useState({
    large: { x: 0, y: 0 },
    medium: { x: 0, y: 0 },
    small: { x: 0, y: 0 },
  });

  useEffect(() => {
    const radius = 650; // Define the movement boundary
    const speed = 0.002; // Speed factor for smoothness

    // Random initial directions
    const directions = {
      large: { x: Math.random(), y: Math.random() },
      medium: { x: Math.random(), y: Math.random() },
      small: { x: Math.random(), y: Math.random() },
    };

    const updatePositions = () => {
      setPositions((prev) => {
        const newPositions = { ...prev };

        // Update positions for each blob
        Object.keys(directions).forEach((key) => {
          const dir = directions[key];
          const pos = prev[key];

          // Update x and y positions smoothly
          newPositions[key] = {
            x: pos.x + dir.x * speed * radius,
            y: pos.y + dir.y * speed * radius,
          };

          // Reverse direction if boundary is reached
          if (Math.abs(newPositions[key].x) > radius) {
            directions[key].x *= -1;
          }
          if (Math.abs(newPositions[key].y) > radius) {
            directions[key].y *= -1;
          }
        });

        return newPositions;
      });

      requestAnimationFrame(updatePositions);
    };

    updatePositions();

    return () => cancelAnimationFrame(updatePositions); // Cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Large Blob */}
      <div
        className="absolute h-[300px] w-[300px] rounded-full bg-purple-800 opacity-50 blur-3xl"
        style={{
          transform: `translate(${positions.large.x}px, ${positions.large.y}px)`,
        }}
      ></div>

      {/* Medium Blob */}
      <div
        className="absolute h-[400px] w-[400px] rounded-full bg-cyan-700 opacity-50 blur-2xl"
        style={{
          transform: `translate(${positions.medium.x}px, ${positions.medium.y}px)`,
        }}
      ></div>

      {/* Small Blob */}
      <div
        className="absolute h-[250px] w-[250px] rounded-full bg-pink-500 opacity-50 blur-3xl"
        style={{
          transform: `translate(${positions.small.x}px, ${positions.small.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default BlurBackground;
