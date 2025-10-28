import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Denver');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = () => {
    setLoading(true);
    setError(null);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(json => {
        setData(json);
        setError(null);
      })
      .catch(error => {
        console.error(error);
        setError('Could not find weather data for this city');
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchWeatherData(); // This will run once on initial load
  }, []); // Empty dependency array. This ensures it only runs when submitted, not on every key stroke.

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(); // Only fetch weather when form is submitted
  }

  return (
    <>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {data && !loading && !error && (
          <div>
            <img 
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].main}
            />
            <h1>{data.name}</h1>
            <h2>{data.main.temp} °F</h2>
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
            onChange={handleChange}
            placeholder="Enter city name"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default App
