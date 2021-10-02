import React from 'react';

import { Flex, Box, Text, IconButton } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { UseCoinsMarketsReturn } from 'src/features/coinMarket/hooks/useCoinsMarkets';

type PaginationProps = Pick<
  UseCoinsMarketsReturn,
  'page' | 'handleNextPage' | 'handlePreviousPage'
>;

const Pagination = ({ page, handlePreviousPage, handleNextPage }: PaginationProps): JSX.Element => {
  return (
    <Flex justifyContent="center">
      <IconButton
        onClick={handlePreviousPage}
        _focus={{ boxShadow: 'none' }}
        isDisabled={page === 1}
        aria-label="previous page"
        icon={<ArrowBackIcon />}
      />
      <Box p={1} width={10} borderRadius="md" bg="rgba(0,0,0,0.3)">
        <Text alignItems="center">{page || 1}</Text>
      </Box>
      <IconButton
        onClick={handleNextPage}
        _focus={{ boxShadow: 'none' }}
        outline="none"
        aria-label="previous page"
        icon={<ArrowForwardIcon />}
      />
    </Flex>
  );
};

export default React.memo(Pagination);
