import { FC, useState } from 'react';

import { NodeUrls, useEthers } from '@usedapp/core';
import { EtherscanProvider } from '@ethersproject/providers';

import Body from './Body';
import Header from './Header';
import SearchBar from './SearchBar';

import Container from '@mui/material/Container';

type Props = {
  readOnlyUrls: NodeUrls | undefined;
  etherscanProvider: EtherscanProvider;
};

const App: FC<Props> = ({ etherscanProvider, readOnlyUrls }) => {
  const { account, chainId } = useEthers();
  const [inputAccount, setInputAccount] = useState('');
  const isChainSupported =
    !!chainId && !!readOnlyUrls && !!readOnlyUrls[chainId];

  console.log(inputAccount);

  return (
    <Container disableGutters={true}>
      <Header chainId={chainId} isChainSupported={isChainSupported} />
      <SearchBar setInputAccount={setInputAccount} />
      <Body />
    </Container>
  );
};

export default App;
