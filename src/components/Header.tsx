import { FC } from 'react';
import ethereumLogo from '../assets/images/ethLogo.png';

import WalletButton from './WalletButton';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

type Props = {
  chainId: number | undefined;
  isChainSupported: boolean;
};

const Header: FC<Props> = ({ chainId, isChainSupported }) => {
  return (
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
          <WalletButton chainId={chainId} isChainSupported={isChainSupported} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
