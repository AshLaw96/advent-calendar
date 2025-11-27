import React, { useState } from "react";
import Day from "./Day";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import "../styles/Modal.css";
import day1Image from "../assets/images/1st.png";
import day2Image from "../assets/images/yolonda.jpg";
import day3Image from "../assets/images/margaret.jpg";
import day4Image from "../assets/images/ely-bridge.jpg";
import day5Image from "../assets/images/5th.png";
import day6Image from "../assets/images/chorley.png";
import day7Image from "../assets/images/sheffield-awards.png";
import day8Image from "../assets/images/csp-deaf-centre.png";
import day9Image from "../assets/images/bradford.png";
import day10Image from "../assets/images/10th.png";
import day11Image from "../assets/images/tower-house.png";
import day14Image from "../assets/images/14th.png";

const adventContent = [
  {
    date: 1,
    title: "Day 1: A Message of Peace",
    content:
      "May His peace be with you today. Advent reminds us that Christ comes to the poor and the humble.",
    mediaType: "image", // Specify the type
    mediaUrl: day1Image, // The imported image
  },
  {
    date: 2,
    title: "Day 2: Yolanda's Story: A Mother Finding Peace",
    content:
      "I finally felt peace in my life when the SVP was able to help me and my sons. Can you help us continue to help more people like Yolanda?",
    mediaType: "image",
    mediaUrl: day2Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=calendar",
    linkText: "Please donate to our Lift a life Christmas",
  },
  {
    date: 3,
    title: "Day 3: Margaret's Story: Finding Joy Again",
    content:
      "It's so enjoyable now just to get out thanks to the SVP. Can you help us create more happy memories for people like Margaret?",
    mediaType: "image",
    mediaUrl: day3Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=calendar",
    linkText: "Please help us lift a life this Christmas",
  },
  {
    date: 4,
    title: "Day 4: St Vincent's Centre Ely Bridge",
    content:
      "St Vincent's Centre Ely Bridge is a community-support hub that offers a welcoming environment where confidence, skills and well-being can be nurtured. It provides a range of free services from gym and boxing classes to peer support and mental-health resources, to supporting individuals dealing with social issues, loneliness, addiction or mental-health challenges.",
    mediaType: "image",
    mediaUrl: day4Image,
    linkUrl: "https://svp.org.uk/microsite/st-vincents-ely-bridge",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 5,
    title: "Day 5: International Volunteer Day",
    content:
      "Blessed are the hands that bring Christ's love to others. On this 5th day of Advent, which is International Volunteer Day, we give thanks for all who serve with humble hearts",
    mediaType: "image",
    mediaUrl: day5Image,
  },
  {
    date: 6,
    title: "Day 6: SVP Chorley Buddies",
    content:
      "SVP Chorley Buddies is a community-led Centre in Chorley that offers practical support to people facing isolation, hardship or financial difficulty. From discounted shopping via Good Food Clubs to befriending, shopping and med-collection services. There's the aim to reduce social isolation and poverty by providing affordable essentials, friendship and community activities by helping over 1,000 people each week through food support and social outreach.",
    mediaType: "image",
    mediaUrl: day6Image,
    linkUrl: "https://svp.org.uk/microsite/st-vincents-chorley-buddies",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 7,
    title: "Day 7: ",
    content:
      "St Vincent's Sheffield Furniture Project is a community-support project that collects donated furniture and household items across Sheffield, then redistributes them for free to individuals and families in need, aiming to turn empty houses into homes. In recent years the project has dramatically scaled up: in 2023 alone it provided almost 3,000 pieces of essential furniture (beds, tables, chairs, mattresses and more) with more than half of which went to children.",
    mediaType: "image",
    mediaUrl: day7Image,
    linkUrl: "https://svp.org.uk/sheffield-furniture-store",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 8,
    title: "Day 8: Newcastle Deaf Centre",
    content:
      "The Newcastle Deaf Centre offers services including welfare, health and well-being advice in British Sign Language (BSL), a weekly Deaf social club and café, BSL classes, monthly BSL-interpreted mass and inclusion-focused events, all aimed at fostering communication, inclusion and community. ",
    mediaType: "image",
    mediaUrl: day8Image,
    linkUrl: "https://svp.org.uk/microsite/svp-deaf-centre-newcastle",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 9,
    title: "Day 9: St Vincent's Social Enterprise Bradford",
    content:
      "St Vincent's Social Enterprise Bradford, is the Barkerend area of Bradford offering a wide range of free services including ESOL, group activities and projects such as: upcycling and sewing, gardening, immigration support and an outreach service in the South of Bradford. St Vincent's Social Enterprise, Bradford also runs a superstore at Rees Way, offering high quality household items including white goods and furniture.",
    mediaType: "image",
    mediaUrl: day9Image,
  },
  {
    date: 10,
    title: "Day 10: Human Rights Day",
    content:
      "Through the SVP, may we serve with compassion and courage. Today, on Human Rights Day, we reflect on God's gift of every human life.",
    mediaType: "image",
    mediaUrl: day10Image,
  },
  {
    date: 11,
    title: "Day 11: St Vincent's Brighton - Tower House Community Centre",
    content:
      "St Vincent's Brighton, commonly known as Tower House Community Centre, supports people over the age of 50. The centre offers a welcoming café (open to people of any age, including dog-owners), meals and simpler comforts like barista-style coffee and snacks.",
    mediaType: "image",
    mediaUrl: day11Image,
    linkUrl: "https://svp.org.uk/st-vincents-centre-brighton-tower-house",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 12,
    title: "Day 12: Placeholder Message of Hope",
    content: "Placeholder content for Day 12",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 13,
    title: "Day 13: Placeholder Message of Hope",
    content: "Placeholder content for Day 13",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 14,
    title: "Day 14: Jubilee of Prisoners - A Message of Mercy",
    content:
      "May Christ's mercy and hope reach every heart, and may we share His compassion through our service. As we commemorate the Jubilee of Prisoners, today we pray for those in prison.",
    mediaType: "image",
    mediaUrl: day14Image,
  },
  {
    date: 15,
    title: "Day 15: Placeholder Message of Hope",
    content: "Placeholder content for Day 15",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 16,
    title: "Day 16: Placeholder Message of Hope",
    content: "Placeholder content for Day 16",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 17,
    title: "Day 17: Placeholder Message of Hope",
    content: "Placeholder content for Day 17",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 18,
    title: "Day 18: Placeholder Message of Hope",
    content: "Placeholder content for Day 18",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 19,
    title: "Day 19: Placeholder Message of Hope",
    content: "Placeholder content for Day 19",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 20,
    title: "Day 20: Placeholder Message of Hope",
    content: "Placeholder content for Day 20",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 21,
    title: "Day 21: Placeholder Message of Hope",
    content: "Placeholder content for Day 21",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 22,
    title: "Day 22: Placeholder Message of Hope",
    content: "Placeholder content for Day 22",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 23,
    title: "Day 23: Placeholder Message of Hope",
    content: "Placeholder content for Day 23",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 24,
    title: "Day 24: Placeholder Message of Hope",
    content: "Placeholder content for Day 24",
    mediaType: "none",
    mediaUrl: "",
  },
  {
    date: 25,
    title: "Day 25: Special Christmas Message",
    content: "Merry Christmas! 🎄",
    mediaType: "none",
    mediaUrl: "",
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
