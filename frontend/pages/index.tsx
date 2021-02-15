import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const RedirectToLogin: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.currentUser.isAuthenticated);

  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="a-cbm">
      <div className="wakanda">
        <div className="landing-page">
          <div className="width-limiter">
            <div className="landing-page__section"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
