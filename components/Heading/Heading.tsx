import React from 'react';
import Styles from './Heading.module.scss';


const Heading = ({title}:{title:string}) => {
  return (
    <>
      <h3 className={Styles.heading}>{title}</h3> 
    </>
  );
}

export default Heading;
