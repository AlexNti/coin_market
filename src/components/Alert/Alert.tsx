import { Alert as ChakraAlert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import React from 'react';

type AlertProps = {
  title: string;
  description: string;
};
const Alert = ({ title, description }: AlertProps): JSX.Element => {
  return (
    <ChakraAlert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </ChakraAlert>
  );
};

export default Alert;
