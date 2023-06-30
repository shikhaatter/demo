import React, { useState } from 'react';
import '../App.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    c_pass: '',
    error: {},
    message: '',
  });
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const onlyLetters = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/;

    let error = {};

    if (!user.name) {
      error.name = 'Please fill out this field';
    } else if (!onlyLetters.test(user.name)) {
      error.name = 'Only letters are required';
    } else if (user.name.length <= 4 || user.name.length >= 15) {
      error.name = 'Username must be between 4 and 15 characters';
    }

    if (!user.lastname) {
      error.lastname = 'Please fill out this field';
    } else if (!onlyLetters.test(user.lastname)) {
      error.lastname = 'Only letters are required';
    }

    if (!user.email) {
      error.email = 'Please fill out this field';
    } else if (!emailRegex.test(user.email)) {
      error.email = 'Please enter a valid email';
    }

    if (!user.password) {
      error.password = 'Please fill out this field';
    } else if (!passwordRegex.test(user.password)) {
      error.password =
        'Please enter a strong password including at least one letter, one number, and one special character';
    } else if (user.password.length < 8 || user.password.length > 15) {
      error.password = 'Password must be between 8 and 15 characters';
    }

    if (!user.c_pass) {
      error.c_pass = 'Please fill out this field';
    } else if (user.password !== user.c_pass) {
      error.c_pass = 'Passwords do not match';
    }

    setUser((prev) => ({
      ...prev,
      error: error,
    }));

    if (Object.keys(error).length === 0) {
      const formData = {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        c_pass: user.c_pass,
      };

      setInput((prevInput) => [...prevInput, formData]);

      setUser({
        name: '',
        lastname: '',
        email: '',
        password: '',
        c_pass: '',
        error: {},
        message: 'Form submitted successfully 👍',
      });
    }
  };

  return (
    <>
      <div className="container">
        <div className="myform">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Register Form</h2>
            <div className="form-group">
              <label htmlFor="name">Username:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your username"
                onChange={handleChange}
                value={user.name}
                autoComplete="off"
              />
              <span className="error">{user.error.name}</span>
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Lastname:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter your Lastname"
                onChange={handleChange}
                value={user.lastname}
                autoComplete="off"
              />
              <span className="error">{user.error.lastname}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                value={user.email}
                autoComplete="off"
              />
              <span className="error">{user.error.email}</span>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={user.password}
                autoComplete="off"
              />
              <span className="error">{user.error.password}</span>
            </div>
            <div className="form-group">
              <label htmlFor="c_pass">Confirm Password:</label>
              <input
                type="password"
                id="c_pass"
                name="c_pass"
                placeholder="Enter your Confirm Password"
                onChange={handleChange}
                value={user.c_pass}
                autoComplete="off"
              />
              <span className="error">{user.error.c_pass}</span>
            </div>
            <div className="submit">
              <button type="submit" className="w-100">
                Register
              </button>
            </div>
          </form>
          <h2>{user.message}</h2>
        </div>
      </div>

      {input.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
            </tr>
          </thead>
          <tbody>
            {input.map((curElm, index) => (
              <tr key={index}>
                <td>{curElm.name}</td>
                <td>{curElm.lastname}</td>
                <td>{curElm.email}</td>
                <td>{curElm.password}</td>
                <td>{curElm.c_pass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Register;
