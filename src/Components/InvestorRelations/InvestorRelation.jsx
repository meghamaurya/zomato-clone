import React from "react";
import Carousel from "../Carousel/Carousel";
import QuarterlyResult from "../IRQuarterlyResult/QR";
import IRAboutUs from "../IRAboutUs/AboutUs";
import InvestorNavbar from "../InvestorNavbar/InvestorNavbar";
import CorporateAnnouncements from "../CorporateAnnouncements/CorporateAnnouncements";
import Footer from "../Footer/Footer";
const InvestorRelations = () => {
  return (
    <>
      <InvestorNavbar />
      <Carousel />
      <QuarterlyResult />
      <IRAboutUs />
      <CorporateAnnouncements />
      <Footer />
    </>
  );
};

export default InvestorRelations;
