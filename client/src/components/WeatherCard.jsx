import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="card">
      <h2>{weatherData.city}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt={weatherData.weather}
      />
      <p>Condition: {weatherData.weather}</p>
      <p>Temperature: {weatherData.temperature}°C</p>
      <p>Humidity: {weatherData.humidity}%</p>
      <p>Wind Speed: {weatherData.windSpeed} m/s</p>
    </div>
  );
};

export default WeatherCard;
