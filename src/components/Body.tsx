import { FC } from 'react';

import GasPrice from './GasPrice';
import Curve from './Curve';
import Blocks from './Blocks';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Body: FC = () => {
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
        <p>Create React App example 2</p>
      </Box>
      <Box sx={{ flex: '1 100%', textAlign: 'center' }}>
        <p>Create React App example 2</p>
      </Box>
    </Box>
  );
};

export default Body;
