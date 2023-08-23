import React from "react";
import Styles from './GetStarted.module.scss';
import { Ratingprops } from "@/types/types";


const Rating = ({rating , desc}:Ratingprops) => {
  return (
    <>
     <h2 className={Styles.getstarted__review__heading}>
        <span className={Styles.getstarted__review__text}>{rating}</span>
        <span className={Styles.getstarted__rating__lead}>{desc}</span>
      </h2>
    </>
  );
};

export default Rating;
