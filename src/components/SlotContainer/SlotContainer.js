import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SlotContainer.module.css";

const SlotContainer = ({ hospitalName, Ownership, city, state, onSlotSelect }) => {
  const [selectedDay, setSelectedDay] = useState("today");
  const [selectedSlot, setSelectedSlot] = useState("");
  const navigate = useNavigate();

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(today.getDate() + 2);

  const days = [
    { id: "today", label: "Today", date: formatDate(today), slots: 11 },
    { id: "tomorrow", label: "Tomorrow", date: formatDate(tomorrow), slots: 17 },
    { id: "dayAfter", label: "Day After", date: formatDate(dayAfter), slots: 18 },
  ];

  const timeSlots = {
    Morning: ["11:30 AM"],
    Afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    Evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };

  const handlePrev = () => {
    const index = days.findIndex((d) => d.id === selectedDay);
    if (index > 0) setSelectedDay(days[index - 1].id);
  };

  const handleNext = () => {
    const index = days.findIndex((d) => d.id === selectedDay);
    if (index < days.length - 1) setSelectedDay(days[index + 1].id);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);

    if (onSlotSelect && hospitalName) {
      onSlotSelect(hospitalName, slot);
    }

    navigate("/my-bookings");
  };

  return (
    <div className={styles.slotContainer}>
      <div className={styles.daySelectorWrapper}>
        <button className={styles.arrowBtn} onClick={handlePrev}>
          &lt;
        </button>
        <div className={styles.daySelector}>
          {days.map((day) => (
            <div
              key={day.id}
              className={`${styles.dayTab} ${
                selectedDay === day.id ? styles.active : ""
              }`}
              onClick={() => setSelectedDay(day.id)}
            >
              {day.label === "Today" || day.label === "Tomorrow" ? (
                <p className={styles.dayLabel}>{day.label}</p>
              ) : null}
              <p className={styles.dayLabel}>{day.date}</p>
              <div className={styles.slotsCount}>{day.slots} Slots Available</div>
              {selectedDay === day.id && <div className={styles.bottomLine} />}
            </div>
          ))}
        </div>
        <button className={styles.arrowBtn} onClick={handleNext}>
          &gt;
        </button>
      </div>

      <div className={styles.slotsGroup}>
        {Object.keys(timeSlots).map((timeOfDay) => (
          <div key={timeOfDay} className={styles.timeRow}>
            <p className={styles.timeOfDay}>{timeOfDay}</p>
            <div className={styles.timeButtons}>
              {timeSlots[timeOfDay].map((slot) => (
                <button
                  key={slot}
                  className={`${styles.slotBtn} ${
                    selectedSlot === slot ? styles.selected : ""
                  }`}
                  onClick={() => handleSlotClick(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlotContainer;
