import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

type BackButtonProps = {
  handleClick: () => void;
};
const BackButton = ({ handleClick }: BackButtonProps): JSX.Element => {
  return (
    <IconButton
      width={50}
      onClick={handleClick}
      aria-label="Go to main"
      size="lg"
      icon={<ArrowBackIcon />}
    />
  );
};

export default BackButton;
