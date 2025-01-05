import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { context } from './context';

const Secondpage = () => {
  const { text, setText, color, setColor } = useContext(context);
  const navigate = useNavigate();

  const handleChange = () => {
    setText('hiiii');
    setColor('red');
    navigate('/thirdpage');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ color }}>{text || 'hello'}</h1>
      <button onClick={handleChange}>Change</button>
    </div>
  );
};

export default Secondpage;
