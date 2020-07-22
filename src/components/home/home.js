import React from "react"
import image from "../../images/home_screen_still.jpg"

console.log(image)

export default function Home() {
  const style = { width: '100%' };
  return(
    <div className="home">
      <center>
      <div class="background-container">
        <p>The adventures of Vim Bishop</p>
        <img src={image} 
        alt="HomeScreen"
        id="vimGame"
        style={ style }
        background-position="center"
        background-repeat="no-repeat"
        background-size="cover"></img>
        <span class='start-btn'>START</span>
      </div>
      </center>
    </div>
  )
}
