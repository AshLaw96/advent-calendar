import React from "react";
import svpTitleLogo from "../assets/images/title-logo.png"; // Adjust path as necessary
import svpLogo from "../assets/images/svp-logo.webp"; // Adjust path as necessary
import appealIcon from "../assets/images/help-a-life.png"; // Adjust path as necessary
import "../styles/Logos.css";

function Logo() {
  return (
    <div className="logo-container">
      {/* Row for the SVP Logo and Title Logo */}
      <div className="logo-group-top">
        <img
          src={svpLogo}
          alt="SVP Advent Calendar Logo"
          className="logo-image"
        />
        <img
          src={svpTitleLogo}
          alt="SVP Advent Calendar Title Logo"
          className="logo-title"
        />
      </div>

      {/* Row for the Appeal Icon */}
      <div className="row justify-content-center">
        <div className="col-auto">
          <img
            src={appealIcon}
            alt="Help a Life Icon"
            className="appeal-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default Logo;
