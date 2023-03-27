import { useNavigate } from 'react-router-dom';
import { useState, useContext } from 'react';
import AuthContext from '../context/authContext';
import { API_URL } from '../App';
import './Register.css';

const Register = ({ onLoginClick }) => {
  const { loginProfile, currentProfile } = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'content-type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${API_URL}/register`, options)
    const token = await response.json()
    loginProfile(token)
    clearForm()
    navigate('/profile');
  };

  return (
    <div id="reg-div">
      <div className="register-container">
        <h2>Welcome to your professional community</h2>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name='firstName'
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name='lastName'
            value={formData.lastName}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name='password'
            value={formData.password}
            onChange={handleFormChange}
            required
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? 'Hide' : 'Show'} Password
          </button>

          <button type="submit">Agree & Join</button>
        </form>
        <button id='go-back' onClick={onLoginClick}>Go back to login</button>
      </div>
    </div>
  );
};

export default Register;

