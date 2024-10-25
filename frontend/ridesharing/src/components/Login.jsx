import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import AppNavbar from './AppNavbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token, user } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      setError('');
      navigate('/');
    } catch (error) {
      console.error('Login error', error);
      setError(error.response ? error.response.data.msg : 'Server error');
    }
  };

  return (<div>
    <AppNavbar/>
  
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <button type="submit">Login</button>
      {error && <div style={{ color: 'red' }}>{error}</div>} 
    </form>
    </div>
  );
};

export default Login;