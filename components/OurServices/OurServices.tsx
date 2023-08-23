"use client";

import React from "react";
import Heading from "../Heading/Heading";
import Icon1 from "/public/images/icon-1.svg";
import Icon2 from "/public/images/icon-2.svg";
import Icon3 from "/public/images/icon-3.svg";
import Icon4 from "/public/images/icon-4.svg";
import Icon5 from "/public/images/icon-5.svg";
import Icon6 from "/public/images/icon-6.svg";
import ServiceCard from "./ServiceCard";
import Styles from "./OurServices.module.scss";
import { motion } from "framer-motion";
import { animationservice1 } from "@/constants/AnimationConst";

const OurServices = () => {
  return (
    <section className={Styles.ourservice__container}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={animationservice1}
        className={Styles.ourservice__section__one}
      >
        <Heading title="Our Awesome Services" />
        <h2 className={Styles.ourservice__heading}>Our Services</h2>
        <p className={Styles.ourservice__one__content}>
          We understand that protecting your loved ones is of utmost importance.
          That&apos;s why we are dedicated to providing comprehensive solutions
          tailored to your family&apos;s unique needs.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={animationservice1}
        className={Styles.ourservice__section__two}
      >
        <ServiceCard
          text="Child Safety Solutions"
          lead="Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
          icon={Icon1}
        />
        <ServiceCard
          text="Elderly Care Monitoring"
          lead="Innovative technologies for monitoring and caring for elderly family members, promoting their safety and independence."
          icon={Icon2}
        />
        <ServiceCard
          text="Home Fire Safety"
          lead="Childproofing services and safety education to keep your children secure and protected at home and in public spaces."
          icon={Icon3}
        />
        <ServiceCard
          text="Financial Planning"
          lead="Expert financial advice to help you build a strong financial foundation and plan for your family&aops;s long-term security."
          icon={Icon4}
        />
        <ServiceCard
          text="Personal Safety Devices"
          lead="Wearable personal safety devices equipped with GPS tracking and emergency alerts for family members on the go."
          icon={Icon5}
        />
        <ServiceCard
          text="Insurance Coverage"
          lead="Tailored insurance policies to protect your family's financial future, including life insurance, health insurance, and property insurance"
          icon={Icon6}
        />
      </motion.div>
    </section>
  );
};

export default OurServices;
