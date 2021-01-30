import React from 'react';

export const Baselayout: React.FC = (props) => {
  return <div className="mx-5">{props.children}</div>;
};

export default Baselayout;
