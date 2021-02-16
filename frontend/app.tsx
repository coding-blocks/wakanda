import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthenticatedRoute from './components/common/AuthenticatedRoute';
import { Baselayout } from './layouts/base';
import { WithoutContainer } from './layouts/without-container';
import AdminLayout from './layouts/admin';
import { loadUser } from './store/currentUserSlice';
import Dashboard from './pages/dashboard';
import Admin from './pages/admin';
import Index from './pages';
import 'react-datetime/css/react-datetime.css';

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

        <AuthenticatedRoute path="/admin">
          <AdminLayout>
            <Admin />
          </AdminLayout>
        </AuthenticatedRoute>

        <Route exact path="/">
          <WithoutContainer>
            <Index />
          </WithoutContainer>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
