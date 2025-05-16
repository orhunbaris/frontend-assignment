/* import documentIconBlue from '../assets/icons/document-scanner-active.png';
import signIconBlue from '../assets/icons/sign-and-stamp-active.png';
import batchIconBlue from '../assets/icons/batch-scanning-active.png';
import filtersIconBlue from '../assets/icons/advanced-filters-active.png';
import exportIconBlue from '../assets/icons/export-and-share-active.png'; */
import documentIcon from '../assets/icons/document-scanner-dormant.png';
import signIcon from '../assets/icons/circular-label-with-certified-stamp 1.png';
import batchIcon from '../assets/icons/batch-scanning-dormant.png';
import filtersIcon from '../assets/icons/advanced-filters-dormant.png';
import exportIcon from '../assets/icons/export-and-share-dormant.png';
import TabIconWithRing from './TabIconWithRings';

const tabs = [
  {
    label: 'Document Scanner',
    width: 301,
    icon: documentIcon,
  },
  {
    label: 'Sign & Stamp',
    width: 301,
    icon: signIcon,
  },
  {
    label: 'Batch Scanning',
    width: 301,
    icon: batchIcon,
  },
  {
    label: 'Advanced Filters',
    width: 301,
    icon: filtersIcon,
  },
  {
    label: 'Export & Share',
    width: 240,
    icon: exportIcon,
  },
];
export default function TabBar({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="w-full max-w-[1440px] h-[124px] bg-white flex overflow-x-auto md:overflow-visible mx-auto">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-[124px] flex flex-row items-center justify-center gap-4 border-x border-[#00000014] flex-shrink-0 transition-colors duration-200 ${
            activeIndex === index ? 'bg-[#0381FF08]' : 'bg-white'
          }`}
          style={{
            width: index === tabs.length - 1 ? '240px' : '301px',
          }}
        >
          <TabIconWithRing
            isActive={activeIndex === index}
            src={tab.icon}
            alt={tab.label}
          />
          <div className="h-[28px] flex items-center justify-center w-fit">
            <span className="text-[16px] md:text-[20px] leading-[28px] font-medium whitespace-nowrap">
              {tab.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
