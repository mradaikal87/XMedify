import React, { useState, useEffect } from "react";
import styles from "./SearchContainer.module.css";

export default function SearchHospital() {
  const [hospitalName, setHospitalName] = useState("");
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);

  // Load bookings once from localStorage
  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
  }, []);

  // Filter only when user types
  useEffect(() => {
    const searchText = hospitalName.trim().toLowerCase();
    if (searchText === "") {
      // input empty → clear results
      setFilteredBookings([]);
    } else {
      const filtered = bookings.filter(
        (b) => b.hospital && b.hospital.toLowerCase().includes(searchText)
      );
      setFilteredBookings(filtered);
    }
  }, [hospitalName, bookings]); // run when input or data changes

  return (
    <>
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.inputWrapper}
          placeholder="Search by hospital name"
          value={hospitalName}
          onChange={(e) => setHospitalName(e.target.value)}
        />
        {filteredBookings.length > 0 ? (
          <div className={styles.hospitalresults}>
            {filteredBookings.map((b, idx) => (
              <div key={idx} className={styles.bookingCard}>
                <div>
                  <h4 className={styles.hospitalName}>{b.hospital}</h4>
                  <p>{b.address}</p>
                  <p>
                    {b.city}, {b.state}
                  </p>
                </div>
                <div  className="slot">
                  <p>
                    Slot: {b.day} at {b.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          hospitalName.trim() !== "" && (
            <p className={styles.noBookings}>No hospitals match your search.</p>
          )
        )}
      </div>

      {/* Show filtered bookings only */}
    </>
  );
}
