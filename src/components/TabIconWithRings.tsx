import React from 'react';

interface TabIconWithRingProps {
  isActive: boolean;
  src: string;
  alt: string;
}

const TabIconWithRing: React.FC<TabIconWithRingProps> = ({ isActive, src, alt }) => {
  return (
    <div className="relative w-[56px] h-[56px]">
      {/* Blue fill background */}
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-[#0381FF] scale-0 animate-[popFill_0.3s_ease-out_forwards]" />
      )}

      {/* Animated stroke ring */}
      {isActive && (
     <svg
     key={`active-ring-${alt}-${isActive ? 'on' : 'off'}`}
     className="absolute inset-0 w-full h-full"
     viewBox="0 0 56 56"
   >
     <circle
       cx="28"
       cy="28"
       r="25"
       stroke="#0381FF"
       strokeWidth="2"
       fill="none"
       strokeDasharray="157"
       strokeDashoffset="157"
       style={{
         transform: 'rotate(-90deg) scaleY(-1)', // ✅ start at top, go CCW
         transformOrigin: '50% 50%',
         animation: 'drawCircle 0.5s ease-out forwards',
       }}
     />
   </svg>
      
      )}

      {/* Icon image (always shown) */}
      <img
        src={src}
        alt={alt}
        className="w-[56px] h-[56px] relative z-10"
      />
    </div>
  );
};

export default TabIconWithRing;
