const API_KEY = "c3bda30fb242c2edba5fd721ffbcd890";

export const fetchWeatherByCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  const data = await response.json();

  return {
    city: data.name,
    temperature: data.main.temp,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    condition: data.weather[0].description,
  };
};