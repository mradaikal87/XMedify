import React from "react";
import styles from "./BlogCard.module.css"; // optional css file for styling

// Reusable Blog Card Component
const BlogCard = ({ image, category, date, title, author, autherImage }) => {
  return (
    <div className={styles.blogcard}>
      <img src={image} alt={title} className={styles.blogimage} />
      <div className={styles.blogcontent}>
        <p className={styles.blogmeta}>
          <span className={styles.blogcategory}>{category}</span> |{" "}
          <span className={styles.blogdate}>{date}</span>
        </p>
        <h3 className={styles.blogtitle}>{title}</h3>
        <div className={styles.blogauthor}>
          <img
            src={autherImage}
            alt={author}
            className={styles.authoravatar}
            width={32}
            height={32}
          />
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
