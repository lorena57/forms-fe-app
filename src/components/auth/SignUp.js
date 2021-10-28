import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';

class SignUp extends Component {
  render() {
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
  }
}

export default SignUp;
