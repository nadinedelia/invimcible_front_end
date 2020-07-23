import React from "react";
import image from "../../images/home_screen_still.jpg";

export default function Home() {
  return (
    <center>
      <div class="homescreencontainer">
        <img src={image} alt="HomeScreen" id="vimGame"></img>
        <a href="./about">
          <button class="about-btn">ABOUT</button>
        </a>
        <a href="/play">
          <button class="start-btn">START GAME</button>
        </a>
      </div>
    </center>
  );
}
