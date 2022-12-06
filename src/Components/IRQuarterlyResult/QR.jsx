import React from "react";
import Button from "../Button/Button";
import Btn1 from "./btn1";
import "./styles.css";

const QuarterlyResult = () => {
  return (
    <div className="container">
      <h2 className="heading">Quarterly results</h2>
      <h3 className="year">Q2 FY23</h3>
      <div className="btnHolder">
        <Btn1> Shareholders' Letter</Btn1>
        <Btn1> Earnings Call Replay</Btn1>
        <Btn1> Earnings Call Transcript</Btn1>
      </div>
      <Button>See all quaterly results</Button>
    </div>
  );
};

export default QuarterlyResult;
