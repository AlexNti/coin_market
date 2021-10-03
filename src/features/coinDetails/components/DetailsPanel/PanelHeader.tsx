import React from 'react';
import { Box, Flex, Avatar, Text } from '@chakra-ui/react';
type PanelHeaderProps = {
  image: string;
  name: string;
  symbol: string;
};
const PanelHeader = ({ image, name, symbol }: PanelHeaderProps): JSX.Element => {
  return (
    <Flex alignItems="center" p={4}>
      <Box mr={3}>
        <Avatar src={image} />
      </Box>
      <Flex alignItems="flex-start" flexDirection="column">
        <Text color="gray.200">{name}</Text>
        <Text color="gray.500" fontSize="sm">
          {symbol}
        </Text>
      </Flex>
    </Flex>
  );
};

export default PanelHeader;
