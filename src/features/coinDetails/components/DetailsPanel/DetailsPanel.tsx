import React from 'react';

import { Flex } from '@chakra-ui/react';
import { UseCoinDetailsReturn } from '../../hooks';
import PanelItem from './PanelItem';
import PanelHeader from './PanelHeader';

import { get } from 'src/utils/get';

import { paneItemDataMapper } from '../../utils';

type DetailsPanelProps = Pick<UseCoinDetailsReturn, 'coinDetails'>;

const DetailsPanel = ({ coinDetails }: DetailsPanelProps): JSX.Element => {
  return (
    <Flex
      ml="auto"
      flexDirection="column"
      border="1px"
      borderColor="gray.600"
      width={350}
      height={775}
    >
      <Flex alignItems="center" borderBottom="1px" height={100} borderColor="gray.600">
        <PanelHeader
          name={coinDetails?.name || ''}
          image={coinDetails?.image.small || ''}
          symbol={coinDetails?.symbol.toUpperCase() || ''}
        />
      </Flex>
      <Flex flexDirection="column" p={4}>
        {paneItemDataMapper().map(({ title, path, defaultValue }) => {
          return (
            <PanelItem
              key={title}
              title={title}
              value={get(coinDetails || {}, path) || defaultValue}
            ></PanelItem>
          );
        })}
        <PanelItem
          title={'All time highest'}
          value={new Date(coinDetails?.market_data.ath_date.usd || 0).toDateString()}
        ></PanelItem>
        <PanelItem
          title={'All time lowest'}
          value={new Date(coinDetails?.market_data.atl_date.usd || 0).toDateString()}
        ></PanelItem>
      </Flex>
    </Flex>
  );
};

export default DetailsPanel;
