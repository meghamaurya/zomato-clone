import React from "react";
import "./styles.css";
const Content = (props) => {
  return (
    <div className="content">
      <hr className="hr" />
      <div className="detail-box">
        <span className="date">{props.date}</span>
        <h2 className="heading">{props.heading}</h2>
        <span className="details">{props.details}</span>
      </div>
    </div>
  );
};

export default Content;
