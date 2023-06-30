import React, { useState } from 'react';

const MyForm = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    c_pass: '',
    error: {},
    message: [],
  });

  const [text, setText] = useState([]);

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

      if (!input.username) {
        error.username = '**This is a required field';
        isValid = false;
      } else if (
        !isNaN(input.username) ||
        input.username.length < 3 ||
        input.username.length > 15
      ) {
        error.username = '**Invalid input';
        isValid = false;
      }

      if (!input.email) {
        error.email = '**This is required';
        isValid = false;
      }

      if (!input.password) {
        error.password = '**This is required';
        isValid = false;
      } else if (input.password.length < 7 || input.password.length > 15) {
        error.password = '**Password must be 7 characters long';
        isValid = false;
      }

      if (!input.c_pass) {
        error.c_pass = '**This is required';
        isValid = false;
      } else if (input.password !== input.c_pass) {
        error.c_pass = '**Password does not match';
        isValid = false;
      }

      setInput((prevInput) => ({
        ...prevInput,
        error: error,
      }));

      if (isValid) {
        let myText = { ...input, id: new Date().toString() };
        setText([...text, myText]);
        setInput({
          username: '',
          email: '',
          password: '',
          c_pass: '',
          error: {},
          message: 'Form submitted successfully 👍',
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <>
      <div className="container">
        <div className="myform">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                onChange={handleChange}
                value={input.username}
              />
              <span>{input.error.username}</span>
            </div>
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
                placeholder="Enter your password "
                onChange={handleChange}
                value={input.password}
              />
              <span>{input.error.password}</span>
            </div>
            <div className="form-group">
              <label htmlFor="c_pass">Confirm Password:</label>
              <input
                type="password"
                id="c_pass"
                name="c_pass"
                placeholder="Enter your Confirm Password"
                onChange={handleChange}
                value={input.c_pass}
              />
              <span>{input.error.c_pass}</span>
            </div>
            <div className="submit">
              <button type="submit" className="w-50">
                Submit
              </button>
              
            </div>
          </form>
        </div>
        <div className="align-item-center">
          <span className="text-center">{input.message}</span>
        </div>
        {text.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Confirm Password</th>
              </tr>
            </thead>
            <tbody>
              {text.map((curElm) => (
                <tr key={curElm.id}>
                  <td>{curElm.username}</td>
                  <td>{curElm.email}</td>
                  <td>{curElm.password}</td>
                  <td>{curElm.c_pass}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default MyForm;
