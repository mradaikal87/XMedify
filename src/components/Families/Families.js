import React from "react";
import styles from "./Families.module.css";

const Families = ({ data }) => {
  return (
    <section className={styles.familiesSection}>
      <div className="container">
        <div className={styles.familiescolumn}>
          <div className={styles.left}>
            {data?.title && (
              <p className={`${styles.subheading} blue`}>{data.title}</p>
            )}
            <h2 className={styles.heading}>Our Families</h2>
            {data?.description && (
              <p className={styles.description}>{data.description}</p>
            )}
          </div>

          <div className={styles.right}>
            {data?.familyDataCard.map((item) => (
              <div key={item.id || item.label} className={styles.card}>
                {item?.cardIcon && (
                  <div className={styles.iconWrapper}>
                    <img
                      src={item.cardIcon}
                      alt={item.label || "icon"}
                      className={styles.authoravatar}
                      width={100}
                      height={100}
                    />
                  </div>
                )}
                {item?.value && <h3 className={styles.value}>{item.value}</h3>}
                {item?.label && <p className={styles.label}>{item.label}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Families;
