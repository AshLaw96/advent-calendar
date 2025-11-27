import React, { useState, useEffect, useMemo } from "react";
import snowflake1 from "../assets/images/snowflake-1.png"; // Snowflake images
import snowflake2 from "../assets/images/snowflake-2.png";
import snowflake3 from "../assets/images/snowflake-3.png";
import snowflake4 from "../assets/images/snowflake-4.png";
import snowflake5 from "../assets/images/snowflake-5.png";
import snowflake6 from "../assets/images/snowflake-6.png";
import "../styles/Snowflakes.css"; // Import the CSS file for snowflakes

const Snowflakes = () => {
  // 💥 1. Use state to hold the array of snowflake styles
  const [snowflakes, setSnowflakes] = useState([]);

  // 💥 2. useMemo caches the image array so it's not rebuilt on every render
  const snowflakeImages = useMemo(
    () => [
      snowflake1,
      snowflake2,
      snowflake3,
      snowflake4,
      snowflake5,
      snowflake6,
    ],
    []
  );
  useEffect(() => {
    const snowflakeCount = 50;
    const newSnowflakes = []; // A temporary array

    for (let i = 0; i < snowflakeCount; i++) {
      // 💥 3. Create a style *object* instead of a DOM element
      const randomIndex = Math.floor(Math.random() * snowflakeImages.length);
      const randomLeft = Math.floor(Math.random() * 100) + "vw";
      const randomSize = Math.floor(Math.random() * 30) + 10 + "px";
      const randomDuration = Math.floor(Math.random() * (15 - 8) + 8) + "s";
      const randomDelay = Math.floor(Math.random() * 5) + "s";
      // This is for the new, improved animation (see step 2)
      const randomDrift = Math.floor(Math.random() * 100 - 50) + "px";

      newSnowflakes.push({
        id: i, // React needs a unique key
        style: {
          backgroundImage: `url(${snowflakeImages[randomIndex]})`,
          left: randomLeft,
          width: randomSize,
          height: randomSize,
          animationDuration: randomDuration,
          animationDelay: randomDelay,
          // 💥 4. Pass the random drift as a CSS Custom Property
          "--drift-amount": randomDrift,
        },
      });
    }

    // 💥 5. Set the state once with the complete array
    setSnowflakes(newSnowflakes);
  }, [snowflakeImages]); // Re-run if the image array (in useMemo) ever changes

  return (
    <div className="snowflakes-container">
      {
        /* 💥 6. Map over the state array to render the snowflakes */
        snowflakes.map((flake) => (
          <div key={flake.id} className="snowflake" style={flake.style} />
        ))
      }
    </div>
  );
};

export default Snowflakes;
