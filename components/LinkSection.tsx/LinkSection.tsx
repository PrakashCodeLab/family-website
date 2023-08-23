import React from "react";
import Link  from "next/link";
import Styles from "./Link.module.scss";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { linkProps} from '@/types/types';

const LinkSection = ({ title, link }:linkProps) => {
  return (
    <>
      <Link className={Styles.navbar__link} href={link}>  
        <span className={Styles.mobile__lead}>{title}</span>
        <span>
          <ChevronRightIcon
            className={`${Styles.mobile__icon} h-6 w-6 text-gray-500`}
          />
        </span>
      </Link>
    </>
  );
};

export default LinkSection;
