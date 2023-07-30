import React, { useState } from 'react';

const Tabs = ({ tabs }) => {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex justify-start mt-4 flex-col md:flex-row">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab ? 'border-b-4 border-b-navy-700 text-navy-700 font-semibold' : 'text-gray-600 font-extralight'
            } py-2 px-4 mb-4 flex items-center gap-2 h-[50px] transition-all duration-200`}
            onClick={() => handleTabClick(index)} 
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;