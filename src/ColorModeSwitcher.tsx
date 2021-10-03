import * as React from 'react';
import { useColorMode, IconButtonProps } from '@chakra-ui/react';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { setColorMode } = useColorMode();

  React.useEffect(() => {
    setColorMode('dark');
  }, []);

  return null;
};
