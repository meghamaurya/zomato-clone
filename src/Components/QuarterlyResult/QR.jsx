import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import "./styles.css";
const QuarterlyResult = () => {
  return (
    <div className="container">
      <h2 className="heading">Quarterly results</h2>
      <h3 className="year">Q2 FY23</h3>
      <button className="btn1">
        <HiArrowDownTray style={{ padding: "0 0.5rem" }} /> Shareholders' Letter
      </button>
      <button className="btn2">See all quarterly results</button>
    </div>
  );
};

export default QuarterlyResult;
