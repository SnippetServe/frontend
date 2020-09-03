import { Box, Flex, IconButton, Text } from '@chakra-ui/core';
import React from 'react';
import CustomLink from './CustomLink';
import CustomLinkButton from './CustomLinkButton';
import DropDownMenu from './DropdownMenu';

function Header() {
  return (
    <Flex alignItems="center" p={['1em 1em', '2em 2em']} color="white" w="100%">
      <Flex alignItems="center" flex={1}>
        <Flex
          w={['auto', '400px', '500px']}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <CustomLink to="/">
              <Text fontSize={['md', 'lg', 'main']} fontWeight="bold">
                SnippetServe
              </Text>
            </CustomLink>
          </Box>

          <Box display={{ md: 'flex', xs: 'none' }}>
            <CustomLink to="/snippets">
              <Text mr="2em">Snippets</Text>
            </CustomLink>
            <CustomLink to="/extensions">
              <Text>Extensions</Text>
            </CustomLink>
          </Box>
        </Flex>
      </Flex>

      <Flex fontSize="sm">
        <IconButton
          variant="ghost"
          aria-label="Search snippets"
          icon="search"
        />
        <Box display={{ md: 'flex', xs: 'none' }}>
          <CustomLinkButton to="signin" variant="ghost">
            Sign In
          </CustomLinkButton>
          <CustomLinkButton to="/signup" variantColor="blue" variant="solid">
            Sign Up
          </CustomLinkButton>
        </Box>
        <DropDownMenu display={{ md: 'none' }} />
      </Flex>
    </Flex>
  );
}

export default Header;
