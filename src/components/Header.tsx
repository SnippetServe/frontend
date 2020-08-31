import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/core';
import React from 'react';
import DropDownMenu from './DropdownMenu';

//  There is a problem  between Router Link and Chackra Link in typescript
// same problem here: https://github.com/chakra-ui/chakra-ui/issues/1280
// TODO: fix this problem

function Header() {
  return (
    <Flex alignItems="center" p={['1em 1em', '2em 4em']} color="white">
      <Text
        fontSize={['md', 'lg', 'main']}
        fontWeight="bold"
        display="inline-block"
        w="310px"
      >
        SnippetServe
      </Text>
      <Box display={{ md: 'flex', xs: 'none' }} flex={1}>
        <Text mr="2em">Snippets</Text>
        <Text>Extensions</Text>
      </Box>
      <Flex fontSize="sm">
        <IconButton
          variant="ghost"
          aria-label="Search snippets"
          icon="search"
        />

        {/* this component needs refactor for authenticated user  */}
        <Box display={{ md: 'flex', xs: 'none' }}>
          <Button variant="ghost">Sign In</Button>
          <Button variantColor="blue" variant="solid">
            Sign Up
          </Button>
        </Box>
      </Flex>
      <DropDownMenu display={{ md: 'none' }} />
    </Flex>
  );
}

export default Header;
