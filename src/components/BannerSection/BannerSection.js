import React from "react";
import styles from "./BannerSection.module.css";
import SearchContainer from "../SearchSection/SearchContainer";

export default function BannerSection({ data }) {
  return (
    <section
      className={`${styles.BannerSection}`}
      style={{
        background: data.backgroundColor ? data.backgroundColor : "",
      }}
    >
      <div className="container">
        <div className={styles.bannerColumn} style={{}}>
          <div>
            {data?.pretitle && (
              <h3 className={styles.pretitle}>{data?.pretitle}</h3>
            )}
            {data?.title && <h3 className={styles.title}>{data?.title}</h3>}
            {data?.description && (
              <p className={styles.description}>{data.description}</p>
            )}
            {data?.button && (
              <a
                href={data?.button?.buttonLink}
                className={`btn ${styles.bannerBtn}`}
              >
                {data?.button?.buttonName}{" "}
              </a>
            )}
          </div>{" "}
          <div
            className={styles.bannerImage}
            style={{
              backgroundImage: data.bannerImage
                ? { lg: `url(${data.bannerImage})` }
                : "",
            }}
          >
            <img
              src={data.bannerImage}
              alt="banner Image"
              width={300}
              height={300}
              className={styles.responsiveImage}
            />
          </div>
        </div>
        <SearchContainer Class="search-Banner"/>
      </div>
    </section>
  );
}
