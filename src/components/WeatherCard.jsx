function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2>{data.city}</h2>
      <p><strong>Temperature:</strong> {data.temperature}°C</p>
      <p><strong>Humidity:</strong> {data.humidity}%</p>
      <p><strong>Pressure:</strong> {data.pressure} hPa</p>
      <p><strong>Condition:</strong> {data.condition}</p>
    </div>
  );
}

export default WeatherCard;