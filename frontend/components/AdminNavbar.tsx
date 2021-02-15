import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated, selectUser } from '../store/currentUserSlice';

export default () => {
  const isAuthenticated = useSelector(selectIsAuthenticated());
  const user = useSelector(selectUser());

  return (
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
        <li className="nav-items pointer">
          <Link to="/admin/tasks">Tasks</Link>
        </li>
        <li className="nav-items pointer">
          <Link to="/admin/ambassadors">Ambassadors</Link>
        </li>
        {isAuthenticated && <li className="nav-items pointer">Hi, {user.name}</li>}
        {isAuthenticated && (
          <li className="nav-items pointer">
            <a className="button-primary" href="/pages/logout">
              Logout
            </a>
          </li>
        )}
        {!isAuthenticated && (
          <li className="nav-items pointer">
            <a className="button-primary" href="/pages/login">
              Login
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
