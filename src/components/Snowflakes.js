import React, { useEffect } from "react";
import snowflake1 from "../assets/images/snowflake-1.png"; // Snowflake images
import snowflake2 from "../assets/images/snowflake-2.png";
import snowflake3 from "../assets/images/snowflake-3.png";
import snowflake4 from "../assets/images/snowflake-4.png";
import snowflake5 from "../assets/images/snowflake-5.png";
import snowflake6 from "../assets/images/snowflake-6.png";
import "../styles/Snowflakes.css"; // Import the CSS file for snowflakes

const Snowflakes = () => {
  useEffect(() => {
    const snowflakeCount = 50; // Number of snowflakes
    const container = document.querySelector(".snowflakes-container");

    // Create snowflakes dynamically
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");

      // Randomly choose a snowflake image
      const randomImage = [
        snowflake1,
        snowflake2,
        snowflake3,
        snowflake4,
        snowflake5,
        snowflake6,
      ];
      const randomIndex = Math.floor(Math.random() * randomImage.length);
      snowflake.style.backgroundImage = `url(${randomImage[randomIndex]})`;

      // Randomize the left and top position of each snowflake
      const randomLeft = Math.floor(Math.random() * 100) + "vw"; // Random left position (100% of the viewport width)
      const randomTop = Math.floor(Math.random() * 100) + "vh"; // Random top position (100% of the viewport height)

      snowflake.style.left = randomLeft;
      snowflake.style.top = randomTop;

      // Randomize size of snowflakes (to ensure visibility)
      const randomSize = Math.floor(Math.random() * 30) + 10 + "px"; // Random size between 10px and 40px
      snowflake.style.width = randomSize; // Set random width
      snowflake.style.height = randomSize; // Set random height

      // Randomize animation duration and delay for variation
      const randomDuration = Math.floor(Math.random() * (15 - 8) + 8) + "s"; // Random duration between 8s and 15s
      const randomDelay = Math.floor(Math.random() * 5) + "s"; // Random delay for staggered falling

      snowflake.style.animationDuration = randomDuration;
      snowflake.style.animationDelay = randomDelay;

      // Append the snowflake to the container
      container.appendChild(snowflake);
    }
  }, []);

  return <div className="snowflakes-container"></div>;
};

export default Snowflakes;
