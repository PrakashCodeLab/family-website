"use client";

import React, { useEffect } from "react";
import Styles from "./Navbar.module.scss";
import { linkNav } from "@/constants/Constants";
import Link from "next/link";
import Buttons from "../Buttons/Buttons";
import {
  Bars3Icon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { mobileData } from "@/types/types";
import LinkSection from "../LinkSection.tsx/LinkSection";

const MobileNav = ({ nav, handleChange }: mobileData) => {
  
    useEffect(()=>{

      const Body = document.querySelector('.body');

       if(nav){
        Body?.classList.add('body__overflow');
       }


       return()=>{
        Body?.classList.remove('body__overflow');
       }
    },[nav])



  return (
    <AnimatePresence>
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.6, // Adjust this value to slow down or speed up the animation
          ease: "easeInOut", // You can change the easing function as well
        }}
        variants={{
          initial: { opacity: 0, x: 300 },

          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -300  }
        }}
        className={Styles.mobile__navbar__container}
      >
        <div className={Styles.mobile__navbar__hamburger}>
          <div className={Styles.navbar__hamburger__section}>
            {" "}
            {nav ? (
              <XMarkIcon
                onClick={handleChange}
                className="h-6 w-6 text-gray-500"
              />
            ) : (
              <Bars3Icon
                onClick={handleChange}
                className="h-6 w-6 text-gray-500"
              />
            )}
          </div>
          <span>
            <p>close</p>
          </span>
        </div>

        <div className={Styles.navbar__mobile__container}>
          <ul className={Styles.mobile__unorder__section}>
            {linkNav.map((link, index) => (
              <li key={index} className={Styles.navbar__list}>
                 <LinkSection title={link.title} link={link.link}/>
              </li>
            ))}
          </ul>
          <div className={Styles.navbar__btn__section}>
            <Buttons
              title="get started"
              btnStyles={`${Styles.btn__primary__navbar}`}
            />
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default MobileNav;
