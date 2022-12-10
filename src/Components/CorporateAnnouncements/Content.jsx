import React from "react";
import "./styles.css";
import { BiCaretRight } from "react-icons/bi";
const Content = (props) => {
  return (
    <div className="content">
      <hr className="hr" />
      <div className="detail-box">
        <span className="date">{props.date}</span>
        <h2 className="heading">{props.heading}</h2>
        <span className="details">
          {props.details}
          <BiCaretRight />
        </span>
      </div>
    </div>
  );
};

export default Content;
