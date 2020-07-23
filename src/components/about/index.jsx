import React from "react";

export default function About() {
  return (
    <div className="about">
      <center>
        <div class="background-container">
          <p> Hi, we are the creators of The adventures of Vim. </p>
          <p>
            {" "}
            We are six budding software developers who joined Makers Academy in
            May 2020 and built The Adventures of Vim as our final project.{" "}
          </p>
          <p> Click on our names to see our other work. </p>

          <div class="githubs">
            <a href="https://github.com/sofyloafy">
              <p>Sophie Brown</p>
            </a>

            <a href="https://github.com/Sumner1185">
              <p>Al Sumner</p>
            </a>

            <a href="https://github.com/tristanlangford">
              <p>Tristan Langford</p>
            </a>

            <a href="https://github.com/raerachael">
              <p>Rachael Ewins</p>
            </a>

            <a href="https://github.com/nadinedelia">
              <p>Nadine Loepfe</p>
            </a>

            <a href="https://github.com/katie-mcdonagh">
              <p>Katie McDonagh</p>
            </a>
          </div>
        </div>
      </center>
    </div>
  );
}
