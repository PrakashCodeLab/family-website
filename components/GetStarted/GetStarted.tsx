"use client";

import React, { useRef } from "react";
import LearnMore from "../LearnMore.tsx/LearnMore";
import Image from "next/image";
import WomenIllustration from "/public/images/illustration-woman.svg";
import Styles from "./GetStarted.module.scss";
import Rating from "./Rating";
import { motion } from "framer-motion";
import { animation1, animation2 } from "@/constants/AnimationConst";

const GetStarted = () => {
  return (
    <motion.section className={Styles.getStarted__section}>
      <motion.div // Attach the ref from useInView here
        initial="hidden"
        variants={animation1}
        whileInView="show"
        className={Styles.getstarted__one__section}
      >
        <Rating rating="99.9%" desc="Child Safety Solutions" />
        <Rating rating="3,912" desc="Happy Customers" />
        <Rating rating="4.8" desc="rating reviews" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={animation2}
        className={Styles.getstarted__section__card}
      >
        <div className={Styles.getStarted__card}>
          <h3 className={Styles.getstarted__card__title}>
            Get started with our service?
          </h3>
          <p className={Styles.getstarted__card__lead}>
            We understand that protecting your loved ones is of utmost
            importance.
          </p>
          <LearnMore title="learn more" />
        </div>
        <div className={Styles.getstarted__card__illustartion}>
          <Image
            className={Styles.getstarted__card__imageSvg}
            src={WomenIllustration}
            alt="women illustrations"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default GetStarted;
