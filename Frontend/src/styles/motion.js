export const motionTokens = {
  duration: {
    fast: 0.15,
    normal: 0.3,
    slow: 0.5,
  },
  easing: {
    easeInOut: "easeInOut",
    easeOut: "easeOut",
    backOut: [0.34, 1.56, 0.64, 1], // snappy spring-like transition
  },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.easeInOut },
  },
  exit: {
    opacity: 0,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.easing.easeInOut },
  },
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.easeOut },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.easing.easeInOut },
  },
};

export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.normal, ease: motionTokens.easing.backOut },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: motionTokens.duration.fast, ease: motionTokens.easing.easeInOut },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const buttonPressVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};
