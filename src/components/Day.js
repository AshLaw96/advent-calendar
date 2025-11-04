import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Day.css";

const Day = ({ day, content, isOpened, onClick }) => {
  return (
    <Card className={`day ${isOpened ? "opened" : ""}`} onClick={onClick}>
      <Card.Body className="d-flex justify-content-center align-items-center">
        <Card.Title className="day-number">{day}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Day;
