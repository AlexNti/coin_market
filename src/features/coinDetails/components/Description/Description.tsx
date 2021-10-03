import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
type DescriptionProps = { description: string };

const Description = ({ description }: DescriptionProps): JSX.Element => {
  return (
    <Flex overflow={'hidden'} height={'150px'} width={'100%'} flex={1}>
      <Text>{description}</Text>
    </Flex>
  );
};

export default Description;
