import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import { Baselayout } from './layouts/base';
import CAPortal from './pages/CAPortal';
import RedirectToLogin from './pages/RedirectToLogin';
import { loadUser } from './store/currentUserSlice';

export default () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.currentUser.user);

  React.useEffect(() => {
    dispatch(loadUser());
  }, []);

  // if (!user) return <div>Login</div>;

  return (
    <Router>
      <Switch>
        <AuthenticatedRoute exact path="/">
          <Baselayout>
            <CAPortal />
          </Baselayout>
        </AuthenticatedRoute>

        <Route exact path="/redirectToLogin">
          <RedirectToLogin />
        </Route>
      </Switch>
    </Router>
  );
};
