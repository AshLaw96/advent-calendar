import React from "react";
import { Card } from "react-bootstrap";
import doorImage from "../assets/images/door.jpg";
import "../styles/Day.css";

const Day = ({ day, content, isOpened, onClick, isLocked }) => {
  return (
    <Card
      className={`day ${isOpened ? "opened" : ""} ${
        day === 25 ? "day-25" : ""
      } ${isLocked ? "locked" : ""}`}
      onClick={!isLocked ? onClick : undefined}
      aria-label={isLocked ? "This door is locked" : `Day ${day}`}
      style={{
        backgroundImage:
          day === 25 ? "none" : isOpened ? "none" : `url(${doorImage})`,
        cursor: isLocked ? "not-allowed" : "pointer", // Disable pointer events if the door is locked
      }}
    >
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Card.Title
          className={`day-number festive-text p-2 ${
            day === 25 ? "day-25" : ""
          }`}
        >
          {day}
        </Card.Title>
      </Card.Body>
      {isLocked && (
        <div className="locked-overlay">Locked</div> // Display a locked overlay on locked doors
      )}
    </Card>
  );
};

export default Day;
