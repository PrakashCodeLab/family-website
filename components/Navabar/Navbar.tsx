"use client";
import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import LogoSection from "../Logo/LogoSection";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import Buttons from "../Buttons/Buttons";
import Styles from "./Navbar.module.scss";
import { linkNav } from "@/constants/Constants";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const HandleChange = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScroll(window.scrollY > 0);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
  
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className={`${Styles.navbar__container} `}
      >
        <div className={Styles.navbar__logo__section}>
          <LogoSection />
        </div>

        <div className={Styles.navbar__unorder__container}>
          <ul className={Styles.navbar__unorder__section}>
            {linkNav.map((link, index) => (
              <li key={index} className={Styles.navbar__list}>
                <Link className={Styles.navbar__link} href={link.link}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={Styles.navbar__btn__section}>
          <Buttons
            title="get started"
            btnStyles={`${Styles.btn__primary__navbar}`}
          />
        </div>

        <div className={Styles.navbar__hamburger__section}>
          {" "}
          {nav ? (
            <XMarkIcon
              onClick={HandleChange}
              className="h-6 w-6 text-gray-500"
            />
          ) : (
            <Bars3Icon
              onClick={HandleChange}
              className="h-6 w-6 text-gray-500"
            />
          )}
        </div>

        {nav ? <MobileNav nav={nav} handleChange={HandleChange} /> : null}
      </motion.nav>
     
  );
};

export default Navbar;
