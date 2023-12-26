import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header2.css";
import { CustomBtn } from "../CustomBtn";
const Header2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Header">
      <div className="menuHeader">
        <div className="leftDiv">
          <div className="logoDiv">
            <img
              src="assets/images/eth_logo.png"
              alt="logo"
              className="logo1_binance"
            />
          </div>
        </div>
        <div className="RightMenu">
          <ul
            className={isOpen ? "RightMenu_ul active" : "RightMenu_ul inactive"}
          >
            <li>
              {" "}
              <Link to="/Home2">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/admin">Admin </Link>
            </li>
            <li>Mine</li>
            <button>
              <CustomBtn />
            </button>
            <button>Select Language</button>
          </ul>
          <i class="fa fa-bars" onClick={() => setIsOpen(!isOpen)}></i>
        </div>
      </div>
    </div>
  );
};

export default Header2;
