import { FC, useEffect, useState } from 'react';
import {
  shortenAddress,
  useEthers,
  useEtherBalance,
  useLookupAddress,
} from '@usedapp/core';
import { formatEther } from '@ethersproject/units';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type Props = {
  chainId: number | undefined;
  isChainSupported: boolean;
};

const WalletButton: FC<Props> = ({ chainId, isChainSupported }) => {
  const [rendered, setRendered] = useState('');
  const { account, activateBrowserWallet, deactivate, error } = useEthers();
  const { ens } = useLookupAddress(account);
  const balance = useEtherBalance(account);

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered('');
    }
  }, [account, ens, setRendered]);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      {!isChainSupported && !!account ? (
        <Typography sx={{ flexGrow: 1 }} variant="body2">
          Please connect to ethereum Mainnet.
        </Typography>
      ) : (
        !!balance && (
          <Typography sx={{ flexGrow: 1 }} variant="body2">
            ETH balance: ${parseFloat(formatEther(balance)).toFixed(4)}
          </Typography>
        )
      )}
      {!!chainId && !!account && (
        <Typography sx={{ flexGrow: 1 }} variant="body2">
          Chain id: {chainId}
        </Typography>
      )}
      {!!error && (
        <Typography sx={{ flexGrow: 1 }} variant="body2">
          Error while connecting wallet: {error.message}
        </Typography>
      )}
      <Button
        color="inherit"
        onClick={() => {
          if (!account) {
            activateBrowserWallet();
          } else {
            deactivate();
          }
        }}
      >
        {!rendered && 'Connect Wallet'}
        {!!rendered && rendered}
      </Button>
    </Box>
  );
};

export default WalletButton;