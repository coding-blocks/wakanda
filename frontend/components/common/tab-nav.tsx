import React from 'react';

export interface Tab {
  title: string;
  component: React.FC;
}

export interface TabNavProps {
  tabs: Tab[];
}

export default (props: TabNavProps) => {
  const { tabs } = props;

  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const ActiveComponent = activeTab.component;

  return (
    <div>
      <div className="tabs-primary">
        {tabs.map((tab) => (
          <div
            className={`tab px-0 mr-md-5 mr-sm-4 mr-3 font-sm bold ${
              activeTab.title === tab.title && 'active'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="py-4">
        <ActiveComponent />
      </div>
    </div>
  );
};
