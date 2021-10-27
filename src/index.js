import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from './components/auth/SignUp';
// import { Provider } from 'react-redux';
// import store from './store';
import App from './App';
import Welcome from './components/Welcome';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Welcome} />
      <Route path="/signup" component={SignUp} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
