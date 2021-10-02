import * as React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import CoinsMarkets from 'src/features/coinMarket/CoinsMarkets';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <CoinsMarkets></CoinsMarkets>
        </Grid>
      </Box>
    </QueryClientProvider>
  </ChakraProvider>
);
