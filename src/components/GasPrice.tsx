import { FC } from 'react';
import { useGasPrice } from '@usedapp/core';
import { utils } from 'ethers';

const GasPrice: FC = () => {
  const etherGasPrice = useGasPrice();
  const gweiGasPrice =
    etherGasPrice?._hex &&
    (Number(utils.formatEther(etherGasPrice._hex)) * 10 ** 9).toFixed(2);

  return (
    <>
      <p>Gas price = {gweiGasPrice} Gwei</p>
      <br />
    </>
  );
};

export default GasPrice;
