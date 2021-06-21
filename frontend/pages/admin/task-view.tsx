import React from 'react';
import EditTask from './task-view-pages/edit-tasks';
import Submissions from './task-view-pages/submissions';
import AssignedUsers from './task-view-pages/assigned-users';
import Leaderboard from './task-view-pages/leaderboard';
import TabNav from '../../components/common/tab-nav';

export default () => {
  const [activeTab, setActiveTab] = React.useState('edit');

  return (
    <div>
      <div className="card">
        <div>
          <TabNav
            tabs={[
              { title: 'Edit', component: () => <EditTask /> },
              { title: 'Assigned', component: () => <AssignedUsers /> },
              { title: 'Submissions', component: () => <Submissions /> },
              { title: 'Leaderboard', component: () => <Leaderboard /> },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
