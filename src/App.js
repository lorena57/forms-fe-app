import './App.css';
import React from 'react';
import Header from './components/Header';

function App({ children }) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}

export default App;
