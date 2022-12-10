import React from "react";
import BlogCard from "./BlogCard.json";
import "./styles.css";
const BlogsCard = () => {
  return (
    <div>
      {BlogCard.map((item) => {
        return (
          <div key={item.id} className="card">
            <img
              src={item.img}
              alt={item.title}
              height="200px"
              className="cardImg"
            />
            <div className="detail">
              <span className="date">{item.date}</span>
              <h3 className="title">{item.title}</h3>
              <p className="description">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsCard;
