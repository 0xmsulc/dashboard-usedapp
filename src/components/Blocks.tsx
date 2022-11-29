import { FC, useEffect, useState } from 'react';
import { useBlockMeta } from '@usedapp/core';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Blocks: FC = () => {
  const { blockNumber, timestamp } = useBlockMeta();
  const [blocks, setBlocks] = useState<number[]>([]);

  useEffect(() => {
    let newArray: number[] = [];
    if (!!blockNumber) {
      if (blocks.length > 5) {
        newArray = blocks.slice(0, -1);
        setBlocks([blockNumber, ...newArray]);
      } else {
        setBlocks([blockNumber, ...blocks]);
      }
    }
  }, [blockNumber]);

  return (
    <>
      {!!blockNumber && (
        <>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography>Latest block number: {blockNumber}</Typography>
            <Link
              color="secondary"
              href={`https://etherscan.io/block/${blockNumber}`}
              target="_blank"
              rel="noreferrer"
            >
              <OpenInNewIcon />
            </Link>
          </Box>
        </>
      )}
      {!!timestamp && (
        <>
          <Typography>Latest block timestamp: {timestamp.getTime()}</Typography>
          <Typography>Latest block date: {timestamp.toUTCString()}</Typography>
          <Divider />
        </>
      )}
      {blocks.length > 1 && (
        <>
          <Typography
            sx={{
              mt: 2,
            }}
            variant="subtitle2"
          >
            Older blocks:
          </Typography>

          <List
            sx={{
              width: '100%',
              maxWidth: 360,
              bgcolor: 'background.paper',
            }}
          >
            {blocks.map((block, index) => {
              const labelId = `list-label-${block}`;
              return (
                !!block &&
                index !== 0 &&
                index < 6 && (
                  <>
                    <ListItem
                      key={block}
                      secondaryAction={
                        <Link
                          color="secondary"
                          href={`https://etherscan.io/block/${block}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <OpenInNewIcon />
                        </Link>
                      }
                    >
                      <ListItemText id={labelId} primary={block} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </>
                )
              );
            })}
          </List>
        </>
      )}
    </>
  );
};

export default Blocks;
