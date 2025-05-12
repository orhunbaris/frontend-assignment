interface SlideProps {
  image: string;
  label: string;
  title: string;
  subtitle: string;
}

export default function Slide({ image, label, title, subtitle }: SlideProps) {
  return (
    <div className="w-full flex flex-row items-start justify-between px-[68px] pt-[53px] gap-[76px] mt-[233px] mb-0 bg-white">
      {/* Left: Phone Image */}
      <div className="w-[610px] h-[560px] flex-shrink-0 ">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col justify-start w-[556px] h-[235px] mt-[138px] text-end font-[SF Pro Display] gap-[20px]">
        {/* Header block */}
        <div className="w-[305px] h-[75px] ml-auto flex flex-col gap-[16px] bg-amber-200">
          <p className="text-[16px] font-extrabold leading-[100%] tracking-[2px] uppercase text-right text-[#0381FF]">
            {label}
          </p>
          <h2 className="text-[32px] font-bold leading-[40px] tracking-[0px] text-right text-[#0B122A]">
            {title}
          </h2>
        </div>

        {/* Subtitle */}
        <div className=" h-[54px] mt-[24px] ml-auto">
          <p className="text-[20px] font-normal leading-[32px] tracking-[0.5px] text-right text-[#0B172A]">
            {subtitle}
          </p>
        </div>

        {/* Button */}
        <div className="mt-[32px] ml-auto ">
          <button className="w-[135px] h-[54px] border-[#D0D5DD] border-[0.5px] rounded-[2px] text-[20px] font-normal leading-[100%] text-center align-middle text-[#0B122A]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
