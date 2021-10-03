import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface ErrorBoundaryProps {
  fallbackStrategy?: 'passthrough' | 'invisible' | 'placeholder';
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static defaultProps: Partial<ErrorBoundaryProps>;

  state = { hasError: false };

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });

    console.log(error, info);
  }

  render() {
    const { fallbackStrategy, children } = this.props;

    if (!this.state.hasError) {
      return children;
    }

    switch (fallbackStrategy) {
      case 'invisible':
        return null;
      case 'placeholder':
        return (
          <Flex align="center" justify="center" width="100%" height="100%">
            <Text py={5} px={4}>
              Oups! Something went wrong
            </Text>
          </Flex>
        );
      case 'passthrough':
      default:
        return children;
    }
  }
}

ErrorBoundary.defaultProps = {
  fallbackStrategy: 'placeholder'
};

export default ErrorBoundary;
