import React from "react";
import Carousel from "../Carousel/Carousel";
import QuarterlyResult from "../IRQuarterlyResult/QR";
import IRAboutUs from "../IRAboutUs/AboutUs";
import InvestorNavbar from "../InvestorNavbar/InvestorNavbar";
import CorporateAnnouncements from "../CorporateAnnouncements/CorporateAnnouncements";
import Footer from "../Footer/Footer";
import IROurBlogs from "../IROurBlogs/IROurBlogs";
const InvestorRelations = () => {
  return (
    <>
      <InvestorNavbar />
      <Carousel />
      <QuarterlyResult />
      <IRAboutUs />
      <CorporateAnnouncements />
      <IROurBlogs />
      <Footer />
    </>
  );
};

export default InvestorRelations;
