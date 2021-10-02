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
            <Th key={coinKey} color="gray.400">
              {coinKey}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {coins.map((coin) => (
          <Tr onClick={() => handleSelectCoin(coin.id)} key={coin.id}>
            <Td>{coin.name}</Td>
            <Td>{coin.symbol}</Td>
            <Td>{coin.current_price}</Td>
            <Td>{coin.high_24h}</Td>
            <Td>{coin.low_24h}</Td>
            <Td>{coin.price_change_percentage_24h}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CoinsMarketsTable;
