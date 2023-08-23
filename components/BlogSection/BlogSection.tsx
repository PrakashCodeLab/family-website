"use client";

import React, { Fragment } from "react";
import Heading from "../Heading/Heading";
import Styles from "./BlogSec.module.scss";
import BlogCard from "./BlogCard";
import { Blogsection } from "@/constants/Constants";
import { motion} from "framer-motion";
import { blogContentAnimation } from "@/constants/AnimationConst";

const BlogSection = () => {
  return (
    <section className={Styles.blog__section__container}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={blogContentAnimation}
        className={Styles.blog__content__body}
      >
        <Heading title="Our Writeups" />
        <h4 className={Styles.blog__content__heading}>Our Latest Articles</h4>
        <p className={Styles.blog__body__lead}>
          We are dedicated to staying at the forefront of our industry and
          keeping our valued community informed about the latest trends,
          insights, and innovations.
        </p>
      </motion.div>

      <div className={Styles.blog__card__section}>
        {Blogsection.map((blog) => (
          <Fragment key={blog.Id}>
            <BlogCard
              heading={blog.heading}
              lead={blog.lead}
              blogImg={blog.blogImg}
              writerImg={blog.writerImg}
              WriterName={blog.writerName}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
