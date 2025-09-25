import React from "react";
import styles from "./BlogCard.module.css";
import BlogCard from "./BlogCard";

const BlogSection = ({ data }) => {
  //   const blogPosts = [
  //     {
  //       image:
  //         "https://img.freepik.com/free-photo/detox-concept_144627-11648.jpg",
  //       category: "Medical",
  //       date: "March 31, 2022",
  //       title: "6 Tips To Protect Your Mental Health When You're Sick",
  //       author: "Rebecca Lee",
  //     },
  //     {
  //       image:
  //         "https://img.freepik.com/free-photo/detox-concept_144627-11648.jpg",
  //       category: "Medical",
  //       date: "March 31, 2022",
  //       title: "6 Tips To Protect Your Mental Health When You're Sick",
  //       author: "Rebecca Lee",
  //     },
  //     {
  //       image:
  //         "https://img.freepik.com/free-photo/detox-concept_144627-11648.jpg",
  //       category: "Medical",
  //       date: "March 31, 2022",
  //       title: "6 Tips To Protect Your Mental Health When You're Sick",
  //       author: "Rebecca Lee",
  //     },
  //   ];

  return (
    <section className={styles.blogsection}>
      <div className="container">
        <h5 className={styles.sectionsubtitle}>Blog & News</h5>
        <h2 className={styles.sectiontitle}>Read Our Latest News</h2>
        <div className={styles.bloglist}>
          {data.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
