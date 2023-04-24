import React from "react";

export default function ProgressBar({ currentQuestionIndex }) {
  const progressWidth = `${((currentQuestionIndex + 1) / 3) * 100}%`;

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        height: "20px",
        borderRadius: "10px",
        margin: "20px 0",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "#0066CC",
          height: "20px",
          borderRadius: "10px",
          width: progressWidth,
          position: "absolute",
          top: 0,
          left: 0,
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
}
