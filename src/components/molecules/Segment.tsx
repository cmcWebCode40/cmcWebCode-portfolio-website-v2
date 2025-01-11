import React from 'react';



interface SegmentProps {
  items: string[];
  tab: number;
  onSelect: (tab: number) => void;
}

const Segment: React.FunctionComponent<SegmentProps> = ({
  items,
  tab,
  onSelect,
}) => {
  return (
    <div className='flex flex-row justify-between items-center w-full  p-2 bg-gray-50 rounded-full'>
      {items.map((item, index) => (
        <div
          key={item}
          onTouchStart={() => onSelect(index)}
          onClick={() => onSelect(index)}
          className={`flex-1 py-2 basis-[50%] cursor-pointer ${
            index !== tab ? '' : 'flex-1 bg-black-200 rounded-full shadow-sm bg-white'
          }`}
        >
          <h2
            className={`text-center ${
              index !== tab
                ? 'text-grey-700 font-semibold'
                : 'text-primary-100 font-semibold'
            }`}
          >
            {item}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Segment;
