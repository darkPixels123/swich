import React, { useState, useEffect } from "react";
import styles from "../LoadingPage.module.css";

export default function LoadingPage() {
  const [loadingText, setLoadingText] = useState("LOADING...");

  useEffect(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{}|[]\\;':\"<>?,./`~";

    const ticker = (index) => {
      const newLoadingText = [...loadingText];
      for (let i = index; i < loadingText.length; i++) {
        if (loadingText[i] !== " ") {
          newLoadingText[i] = chars[Math.floor(Math.random() * chars.length)];
        }
      }
      setLoadingText(newLoadingText.join(""));
      if (index < loadingText.length) {
        setTimeout(() => {
          ticker(index + 1);
        }, 50); // Adjust this value for the desired animation speed
      } else {
        setTimeout(() => {
          setLoadingText("LOADING...");
          ticker(0);
        }, 750); // Delay before resetting the animation
      }
    };

    const fadeOut = () => {
      const fadeInterval = setInterval(() => {
        setLoadingText((prevLoadingText) =>
          prevLoadingText
            .split("")
            .map(
              (char) =>
                char === " "
                  ? " " // Preserve spaces
                  : Math.random() < 0.5 // Randomly fade out characters
                  ? " " // Fade out character
                  : chars[Math.floor(Math.random() * chars.length)] // Keep character
            )
            .join("")
        );
      }, 50); // Adjust this value for the desired fading speed

      setTimeout(() => {
        clearInterval(fadeInterval);
      }, 750); // Duration of fading effect
    };

    ticker(0);
    fadeOut();
  }, []); // Run ticker and fadeOut animations on component mount

  return (
    <div>
      <div>
        <div className={styles.word}>{loadingText}</div>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}
