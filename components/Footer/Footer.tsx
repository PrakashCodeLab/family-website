"use client";

import React from 'react';
import LogoSection from '../Logo/LogoSection';
import ContactDetails from './ContactDetails';
import Link from 'next/link';
import { PhoneIcon ,GlobeAsiaAustraliaIcon  ,MapPinIcon ,ChevronRightIcon  } from "@heroicons/react/24/outline";
import { linkData } from '@/constants/Constants';
import Styles from './Footer.module.scss';
import LinkSection from '../LinkSection.tsx/LinkSection';
import LearnMore from '../LearnMore.tsx/LearnMore';
import { motion } from 'framer-motion';
import { footerAnimation } from '@/constants/AnimationConst';
const Footer = () => {



  const year = new Date().getFullYear();
  return (
    <footer className={Styles.footer__section}>
         <section className={Styles.footer__section__one}>
            <div className={Styles.footer__one__content__section}>
               <LogoSection/>
               <p className={Styles.footer__content}>From heartwarming testimonials to glowing reviews, these voices reflect the trust and confidence our customers place in us. Let their words speak volumes about the extraordinary experiences that await you with</p>

             <LearnMore title='learn more'/>
            </div>

            <div className={Styles.footer__one__link__section}>
              {
                linkData.map((linksec)=>(
                  <div className={Styles.footer__link__container} key={linksec.heading}>
                        <h3 className={Styles.footer__link__title}>{linksec.heading}</h3>
                     <ul className={Styles.footer__link__unorder}>{linksec.link.map((sec,index)=>(
                      <li className={Styles.footer__linksection__list} key={index}>
                         <LinkSection  title={sec.title} link={sec.url}/>   
                      </li>
                     ))}</ul>
                  </div>
                ))
              }
            </div>

           <div className={Styles.footer__one__contact}>
                <h5 className={Styles.footer__contact__title}>contact</h5>
                <p className={Styles.footer__contact__lead}>Please feel free to reach out to us with any inquiries, questions, or assistance you may need.</p>
                <ul className={Styles.footer__contact__unorder}>
                 <ContactDetails details='23 Main Street, Cityville, State, Zip Code' 
                 icon={<MapPinIcon className='h-6 w-6 text-gray-500'/>} link='/'/> 


                   <ContactDetails details='(555) 123-4567' 
                 icon={<PhoneIcon  className='h-6 w-6 text-gray-500'/>} link='/'/>  


                   <ContactDetails details='https://joefreycodes.com' 
                 icon={<GlobeAsiaAustraliaIcon className='h-6 w-6 text-gray-500'/>} link='/'/> 
                </ul>
            </div>  
         </section>
         <section className={Styles.footer__section__two}>
           <motion.p 
             initial="hidden"
             whileInView='show'
             variants={footerAnimation}
           
           className={Styles.footer__section__two__content}>Copyrights&copy;<span className={Styles.footer__year}>{year}</span>. Designed with  by prakash All rights reserved.</motion.p>
         </section>
    </footer>
  );
}

export default Footer;
