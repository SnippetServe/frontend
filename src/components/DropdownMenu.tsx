/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/core';
import React from 'react';

function DropdownMenu({ ...props }: any) {
  return (
    /* according to eslint, props spreading below is a bad practice. For now, I've disabled the
     * rule for only this file as can be seen by the rule mentioned at the top of this current file
     */
    <Box color="black" {...props}>
      <Menu>
        <MenuButton>
          <IconButton
            icon="triangle-down"
            aria-label="triangle-down"
            variant="ghost"
            color="white"
          />
        </MenuButton>
        <MenuList>
          <MenuItem>Snippets</MenuItem>
          <MenuItem>Extensions</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>SignUp</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default DropdownMenu;
