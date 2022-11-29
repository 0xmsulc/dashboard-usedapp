import { FC, useEffect, useState } from 'react';

import curve from '@curvefi/api';
import { useCoingeckoPrice } from '@usedapp/coingecko';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Curve: FC = () => {
  const [ratio, setRatio] = useState<string>('');

  const price = useCoingeckoPrice('ethereum', 'usd');

  useEffect(() => {
    const getRatio = async () => {
      await curve.init(
        'Infura',
        { network: 'mainnet', apiKey: process.env.REACT_APP_INFURA_PROJECT_ID },
        { chainId: 1 }
      );
      const pool = curve.getPool('steth');
      const underlyingExpected = await pool.swapExpected('ETH', 'stETH', 1);

      setRatio(underlyingExpected);
    };

    getRatio().catch(console.error);
  }, []);

  return (
    <>
      <Typography>1 ETH = ${price}</Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography>1 ETH = {parseFloat(ratio).toFixed(4)} stETH </Typography>
        <Link
          color="secondary"
          href="https://curve.fi/#/ethereum/pools/steth/swap"
          target="_blank"
          rel="noreferrer"
        >
          <OpenInNewIcon />
        </Link>
      </Box>
      {/* <span>
          <Link href="https://curve.fi/#/ethereum/pools/steth/swap">
            <OpenInNewIcon />
          </Link>
        </span>{' '} */}
      <Divider />
    </>
  );
};

export default Curve;
