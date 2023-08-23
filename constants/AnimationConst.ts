import { spring } from "framer-motion";

export const blogCardAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: {
      type: spring,
      stiffness: 120,
      damping: 80,
      duration: 1,
      delay: 0.3,
    },
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: spring, stiffness: 120, duration: 1, delay: 0.4 },
  },
};

export const blogContentAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: {
      type: spring,
      stiffness: 120,
      damping: 80,
      duration: 1,
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: spring, stiffness: 120, duration: 0.7, delay: 0.5 },
  },
};

export const footerAnimation = {
  hidden: {
    opacity: 0,
    y: 5,
    transition: {
      type: spring,
      stiffness: 120,
      damping: 80,
      duration: 1,
      delay: 0.5,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: spring, stiffness: 120, duration: 0.7, delay: 0.5 },
  },
};

export const TestContentAnimation = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: { type: spring, dampping: 80, stiffness: 120, duration: 1 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: spring, stiffness: 120, duration: 0.7, delay: 0.4 },
  },
};

export const cardTestAnimation = {
  hidden: {
    opacity: 0,
    z: -100,
    scale: 0.8,
    transition: { type: spring, dampping: 80, stiffness: 120, duration: 1 },
  },
  show: {
    opacity: 1,
    scale: 1,
    z: 0,
    transition: { type: spring, stiffness: 120, duration: 2 },
  },
};

export const animation1 = {
  hidden: {
    opacity: 0,
    x: -100,
    transition: { type: spring, stiffness: 120, damping: 80, duration: 1 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: spring, stiffness: 120, delay: 0.4, duration: 0.9 },
  },
};

export const animation2 = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: { type: spring, stiffness: 120, damping: 80, duration: 1 },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: spring, stiffness: 120, delay: 0.4, duration: 0.9 },
  },
};

export const animationservice1 = {
  hidden: {
    opacity: 0,
    y: 100,
    transition: { type: spring, stiffness: 120, damping: 80, duration: 1 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: spring, stiffness: 120, delay: 0.4, duration: 1.3 },
  },
};

export const solContentAmination1 = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      stiffness: 120,
      dampping: 80,
      duration: 1,
      type: spring,
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 120,
      duration: 0.8,
      delay: 0.4,
      type: spring,
    },
  },
};

export const ImageSolAnimation1 = {
  hidden: {
    x: -50,
    opacity: 0,
    transition: { type: spring, stiffness: 120, duration: 1, damping: 80 },
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: spring, stiffness: 120, duration: 1, delay: 0.5 },
  },
};

export const ImageSolAnimation2 = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: { type: spring, stiffness: 120, duration: 1, damping: 80 },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: spring, stiffness: 120, duration: 1, delay: 0.5 },
  },
};
