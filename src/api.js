export async function fetchWeather(city, setError) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError("City Not Found!");
        return response;
      }
      const data = await response.json();
      setError("");
      return data;
    } catch (error) {
      setError("An error occurred while fetching weather data");
      return error;
    }
  }
  