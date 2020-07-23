import React from "react";
import image from "../../images/home_screen_still.jpg";

export default function Home() {
  return (
    <div class="homescreencontainer">
      <center>
        <div class="background-container">
          <img src={image} alt="HomeScreen" id="vimGame"></img>
          <a href="/play">
            <button class="start-btn">START GAME</button>
          </a>
          <a href="./about">
            <button class="about-btn">ABOUT</button>
          </a>
        </div>
      </center>
    </div>
  );
}
