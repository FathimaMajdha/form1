import React, { useContext, useState } from 'react';
import { context } from './context';
import { useNavigate } from 'react-router';

const Loginpage = () => {
  const { email, password } = useContext(context);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const navigate = useNavigate();

  const handle= (e) => {
    e.preventDefault();
    if (email === newEmail && password === newPassword) {
      navigate('/secondpage');
    } else {
      alert('Type correct email and password');
    }
  };

  return (
    <div>
      <form onSubmit={handle}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        /><br/><br/>

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
         <br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Loginpage;
