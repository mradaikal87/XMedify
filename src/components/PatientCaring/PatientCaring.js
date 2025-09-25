import React from "react";
import styles from "./PatientCaring.module.css";

const PatientCaring = ({ data }) => {
  return (
    <div className={styles.patientSection}>
      <div className={"container"}>
        <div className={styles.patientContainer}>
          <div className={styles.patientLeft}>
            <div className={styles.freeConsultation}>
              <span className={styles.icon}>
                {data.consultation.icon && (
                  <img src={data.consultation.icon} alt={"phone"} />
                )}
                <h4>{data.consultation.title}</h4>
              </span>
              <div>
                <p>{data.consultation.subtitle}</p>
              </div>
            </div>

            <div className={styles.images}>
              {data.images.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.alt}
                  className={styles[img.className]}
                />
              ))}
            </div>
          </div>

          <div className={styles.patientRight}>
            <h5 className={"subheading"}>{data.subtitle}</h5>
            <h1 className={"heading"}>
              {data.title.main} <span>{data.title.highlight}</span>
            </h1>
            <p className={"description"}>{data.description}</p>

            <ul className={styles.features}>
              {data.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
