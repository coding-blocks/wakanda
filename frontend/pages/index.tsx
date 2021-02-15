import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const RedirectToLogin: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.currentUser.isAuthenticated);

  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="wakanda">
      <div className="landing-page">
        <div className="landing-page__section">
          <div className="row no-gutters justify-content-between align-items-center">
            <div className="flex-1"></div>
            <img src="https://cb-thumbnails.s3.ap-south-1.amazonaws.com/team-image-main.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
