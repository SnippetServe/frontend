/* eslint-disable react/jsx-one-expression-per-line */
import { Flex, Stack, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import CustomLinkButton from './CustomLinkButton';

type SidePanelProps = {
  currentPage: 'signin' | 'signup';
};

const MotionBox = motion.custom(Flex);

const transition: any = { duration: 0.6 };

function SidePanel({ currentPage }: SidePanelProps) {
  const title = currentPage === 'signup' ? 'Hello' : 'Welcome';
  const buttonText = currentPage === 'signup' ? 'Sign In' : 'Sign Up';
  const buttonRoute = currentPage === 'signup' ? 'signin' : 'signup';

  return (
    <MotionBox
      justifyContent="center"
      alignItems="center"
      backgroundColor="gray.700"
      color="white"
      textAlign="center"
      zIndex={10}
      h="100%"
      w="40%"
      display={['none', 'none', 'none', 'flex']}
      exit={{ x: currentPage === 'signin' ? '-150%' : '150%' }}
      transition={transition}
    >
      <Stack>
        <Text fontSize="4xl" fontWeight="bold">
          {title}, Developer
        </Text>
        <Text w="60%" m="2em auto 4em auto" fontSize="lg">
          Get snippets that will definetly ease your coding life, and also
          contribute to help others
        </Text>
        <CustomLinkButton
          variant="outline"
          w="200px"
          m="2em auto"
          size="lg"
          rounded="lg"
          _hover={{ backgroundColor: 'inherit' }}
          to={`/${buttonRoute}`}
        >
          {buttonText}
        </CustomLinkButton>
      </Stack>
    </MotionBox>
  );
}

export default SidePanel;
