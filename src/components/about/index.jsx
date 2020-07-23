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

          <table>
            <tr>
              
          <div class="githubs">
          <td>
            <a href="https://github.com/sofyloafy">
              <p1>Sophie Brown</p1>
            </a>
            </td>

            <td>
            <a href="https://github.com/Sumner1185">
              <p1>Al Sumner</p1>
            </a>
            </td>

            <td>
            <a href="https://github.com/tristanlangford">
              <p1>Tristan Langford</p1>
            </a>
            </td>

            <td>
            <a href="https://github.com/raerachael">
              <p1>Rachael Ewins</p1>
            </a>
            </td>

            <td>
            <a href="https://github.com/nadinedelia">
              <p1>Nadine Loepfe</p1>
            </a>
            </td>

            <td>
            <a href="https://github.com/katie-mcdonagh">
              <p1>Katie McDonagh</p1>
            </a>
            </td>
          </div>
          </tr>
          </table>
        </div>
      </center>
    </div>
  );
}
