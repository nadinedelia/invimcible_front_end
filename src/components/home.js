import React from "react"
import image from "../public/images/home_screen_still.jpg"

console.log(image)

export default function Home () {
  return(
    <div className="home">
      <center>
      <div class="background-container">
        <p>The adventures of Vim Bishop</p>
        <img src={image} id="vimGame"></img>
        <span class='start-btn'>START</span>
      </div>
      </center>
    </div>
  )
}
