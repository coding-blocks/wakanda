import React from 'react';
import AdminNavbar from '../components/AdminNavbar';

export const Baselayout: React.FC = (props) => {
  return (
    <div className="pt-5 wakanda">
      <AdminNavbar />
      <div className="width-limiter">
        <div className="px-md-50 px-25">{props.children}</div>
      </div>
    </div>
  );
};

export default Baselayout;
