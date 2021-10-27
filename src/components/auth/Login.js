import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
      </form>
    </div>
  );
};

export default Login;
