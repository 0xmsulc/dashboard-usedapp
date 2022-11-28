import { createRoot } from 'react-dom/client';
import './styles/index.css';

import { providers } from 'ethers';
import { Config, DAppProvider, Mainnet } from '@usedapp/core';
import { EtherscanProvider } from '@ethersproject/providers';

import App from './components/App';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      'https://mainnet.infura.io/v3/' + process.env.REACT_APP_INFURA_PROJECT_ID,
  },
};

const etherscanProvider: EtherscanProvider = new providers.EtherscanProvider(
  1,
  process.env.REACT_APP_ETHERSCAN_API_KEY
);

console.log(process.env.REACT_APP_ETHERSCAN_API_KEY);
console.log(process.env.REACT_APP_INFURA_PROJECT_ID);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
);
