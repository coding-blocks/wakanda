import React from 'react';
import { Navbar } from '../components/Navbar';

export const Baselayout: React.FC = (props) => {
  return (
    <div className="pt-5">
      <Navbar />
      <div className="container">
        <div className="mx-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Baselayout;
