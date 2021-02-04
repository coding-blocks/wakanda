import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import { Baselayout } from './layouts/base';
import { loadUser } from './store/currentUserSlice';
import Dashboard from './pages/dashboard';
import Admin from './pages/AdminPortal';
import Index from './pages';

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
        <AuthenticatedRoute exact path="/dashboard">
          <Baselayout>
            <Dashboard />
          </Baselayout>
        </AuthenticatedRoute>

        <AuthenticatedRoute exact path="/admin">
          <Baselayout>
            <Admin />
          </Baselayout>
        </AuthenticatedRoute>

        <Route exact path="/">
          <Baselayout>
            <Index />
          </Baselayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
