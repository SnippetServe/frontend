import { Button, Heading, Stack, Text } from '@chakra-ui/core';
import React from 'react';

function Hero() {
  return (
    <Stack mt="2em" alignItems="center" color="white">
      <Heading
        fontFamily="Montserrat, sans-serif"
        fontSize={['32px', '48px', '63px']}
        textAlign="center"
      >
        Small Pieces To Finish up your code
      </Heading>
      <Text
        fontSize={['sm', 'md', 'lg']}
        display="inline-block"
        w={['70%', '500px']}
        textAlign="center"
        mt="2em"
      >
        Get snippets that will definetly ease your coding life, and also
        contribute to help others
      </Text>
      <Button variantColor="blue" mt="2em" size="lg">
        Get Started
      </Button>
    </Stack>
  );
}

export default Hero;
