import React from 'react';

import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
import { UseCoinDetailsReturn } from '../../hooks';
import PanelItem from './PanelItem';

type DetailsPanelProps = Pick<UseCoinDetailsReturn, 'coinDetails'>;
//TODO MAKE AUTOMATE FUNCTION FOR PANEL ITEM
const DetailsPanel = ({ coinDetails }: DetailsPanelProps): JSX.Element => {
  return (
    <Flex
      ml="auto"
      flexDirection="column"
      border="1px"
      borderColor="gray.600"
      width={350}
      height={800}
    >
      <Flex alignItems="center" borderBottom="1px" height={100} borderColor="gray.600">
        <Flex alignItems="center" p={4}>
          <Box mr={3}>
            <Avatar src={coinDetails?.image.small} />
          </Box>
          <Flex alignItems="flex-start" flexDirection="column">
            <Text color="gray.200">{coinDetails?.name}</Text>
            <Text color="gray.500" fontSize="sm">
              {coinDetails?.symbol.toUpperCase()}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" p={4}>
        <PanelItem
          title={'Current Price'}
          value={coinDetails?.market_data.current_price.usd || ''}
        ></PanelItem>
        <PanelItem
          title={'FB Likes'}
          value={coinDetails?.community_data.facebook_likes || 0}
        ></PanelItem>
        <PanelItem
          title={'Twitter Followers'}
          value={coinDetails?.community_data.twitter_followers || 0}
        ></PanelItem>
        <PanelItem
          title={'GitHub Stars'}
          value={coinDetails?.developer_data.stars || 0}
        ></PanelItem>
        <PanelItem
          title={'GitHub Forks'}
          value={coinDetails?.developer_data.forks || 0}
        ></PanelItem>
        <PanelItem
          title={'Up Votes'}
          value={coinDetails?.sentiment_votes_up_percentage || 0}
        ></PanelItem>
        <PanelItem
          title={'Down Votes'}
          value={coinDetails?.sentiment_votes_down_percentage || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 24 h'}
          value={coinDetails?.market_data.price_change_24h || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 7 days'}
          value={coinDetails?.market_data.price_change_percentage_7d || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 14 days'}
          value={coinDetails?.market_data.price_change_percentage_14d || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 1 month'}
          value={coinDetails?.market_data.price_change_percentage_30d || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 2 months'}
          value={coinDetails?.market_data.price_change_percentage_60d || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 200 days'}
          value={coinDetails?.market_data.price_change_percentage_200d || 0}
        ></PanelItem>
        <PanelItem
          title={'Price Change 1 year'}
          value={coinDetails?.market_data.price_change_percentage_1y || 0}
        ></PanelItem>
        <PanelItem
          title={'Higest Price 24h'}
          value={coinDetails?.market_data.high_24h.usd || 0}
        ></PanelItem>
        <PanelItem
          title={'Lowest Price 24h'}
          value={coinDetails?.market_data.low_24h.usd || 0}
        ></PanelItem>
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
