import React from 'react';
import AdminNavbar from '../components/AdminNavbar';

export const Baselayout: React.FC = (props) => {
  return (
    <div className="pt-5">
      <AdminNavbar />
      <div className="container">
        <div className="mx-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Baselayout;
