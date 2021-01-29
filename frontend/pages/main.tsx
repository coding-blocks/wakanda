import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from '../components/main';

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/hello">
          <Hello />
        </Route>
      </Switch>
    </Router>
  );
};
