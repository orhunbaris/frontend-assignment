import documentIconGray from '../assets/icons/document-scanner-dormant.png';
import documentIconBlue from '../assets/icons/document-scanner-active.png';
import signIconGray from '../assets/icons/sign-and-stamp-dormant.png';
import signIconBlue from '../assets/icons/sign-and-stamp-active.png';
import batchIconGray from '../assets/icons/batch-scanning-dormant.png';
import batchIconBlue from '../assets/icons/batch-scanning-active.png';
import filtersIconGray from '../assets/icons/advanced-filters-dormant.png';
import filtersIconBlue from '../assets/icons/advanced-filters-active.png';
import exportIconGray from '../assets/icons/export-and-share-dormant.png';
import exportIconBlue from '../assets/icons/export-and-share-active.png';

const tabs = [
  {
    label: 'Document Scanner',
    width: 301,
    iconGray: documentIconGray,
    iconActive: documentIconBlue,
  },
  {
    label: 'Sign & Stamp',
    width: 301,
    iconGray: signIconGray,
    iconActive: signIconBlue,
  },
  {
    label: 'Batch Scanning',
    width: 301,
    iconGray: batchIconGray,
    iconActive: batchIconBlue,
  },
  {
    label: 'Advanced Filters',
    width: 301,
    iconGray: filtersIconGray,
    iconActive: filtersIconBlue,
  },
  {
    label: 'Export & Share',
    width: 240,
    iconGray: exportIconGray,
    iconActive: exportIconBlue,
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
    <div className="w-full max-w-[1440px] h-[124px] bg-white flex overflow-x-auto md:overflow-visible">
      {tabs.map((tab, index) => {
        const isFirst = index === 0;
        const isLast = index === tabs.length - 1;

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`h-full flex items-center justify-center gap-4 flex-shrink-0 ${
              !isFirst ? 'border-l border-[#00000014]' : ''
            } ${activeIndex === index ? 'bg-[#0381FF08]' : 'bg-white'} ${
              isLast ? 'border-r-0' : ''
            }`}
            style={{
                width: `${tab.width}px`,
                padding: 0,
                margin: 0,
                borderRight: isLast ? '1px solid transparent' : 'none',
              }}
          >
            <img
              src={activeIndex === index ? tab.iconActive : tab.iconGray}
              className="w-[56px] h-[56px]"
              alt={tab.label}
            />
            <span className="text-[16px] md:text-[20px] leading-[28px] font-medium whitespace-nowrap">
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
