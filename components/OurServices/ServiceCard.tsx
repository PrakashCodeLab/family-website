import React from "react";
import Styles from "./OurServices.module.scss";
import Image from "next/image";

import { ourservicesProps } from "@/types/types";

const ServiceCard = ({ text, lead, icon }: ourservicesProps) => {
  return (
    <section className={Styles.service__card__container}>
      <div className={Styles.service__card__image__section}>
        <Image src={icon} className={Styles.service__card__image} alt="icon" />
      </div>
      <div className={Styles.service__card__content__section}>
        <h3 className={Styles.service__content__text}>{text}</h3>
        <p className={Styles.service__content__lead}>{lead}</p>
      </div>
    </section>
  );
};

export default ServiceCard;
