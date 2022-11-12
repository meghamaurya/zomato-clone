import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";

const Btn1 = ({ children }) => {
  return (
    <div>
      <button className="btn1">
        <HiArrowDownTray style={{ padding: "0 0.5rem" }} />
        {children}
      </button>
    </div>
  );
};

export default Btn1;
