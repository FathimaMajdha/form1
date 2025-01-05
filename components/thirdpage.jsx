import React, { useContext } from 'react';
import { context } from './context';

const Thirdpage = () => {
  const { text, color } = useContext(context);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color }}>{text}</h1>
    </div>
  );
};

export default Thirdpage;
