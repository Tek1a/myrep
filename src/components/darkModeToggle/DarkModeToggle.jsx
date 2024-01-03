"use client";

import React, { useState } from "react";
import styles from "./darkModeToggle.module.css";

function DarkModeToggle() {
  const [light, setLight] = useState("left");

  return (
    <div
      className={styles.container}
      onClick={() => {
        if (light === "left"){
        setLight("right");
      }
      else {
        setLight("left")
      }}}>

      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div className={styles.ball }  style={light === "left" ? {right: "2px"} : {left: "2px"}}/>
    </div>
  );
}

export default DarkModeToggle;