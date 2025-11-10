import React from "react";
import { Card } from "react-bootstrap";
import doorImage from "../assets/images/door.jpg";
import "../styles/Day.css";

const Day = ({ day, content, isOpened, onClick }) => {
  return (
    <Card
      className={`day ${isOpened ? "opened" : ""} ${
        day === 25 ? "day-25" : ""
      }`} // Apply 'day-25' class for Day 25
      onClick={onClick}
      style={{
        backgroundImage:
          day === 25 ? "none" : isOpened ? "none" : `url(${doorImage})`, // Remove image for Day 25
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
    </Card>
  );
};

export default Day;
