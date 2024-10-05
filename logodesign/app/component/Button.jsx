"use client";

import React, { useState } from "react";

const Button = ({ label, variant = "filled", onClick, disabled = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getButtonStyle = () => ({
    padding: "10px 20px",
    fontSize: "16px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    border:
      variant === "outlined" || (isHovered && !disabled)
        ? "2px solid #00aaff"
        : "none",
    backgroundColor: isHovered
      ? variant === "filled"
        ? "transparent"
        : "#00aaff"
      : variant === "filled"
      ? "#00aaff"
      : "transparent",
    color: isHovered
      ? variant === "filled"
        ? "#00aaff"
        : "white"
      : variant === "filled"
      ? "white"
      : "#00aaff",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
  });

  return (
    <button
      onClick={onClick}
      style={getButtonStyle()}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

export default Button;
