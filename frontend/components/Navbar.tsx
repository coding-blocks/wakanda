import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../store/currentUserSlice';
import RequestWorkshopModal from './workshop/RequestWorkshopModal';

export const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated());
  const user = useSelector(selectUser());
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);

  return (
    <div className="">
      <nav className="main-nav">
        <div className="logo-parent">
          <Link to="/">
            <img
              src="https://codingblocks.com/assets/images/cb/cblogo.png"
              alt="online-logo"
              className="nav-logo pointer"
            />
          </Link>
        </div>
        <ul className="nav-list t-align-r">
          {isAuthenticated && (
            <li
              className="nav-items pointer ml-sm-25 ml-10"
              onClick={() => setShowWorkshopModal(true)}
            >
              Request Workshop
            </li>
          )}
          <li className="nav-items pointer ml-sm-25 ml-10">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {isAuthenticated && (
            <li className="nav-items ml-sm-25 ml-10 d-sm-block d-none">Hi, {user.name}</li>
          )}
          {isAuthenticated && (
            <li className="nav-items pointer ml-sm-25 ml-10">
              <a className="button-primary" href="/pages/logout">
                Logout
              </a>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-items pointer ml-sm-25 ml-10">
              <a className="button-primary" href="/pages/login">
                Login
              </a>
            </li>
          )}
        </ul>
      </nav>
      {isAuthenticated && (
        <RequestWorkshopModal
          show={showWorkshopModal}
          setShow={setShowWorkshopModal}
          onAfterAdd={() => {
            setTimeout(() => {
              setShowWorkshopModal(false);
            }, 1000);
          }}
        />
      )}
    </div>
  );
};

export default Navbar;
