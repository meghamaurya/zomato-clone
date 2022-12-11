import React from "react";
import "./styles.css";
const IRAboutUs = () => {
  return (
    <section className="section">
      <h2 className="heading">Who we are</h2>
      {/* <div className="description"> */}
      <img
        src="https://b.zmtcdn.com//data/o2_assets/e10ce1bb402e0a6451a0cfab2b3a67681654586354.png"
        alt=""
        width="100%"
        className="image"
      />
      <span className="para">
        Zomato’s mission is better food for more people. Started in 2010, Zomato
        offers services like restaurant search & discovery, reviews, home
        delivery of food, online table reservation, and digital payments when
        dining out. It also works with restaurant partners to provide tools that
        enable them to engage and acquire more customers while empowering them
        with a last-mile delivery service and a one-stop procurement solution -
        Hyperpure, for ingredients and kitchen products. Apart from this, Zomato
        has been focusing on providing transparent and flexible earning
        opportunities to its delivery fleet, and contributing towards a more
        sustainable society through its non-profit entity Feeding India.
      </span>
      {/* </div> */}
    </section>
  );
};

export default IRAboutUs;
