import { FC, useState } from 'react';
import ethereumLogo from '../assets/images/ethLogo.png';

import { NodeUrls, useEthers } from '@usedapp/core';
import { EtherscanProvider } from '@ethersproject/providers';

import GasPrice from './GasPrice';
import SearchBar from './SearchBar';
import WalletButton from './WalletButton';
import Avatar from '@mui/material/Avatar';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <IconButton
              disabled
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar alt="Ethereum" src={ethereumLogo}></Avatar>
            </IconButton>
            <WalletButton
              chainId={chainId}
              isChainSupported={isChainSupported}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <SearchBar setInputAccount={setInputAccount} />
      <Box
        sx={{
          display: 'flex',
          height: '100%',
          minHeight: '100vh',
          flexFlow: 'row',
          mt: 1,
        }}
      >
        <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
          <GasPrice />
        </Box>
        <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
          <p>Create React App example 2</p>
        </Box>
        <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
          <p>Create React App example 2</p>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
