// slideVariants.ts

export const slideVariants = {
    documentScanner: {
      image: {
        initial: { opacity: 0, y: 200 },  // coming from way below
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: 1.4,
          ease: 'easeOut',
          delay: 0.1,
        },
      },
      text: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          duration: 0.8,
          delay: 0.5,
          ease: 'easeOut',
        },
      },
    },
  signAndStamp: {
    image: {
      initial: { opacity: 0, scale: 0.95, y: 30 },
      animate: { opacity: 1, scale: 1, y: 0 },
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
    text: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  },
  batchScanning: {
    image: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: {
        duration: 1.0,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
    text: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  },
  advancedFilters: {
    image: {
      initial: { opacity: 0, rotate: -5 },
      animate: { opacity: 1, rotate: 0 },
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        delay: 0.2,
      },
    },
    text: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: 'easeOut',
      },
    },
  },
  exportAndShare: {
    image: {
      initial: { opacity: 0, y: -30 },
      animate: { opacity: 1, y: 0 },
      transition: {
        duration: 1.0,
        ease: 'easeOut',
        delay: 0.3,
      },
    },
    text: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: {
        duration: 0.8,
        delay: 0.6,
        ease: 'easeOut',
      },
    },
  },
};
