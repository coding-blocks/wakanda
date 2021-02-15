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
      <ul className="nav-list t-align-r">
        <li className="nav-items pointer ml-sm-25 ml-10">
          <Link to="/admin/tasks">Tasks</Link>
        </li>
        <li className="nav-items pointer ml-sm-25 ml-10">
          <Link to="/admin/ambassadors">Ambassadors</Link>
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
  );
};
