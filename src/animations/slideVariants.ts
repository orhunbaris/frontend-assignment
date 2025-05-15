const defaultPhoneImageAnimation = {
  initial: { y: 560 },
  animate: { y: 0 },
  transition: {
    duration: 1.0,
    ease: 'easeInOut',
  },
};

const defaultTextAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 0.8,
    delay: 0.5,
    ease: 'easeOut',
  },
};

// Variants per slide
export const slideVariants = {
    documentScanner: {
      image: defaultPhoneImageAnimation,
      text: defaultTextAnimation,
    },
    signAndStamp: {
      image: defaultPhoneImageAnimation,
      text: defaultTextAnimation,
    },
    batchScanning: {
      image: defaultPhoneImageAnimation,
      text: defaultTextAnimation,
    },
    advancedFilters: {
      image: defaultPhoneImageAnimation,
      text: defaultTextAnimation,
    },
    exportAndShare: {
      image: defaultPhoneImageAnimation,
      text: defaultTextAnimation,
    },
  };