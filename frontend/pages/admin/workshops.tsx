import React from 'react';
import WorkshopPage from './workshop-view-page';
import TabNav from '../../components/common/tab-nav';

export default () => {
  const [activeTab, setActiveTab] = React.useState('edit');

  return (
    <div>
      <div className="card">
        <div>
          <TabNav
            tabs={[
              { title: 'Active', component: () => <WorkshopPage /> },
              { title: 'Archived', component: () => <WorkshopPage archived={true} /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
