import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type PanelItemProps = { title: string; value: string | number | Date };
const PanelItem = ({ title, value }: PanelItemProps): JSX.Element => {
  return (
    <Flex pt={1} pb={1} justifyContent="space-between">
      <Text color="gray.300" fontSize="sm">
        {title}
      </Text>
      <Text fontWeight="bold" color="gray.100" fontSize="md">
        {value}
      </Text>
    </Flex>
  );
};

export default React.memo(PanelItem);
