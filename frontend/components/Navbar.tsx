import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../store/currentUserSlice';
import RequestWorkshopModal from './RequestWorkshopModal';

export const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated());
  const user = useSelector(selectUser());
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);

  return (
    <div className="">
      <nav className="main-nav">
        <span className="logo-parent">
          <Link to="/">
            <img
              src="https://codingblocks.com/assets/images/cb/cblogo.png"
              alt="online-logo"
              className="nav-logo pointer"
            />
          </Link>
        </span>
        <ul className="nav-list">
          {isAuthenticated && (
            <li className="" onClick={() => setShowWorkshopModal(true)}>
              Request Workshop
            </li>
          )}
          <li className="nav-items pointer">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {isAuthenticated && <li className="nav-items pointer">Hi, {user.name}</li>}
          {isAuthenticated && (
            <li className="nav-items pointer">
              <a className="button-primary white" href="/pages/logout">
                Logout
              </a>
            </li>
          )}
          {!isAuthenticated && (
            <li className="nav-items pointer">
              <a className="button-primary white" href="/pages/login">
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
