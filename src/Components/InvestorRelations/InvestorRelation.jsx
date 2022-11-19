import React from "react";
import Carousel from "./Carousel";
import QuarterlyResult from "../IRQuarterlyResult/QR";
import IRAboutUs from "../IRAboutUs/AboutUs";
import InvestorNavbar from "../InvestorNavbar/InvestorNavbar";
const InvestorRelations = () => {
  return (
    <div>
      <InvestorNavbar />
      <Carousel />
      <QuarterlyResult />
      <IRAboutUs />
    </div>
  );
};

export default InvestorRelations;
