import React from 'react';
import Styles from './Logo.module.scss';
import Link from 'next/link';

const LogoSection = () => {
  return (
    <Link href={'/'}>
      <div className={Styles.logo__section}>
        <div className={Styles.logo__left__section}>
          <span className={Styles.logo__left__circle__merown}></span>
          <span className={`${Styles.left__logo__circle__blue}`}></span>
        </div>
        <div className={Styles.logo__right__section}>
          <h1 className={Styles.logo__right__lead}>
            fam <span className={Styles.logo__right__basetext}>sec<strong className={Styles.logo__right__dot}>.</strong></span>
          </h1>
        </div>
      </div>
    </Link>
  );
}

export default LogoSection;
