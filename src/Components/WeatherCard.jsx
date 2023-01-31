const WeatherCard = ({weather}) => {
  return (
    <>
      <div className="weather-card">
        <div className="card-header">
          <div>
            <p className="weather-city">
                {weather ? (weather.name + ' ' + weather.sys.country) : "-"}
            </p>
            <p className="weather-description">
                {weather ? (weather.weather[0].description) : "-"}
            </p>
            </div>
            <img alt={'weather'} className={'weather.icon'}
            src={`icons/${weather ? (weather.weather[0].icon) : "unknown"}.png`} />
        </div>
      </div>
    </>
  );
};

export default WeatherCard;
