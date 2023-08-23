import React from "react";
import Link from "next/link";
import { Contact } from "@/types/types";
import Styles from './Footer.module.scss'


const ContactDetails = ({ details, link, icon }:Contact) => {
  return (
    <>
      <li className={Styles.footer__link__section}>
        <Link className={Styles.footer__link} href={link}>
          <span className={Styles.footer__link__icon}>{icon}</span>
          <span className={Styles.footer__link__lead}>
            <p className={Styles.footer__link__text}>{details}</p>
          </span>
        </Link>
      </li>
    </>
  );
};

export default ContactDetails;
