import React from "react";
import Quote from "@/public/images/double-quotes.svg";
import Image from "next/image";
import Styles from "./OurCustomer.module.scss";
import { CardDataProps } from "@/types/types";


const CardTestimonials = ({ name, designation, desc, img }: CardDataProps) => {
  return (
    <article className={Styles.testimonials__card}>
      <div className={Styles.testimonials__card__imgSection}>
        <div className={Styles.testimonials__img__container}>
          <Image
            className={Styles.testimonials__img__profile}
            src={img}
            alt="image of customer"
            title="customer card"
          />
          <Image
            className={Styles.testimonials__img__quote}
            src={Quote}
            alt="image of quote"
            title="quote card"
          />
        </div>
        <div className={Styles.testimonials__img__heading}>
          <h4 className={Styles.testimonails__img__name}>{name}</h4>
          <p className={Styles.testimonals__img__desigination}>{designation}</p>
        </div>
      </div>
      <div className={Styles.testcard__content}>
        <p className={Styles.test__lead}>
          <q>{desc}</q>
        </p>
      </div>
    </article>
  );
};

export default CardTestimonials;
