// adapted for React from https://www.geeksforgeeks.org/axios-in-react-native/
// displays "Not available" on network error. 

import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [advice, setAdvice] = useState("");

  const getRandomId = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
  };

  const getAdvice = () => {
    axios
      .get("http://api.adviceslip.com/advice/" + getRandomId(1, 200))
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
        // Display an error message
        setAdvice("Not available");
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1 style={{ margin: "10px" }}>Advice</h1>
      <p style={{ margin: "10px" }}>{advice}</p>
      <button onClick={getAdvice} style={{ margin: "10px" }}>Get Advice</button>
    </div>
  );
}
