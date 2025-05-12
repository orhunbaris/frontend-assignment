interface SlideProps {
    image: string;
    label: string;
    title: string;
    subtitle: string;
  }
  
  export default function Slide({ image, label, title, subtitle }: SlideProps) {
    return (
      <div className="w-[1440px] mx-auto flex flex-row items-start justify-between gap-[76px] mt-[233px] mb-0">
        {/* Left: Phone Image */}
        <div className="w-[610px] h-[560px] flex-shrink-0 mt-[53px] ml-[68px]">
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
  
        {/* Right: Text Content */}
        <div className="flex flex-col justify-start w-[556px] text-right gap-[24px] mt-[212px] mr-[129px] p-0">
          {/* Header Block */}
          <div className="flex flex-col items-end gap-[16px] text-right">
            <p className="text-[16px] font-extrabold leading-[100%] tracking-[2px] uppercase text-[#0381FF]">
              {label}
            </p>
            <h2 className="text-[32px] font-bold leading-[40px] text-[#0B122A]">
              {title}
            </h2>
          </div>
  
          {/* Subtitle */}
          <p className="w-[556px] text-[20px] font-normal leading-[32px] tracking-[0.5px] text-[#0B122A]">
            {subtitle}
          </p>
  
          {/* Button */}
          <button className="w-[135px] h-[54px] border-[#D0D5DD] border-[0.5px] rounded-[2px] text-[20px] font-normal leading-[100%] text-center align-middle text-[#0B122A] ml-auto">
            Learn More
          </button>
        </div>
      </div>
    );
  }
  