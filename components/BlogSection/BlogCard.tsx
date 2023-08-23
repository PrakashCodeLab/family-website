import React from "react";
import Image from "next/image";
import Styles from "./BlogSec.module.scss";
import { motion} from "framer-motion";
import { blogCardProps } from "@/types/types";
import { blogCardAnimation } from "@/constants/AnimationConst";

const BlogCard = ({
  blogImg,
  heading,
  lead,
  writerImg,
  WriterName,
}: blogCardProps) => {
  return (
    <motion.article
      initial="hidden"
      whileInView="show"
      variants={blogCardAnimation}
      className={Styles.blog__card}
    >
      <div className={Styles.blog__card__imagesection}>
        <Image className={Styles.blog__image} src={blogImg} alt="blog images" />
      </div>

      <div className={Styles.blog__content__section}>
        <h4 className={Styles.blog__content__heading}>{heading}</h4>
        <p className={Styles.blog__content__lead}>{lead}</p>
      </div>
      <div className={Styles.blog__writer__section}>
        <Image
          className={Styles.blog__writer__image}
          src={writerImg}
          alt="writer images"
        />
        <h4 className={Styles.blog__writer__name}>{WriterName}</h4>
      </div>
    </motion.article>
  );
};

export default BlogCard;
