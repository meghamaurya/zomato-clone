import React from "react";
import BlogCard from "./BlogCard.json";
import "./styles.css";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const BlogsCard = () => {
  return (
    <div className="blogSection">
      {BlogCard.map((item) => {
        return (
          <div key={item.id} className="card">
            <img
              src={item.img}
              alt={item.title}
              width="100%"
              className="cardImg"
            />
            <div className="detail">
              <span className="date">{item.date}</span>
              <h3 className="title">
                <ResponsiveEllipsis
                  text={item.title}
                  maxLine="1"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </h3>
              <p className="description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsCard;
