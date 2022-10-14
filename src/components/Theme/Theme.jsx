import React  from 'react';
import { useState } from 'react';
import "./Theme.scss";

export default function Theme() {
  const [color, setColor] = useState("light");
  const [btnColor, setBtnColor] = useState("btnDark");

  function themes() {
    setColor(color === "light" ? "dark" : "light");
  }

  function buttonColor() {
    setBtnColor(btnColor === "btnDark" ? "btnLight" : "btnDark");
  }

  return (
    <React.Fragment>
      <div class={`card-container ${color === "light" ? "light" : "dark"}`}>
        <button 
          class={`pro ${btnColor === "btnDark" ? "btnDark" : "btnLight"}`}
          onClick={() => {
            themes();
            buttonColor();
          }}
          >
          Color
        </button>
        <img class="round" src="https://randomuser.me/api/portraits/men/93.jpg" alt="user" />
        <h3>Kamashi</h3>
        <h6>Kashkadarya</h6>
        <p>User interface designer and <br/> front-end developer</p>
        
        <div class="skills">
          <h6>Skills</h6>
          <ul>
            <li>UI / UX</li>
            <li>Front End Development</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}
