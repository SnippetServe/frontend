import { Box, Flex, IconButton, Text } from '@chakra-ui/core';
import React from 'react';
import CustomLink from './CustomLink';
import CustomLinkButton from './CustomLinkButton';
import DropDownMenu from './DropdownMenu';

function Header() {
  return (
    <Flex alignItems="center" p={['1em 1em', '2em 4em']} color="white">
      <CustomLink to="/">
        <Text
          fontSize={['md', 'lg', 'main']}
          fontWeight="bold"
          display="inline-block"
          w="310px"
        >
          SnippetServe
        </Text>
      </CustomLink>
      <Box display={{ md: 'flex', xs: 'none' }} flex={1}>
        <CustomLink to="/snippets">
          <Text mr="2em">Snippets</Text>
        </CustomLink>
        <CustomLink to="/extensions">
          <Text>Extensions</Text>
        </CustomLink>
      </Box>
      <Flex fontSize="sm">
        <IconButton
          variant="ghost"
          aria-label="Search snippets"
          icon="search"
        />

        {/* this component needs refactor for authenticated user  */}
        <Box display={{ md: 'flex', xs: 'none' }}>
          <CustomLinkButton to="signin" variant="ghost" variantColor="inherit">
            Sign In
          </CustomLinkButton>
          <CustomLinkButton to="/signup" variantColor="blue" variant="solid">
            Sign Up
          </CustomLinkButton>
        </Box>
      </Flex>
      <DropDownMenu display={{ md: 'none' }} />
    </Flex>
  );
}

export default Header;
