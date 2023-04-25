import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [te, sette] = useState("");
  const [place, setplace] = useState("");
  const [loc, setloc] = useState("");
  const [spin, setspin] = useState(true);
  function test(e) {
    // console.log(e.target.value);
    setplace(e.target.value);
  }
  function search() {
    setspin(true);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=a1ac47818feac7ec283e7b680fe7e0fa`)
      // .then(response =>{})
      .then(function (response) {
        sette(response.data.main.temp);
        setloc(response.data.name);
      })
      .then(function(response){
        setspin(false);
      })
  }


  return (

    <div className="background">
      {/* <h1>Weather App</h1> */}
      <div className="box">
        <div className="app">The Weather App</div>
        {!spin ?
          <>

            <div className="tem">{te}°celcius</div>
            <div className="city">{loc}</div>
          </> :
          <div style={{ textAlign: 'center' }}><i className="fas fa-circle-notch fa-spin" ></i></div>}
      </div>
      <div className="box2">
        <div className="box3">
          <input className="text" placeholder='Enter city' onChange={test} name='x' value={place}></input>
        </div>

        <button className="weather" onClick={search}>Get Weather</button>

      </div>
      <img src='pic.png' className="photo"></img>
    </div>


  );
}

export default App;
