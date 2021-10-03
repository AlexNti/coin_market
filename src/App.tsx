import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'src/routes';
import { ColorModeSwitcher } from 'src/ColorModeSwitcher';

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ColorModeSwitcher />
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
