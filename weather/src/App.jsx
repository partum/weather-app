import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Denver')

  const fetchWeatherData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }

  useEffect(() => {
    fetchWeatherData();
  }, [city]); // Add city as dependency

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  }

  return (
    <>
       <div> 
        {data && ( // Add null check
          <div>
            <h1>{data.name}</h1>
            <h2>{data.main.temp} °F</h2>
            <p>{data.weather[0].main}</p>
            <div className="additional-info">
            <p>High: {data.main.temp_max} °F</p>
            <p>Low: {data.main.temp_min} °F</p>
            </div>
          </div>
        )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter city name"
        />
        <button type="submit">Search</button>
      </form>
      </div>
    </>
  )
}

export default App
