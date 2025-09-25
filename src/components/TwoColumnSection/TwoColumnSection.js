import React from "react";
import styles from "./TwoColumnSection.module.css";

export default function TwoColumnSection({
  title,
  highlight,
  description,
  inputPlaceholder,
  buttonText,
  onButtonClick,
  leftContent,
  rightImage,
  storeButtons,
  data,
}) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.twoContainer}>
          <div className={styles.imageColumn}>
            <img
              src={data?.rightImage}
              alt="App Preview"
              className={styles.image}
            />
          </div>
          <div className={styles.contentColumn}>
            <h2 className={styles.title}>
              {data?.title}{" "}
              <span className={styles.highlight}>{data?.highlight}</span>
            </h2>
            {data?.description && (
              <p className={styles.description}>{data?.description}</p>
            )}

            {data?.leftContent ? (
              data?.leftContent
            ) : (
              <div className={styles.inputGroup}>
                <span className={styles.countryCode}>+91</span>
                <input
                  type="text"
                  placeholder={data?.inputPlaceholder || "Enter phone number"}
                  className={styles.input}
                />
                <button className={styles.button} onClick={onButtonClick}>
                  {data?.buttonText || "Send"}
                </button>
              </div>
            )}
            <div className={styles.arrowImage}>
               <img src="/Vector.png" alt="logo" width={92} height={27} />
            </div>

            {/* Store Buttons */}
            <div className={styles.stores}>
              {data?.storeButtons?.map((btn, i) => (
                <a key={i} href={btn.link} target="_blank" rel="noreferrer">
                  <img src={btn.img} alt={btn.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
