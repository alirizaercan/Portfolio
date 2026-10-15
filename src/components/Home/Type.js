import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Scientist & Software Developer",
          "R&D Engineer @ Autodidactic Technologies",
          "Time-Series & Sensor Analytics",
          "LLM & Reinforcement Learning",
          "Full-Stack · FastAPI · Vue · React",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
