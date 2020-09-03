/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/core';
import React from 'react';
import CustomLink from './CustomLink';

function DropdownMenu({ ...props }: any) {
  return (
    /* according to eslint, props spreading below is a bad practice. For now, I've disabled the
     * rule for only this file as can be seen by the rule mentioned at the top of this current file
     */
    <Box color="black" w="50px" {...props}>
      <Menu>
        <MenuButton
          px={4}
          py={2}
          transition="all 0.2s"
          rounded="md"
          _expanded={{ bg: 'blue.400' }}
          _focus={{ outline: 'none', boxShadow: 'outline' }}
        >
          <Icon name="chevron-down" color="white" size="20px" />
        </MenuButton>

        <MenuList left={0}>
          <MenuItem>
            <CustomLink to="/snippets">Snippets</CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/extensions">Extensions</CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/signin">Sign up</CustomLink>
          </MenuItem>
          <MenuItem>
            <CustomLink to="/signup">Sign up</CustomLink>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default DropdownMenu;
