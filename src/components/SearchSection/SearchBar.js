import React, { useState, useEffect } from "react";
import styles from "./SearchContainer.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [showStates, setShowStates] = useState(false);
  const [showCities, setShowCities] = useState(false);

  const navigate = useNavigate();

  // Fetch states on mount
  useEffect(() => {
    fetch("https://meddata-backend.onrender.com/states")
      .then((res) => res.json())
      .then((data) => setStates(data))
      .catch((err) => console.error("Error fetching states:", err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (state) {
      fetch(`https://meddata-backend.onrender.com/cities/${state}`)
        .then((res) => res.json())
        .then((data) => setCities(data))
        .catch((err) => console.error("Error fetching cities:", err));
    } else {
      setCities([]);
      setCity("");
    }
  }, [state]);

  const handleSearch = () => {
    if (!state || !city) return;

    // Fetch hospitals only if both state and city are selected
    fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`)
      .then((res) => res.json())
      .then((hospitals) => {
        // Pass hospitals to parent
        onSearch(state, city.toUpperCase(), hospitals);
        // Navigate to search page
        navigate(`/search?state=${state}&city=${city}`);
      })
      .catch((err) => console.error("Error fetching hospitals:", err));
  };

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return (
    <div className={styles.searchBar}>
      {/* STATE */}
      <div id="state" className={styles.select}>
        <div
          className={`${styles.dropdownHeader} ${styles.inputWrapper}`}
          onClick={() => setShowStates((prev) => !prev)}
        >
          {state || "Select State"}
        </div>
        {showStates && (
          <ul className={styles.dropdownList}>
            {states.map((s, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setState(s);
                  setShowStates(false);
                }}
              >
                {capitalizeFirstLetter(s)}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* CITY */}
      <div id="city" className={styles.select}>
        <div
          className={`${styles.dropdownHeader} ${!state ? styles.disabled : ""} ${styles.inputWrapper}`}
          onClick={() => state && setShowCities((prev) => !prev)}
        >
          {city || "Select City"}
        </div>
        {showCities && (
          <ul className={styles.dropdownList}>
            {cities.map((c, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setCity(c);
                  setShowCities(false);
                }}
              >
                {c.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        id="searchBtn"
        onClick={handleSearch}
        disabled={!state || !city}
        className={!state || !city ? styles.disabledBtn : ""}
      >
        Search
      </button>
    </div>
  );
}
