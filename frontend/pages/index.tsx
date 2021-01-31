import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const RedirectToLogin: React.FC = () => {
  const isAuthenticated = useSelector((state: any) => state.currentUser.isAuthenticated);

  return isAuthenticated ? (
    <Redirect to="/dashboard" />
  ) : (
    <div className="a-cbm">
      <div className="d-flex justify-content-center">
        <div className="my-auto">
          <div className="font-mdxl mb-4">
            Hey Campus Ambassador you are currently not logged in. Please login to continue.
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectToLogin;
