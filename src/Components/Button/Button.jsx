import React from "react";
import "./styles.css";
const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
