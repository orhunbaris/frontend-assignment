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
    <div className="w-full h-screen flex justify-center ">
      <div className="w-[1440px] h-[1169px] bg-[#FAFAFB] flex flex-col">
        {/* Slide content: 539px tall */}
        <Slide {...slides[currentIndex]} />

        {/* Tab bar: 124px tall */}
        <TabBar activeIndex={currentIndex} onSelect={handleTabSelect} />
      </div>
    </div>
  );
}
