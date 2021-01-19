import React from 'react';
import ReactDOM from 'react-dom';

const ReactApp: React.FC = () => {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
};

ReactDOM.render(<ReactApp />, document.querySelector('#root'));
