import { StaticImageData } from "next/dist/shared/lib/get-img-props";

export type btnStylesProps = {
  title: string;
  btnStyles: string;
};

export type mobileData = {
  nav: boolean;
  handleChange: React.MouseEventHandler;
};

export type Contact = {
  details: string;
  link: string;
  icon: React.ReactElement;
};

export type CompanyLink = {
  title: string;
  url?: string  ;
};

export type linkProps = {
  title: string ;
  link: string ;
};

export type LinkData = {
  heading: string;
  link: CompanyLink[];
};



export type CardDataProps = {
  index?: number;
  id?: number;
  name: string;
  designation: string;
  desc: string;
  img: string | StaticImageData;
};

export type ourservicesProps = {
  text: string;
  lead: string;
  icon: string | StaticImageData;
};

export type blogCardProps = {
  blogImg: StaticImageData | string;
  heading: string;
  lead: string;
  writerImg: StaticImageData | string;
  WriterName: string;
};

export type LearnProps = {
  title: string;
};

export type Ratingprops = {
  rating: string;
  desc: string;
};
