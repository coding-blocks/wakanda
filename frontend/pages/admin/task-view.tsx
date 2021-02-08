import React from 'react';
import EditTask from './task-view-pages/edit-tasks';
import Submissions from './task-view-pages/submissions';
import AssignedUsers from './task-view-pages/assigned-users';

export default () => {
  const [activeTab, setActiveTab] = React.useState('edit');

  return (
    <div>
      <div className="card py-0 px-4">
        <div className="tab-nav-underline">
          <div
            className={`tab py-4 pointer ${activeTab === 'edit' && 'active'}`}
            onClick={() => setActiveTab('edit')}
          >
            Edit
          </div>
          <div
            className={`tab py-4 pointer ${activeTab === 'assigned' && 'active'}`}
            onClick={() => setActiveTab('assigned')}
          >
            Assigned Users
          </div>
          <div
            className={`tab py-4 pointer ${activeTab === 'submissions' && 'active'}`}
            onClick={() => setActiveTab('submissions')}
          >
            Submissions
          </div>
        </div>
        <div className="py-4">
          {activeTab === 'edit' && <EditTask />}
          {activeTab === 'assigned' && <AssignedUsers />}
          {activeTab === 'submissions' && <Submissions />}
        </div>
      </div>
    </div>
  );
};
