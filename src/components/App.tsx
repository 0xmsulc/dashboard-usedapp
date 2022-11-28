import { FC } from 'react';
import ethereumLogo from '../assets/images/ethereumLogo.png';
import '../styles/App.css';

import GasPrice from './GasPrice';

const App: FC = () => {
  return (
    <div className="App">
      <GasPrice />
      <header className="App-header">
        <img src={ethereumLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
