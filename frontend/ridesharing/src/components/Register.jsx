import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 
import './Register.css';
import AppNavbar from './AppNavbar';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage(''); 
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      console.log(res.data);
      
      // Store user details in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify({ name, email })); // Assuming the user object has these properties
      
      setSuccessMessage('Registration successful!');
      
      setTimeout(() => {
        navigate('/'); 
      }, 2000); // 2 seconds delay
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('Server Error. Please try again later.');
      }
    }
  };

  return (
    <div>
      <AppNavbar />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input className='registerinput' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email: </label>
          <input className='registerinput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password: </label>
          <input className='registerinput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>} {/* Display success message */}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;






/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      console.log(res.data);
      // Redirect to the home page on successful registration
      navigate('/'); 
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.msg);
      } else {
        setErrorMessage('Server Error. Please try again later.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input className='registerinput' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email: </label>
        <input className='registerinput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input className='registerinput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Register</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Register;*/





/*import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      console.log(res.data);
    } catch (error) {
        if (error.response && error.response.data) {
            setErrorMessage(error.response.data.msg);
          } else {
            setErrorMessage('Server Error. Please try again later.');
          }
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input className='registerinput' type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
      </div>
      <div>
        <label>Email: </label>
        <input className='registerinput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      </div>
      <div>
        <label>Password: </label>
        <input className='registerinput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
      </div>
      <button type="submit">Register</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default Register;*/
