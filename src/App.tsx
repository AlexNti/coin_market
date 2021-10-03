import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'src/routes';

const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);
