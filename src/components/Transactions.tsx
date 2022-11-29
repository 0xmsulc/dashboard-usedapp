import { FC, useEffect, useState } from 'react';

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { EtherscanProvider } from '@ethersproject/providers';

type Props = {
  etherscan: EtherscanProvider;
  account?: string;
  isOwn?: boolean;
};

const Transactions: FC<Props> = ({ account, etherscan, isOwn }) => {
  const [transactions, setTransactions] = useState<
    {
      timestamp: number | undefined;
      hash: string;
      blockNumber: number | undefined;
    }[]
  >([]);

  useEffect(() => {
    const getTransactions = async (account: string) => {
      const history = await etherscan.getHistory(account);
      const txList = history.slice(-10).map((tx) => {
        return {
          timestamp: tx.timestamp,
          hash: tx.hash,
          blockNumber: tx.blockNumber,
        };
      });
      setTransactions(txList);
    };

    !!account && getTransactions(account).catch(console.error);
  }, [etherscan, account]);

  return !!account ? (
    <>
      <Typography variant="h6">
        {isOwn
          ? 'Your last transactions:'
          : `Last transactions from  ${account}: `}
      </Typography>

      {!!transactions.length && (
        <List
          sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
          }}
        >
          {transactions.map((tx) => {
            const labelId = `list-label-${tx}`;
            const timestamp =
              !!tx.timestamp &&
              new Date(tx.timestamp * 1000)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ');
            const text = ` - ${tx.blockNumber}`;
            return (
              <>
                <ListItem
                  key={labelId}
                  secondaryAction={
                    <Link
                      color="secondary"
                      href={`https://etherscan.io/tx/${tx.hash}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <OpenInNewIcon />
                    </Link>
                  }
                >
                  <ListItemText id={labelId} primary={timestamp + text} />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      )}
    </>
  ) : null;
};

export default Transactions;
