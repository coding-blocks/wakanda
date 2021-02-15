import React from 'react';
import { Navbar } from '../components/Navbar';

export const Baselayout: React.FC = (props) => {
  return (
    <div className="wakanda">
      <Navbar />
      {props.children}
    </div>
  );
};

export default Baselayout;
