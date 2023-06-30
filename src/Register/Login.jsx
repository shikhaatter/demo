import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
    error: {},
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let error = {};
      let isValid = true;

      if (!input.email) {
        error.email = '**This is required';
        isValid = false;
      }

      if (!input.password) {
        error.password = '**This is required';
        isValid = false;
      } else if (input.password.length < 7 || input.password.length > 15) {
        error.password = '**Password must be 7 to 15 characters long';
        isValid = false;
      }

      setInput((prevInput) => ({
        ...prevInput,
        error: error,
      }));

      if (isValid) {
        const data = { email: input.email, password: input.password };
        axios
          .post('https://reqres.in/api/login', data)
          .then((res) => {
            console.log(res.data, 16);
            if (res.data.token) {
              navigate('/Covid'); // Navigate to the '/Header' route upon successful login
            } else {
              setInput((prevInput) => ({
                ...prevInput,
                error: { general: 'Invalid email or password' },
              }));
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            setInput((prevInput) => ({
              ...prevInput,
              error: { general: error.response.data.error },
            }));
          });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="myform">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={input.email}
              />
              <span>{input.error.email}</span>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={input.password}
              />
              <span>{input.error.password}</span>
            </div>

            <div className="submit">
              <button type="submit" className="w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="align-item-center">
          <span className="text-center">{input.error.general}</span>
          <span className="text-center">{input.message}</span>
        </div>
      </div>
    </>
  );
};

export default Login;
