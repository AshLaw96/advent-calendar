import React, { useState } from "react";
import Day from "./Day";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import "../styles/Modal.css";

const AdventCalendar = () => {
  const [openedDoors, setOpenedDoors] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    const content = adventContent.find((item) => item.date === day);
    setModalContent(content);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="container my-4">
      {/* First Row for Days 1 to 24 */}
      <div className="row row-cols-2 row-cols-sm-4 row-cols-md-6 g-3 justify-content-center mx-auto">
        {/* Render doors for Day 1 to Day 24 */}
        {Array.from({ length: 24 }, (_, index) => {
          const day = index + 1;
          return (
            <div className="col-auto" key={day}>
              <Day
                day={day}
                isOpened={openedDoors.includes(day)}
                onClick={() => handleDoorClick(day)}
                content={adventContent[day - 1]}
              />
            </div>
          );
        })}
      </div>

      {/* Separate Row for Day 25 */}
      <div className="row g-3 justify-content-center mt-1">
        <div className="col-12" key="25">
          {" "}
          {/* Full width on all screen sizes */}
          <Day
            day={25}
            isOpened={openedDoors.includes(25)}
            onClick={() => handleDoorClick(25)}
            content={adventContent[24]}
          />
        </div>
      </div>

      {/** Modal for displaying door content **/}
      <BootstrapModal
        show={showModal}
        onHide={closeModal}
        dialogClassName="svp-modal-dialog"
        contentClassName="svp-modal-content"
        backdropClassName="svp-modal-backdrop"
        centered
        size="lg"
      >
        <BootstrapModal.Header closeButton className="svp-modal-header">
          <BootstrapModal.Title className="svp-modal-title">
            {/* Display the title from modalContent */}
            {modalContent ? modalContent.title : "Modal Title"}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body className="svp-modal-body">
          {modalContent && (
            <>
              {/* 💥 1. CONDITIONALLY RENDER IMAGE */}
              {modalContent.mediaType === "image" && modalContent.mediaUrl && (
                /* 💥 Wrap the image in a link so can see image better on modal */
                <a
                  href={modalContent.mediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={modalContent.mediaUrl}
                    alt={modalContent.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "60vh",
                      objectFit: "contain",
                      marginBottom: "15px",
                      borderRadius: "8px",
                      cursor: "zoom-in" /* Adds a visual cue */,
                    }}
                  />
                </a>
              )}

              {/* 💥 2. CONDITIONALLY RENDER VIDEO (YouTube Embed) */}
              {modalContent.mediaType === "video" && modalContent.mediaUrl && (
                // Container to maintain the 16:9 aspect ratio for video
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src={modalContent.mediaUrl}
                    title={modalContent.title}
                    allowFullScreen
                  />
                </div>
              )}

              {/* 💥 3. RENDER CONTENT TEXT */}
              <p>{modalContent.content}</p>

              {/* 💥 4. CONDITIONALLY RENDER LINK BUTTON */}
              {modalContent.linkUrl && (
                <div className="text-center">
                  <a
                    href={modalContent.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    // Using Bootstrap button classes to make it look good
                    className="btn btn-primary svp-modal-link-button fw-bold"
                  >
                    {modalContent.linkText || "Find Out More"}{" "}
                    {/* Fallback text */}
                  </a>
                </div>
              )}
            </>
          )}
        </BootstrapModal.Body>
        <BootstrapModal.Footer className="svp-modal-footer d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={closeModal}
            className="svp-modal-button fw-bold text-uppercase"
          >
            Close
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </div>
  );
};

export default AdventCalendar;
