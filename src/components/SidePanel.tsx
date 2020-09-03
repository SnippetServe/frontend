/* eslint-disable react/jsx-one-expression-per-line */
import { Box, Flex, Text } from '@chakra-ui/core';
import React from 'react';
import CustomLinkButton from './CustomLinkButton';

type SidePanelProps = {
  currentPage: 'signin' | 'signup';
};

function SidePanel({ currentPage }: SidePanelProps) {
  const title = currentPage === 'signup' ? 'Hello' : 'Welcome';
  const buttonText = currentPage === 'signup' ? 'Sign In' : 'Sign Up';
  const buttonRoute = currentPage === 'signup' ? 'signin' : 'signup';
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.700"
      color="white"
      textAlign="center"
      zIndex={10}
      h="100%"
      display={['none', 'none', 'none', 'flex']}
    >
      <Box>
        <Text fontSize="4xl" fontWeight="bold">
          {title}, Developer
        </Text>
        <Text w="60%" m="2em auto 4em auto" fontSize="lg">
          Get snippets that will definetly ease your coding life, and also
          contribute to help others
        </Text>
        <CustomLinkButton
          variant="outline"
          size="lg"
          rounded="lg"
          to={`/${buttonRoute}`}
        >
          {buttonText}
        </CustomLinkButton>
      </Box>
    </Flex>
  );
}

export default SidePanel;
