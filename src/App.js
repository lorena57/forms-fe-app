import './App.css';

import { Provider } from 'react-redux';
import store from './store';
import Login from './components/login';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
