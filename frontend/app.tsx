import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import { Baselayout } from './layouts/base';
import CAPortal from './pages/CAPortal';
import RedirectToLogin from './pages/RedirectToLogin';
import { loadUser } from './store/currentUserSlice';

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  React.useEffect(() => {
    const userload = async () => {
      const userRequest = await dispatch(loadUser());
      setIsUserLoaded(true);
    };
    userload();
  }, []);

  if (!isUserLoaded) return null;

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

export default App;
