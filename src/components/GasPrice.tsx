import { FC } from 'react';
import { useGasPrice } from '@usedapp/core';
import { utils } from 'ethers';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const GasPrice: FC = () => {
  const etherGasPrice = useGasPrice();
  const gweiGasPrice =
    etherGasPrice?._hex &&
    (Number(utils.formatEther(etherGasPrice._hex)) * 10 ** 9).toFixed(2);

  return (
    <>
      <Typography>Gas price = {gweiGasPrice} Gwei</Typography>
      <Divider />
    </>
  );
};

export default GasPrice;
