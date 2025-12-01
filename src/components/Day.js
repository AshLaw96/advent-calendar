import React from "react";
import { Card } from "react-bootstrap";
import doorImage from "../assets/images/door.jpg";
import "../styles/Day.css";

const Day = ({ day, content, isOpened, onClick, isLocked, currentDate }) => {
  return (
    <Card
      className={`day ${isOpened ? "opened" : ""} ${
        day === 25 ? "day-25" : ""
      } ${isLocked ? "locked" : ""}
      ${currentDate === day ? "is-today" : ""}
      `}
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

      {/* Show locked overlay if the door is locked */}
      {isLocked && <div className="locked-overlay">Locked</div>}
    </Card>
  );
};

export default Day;
