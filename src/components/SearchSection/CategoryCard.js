import React from "react";
import styles from "./SearchContainer.module.css";

export default function CategoryCard({ icon, label }) {
  return (
    <div className={`${styles.card} ${styles.cardColumn}`}>
      <div className={styles.icon}>{icon}</div>
      <p className={styles.label}>{label}</p>
    </div>
  );
}
