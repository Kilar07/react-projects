import React from "react";
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({username: '', password: ''})

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(data));
  };

  const handleInputChange = (e, name) =>{
    setData({...data, [name]: e.target.value})
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Login form</h1>
      <label>
        Username:
        <input
          type="text"
          value={data.username}
          onChange={(e) => handleInputChange(e, 'username')}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={data.password}
          onChange={(e) => handleInputChange(e, 'password')}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
