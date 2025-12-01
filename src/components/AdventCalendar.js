import React, { useState, useEffect } from "react";
import Day from "./Day";
import { Button, Modal as BootstrapModal } from "react-bootstrap";
import "../styles/Modal.css";
import day1Image from "../assets/images/1st.png";
import day2Image from "../assets/images/giving-tuesday.png";
import day3Image from "../assets/images/margaret.jpg";
import day4Image from "../assets/images/ely-bridge.jpg";
import day5Image from "../assets/images/5th.png";
import day6Image from "../assets/images/chorley.png";
import day7Image from "../assets/images/sheffield-awards.png";
import day8Image from "../assets/images/csp-deaf-centre.png";
import day9Image from "../assets/images/bradford.png";
import day10Image from "../assets/images/10th.png";
import day11Image from "../assets/images/tower-house.png";
import day12Image from "../assets/images/yolonda.jpg";
import day13Image from "../assets/images/leeds.jpg";
import day14Image from "../assets/images/14th.png";
import day15Image from "../assets/images/newcastle.png";
import day16Image from "../assets/images/brixton.jpg";
import day17Image from "../assets/images/southend.jpg";
import day18Image from "../assets/images/wirral-calendar.jpg";
import day19Image from "../assets/images/pontypridd.jpg";
import day20Image from "../assets/images/shop.jpg";
import day21Image from "../assets/images/call-to-action.png";
import day22Image from "../assets/images/percent-76.png";
import day23Image from "../assets/images/26th.png";
import day24Image from "../assets/images/24th.png";
import day25Image from "../assets/images/25th.png";

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
    title: "Day 2: Giving Tuesday - Lift a Life Christmas Appeal",
    content:
      "This #GivingTuesday, you can help lift a life?'I travel two hours a day to get here and back to the hostel but it's worth it. By the time I leave here I am happier than when I came.' — James*, The Wirral. For James, and thousands of others across England and Wales, our Support Centres are more than a place of support — they're a source of dignity, warmth, and hope. But right now poverty is pulling too many people down. Families are working harder than ever and still struggling to get by. With your gift today, you can help lift someone up. With food, comfort and the reassurance that they are not alone You can donate now and help us bring hope this Winter and beyond \n*named changed for anonymity",
    mediaType: "image",
    mediaUrl: day2Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=FB_Organic",
    linkText: "Give vulnerable families the lift they need this Christmas ",
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
    title: "Day 12: Yolanda's Story: A Mother Finding Peace",
    content:
      "I finally felt peace in my life when the SVP was able to help me and my sons. Can you help us continue to help more people like Yolanda?",
    mediaType: "image",
    mediaUrl: day12Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=calendar",
    linkText: "Please donate to our Lift a life Christmas",
  },
  {
    date: 13,
    title: "Day 13: St Vincent's Leeds Community Centre",
    content:
      "St Vincent's Leeds, a vibrant community hub based in East Leeds, is dedicated to changing lives through advice, support and education. The centre supports the local community with a wide range of free services and group activities, expert debt advice and counselling, emergency food support, a charity shop and community café - all under one roof!",
    mediaType: "image",
    mediaUrl: day13Image,
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
    title: "Day 15: St Vincent's Newcastle Community Centre",
    content:
      "St Vincent's Newcastle is a thriving community hub, home to Vinnies drop-in, a local institution where hot 3-course, free lunches are served along with free haircuts, NHS health checks and welfare advice. In addition, a weekly Vinnies Pop-up market helps local residents with the cost of living, whilst also offering support from a partnership with Citizen's Advice.",
    mediaType: "image",
    mediaUrl: day15Image,
    linkUrl: "https://svp.org.uk/st-vincents-newcastle",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 16,
    title: "Day 16: St Vincent's Brixton Community Centre",
    content:
      "St Vincent’s Brixton is a vibrant arts-oriented community hub based in Brixton, London. The centre offers meaningful and long-term befriending and support people with independent living developing their skills and helping to create longer terms benefits in people's lives. ",
    mediaType: "image",
    mediaUrl: day16Image,
    linkUrl: "https://svp.org.uk/st-vincents-brixton",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 17,
    title: "Day 17: St Vincent's Southend Community Centre",
    content:
      "St Vincent's Southend offers a friendly, non-judgemental and unique 'wrap around' service tailored to the needs of the individual. The centre also provides foodbank services, hot meals, in and outreach support, homelessness support, household items and clothing, counselling, dementia support and a befriending service.",
    mediaType: "image",
    mediaUrl: day17Image,
    linkUrl: "https://svp.org.uk/st-vincents-southend",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 18,
    title: "Day 18: St Vincent's Wirral Community Centre",
    content:
      "Located on Grange Road West, the building, formerly the Merseyside Centre for Deaf People, hosts a foodbank and a daily afternoon drop-in café, which will reach out to people in need and offer signposting to local service providers who can provide specialised support. Learn",
    mediaType: "image",
    mediaUrl: day18Image,
    linkUrl: " https://svp.org.uk/microsite/st-vincents-wirral",
    linkText: "Learn more about the Centre here",
  },
  {
    date: 19,
    title: "Day 19: St Vincent's Pontypridd Community Centre",
    content:
      "Our charity shops are so much more than somewhere to get great deals - by shopping in our charity shops, you're helping support the vital work of the SVP & supporting people in need. ",
    mediaType: "image",
    mediaUrl: day19Image,
    linkUrl: "https://svp.org.uk/shop",
    linkText: "SVP Shop: local and online | St Vincent de Paul Society",
  },
  {
    date: 20,
    title: "Day 20: SVP Charity Shops: Supporting Our Work",
    content:
      "Our charity shops are so much more than somewhere to get great deals - by shopping in our charity shops, you're helping support the vital work of the SVP & supporting people in need.",
    mediaType: "image",
    mediaUrl: day20Image,
    linkUrl: "https://svp.org.uk/shop",
    linkText: "SVP Shop: local and online | St Vincent de Paul Society",
  },
  {
    date: 21,
    title: "Day 21: A Call to Action: Help Lift a Life",
    content:
      "Too many families are facing impossible choices Child Action Poverty Group revealed: \n4.5million children are growing up in the UK in poverty \n43% of children living in lone parent households are in poverty \nThe groups most affected include households with children, single parents, part-time workers, and people living with health conditions. Behind every statistic is a family spending Christmas under pressure, deciding whether to heat their home, feed their children or keep the lights on. Tonight, as many of us gather in warmth and comfort, we're asking: will you #HelpLiftALife? Your gift could provide food, warmth, dignity, and hope to someone who feels forgotten.",
    mediaType: "image",
    mediaUrl: day21Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=FB_Organic",
    linkText: "Give vulnerable families the lift they need this Christmas",
  },
  {
    date: 22,
    title: "Day 22: A Message of Hope",
    content:
      "Our recent In-Work Poverty Report revealed: \n💧 76% of the survey's SVP frontline respondents witnessed those they support having to choose between essential items such as food, household bills and heating, despite working \n🏠 75% report families falling behind on household bills  This Christmas, we're asking you to do something different. Instead of adding to your basket, can you add to someone,s hope. \nDonate to the SVP Christmas Appeal and Help Lift a Life:",
    mediaType: "image",
    mediaUrl: day22Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=FB_Organic",
    linkText: "Give vulnerable families the lift they need this Christmas",
  },
  {
    date: 23,
    title: "Day 23: Continuing the Care Beyond Christmas",
    content:
      "We embrace the spirit of neighbourly care, ensuring that support and kindness extend beyond the holiday itself. As the season settles into a quieter rhythm, we remain present, bringing comfort, continuity and a reminder that compassion is a gift carried into every day.",
    mediaType: "image",
    mediaUrl: day23Image,
    linkUrl:
      "https://fundraising.svp.org.uk/page/173912/donate/1?ea.tracking.id=calendar",
    linkText: "Can you help us continue to Lift a life this Winter & beyond?",
  },
  {
    date: 24,
    title: "Day 24: Christmas Eve: A Message of Compassion",
    content:
      "On Christmas Eve, we reflect our founding spirit of compassion by offering warmth, welcome, and practical support to anyone who needs it. It's a moment to honour volunteers, recognise the dignity of every person and share hope with neighbours who might otherwise feel alone at this time of year.",
    mediaType: "image",
    mediaUrl: day24Image,
  },
  {
    date: 25,
    title: "Day 25: Merry Christmas from SVP",
    content:
      "We are wishing a Merry Christmas to all our members, supporters, donors, staff & those who have reached out to us this year.\nWe continue to serve you into 2026 and beyond.",
    mediaType: "image",
    mediaUrl: day25Image,
  },
];

