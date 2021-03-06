import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import TasksPage from './tasks';
import CreateTaskPage from './create-tasks';
import HomePage from './home';
import TaskView from './task-view';
import AmbassadorPage from './ambassador-view';
import WorkshopPage from './workshops';

export default () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/tasks`} exact render={() => <TasksPage />} />
      <Route path={`${path}/ambassadors`} exact render={() => <AmbassadorPage />} />
      <Route path={`${path}/workshops`} exact render={() => <WorkshopPage />} />
      <Route path={`${path}/tasks/add`} exact render={() => <CreateTaskPage />} />
      <Route path={path} exact render={() => <HomePage />} />
      <Route path={`${path}/tasks/:id`} exact render={() => <TaskView />} />
    </Switch>
  );
};
