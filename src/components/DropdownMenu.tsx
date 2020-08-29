import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/core";
import React from "react";
function DropdownMenu({ ...props }: any) {
  return (
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
