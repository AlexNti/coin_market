import React from 'react';

import { Flex, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'src/hooks';

const NotFound404 = (): JSX.Element => {
  const { history } = useRouter();
  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <Text fontSize="x-large">404 Page Not Found</Text>
      <Button onClick={() => history.push('/')}>Click here to return to main page</Button>
    </Flex>
  );
};

export default NotFound404;
