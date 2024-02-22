import React, { useState } from 'react';
import EnvironmentsForm from "@/components/branch/option/from/EnviromentsForm";
import ResourceForm from"@/components/branch/option/from/ResourceForm";


interface Tab {
  title: string;
  content: JSX.Element;
}

const OptionContents = () => {
  const [tabs] = useState<Tab[]>([
    {
      title: "Environments",
      content: <EnvironmentsForm />,
    },
    {
      title: "Resource",
      content: <ResourceForm />,
    },
  ]);

  const [activeTab, setActiveTab] = useState(0);
    
  return (
    <div>
      <div className="tab-trigger">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default OptionContents;