import { TargetAndTransition, Transition } from 'framer-motion';
import leftStampIcon from '../assets/icons/left-stamp-icon.png';
import rightStampIcon from '../assets/icons/right-stamp-icon.png';
import file1 from '../assets/icons/file-1.png';
import file2 from '../assets/icons/file-2.png';
import file3 from '../assets/icons/file-3.png';
import leftFilterBar from '../assets/icons/left-filter-bar.png';
import rightFilterBar from '../assets/icons/right-filter-bar.png';

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
    decorations: [
      {
        src: file1,
        initial: { opacity: 0, y: 200, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 0.95 },
        transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' },
        className: 'absolute top-[200px] left-[171px] w-[270px] h-[360px] object-cover z-10',
      },
      {
        src: file2,
        initial: { opacity: 0, y: 200, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1.0 },
        transition: { duration: 0.5, delay: 0.7, ease: 'easeOut' },
        className: 'absolute top-[214px] left-[171px] w-[270px] h-[360px] object-cover z-20',
      },
      {
        src: file3,
        initial: { opacity: 0, y: 200, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1.05 },
        transition: { duration: 0.5, delay: 0.9, ease: 'easeOut' },
        className: 'absolute top-[228px] left-[171px] w-[270px] h-[360px] object-cover z-30',
      },
    ],
  }
  
,  
advancedFilters: {
    image: defaultPhoneImageAnimation,
    text: defaultTextAnimation,
    decorations: [
      {
        src: leftFilterBar,
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 1.0, ease: 'easeOut' },
        className: 'absolute top-[186px] left-[103.28px] w-[43px] z-10',
      },
      {
        src: rightFilterBar,
        initial: { opacity: 0, scale: 0 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 1.2, ease: 'easeOut' },
        className: 'absolute top-[186px] right-[86.12px] w-[43px] z-10',
      },
    ],
  }
,  
  exportAndShare: {
    image: defaultPhoneImageAnimation,
    text: defaultTextAnimation,
  },
};
