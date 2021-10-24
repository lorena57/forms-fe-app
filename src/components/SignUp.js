import React from 'react';

const Signup = () => {
  return (
    <div>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
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

export default Signup;
