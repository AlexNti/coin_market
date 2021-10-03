import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Router } from 'react-router-dom';
import { Routes } from 'src/routes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const queryClient = new QueryClient();

export const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <Routes></Routes>
      </Router>
    </QueryClientProvider>
  </ChakraProvider>
);
