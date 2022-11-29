import { FC, useEffect, useState } from 'react';
import { useEthers } from '@usedapp/core';
import { utils } from 'ethers';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const isValidEns = (value: string): boolean =>
  typeof value === 'string' && value.endsWith('.eth');

const SearchBar: FC<{ setInputAccount: (account: string) => void }> = ({
  setInputAccount,
}) => {
  //   const { account } = useEthers();
  const [value, setValue] = useState('');
  //   const [disabled, setDisabled] = useState(!!account);
  const [error, setError] = useState(false);

  const { isAddress } = utils;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onClick = () => {
    if (isAddress(value) || isValidEns(value)) {
      setInputAccount(value);
      setValue('');
    } else {
      setError(true);
      setValue('Please enter a valid eth address or ENS');
      setTimeout(() => {
        setError(false);
        setValue('');
      }, 3000);
    }
  };

  //   useEffect(() => {
  //     if (account) {
  //       setDisabled(true);
  //     } else {
  //       setDisabled(false);
  //     }
  //   }, [account]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            fontSize: 'small',
            color: `${!!value.length && error ? '#ff0000' : '#000000de'}`,
          }}
          placeholder="Enter a valid eth address or ENS"
          onChange={handleChange}
          value={value}
        />
        <IconButton type="button" sx={{ p: '10px' }} onClick={onClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
