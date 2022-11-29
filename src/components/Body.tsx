import { FC } from 'react';
import { EtherscanProvider } from '@ethersproject/providers';
import { useEthers } from '@usedapp/core';

import GasPrice from './GasPrice';
import Curve from './Curve';
import Blocks from './Blocks';
import Transactions from './Transactions';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type Props = {
  inputAccount?: string;
  etherscan: EtherscanProvider;
};

const Body: FC<Props> = ({ inputAccount, etherscan }) => {
  const { account } = useEthers();

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexFlow: 'row',
        mt: 2,
      }}
    >
      <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
        <Typography variant="h6">Blockchain info</Typography>
        <GasPrice />
        <Curve />
        <Blocks />
      </Box>
      <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
        <Typography variant="h6"></Typography>
        <Transactions account={inputAccount} etherscan={etherscan} />
      </Box>
      <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
        <Typography variant="h6"></Typography>
        <Transactions account={account} etherscan={etherscan} isOwn />
      </Box>
    </Box>
  );
};

export default Body;
