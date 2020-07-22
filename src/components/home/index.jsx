import React from "react"
import image from "../../images/home_screen_still.jpg"


console.log(image)

export default function Home() {
  const style = {
    height: '700',
    width: '100%',
  };
  return(
    <div class="homescreencontainer">
      <center>
      <div class="background-container">
        <img src={image} 
        alt="HomeScreen"
        id="vimGame"
        style={ style }
        ></img>
        <span class="start-btn">START GAME</span>
        <span class="about-btn">ABOUT</span>
      </div>
      </center>
    </div>
  )
}


