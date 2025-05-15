import { TargetAndTransition, Transition } from 'framer-motion';
import leftStampIcon from '../assets/icons/left-stamp-icon.png';
import rightStampIcon from '../assets/icons/right-stamp-icon.png';

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

interface Decoration {
  src: string;
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
  className: string;
}

interface SlideVariant {
  image: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: Transition;
  };
  text: {
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: Transition;
  };
  decorations?: Decoration[];
}
// Variants per slide
export const slideVariants: Record<string, SlideVariant> = {
  documentScanner: {
    image: defaultPhoneImageAnimation,
    text: defaultTextAnimation,
  },
  signAndStamp: {
    image: defaultPhoneImageAnimation,
    text: defaultTextAnimation,
    decorations: [
      {
        src: rightStampIcon,
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 0.8, ease: 'easeOut' },
        className: 'absolute top-[218.06px] right-[26.18px] w-[216px] z-10',
      },
      {
        src: leftStampIcon,
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, delay: 1.1, ease: 'easeOut' },
        className: 'absolute top-[327.26px] left-[34px] w-[217px] z-10',
      },
    ],
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
