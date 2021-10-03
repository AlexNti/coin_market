import React from 'react';
import { Box, Grid } from '@chakra-ui/react';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        {children}
      </Grid>
    </Box>
  );
};

export default Layout;