const AdventCalendar = () => {
  const [openedDoors, setOpenedDoors] = useState([]);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(null); // State to store current date

  // Get the current date and set it
  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDate(); // Get the day of the month (1-31)
    setCurrentDate(currentDay); // Set the current day in state
  }, []);

  const handleDoorClick = (day) => {
    if (currentDate >= day) {
      // Only allow the door to be opened if the current date is greater than or equal to the door number
      if (!openedDoors.includes(day)) {
        setOpenedDoors([...openedDoors, day]);
      }
      const content = adventContent.find((item) => item.date === day);

      // Use 'content' properly by setting it to modalContent
      setModalContent(content); // Set the whole content (including title, content, mediaUrl) to modal

      setShowModal(true);
    } else {
      // Handle locked doors
      setModalContent({
        title: "This door is locked",
        content: "Come back on the correct date to open this door 🎄",
      });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalContent(null);
  };

  return (
    <div className="container my-4">
      <div className="advent-card-grid">
        {/* Render doors for Day 1 to Day 24 */}
        {Array.from({ length: 24 }, (_, index) => {
          const day = index + 1;
          return (
            <div key={day}>
              <Day
                day={day}
                isOpened={openedDoors.includes(day)}
                onClick={() => handleDoorClick(day)}
                content={adventContent[day - 1]}
                isLocked={currentDate < day} // Lock door if the date is less than the door number
                currentDate={currentDate}
              />
            </div>
          );
        })}
      </div>

      {/* Separate Row for Day 25 */}
      <div className="day-25-wrapper">
        <Day
          day={25}
          isOpened={openedDoors.includes(25)}
          onClick={() => handleDoorClick(25)}
          content={adventContent[25 - 1]}
          isLocked={currentDate < 25} // Lock door if the date is less than 25
          currentDate={currentDate}
        />
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

              {/* 💥 2. RENDER CONTENT TEXT */}
              <div className="modal-content-text">
                {modalContent.content
                  .split("\n") // Split content by new line
                  .map((line, index) => (
                    <p key={index}>{line}</p> // Render each line in a <p> tag
                  ))}
              </div>

              {/* 💥 3. CONDITIONALLY RENDER LINK BUTTON */}
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
