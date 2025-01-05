import React, { createContext, useState } from 'react';

export const context = createContext();

export const Usercontext = ({ children }) => {
  const [email, setEmail] = useState('majdha@gmail.com');
  const [password, setPassword] = useState('12345');
  const [text, setText] = useState('');
  const [color, setColor] = useState('blue');

  return (
    <context.Provider value={{ email, password, text, setText, color, setColor }}>
      {children}
    </context.Provider>
  );
};

export default context;
