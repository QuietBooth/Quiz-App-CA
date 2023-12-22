// Home.jsx

import React, { useState } from "react";
import LightMode from "../assets/Light.png";
import DarkMode from "../assets/Dark.png";
import '../index.css';

function Home({ startQuiz }) {
  const [Theme, setTheme] = useState("dark");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.body.classList.toggle("Dark", Theme === "light");
    document.body.classList.toggle("Light", Theme === "dark");
  };
`1`
return (
    <div className={`Quiz ${Theme}`}>
        <div className="Main-Part">
        <img style={{width:"270px",height:"400px",borderRadius:"10px"}} src="https://i.pinimg.com/564x/b0/ab/96/b0ab96e487ecd15739091c9208263302.jpg" alt="" />
        <button style={{width:"120px",height:"40px",cursor:"pointer"}} className={`start ${Theme}`} onClick={startQuiz}>Play</button>
        </div>
    </div>
);
}

export default Home;
