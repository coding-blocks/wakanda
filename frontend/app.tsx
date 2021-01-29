import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticateRoute';
import { Baselayout } from './layouts/base';
import CAPortal from './pages/CAPortal';
import { loadUser } from './store/currentUserSlice';

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.currentUser.user);

  React.useEffect(() => {
    dispatch(loadUser());
  }, []);

  if (!user) return <div>Login</div>;

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
