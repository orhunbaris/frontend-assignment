import { useState } from 'react';
import Slide from './components/Slide';
import { slides } from './data/data';
import TabBar from './components/TabBar';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTabSelect = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFB] flex justify-center">
      <div className="w-full max-w-[1440px] flex flex-col relative">
        {/* Content Wrapper with vertical alignment */}
        <div className="w-full flex flex-col mt-[56px] mb-[64px] md:mt-[233px] md:mb-[199px]">
          <Slide
            key={currentIndex}
            currentIndex={currentIndex}
            image={slides[currentIndex].image}
            label={slides[currentIndex].label}
            title={slides[currentIndex].title}
            subtitle={slides[currentIndex].subtitle}
          />

          <TabBar activeIndex={currentIndex} onSelect={handleTabSelect} />
        </div>
      </div>
    </div>
  );
}
