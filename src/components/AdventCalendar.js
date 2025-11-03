import React, { useState } from "react";
import Day from "./Day";

const AdventCalendar = () => {
  const [openedDoors, setOpenedDoors] = useState({});
  const adventContent = [
    {
      date: 1,
      title: "Day 1: Placeholder Message of Hope",
      content: "Placeholder content for Day 1",
    },
    {
      date: 2,
      title: "Day 2: Placeholder Message of Hope",
      content: "Placeholder content for Day 2",
    },
    {
      date: 3,
      title: "Day 3: Placeholder Message of Hope",
      content: "Placeholder content for Day 3",
    },
    {
      date: 4,
      title: "Day 4: Placeholder Message of Hope",
      content: "Placeholder content for Day 4",
    },
    {
      date: 5,
      title: "Day 5: Placeholder Message of Hope",
      content: "Placeholder content for Day 5",
    },
    {
      date: 6,
      title: "Day 6: Placeholder Message of Hope",
      content: "Placeholder content for Day 6",
    },
    {
      date: 7,
      title: "Day 7: Placeholder Message of Hope",
      content: "Placeholder content for Day 7",
    },
    {
      date: 8,
      title: "Day 8: Placeholder Message of Hope",
      content: "Placeholder content for Day 8",
    },
    {
      date: 9,
      title: "Day 9: Placeholder Message of Hope",
      content: "Placeholder content for Day 9",
    },
    {
      date: 10,
      title: "Day 10: Placeholder Message of Hope",
      content: "Placeholder content for Day 10",
    },
    {
      date: 11,
      title: "Day 11: Placeholder Message of Hope",
      content: "Placeholder content for Day 11",
    },
    {
      date: 12,
      title: "Day 12: Placeholder Message of Hope",
      content: "Placeholder content for Day 12",
    },
    {
      date: 13,
      title: "Day 13: Placeholder Message of Hope",
      content: "Placeholder content for Day 13",
    },
    {
      date: 14,
      title: "Day 14: Placeholder Message of Hope",
      content: "Placeholder content for Day 14",
    },
    {
      date: 15,
      title: "Day 15: Placeholder Message of Hope",
      content: "Placeholder content for Day 15",
    },
    {
      date: 16,
      title: "Day 16: Placeholder Message of Hope",
      content: "Placeholder content for Day 16",
    },
    {
      date: 17,
      title: "Day 17: Placeholder Message of Hope",
      content: "Placeholder content for Day 17",
    },
    {
      date: 18,
      title: "Day 18: Placeholder Message of Hope",
      content: "Placeholder content for Day 18",
    },
    {
      date: 19,
      title: "Day 19: Placeholder Message of Hope",
      content: "Placeholder content for Day 19",
    },
    {
      date: 20,
      title: "Day 20: Placeholder Message of Hope",
      content: "Placeholder content for Day 20",
    },
    {
      date: 21,
      title: "Day 21: Placeholder Message of Hope",
      content: "Placeholder content for Day 21",
    },
    {
      date: 22,
      title: "Day 22: Placeholder Message of Hope",
      content: "Placeholder content for Day 22",
    },
    {
      date: 23,
      title: "Day 23: Placeholder Message of Hope",
      content: "Placeholder content for Day 23",
    },
    {
      date: 24,
      title: "Day 24: Placeholder Message of Hope",
      content: "Placeholder content for Day 24",
    },
  ];

  const handleDoorClick = (day) => {
    if (!openedDoors.includes(day)) {
      setOpenedDoors([...openedDoors, day]);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar-grid">
        {Array.from({ length: 24 }, (_, index) => {
          const day = index + 1;
          return (
            <Day
              key={day}
              day={day}
              isOpened={openedDoors.includes(day)}
              onClick={() => handleDoorClick(day)}
              content={adventContent[day - 1]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AdventCalendar;
