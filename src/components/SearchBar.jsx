import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;