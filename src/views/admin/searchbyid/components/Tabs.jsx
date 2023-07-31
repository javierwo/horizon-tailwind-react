import React, { useState } from 'react';

const Tabs = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex flex-col my-4 items-center justify-between md:flex-row bg-[#f5f5f5] p-2 rounded-xl">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab ? 'font-extrabold bg-white rounded-xl' : 'text-[#86868b] font-light'
            } py-2 px-2 flex items-center gap-2 transition-all duration-200`}
            onClick={() => handleTabClick(index)} 
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>
      <div className=' mt-3 rounded-xl'>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;