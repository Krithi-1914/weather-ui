import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loader from "./components/Loader";
import { fetchWeatherByCity } from "./services/weatherService";
import "./App.css";   // ✅ Make sure this file exists

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setWeatherData(null);

      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="app-container">
        <h1 className="app-title">Weather Dashboard</h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <Loader />}
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </>
  );
}

export default App;