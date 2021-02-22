import React from 'react';
import AllUsers from './ambassador-view-pages/all-users';
import CARequests from './ambassador-view-pages/ca-requests';
import TabNav from '../../components/common/tab-nav';

export default () => {
  const [activeTab, setActiveTab] = React.useState('edit');

  return (
    <div>
      <div className="card">
        <div>
          <TabNav
            tabs={[
              { title: 'Users', component: () => <AllUsers /> },
              { title: 'CA Requests', component: () => <CARequests /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
