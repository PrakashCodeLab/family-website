import React from 'react';
import Image from 'next/image';
import Styles from "./Herosec.module.scss";
import image1 from '@/public/images/hero-image1.jpg';
import image2 from '@/public/images/hero-image2.jpg';
import image3 from '@/public/images/hero-image3.jpg';
import image4 from '@/public/images/hero-image4.jpg';
import image5 from '@/public/images/hero-image5.jpg';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <section className={Styles.hero__image__section}>
      <div className={Styles.hero__image__section__one}>
        <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition = {{
             duration: 0.5,
             delay: 1.3, 
           }}
        className={Styles.hero__image__one}>
          <Image  className={Styles.hero__image1} src={image1} alt="image1"  priority/>
        </motion.div>
        <div className={Styles.hero__image__two}>
        <motion.div 
        
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition = {{
          duration: 0.6,
          delay: 1.4, 
        }}>
          <Image   className={Styles.hero__image2} src={image2} alt="image1" />
        </motion.div>
        <motion.div  initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition = {{
            duration: 0.7,
            delay: 1.5, 
          }} className={Styles.hero__portion__pink}>
         
        </motion.div>
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 50 }}
         transition = {{
           duration: 0.7,
           delay: 1.5, 
         }}>
        <Image src={image3} className={Styles.hero__image3} alt="image1" />
        </motion.div>
        </div>
      </div>
      <div className={Styles.hero__image__section__two}>
        <motion.div 
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0}}
          transition = {{
            duration: 0.8,
            delay: 1.6, 
          }}
        className={Styles.hero__portion2}>
         
        </motion.div>
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 50 }}
         transition = {{
           duration: 0.8,
           delay: 1.7, 
         }}>
          <Image className={Styles.hero__image4} src={image4} alt="image1" />
        </motion.div>
        <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: 50 }}
         transition = {{
           duration: 0.9,
           delay: 1.8, 
         }}>
          <Image className={Styles.hero__image5} src={image5} alt="image1" />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroImage;
