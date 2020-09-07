import { Flex, Text } from '@chakra-ui/core';
import React from 'react';

function Footer() {
  return (
    <Flex
      h={['60px', '100px']}
      bg="gray.700"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize={['sm', 'md']}>
        © 2020, DevHyperCoder. All Rights Reserved
      </Text>
    </Flex>
  );
}

export default Footer;
