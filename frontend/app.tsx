import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticateRoute';
import { Baselayout } from './layouts/base';
import CAPortal from './pages/CAPortal';

export default () => {
  return (
    <Router>
      <Switch>
        <AuthenticatedRoute exact path="/">
          <Baselayout>
            <CAPortal />
          </Baselayout>
        </AuthenticatedRoute>
      </Switch>
    </Router>
  );
};
