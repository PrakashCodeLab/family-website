"use client";

import React from "react";
import Heading from "../Heading/Heading";
import Styles from "./OurSolution.module.scss";
import Buttons from "../Buttons/Buttons";
import ListCheck from "./ListCheck";
import SolImage from "./SolutionImage";
import { motion} from "framer-motion";
import { solContentAmination1 } from "@/constants/AnimationConst";

const OurSolution = () => {
  return (
    <section className={Styles.oursolution__container}>
      <SolImage />
      <motion.div
        className={Styles.oursolution__content__container}
        initial="hidden"
        whileInView="show"
        variants={solContentAmination1}
      >
        <Heading title="Our Solutions" />
        <h2 className={Styles.oursolution__content__heading}>
          From safeguarding your home with state-of-the-art alarm systems
        </h2>
        <p className={Styles.oursolution__contenet__lead}>
          From safeguarding your home with state-of-the-art alarm systems to
          offering reliable insurance options, we ensure that your family is
          protected in every aspect of life. With our Family Security Plan, you
          can rest easy knowing that you&apos;ve taken the necessary steps to
          secure a brighter future for your family. Trust us to be your partner
          in safeguarding what matters most-your family&apos;s well-being.
        </p>

        <ul className={Styles.oursolution__unorderlist}>
          <ListCheck list="Home Fire Safety" />
          <ListCheck list="Cybersecurity Solutions" />
          <ListCheck list="Emergency Preparedness" />
          <ListCheck list="Identity Theft Protection" />
        </ul>
        <div className={Styles.btn__group}>
          <Buttons title="get started" btnStyles={`${Styles.btn__primary}`} />
          <Buttons title="read more " btnStyles={`${Styles.btn__secondary}`} />
        </div>
      </motion.div>
    </section>
  );
};

export default OurSolution;
