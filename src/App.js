import './App.css';

// import { Provider } from 'react-redux';
// import store from './store';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
}

export default App;

// <Provider store={store}>
//   <div className="App">
//     <Login />
//   </div>
// </Provider>;
