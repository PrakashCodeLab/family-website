import Link from 'next/link';
import React from 'react';
import Styles  from './LearnMore.module.scss';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { LearnProps } from '@/types/types';


const LearnMore = ({title}:LearnProps) => {
  return (
    <Link className={Styles.footer__content__link} href={'/'}>
    <p className={Styles.footer__content__link__lead}>{title}</p>
    <span className={Styles.footer__content__link__circle}>
    <ChevronRightIcon className="h-6 w-6 text-base text-white font-bold" />
    </span>
</Link>
  );
}

export default LearnMore;
