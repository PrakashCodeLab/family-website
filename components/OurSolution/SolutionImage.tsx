"use client";

import React from "react";
import Styles from "./OurSolution.module.scss";
import Image from "next/image";
import solimage1 from "@/public/images/solChild1.jpg";
import solimage2 from "@/public/images/solChild2.jpg";
import solimage3 from "@/public/images/solChild3.jpg";
import { motion} from "framer-motion";
import {
  ImageSolAnimation1,
  ImageSolAnimation2,
} from "@/constants/AnimationConst";
const SolutionImage = () => {
  return (
    <div className={Styles.oursolution__image__container}>
      <div className={Styles.Oursolution__img__portion} />
      <div className={Styles.solution__img__left__container}>   
        <motion.div
          initial="hidden" 
          whileInView="show"
          variants={ImageSolAnimation1}
        >
          <Image
            className={Styles.solution__image__one}
            src={solimage1}
            alt=""
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ImageSolAnimation2}
          className={Styles.solution__image__one__bottom}
        >
          <div className={Styles.solution__portion1}></div>
          <Image
            className={Styles.solution__image__two__bottom}
            src={solimage2}
            alt=""
          />
        </motion.div>
      </div>
      <div className={Styles.oursolution__img__right__container}>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ImageSolAnimation2}
          className={Styles.solution__portion__two}
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ImageSolAnimation2}
        >
          <Image
            className={Styles.solution__image__left__one}
            src={solimage3}
            alt=""
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={ImageSolAnimation2}
          className={Styles.solution__right__content}
        >
          <h4 className="text-[2rem] text-slate-900 font-bold ">25+</h4>
          <p className="text-[1rem] text-slate-600 font-bold">
            years of experience
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SolutionImage;
