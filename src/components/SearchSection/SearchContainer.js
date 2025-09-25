import React, { useState, useEffect } from "react";
import styles from "./SearchContainer.module.css";
import SearchBar from "./SearchBar";
import {
  FaUserMd,
  FaFlask,
  FaHospital,
  FaPills,
  FaAmbulance,
} from "react-icons/fa";
import CategoryCard from "./CategoryCard";
import { useNavigate, useLocation } from "react-router-dom";
import SlotContainer from "../SlotContainer/SlotContainer";
import SearchHospital from "./SearchHospital";

export default function SearchContainer(props) {
  const [results, setResults] = useState([]);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [openSlotIndex, setOpenSlotIndex] = useState(null); // which hospital’s slots are open
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const urlState = queryParams.get("state");
    const urlCity = queryParams.get("city");

    if (urlState && urlCity) {
      setState(urlState);
      setCity(urlCity);

      fetch(
        `https://meddata-backend.onrender.com/data?state=${urlState}&city=${urlCity}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch((err) => console.error("Error fetching data:", err));
    }
  }, [location.search]);

  const handleSearch = (selectedState, selectedCity) => {
    if (!selectedState || !selectedCity) {
      alert("Please select state and city");
      return;
    }
    navigate(`/search?state=${selectedState}&city=${selectedCity}`);
  };

  // store booking to localStorage
  const handleSlotClick = (hospitalName, slotTime) => {
    const currentBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );
    const newBooking = {
      hospital: hospitalName,
      time: slotTime,
      date: new Date().toISOString(),
    };
    localStorage.setItem(
      "bookings",
      JSON.stringify([...currentBookings, newBooking])
    );
    alert(`Booked ${hospitalName} at ${slotTime}`);
  };

  return (
    <div
      className={styles.searchWrapper}
      style={{
        background: props?.data?.background || "",
        paddingTop: props?.paddingTop || "",
        // display: props?.title ? "block" : "flex",
      }}
    >
      {/* Search Section */}
      {props?.title && !props?.state ? (
        <div className={styles.myBooking}>
          <div
            className="container"
            style={{ width: props?.data?.search ? "100%" : "auto" }}
          >
            <div className={styles.bookingheader}>
              <h3 className={styles.title}>{props?.title}</h3>
              <SearchHospital onSearch={handleSearch} />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.myBooking} container`}
          style={{ width: props?.data?.search ? "100%" : "auto" }}
        >
          <div
            className={styles.searchContent}
            style={{ position: props?.data?.search ? "relative" : "absolute" }}
          >
            <SearchBar onSearch={handleSearch} />

            {!props?.data?.search && (
              <>
                <h3 className={styles.title}>You may be looking for</h3>
                <div className={styles.categories}>
                  <CategoryCard icon={<FaUserMd />} label="Doctors" />
                  <CategoryCard icon={<FaFlask />} label="Labs" />
                  <CategoryCard icon={<FaHospital />} label="Hospitals" />
                  <CategoryCard icon={<FaPills />} label="Medical Store" />
                  <CategoryCard icon={<FaAmbulance />} label="Ambulance" />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Results Section */}
      <div
        className="container"
        style={{ width: props?.data?.search ? "100%" : "auto" }}
      >
        {results.length > 0 && (
          <div className={styles.results}>
            <div className={styles.heading}>
              <h1>
                {results.length} medical centers available in {city}
              </h1>
              <p>
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>

            <div className={styles.resultSection}>
              <ul className={styles.hospitalList}>
                {results.map((hospital, idx) => (
                  <li key={idx} className={styles.cardColumn}>
                    <div className={styles.card}>
                      {/* Left Side: Icon */}
                      <div className={styles.iconWrapper}>
                        <img
                          src="/hospital.png"
                          alt="Hospital"
                          className={styles.icon}
                        />
                      </div>

                      {/* Middle Content */}
                      <div className={styles.details}>
                        <h3 className={styles.name}>
                          {hospital["Hospital Name"]}
                        </h3>
                        <p className={styles.location}>
                          {hospital.City}, {hospital.State}
                        </p>
                        <p className={styles.address}>{hospital.Address}</p>
                        <p className={styles.fee}>
                          <span className={styles.free}>FREE</span> <s>₹500</s>{" "}
                          Consultation fee at clinic
                        </p>
                      </div>

                      {/* Right Side */}
                      <div className={styles.actions}>
                        <p className={styles.available}>Available Today</p>
                        <button
                          className={styles.bookBtn}
                          onClick={() =>
                            setOpenSlotIndex(openSlotIndex === idx ? null : idx)
                          }
                        >
                          Book FREE Center Visit
                        </button>
                      </div>
                    </div>

                    {openSlotIndex === idx && (
                      <div className={styles.slotsContainer}>
                        <SlotContainer
                          hospitalName={hospital["Hospital Name"]}
                          city={hospital.City}
                          state={hospital.State}
                          Ownership={hospital["Hospital Ownership"]}
                          onSlotSelect={handleSlotClick} // you can pass this to SlotContainer if needed
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className={styles.rigthColumn}>
                <p className={styles.subtitle}>This World Oral Health Day,</p>
                <h2 className={styles.title}>
                  Get a{" "}
                  <span className={styles.highlight}>FREE Appointment*</span>
                </h2>
                <p className={styles.description}>with Top Dentists.</p>
                <div className={styles.offerBadge}>LIMITED PERIOD OFFER</div>
                <p className={styles.hashtag}>#BeSensitiveToOralHealth</p>
                <p className={styles.disclaimer}>
                  *T&amp;C Apply - only consultation free. Procedures /
                  surgeries not covered.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
