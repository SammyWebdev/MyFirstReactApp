// still faulty

import './App.css';

import * as React from "react";
// import axios from "axios";

import fetchRandomData from "./api/randomApi";

const {useState} = React;

// https://randomuser.me/api/

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>From Coding Interview with Ben Awad:</h1>

      <p>{counter}</p>
      <button onClick={() => {
        setCounter(counter +1);
      }}>Increase Counter</button>
      <button onClick={() => {
        console.log("foo");
        fetchRandomData();
      }}>Fetch Random Data</button>

    </div>
  );
}

export default App;
