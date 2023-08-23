import { LinkData } from "@/types/types";
import imgTest1 from "@/public/images/person-1-min.webp";
import imgTest2 from "@/public/images/person-2-min.webp";
import imgTest3 from "@/public/images/person-3-min.webp";
import BlogImg1 from "@/public/images/family-blog1.jpg";
import BlogImg2 from "@/public/images/family-blog2.jpg";
import BlogImg3 from "@/public/images/family-blog3.jpg";
import BlogImg4 from "@/public/images/family-blog4.jpg";
import BlogImg5 from "@/public/images/family-blog5.jpg";
import BlogImg6 from "@/public/images/family-blog6.jpg";
import WriterImg1 from "@/public/images/person-1-min.webp";
import WriterImg2 from "@/public/images/person-2-min.webp";
import WriterImg3 from "@/public/images/person-3-min.webp";
import WriterImg4 from "@/public/images/person-2-min.webp";
import WriterImg5 from "@/public/images/person-3-min.webp";
import WriterImg6 from "@/public/images/person-1-min.webp";

export const linkNav = [
  { id: 1, title: "home", link: "/" },
  { id: 2, title: "how we work", link: "/" },
  { id: 3, title: "our mission", link: "/" },
  { id: 4, title: "about", link: "/" },
  { id: 5, title: "contact", link: "/" },
];

export const linkData = [
  {
    heading: "company",
    link: [
      { title: "home", url: "/" },
      { title: "how we work", url: "/" },
      { title: "our mission", url: "/" },
      { title: "about", url: "/" },
      { title: "carrers", url: "/" },
      { title: "contact", url: "/" },
    ],
  },
  {
    heading: "Resources",
    link: [
      { title: "blog", url: "/" },
      { title: "support", url: "/" },
      { title: "terms and conditions", url: "/" },
      { title: "privacy policy", url: "/" },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Jane Cooper",
    designation: "Customer - Dallas, TX",
    desc: "With Family Home Security, I feel at ease knowing my family and home are protected 24/7. The system is user-friendly, and their customer support is fantastic!",
    img: imgTest1,
  },
  {
    id: 2,
    name: "Alisa Richardson",
    designation: "Customer - Miami, FL",
    desc: "Installing Family Home Security was the best decision we made for our family's safety. Their quick response during emergencies gave us peace of mind.",
    img: imgTest2,
  },
  {
    id: 3,
    name: "Davon McKenny",
    designation: "Customer - Seattle, WA, TX",
    desc: "After moving to a new neighborhood, I felt vulnerable. Thanks to Family Home Security, I can now sleep soundly, knowing our home is well-protected.",
    img: imgTest3,
  },
];

export const Blogsection = [
  {
    Id: 1,
    heading: "10 essentional tips for protecting your home from burglaries",
    lead: " Discover essential strategies for navigating the challenges of parenting with confidence.",
    blogImg: BlogImg1,
    writerImg: WriterImg1,
    writerName: "Jane Cooper",
  },

  {
    Id: 2,
    heading: "Building Strong Bonds: Parent-Child Relationships",
    lead: "Explore the importance of fostering healthy connections that nurture your child",
    blogImg: BlogImg2,
    writerImg: WriterImg2,
    writerName: "Alisa Richardson",
  },

  {
    Id: 3,
    heading: "Balancing Work and Family: A Parent's Guide",
    lead: "Learn practical techniques to manage your professional life while being an engaged parent.",
    blogImg: BlogImg3,
    writerImg: WriterImg3,
    writerName: "Davon McKenny",
  },

  {
    Id: 4,
    heading: "Positive Discipline: Shaping Behavior with Kindness",
    lead: "Discover how positive discipline techniques can create a harmonious home environment.",
    blogImg: BlogImg4,
    writerImg: WriterImg4,
    writerName: "Alisa Richardson",
  },

  {
    Id: 5,
    heading: "The Power of Play: Fueling Child Development",
    lead: "Uncover the significance of play in enhancing cognitive and social skills in children",
    blogImg: BlogImg5,
    writerImg: WriterImg5,
    writerName: "Davon McKenny",
  },
  {
    Id: 6,
    heading: "The Power of oneself: Fueling parents Development",
    lead: "Uncover the significance of play in enhancing cognitive and social skills in parents",
    blogImg: BlogImg6,
    writerImg: WriterImg6,
    writerName: "Jane Cooper",
  },
];
