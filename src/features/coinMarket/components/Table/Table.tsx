import React from 'react';
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react';
import { CoinItem } from 'src/features/coinMarket/types';

type CoinsMarketsTableProps = {
  coins: CoinItem[];
  handleSelectCoin: (coinId: string) => void;
};

const coinKeys = [
  'name',
  'symbol',
  'current_price',
  'high_24h',
  'low_24h',
  'price_change_percentage_24h'
];

const CoinsMarketsTable = ({ coins, handleSelectCoin }: CoinsMarketsTableProps): JSX.Element => {
  return (
    <Table size="md">
      <Thead>
        <Tr>
          {coinKeys.map((coinKey) => (
            <Th key={coinKey} color="gray.100">
              {coinKey}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {coins.map((coin) => (
          <Tr onClick={() => handleSelectCoin(coin.id)} key={coin.id}>
            <Th>{coin.name}</Th>
            <Th>{coin.symbol}</Th>
            <Th>{coin.current_price}</Th>
            <Th>{coin.high_24h}</Th>
            <Th>{coin.low_24h}</Th>
            <Th>{coin.price_change_percentage_24h}</Th>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CoinsMarketsTable;
