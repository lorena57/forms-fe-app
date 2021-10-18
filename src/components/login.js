import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
