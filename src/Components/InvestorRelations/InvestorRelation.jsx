import React from "react";
import Carousel from "./Carousel";
import QuarterlyResult from "../IRQuarterlyResult/QR";
import IRAboutUs from "../IRAboutUs/AboutUs";
import InvestorNavbar from "../InvestorNavbar/InvestorNavbar";
const InvestorRelations = () => {
  return (
    <>
      <Carousel />
      <QuarterlyResult />
      <IRAboutUs />
    </>
  );
};

export default InvestorRelations;
