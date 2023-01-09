import logo from 'assets/logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is still a work in progress.
        </p>
        <a
          className="App-link"
          href={window.location.pathname}
          target="_blank"
          rel="noopener noreferrer"
        >
          Refresh
        </a>
      </header>
    </div>
  );
}

export default App;
