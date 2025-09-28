import React, { useEffect, useState } from "react";
import styles from "./BookingContainer.module.css"; // create this CSS module

const BookingContainer = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(storedBookings);
  }, []);

  if (bookings.length === 0) {
    return <p className={styles.noBookings}>No bookings found.</p>;
  }
  console.log(bookings);
  return (
    <div className={styles.bookingSection}>
      <div className="container">
        <div className={styles.bookingContainer}>
          <div className={styles.bookingsList}>
            {bookings.map((b, index) => (
              <div key={index} className={styles.bookingCardWrapper}>
                {/* Left Side: Icon */}
                <div className={styles.bookingCard}>
                  <div className={styles.iconWrapper}>
                    <img
                      src="/hospital.png"
                      alt="Hospital"
                      className={styles.icon}
                    />
                  </div>
                  <div>
                    <div className={styles.header}>
                      <div>
                        <h3 className={styles.hospitalName}>{b["Hospital Name"]}</h3>
                        <div>
                          <p className={styles.location}>
                            {b.City}, {b.State}
                          </p>
                          <p className={styles.address}>{b["Hospital Ownership"]}</p>
                        </div>
                      </div>
                      <div className={styles.dateColumn}>
                        <p className={styles.date}>{b.bookingDate}</p>
                        <p className={styles.time}>{b.bookingTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingContainer;
