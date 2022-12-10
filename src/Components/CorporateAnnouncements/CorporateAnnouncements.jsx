import React from "react";
import Content from "./Content";
import Button from "../Button/Button";
import "./styles.css";

const CorporateAnnouncements = () => {
  return (
    <div className="corporate-container">
      <h2 className="corporate-heading">Corporate announcements</h2>
      <Content
        date="November 3, 2022"
        heading="Zomato announces schedule of earnings conference call for Q2 FY23"
        details="Read more"
      />
      <Content
        date="November 2, 2022"
        heading="Zomato announces the Board meeting date for approving Q2 FY23 results"
        details="Read more"
      />
      <Button>See all announcements</Button>
    </div>
  );
};

export default CorporateAnnouncements;
