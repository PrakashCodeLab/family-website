import { CheckIcon } from "@heroicons/react/20/solid";
import React from "react";
import Styles from "./OurSolution.module.scss";

const ListCheck = ({list}:{list:string}) => {
  return (
    <>
      <li className={Styles.oursolution__list}>
        <span className={Styles.oursolution__list__icon}>
          <CheckIcon className="h-6 w-6 text-white font-medium  rounded-full p-1  bg-[#134862] " />
        </span>
        <span className={Styles.oursolution__list__lead}>{list}</span>
      </li>
    </>
  );
};

export default ListCheck;
