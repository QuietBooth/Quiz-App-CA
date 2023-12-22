import React from 'react';
import '../App.css';

export default function Result({ Score, Restart }) {
  let comment = '';

  if (Score === 10) {
    comment = "Wow! You're a true music maestro. Your knowledge is unparalleled!";
  } else if (Score === 9) {
    comment = "Excellent! You're a music aficionado. Just one step away from perfection!";
  } else if (Score === 8) {
    comment = "Great job! Your music knowledge is impressive. Keep rocking!";
  } else if (Score === 7) {
    comment = "Well done! You have a solid understanding of music. Keep it up!";
  } else if (Score === 6) {
    comment = "Good effort! You've got a decent grasp of music. Keep exploring!";
  } else if (Score === 5) {
    comment = "Impressive. You really know your stuff when it comes to music.";
  } else if (Score === 4) {
    comment = "Decent effort. You seem to have some love for music.";
  } else if (Score === 3) {
    comment = "Just a part-time listener. You could do better.";
  } else if (Score === 2) {
    comment = "Not much of a music enthusiast, are you?";
  } else if (Score === 1) {
    comment = "Seriously? Have you ever even listened to music?";
  }

  return (
    <div className="Result-box">
      <h1 style={{ fontSize: "65px", fontWeight: "800", textAlign: "center" }}>Final Score</h1>
      <h2 style={{ fontSize: "40px", fontWeight: "800", textAlign: "center" }}>
        {Score} out of 10 correct - {((Score * 100) / 10).toFixed(2)}%
      </h2>
      <p style={{ fontSize: "24px", textAlign: "center"}}>{comment}</p>
      <button onClick={Restart}>
        Play Again
      </button>
    </div>
  );
}