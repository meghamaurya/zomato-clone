import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { IoMdMenu } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineSendToMobile } from "react-icons/md";

function InvestorNavbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleClick = () => {
    setIsNavExpanded(!isNavExpanded);
  };
  return (
    <nav className="investorNavbar">
      <div className="smallScreen">
        {!isNavExpanded ? (
          <IoMdMenu onClick={handleClick} className="hamburger-icon" />
        ) : null}
        {isNavExpanded ? (
          <div className="smallItem">
            <RiCloseLine onClick={handleClick} className="hamburger-cross" />
            <Link to="" className="link">
              FINANCIALS
            </Link>
            <Link to="" className="link">
              ANNOUNCEMENTS
            </Link>
            <Link to="" className="link">
              GOVERNANCE
            </Link>
            <Link to="" className="link">
              ESG INITIATIVES
            </Link>
            <Link to="" className="link">
              ESG INITIATIVES
            </Link>
          </div>
        ) : null}
      </div>

      <div className="largeScreen">
        <Link to="/" className="add">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*"
            width="120rem"
          />
          <span>| Investor Relations</span>
        </Link>
        <div className="item">
          <Link to="/investorRelations" className="link">
            Investor Relations
          </Link>
          <Link to="" className="link">
            Add restaurant
          </Link>
          <Link to="" className="link">
            Log in
          </Link>
          <Link to="" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default InvestorNavbar;
