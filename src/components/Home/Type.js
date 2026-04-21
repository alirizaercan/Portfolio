import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI & Machine Learning Engineer",
          "Full-Stack Developer",
          "Data Science Expert",
          "LLM Specialist",
          "Computer Vision Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
