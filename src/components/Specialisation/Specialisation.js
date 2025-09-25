import React from "react";
import {
  FaTooth,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaVial,
  FaShieldAlt,
  FaHospital,
  FaXRay,
} from "react-icons/fa";
import styles from "./Specialisation.module.css";

const specialisations = [
  { id: 1, name: "Dentistry", icon: "/Drugstore.png" },
  { id: 2, name: "Primary Care", icon: "/Stethoscope.png" },
  { id: 3, name: "Cardiology", icon: "/Heart Rate.png" },
  { id: 4, name: "MRI Resonance", icon: "/Heart Rate Monitor.png" },
  { id: 5, name: "Blood Test", icon: "/Blood Sample.png" },
  { id: 6, name: "Psicologist", icon: "/Immune.png" },
  { id: 7, name: "Laboratory", icon: "/Drugstore.png" },
  { id: 8, name: "X-Ray", icon: "/X-Ray.png" },
];

const Specialisation = () => {
  return (
    <section className={styles.specialisationsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Find By Specialisation</h2>
        <div className={styles.grid}>
          {specialisations.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                className={styles.icon}
                src={item.icon}
                alt={item.name}
                width={60}
                height={60}
              />
              <p className={styles.name}>{item.name}</p>
            </div>
          ))}
        </div>
        <button className={styles.button}>View All</button>
      </div>
    </section>
  );
};

export default Specialisation;
