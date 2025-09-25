// FAQSection.js
import React, { useState } from "react";
import styles from "./FAQSection.module.css";

const FAQSection = ({ title, stats, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className="container">
        {data?.subheading && (
          <p
            className="subheading"
            style={{
              textAlign: data?.textAlign === "center" ? "center" : "left",
            }}
          >
            {data.subheading}
          </p>
        )}

        {data?.heading && (
          <h2
            className="heading"
            style={{
              textAlign: data?.textAlign === "center" ? "center" : "left",
            }}
          >
            {data.heading}
          </h2>
        )}

        {data?.description && <p className="description">{data.description}</p>}

        <div className={styles.container}>
          {/* Left Side */}
          <div className={styles.left}>
            <img src={data?.image} alt={title} className={styles.image} />
            {data?.stats && (
              <div className={styles.statsBox}>
                <img
                  src={data?.stats.smily}
                  alt={title}
                  width={44}
                  height={44}
                  className={styles.smily}
                />
                <div>
                  <span className={styles.statsNumber}>
                    {data?.stats.number}
                  </span>
                  <p className={styles.statsText}>{data?.stats.text}</p>
                </div>
              </div>
            )}
            {data?.heart && (
              <div className={styles.heartBox}>
                <img
                  src={data?.heart}
                  alt={"heart"}
                  width={40}
                  height={40}
                  className={styles.heart}
                />
              </div>
            )}
          </div>

          {/* Right Side - Accordion */}
          <div className={styles.right}>
            <div className={styles.accordion}>
              {data?.faqData?.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.accordionItem} ${
                    openIndex === index ? styles.active : ""
                  }`}
                >
                  <button
                    className={styles.accordionHeader}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  <div
                    className={styles.accordionBody}
                    style={{
                      maxHeight: openIndex === index ? "200px" : "0",
                    }}
                  >
                    <div className={styles.accordionContent}>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
