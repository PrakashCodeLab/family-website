"use client"

import React from 'react';
import Heading from '../Heading/Heading';
import Buttons from '../Buttons/Buttons';
import HeroImage from './HeroImage';
import Styles from './Herosec.module.scss';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section 
   
    className={Styles.hero__container}>
     <motion.div  
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       exit={{ opacity: 0, x: -50 }}
       transition = {{
         duration: 1,
         delay: 1.2, 
       }}
     className={Styles.hero__content__section}>
         <Heading title='welcome to famsec'/>
         <h2 className={Styles.hero__content__heading}>Protecting Families, Securing Futures</h2>
         <p className={Styles.hero__content__lead}>We understand that protecting your loved ones is of utmost importance. That&apos;s why we are dedicated to providing comprehensive solutions tailored to your family&apos;s unique needs. Our expert team is committed to creating a solid foundation of security and peace of mind for you and your loved ones.</p>
         <div className={Styles.hero__content__btn}>  
          <Buttons title='get started' btnStyles='bg-gray-700 hover:bg-gray-900  text-white' /> 
          <Buttons title='how it works?' btnStyles='bg-blue-700 hover:bg-blue-500  text-white' /> 
       </div>
       </motion.div>
      
      <HeroImage/>
    </section>
  );
}

export default HeroSection;
