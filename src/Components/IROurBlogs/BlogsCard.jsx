import React from "react";
import BlogCard from "./BlogCard.json";
const BlogsCard = () => {
  return (
    <div>
      {BlogCard.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <span>{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsCard;
