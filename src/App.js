import React from "react";
import AdventCalendar from "./components/AdventCalendar";
import Logos from "./components/Logos";
import Snowflakes from "./components/Snowflakes";
import emoji from "./assets/images/tree.png"; // Importing a tree emoji image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the star icon

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Snowflakes component */}
      <Snowflakes />
      {/* Logo section */}
      <Logos />
      {/* Title section */}
      <div className="title-container mt-2">
        <img src={emoji} alt="Tree Emoji" className="left-tree-emoji" />
        <h1 className="title fw-bold text-center">2025 Advent Calendar</h1>
        <img src={emoji} alt="Tree Emoji" className="right-tree-emoji" />
      </div>
      {/* Advent calendar main section */}
      <AdventCalendar />
      {/* Donate button link */}
      <div className="donate-container">
        <a
          href="https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=calendar"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // For security
          className="donate-button"
        >
          <FontAwesomeIcon icon={faStar} className="donate-icon" />
          Donate Here
          <FontAwesomeIcon icon={faStar} className="donate-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
