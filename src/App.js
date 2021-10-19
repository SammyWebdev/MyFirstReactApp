// still faulty

import './App.css';

import * as React from "react";
import axios from "axios";

const {useState} = React;

// https://randomuser.me/api/

const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api')
    .then((response) => {
      // handle success
      console.log(response);
      return response
    })
    .catch((err) => {
      // handle error
      console.log(err);
    })
}

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
        // none
      }}>Fetch Random Data</button>

    </div>
  );
}

export default App;
