import Link from 'next/link';
import React from 'react';
import { btnStylesProps } from '@/types/types';
import '@/styles/variable.scss';
import Styles from './buttons.module.scss'

const Buttons = ({title,btnStyles}:btnStylesProps) => {
  return (
    <Link className={` ${Styles.btn} ${btnStyles}`} href={'/'}>
        {title}   
    </Link>
  );
}

export default Buttons;
