import { useState } from "react";
import "./App.css";
import { fetchWeather } from ".api";
import WeatherCard from "./Components/WeatherCard";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weather = await fetchWeather(city, setError);
      setWeather(weather);
    } catch (err) {
      setError("City Not Found");
    }
  };

  return (
    <>
      <div className="App">
        <h1 className="app_heading">Weather App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter city"
            onChange={handleChange}
            value={city}
          />
          <button type="submit">Search</button>
        </form>

      {error ? (<p className="error">{error}</p>)  : (
        <WeatherCard weather={weather}/>
      )}
      </div>
    </>
  );
};

export default App;
