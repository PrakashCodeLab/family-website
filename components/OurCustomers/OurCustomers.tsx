"use client";

import React from "react";
import Buttons from "../Buttons/Buttons";
import Styles from "./OurCustomer.module.scss";
import CardTestimonials from "./CardTestimonials";
import { testimonials } from "@/constants/Constants";
import { motion } from "framer-motion";
import {
  TestContentAnimation,
  cardTestAnimation,
} from "@/constants/AnimationConst";
const OurCustomers = () => {
  return (
    <section className={Styles.testimonials__section}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={TestContentAnimation}
        className={Styles.textimonials__content__topleft}
      >
        <h2 className={Styles.testimonials__content__heading}>
          Hear What Our Customers Say
        </h2>
        <p className={Styles.testimonials__content__lead}>
          From heartwarming testimonials to glowing reviews, these voices
          reflect the trust and confidence our customers place in us. Let their
          words speak volumes about the extraordinary experiences that await you
          with
        </p>
        <Buttons title="view plans" btnStyles={`${Styles.btn__customer}`} />
      </motion.div>
      <div className={Styles.testimonails__card__articles}>
        {testimonials.map((items, index) => (
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={cardTestAnimation}
            transition={{ delay: index * 0.5 }}
            key={index}
          >
            <CardTestimonials
              name={items.name}
              designation={items.designation}
              desc={items.desc}
              img={items.img}
            />
          </motion.div>
        ))}
        <div className={Styles.bg__portion__testimoniuals} />
      </div>
    </section>
  );
};

export default OurCustomers;
