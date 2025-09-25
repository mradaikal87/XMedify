import React, { useState, useEffect } from "react";
import styles from "./SearchContainer.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  // Load states list
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  // Load cities when state changes
  useEffect(() => {
    if (state) {
      fetch(`https://meddata-backend.onrender.com/cities/${state}`)
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((err) => console.error("Error fetching cities:", err));
    } else {
      setCities([]);
    }
  }, [state]);

  const handleSearch = () => {
    onSearch(state, city);
    navigate(`/search?state=${state}&city=${city}`);

  };

  return (
    <div className={styles.searchBar}>
      {/* State Dropdown */}
      <select
        className={styles.inputWrapper}
        id="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Select State</option>
        {states.map((s, idx) => (
          <option key={idx} value={s}>
            {s}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        className={styles.inputWrapper}
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!state}
      >
        <option value="">Select City</option>
        {cities.map((c, idx) => (
          <option key={idx} value={c}>
            {c}
          </option>
        ))}
      </select>

      {/* Search Button */}
      <button id="searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
