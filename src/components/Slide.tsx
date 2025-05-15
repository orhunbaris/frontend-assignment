import { motion } from 'framer-motion';
import { slideVariants } from '../animations/slideVariants';

interface SlideProps {
  image: string;
  label: string;
  title: string;
  subtitle: string;
}

const labelToVariantKeyMap = {
  'Document Scanner': 'documentScanner',
  'Sign & Stamp': 'signAndStamp',
  'Batch Scanning': 'batchScanning',
  'Advanced Filters': 'advancedFilters',
  'Export & Share': 'exportAndShare',
} as const;

type SlideVariantKeys = keyof typeof slideVariants;

export default function Slide({ image, label, title, subtitle }: SlideProps) {
  const variantKey = labelToVariantKeyMap[
    label as keyof typeof labelToVariantKeyMap
  ] as SlideVariantKeys;

  const currentVariant =
    slideVariants[variantKey] ?? slideVariants['documentScanner'];

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col-reverse items-center gap-10 px-4 md:flex-row md:items-start md:justify-between md:gap-[76px] md:px-0">
      {/* Left: Phone Image Animation */}
      <div className="relative overflow-hidden h-[560px] xl:mt-[53px] xl:ml-[68px] w-full max-w-[384px] xl:w-[610px] xl:max-w-none flex-shrink-0">
        {/* Phone image animates upward inside mask */}
        <motion.div
          initial={currentVariant.image.initial}
          animate={currentVariant.image.animate}
          transition={currentVariant.image.transition}
        >
          <img src={image} alt={title} />
        </motion.div>
      </div>

      {/* Right: Text Content Animation */}
      <motion.div
        initial={currentVariant.text.initial}
        animate={currentVariant.text.animate}
        transition={currentVariant.text.transition}
        className="w-full max-w-[327px] flex flex-col gap-6 text-center md:max-w-[556px] md:text-right md:mt-[212px] md:mr-[129px] md:items-end items-center"
      >
        {/* Header Block */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <p className="text-[16px] font-extrabold leading-[100%] tracking-[2px] uppercase text-[#0381FF]">
            {label}
          </p>
          <h2 className="text-[32px] font-bold leading-[40px] text-[#0B122A]">
            {title}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-[20px] font-normal leading-[32px] tracking-[0.5px] text-[#0B122A]">
          {subtitle}
        </p>

        {/* Button */}
        <button className="w-[135px] h-[54px] border-[#D0D5DD] border-[0.5px] rounded-[2px] text-[20px] font-normal leading-[100%] text-center text-[#0B122A]">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}
