import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './App';
import Welcome from './components/Welcome';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
